import React, { useEffect, useState } from 'react'
import './singleBlogPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function singleBlogPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, []);
  const [data,setData] = useState([])

  const id = useParams()
  // console.log("id " , id.id)
  const blogId = id.id
  // console.log(blogId)

  useEffect(()=>{
    const fetchdata = async() =>{
      try {
        const response = await axios.get(`https://the-digital-gyan-git-io.onrender.com/api/v16/singleBlog/${blogId}`)
        // console.log(response.data.data)
        setData(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  },[])

  return (
    <section className='singleblog-section'>
      <div className="container">
        <div className="bg">
            <h2>BLOG</h2>
        </div>
        <div className="main-container">
        <div className="heading">
            <h1>{data.blogTitle}</h1>
            <div className="date-name">
                <p className='date'>{data.date}</p>
                <p className='authorName'>{data.authorName}</p>
            </div>
        </div>
        <div className="img">
            <img src={data.blogImages} alt="" />
        </div>
        <div className="detail">
            <p>{data.firstPara}</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default singleBlogPage
