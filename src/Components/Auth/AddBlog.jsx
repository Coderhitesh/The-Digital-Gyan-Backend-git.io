import React, { useState } from 'react'
import './AddBlog.css'
import toast from 'react-hot-toast';
import axios from 'axios';

function AddBlog() {

    const [blogData, setBlogData] = useState({
        blogTitle : '',
        blogImages : '',
        authorName: '',
        date: '',
        firstPara: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addblogapi = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('https://the-digital-gyan-git-io.onrender.com/api/v16/createBlogs',blogData)
            console.log('Blog posted Successfully',response)
            toast.success("Blog posted Successfully");
        } catch (error) {
            console.log(error)
            toast.error("Error")
        }
    }

    return (
        <div className='blog-section'>
            <form action=""  onSubmit={addblogapi}>
                <div className="title same-blog-field">
                    <input type="text" onChange={handleChange} placeholder='Title of the blog' name='blogTitle' />
                </div>
                <div className="image same-blog-field">
                    <input type="text" onChange={handleChange} placeholder='Image URL' name='blogImages' />
                </div>
                <div className="name-date">
                    <div className="name">
                        <input type="text" onChange={handleChange} placeholder='Author Name' name='authorName' />
                    </div>
                    <div className="date">
                        <input type="text" onChange={handleChange} placeholder='Publish Date' name='date' />
                    </div>
                </div>
                <div className="para same-blog-field">
                    <textarea name="firstPara" onChange={handleChange} placeholder='Write your paragraph here...'></textarea>
                </div>
                <button className='addbtn'>Add Blog</button>
            </form>
        </div>
    )
}

export default AddBlog
