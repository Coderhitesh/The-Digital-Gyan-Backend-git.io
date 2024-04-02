import React, { useEffect, useState } from 'react';
import './SinglePage.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePage() {
    

    const [item, setItem] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const datafetch = async () => {
            try {
                const response = await axios.get(`https://www.api.thedigitalgyan.in/api/v16/singleProduct/${id}`);
                console.log(response.data.data);
                setItem(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        datafetch();
    }, [id]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [id]);

    return (
        <section className='seo-section'>
            <div className="container">
                {item.map((info,index)=>(
                    <>
                   
  <div className="heading">
                    <span>{info.name}</span>
                </div>
                <div className="main-container">
                    <div className="up">
                        <div className="left">
                            <div className="img">
                                <img src={info.img} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <p>{info.description}</p>
                        </div>
                    </div>
                    <div className="down">
                        <span>Here's a some modules:-</span>
                        {info.feature && info.feature.map((items, index) => ( 
                            <div className="same-box" key={index}>
                                <h4>{items.title}</h4>
                                <p>{items.des}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Book For Free Demo <Link style={{color:'red'}} to={'/contact'}>Click Here</Link></h2>
                </div> 
                </>
                ))}
              
            </div>
        </section>
    );
}

export default SinglePage;
    