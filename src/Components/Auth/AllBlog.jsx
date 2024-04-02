import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function AllBlog() {
    const [allBlog,setAllBlog] =useState([])
    useEffect(()=>{
        const fetchdata = async() => {
            try {
                const response = await axios.get('https://the-digital-gyan-git-io.onrender.com/api/v16/allBlog')
                // console.log(response.data.data)
                setAllBlog(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    },[])

    const handleDelete = async(id)=>{
        try {
            const res = await axios.delete(`https://the-digital-gyan-git-io.onrender.com/api/v16//deleteBlog/${id}`)
            toast.success("Blog Deleted Successfully")
            const updatedBlog =  allBlog.filter((val)=> val.id !== id)
            setAllBlog(updatedBlog)
        } catch (error) {
         console.log(error)   
         toast.error("Error deleting blog") 
        }
    }
    return (
        <div className="main-product-box">
            {allBlog && allBlog.map((item, index) => (
                <div className="col" key={index}>
                    <div className="img">
                        <img src={item.blogImages} alt="" />
                    </div>
                    <div className="des-box">
                        <div className="detail">
                            <h4>{item.blogTitle}</h4>
                        </div>
                        <div className="delete-btn">
                            <button onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllBlog
