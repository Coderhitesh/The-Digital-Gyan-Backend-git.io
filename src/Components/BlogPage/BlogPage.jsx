import React, { useEffect, useState } from 'react'
import './BlogPage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function BlogPage() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchingdata = async()=>{
            try {
                const response = await axios.get('https://www.api.thedigitalgyan.in/api/v16/allBlog')
                // console.log(response.data.data)
                setData(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchingdata()
    },[])



  return (
    <section className='blogpage-section'>

        <div className="container">
            <div className="bg">
                <h2>BLOGS</h2>
            </div>
            <div className="main-container">
                {
                    data.map((item,index)=>(
                        <Link to={`/singleblog/${item._id}`} className="col" key={index}>
                            <div className="img">
                                <img src={item.blogImages} alt="" />
                            </div>
                            <div className="content">
                                <p className='titlename'>{item.blogTitle}</p>
                                <div className="date-name">
                                    <p className='date'>{item.date}</p>
                                    <p className='writer'>{item.authorName}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default BlogPage
