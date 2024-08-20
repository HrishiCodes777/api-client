import { useState } from 'react';
import axios from 'axios';

const AddProductComponent = () => {
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        category: '',
        starRating: '',
        description: '',
        productCode: '',
        imageUrl: ''
    });

    const onChange = (e) => {
        const { id, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [id]: value
        }));
    }

    const validate = async (event) => {
        event.preventDefault();
        console.log("Form Submitted");

        try {
            const response = await axios.post('http://localhost:5218/api/Product', product);
            console.log('Product added:', response.data);
            setProduct({
                productName: '',
                price: '',
                category: '',
                starRating: '',
                description: '',
                productCode: '',
                imageUrl: ''
            });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Add a New Product</h1>
                <form className='row g-3' onSubmit={validate}>
                    <div className="col-md-6">
                        <label htmlFor="productName" className="form-label">Name:</label>
                        <input className='form-control' value={product.productName} onChange={onChange} type='text' id='productName' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input className='form-control' value={product.price} onChange={onChange} type='number' id='price' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Category:</label>
                        <input className='form-control' value={product.category} onChange={onChange} type='text' id='category' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="starRating" className="form-label">Star Rating:</label>
                        <input className='form-control' value={product.starRating} onChange={onChange} type='number' id='starRating' />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea className='form-control' value={product.description} onChange={onChange} id='description'></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="productCode" className="form-label">Product Code:</label>
                        <input className='form-control' value={product.productCode} onChange={onChange} type='text' id='productCode' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="imageUrl" className="form-label">Image URL:</label>
                        <input className='form-control' value={product.imageUrl} onChange={onChange} type='text' id='imageUrl' />
                    </div>
                    <div className="col-12 text-center">
                        <button className='btn btn-primary' type='submit'>
                            Add New Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProductComponent;
