import React, { useEffect, useState } from 'react';
import './Auth.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import AllBlog from './AllBlog';
import AddBlog from './AddBlog';


function Auth() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const [allServices, setAllServices] = useState([])
    const [isActive, setIsActive] = useState('Add-product');

    // create Product api fetch start from here
    const [addProductData, setAddFormData] = useState({
        name: '',
        description: '',
        img: '',
        feature: [
            {
                title: '',
                des: ''
            }
        ]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title' || name === 'des') {
            const index = e.target.dataset.index;
            const newFeatures = [...addProductData.feature];
            newFeatures[index][name] = value;
            setAddFormData(prevData => ({
                ...prevData,
                feature: newFeatures
            }));
        } else {
            setAddFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const addModule = () => {
        setAddFormData(prevData => ({
            ...prevData,
            feature: [...prevData.feature, { title: '', des: '' }]
        }));
    };

    const deleteModule = (index) => {
        setAddFormData(prevData => ({
            ...prevData,
            feature: prevData.feature.filter((_, i) => i !== index)
        }));
    };

    const addProductapi = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://the-digital-gyan-git-io.onrender.com/api/v16/createProduct', addProductData);
            console.log('add product api called', response);
            toast.success("Product added successfully");
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Something went wrong!" + error);
        }
    };



    // delete one product api fetch start from here 

    const handleDelete = async (id) => {
        try {
         const res= await axios.delete(`https://the-digital-gyan-git-io.onrender.com/api/v16/deleteProduct/${id}`);
            // console.log(res)
            toast.success("Product deleted successfully");
            const updatedProducts = allServices.filter(product => product.id !== id);
            setAllServices(updatedProducts);
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error("Something went wrong!" + error);
        }
    };

    // delete one product api fetch end here 

    // get all services fetch api


    useEffect(() => {
        const datafetch = async () => {
            try {
                const response = await axios.get('https://the-digital-gyan-git-io.onrender.com/api/v16/getAllProduct')
                // console.log(response.data.data)
                setAllServices(response.data.data)
            } catch (error) {
                console.log( 'product fetch' , error)
            }
        }
        datafetch()
    }, [])

    // contact detail fetch api 

    const [EmailData, setEmailData] = useState([])

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const response = await axios.get('https://the-digital-gyan-git-io.onrender.com/api/v16/getcontact')
                setEmailData(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchEmail()
    }, [])

    // delete mail 

    const handleMailDelete = async (id) => {
        try {
            const res = await axios.delete(`https://the-digital-gyan-git-io.onrender.com/api/v16/delete-mail/${id}`);
            console.log(res)
            toast.success("Email deleted successfully");
            // Update the product list after deletion
            const updatedEmail = EmailData.filter(Email => Email.id !== id);
            setEmailData(updatedEmail);
        } catch (error) {
            console.error('Error deleting Email:', error);
            toast.error("Something went wrong!" + error);
        }
    };

    return (
        <section className='auth-section'>
            <div className="container">
                <div className="heading">
                    <span>Admin</span>
                </div>
                <div className="down">
                    <div className="buttons">
                        <button onClick={() => setIsActive('Add-product')}>Add Course</button>
                        <button onClick={() => setIsActive('All-product')}>All Course</button>
                        <button onClick={() => setIsActive('All-Email')}>Email</button>
                        <button onClick={() => setIsActive('All-blog')}>All Blog</button>
                        <button onClick={() => setIsActive('add-blog')}>Add Blog</button>
                    </div>
                    <div className="main-container">
                        {isActive === "Add-product" ? (
                            <form onSubmit={addProductapi}>
                                <div className="up-field">
                                    <div className="name same-field">
                                        <label htmlFor="product-name">Service Name:</label>
                                        <input value={addProductData.name} name='name' onChange={handleChange} type="text" placeholder='Product Name' />
                                    </div>
                                    <div className="image-upload same-field">
                                        <label htmlFor="image">Image Upload:</label>
                                        <input type="text" value={addProductData.img} placeholder='Image link' name="img" onChange={handleChange} />
                                    </div>
                                </div>
                                {addProductData.feature.map((module, index) => (
                                    <div key={index} className="up-field">
                                        <div className="same-field">
                                            <label htmlFor="">Module Name</label>
                                            <input type="text" value={module.title} name='title' data-index={index} onChange={handleChange} placeholder='Module Name' />
                                        </div>
                                        <div className="same-field">
                                            <label htmlFor="">Module Description</label>
                                            <input type="text" value={module.des} name='des' data-index={index} onChange={handleChange} placeholder='Module Des' />
                                        </div>
                                        <button type="button" className='delete-module-btn' onClick={() => deleteModule(index)}>Delete Module</button>
                                    </div>
                                ))}
                                <div className="addFeature-btn">
                                    <button className='add-module-btn' type="button" onClick={addModule}>Add Module</button>
                                </div>
                                <div className="down-field">
                                    <label htmlFor="description">Description:</label>
                                    <textarea value={addProductData.description} name='description' onChange={handleChange} id="description"></textarea>
                                </div>
                                <div className="btns">
                                    <button type='reset'>Reset</button>
                                    <button type='submit'>Add Product</button>
                                </div>
                            </form>
                        ) : isActive === "All-product" ? (
                            <div className="main-product-box">
                                {allServices && allServices.map((item, index) => (
                                    <div className="col" key={index}>
                                        <div className="img">
                                            <img src={item.img} alt="" /> 
                                        </div>
                                        <div className="des-box">
                                            <div className="detail">
                                                <h4>{item.name}</h4> 
                                                {/* <p>{item.category}</p>  */}
                                            </div>
                                            <div className="delete-btn">
                                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : isActive === "All-Email" ? (
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone No</th>
                                            <th>Message</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            EmailData && EmailData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Email}</td>
                                                    <td>{item.PhoneNumber}</td>
                                                    <td>{item.Message}</td>
                                                    <td><button onClick={() => handleMailDelete(item._id)}>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) : isActive === 'All-blog' ? (
                            <AllBlog />
                        ) : isActive === 'add-blog' ?(
                            <AddBlog />
                        ):(
                            <p>Page Not Found</p>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auth;
