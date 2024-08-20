import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getProduct } from '../services/productApiService';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                if (data) {
                    setProduct(data);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                setError('Error fetching product');
            }
        };
        fetchProduct();
    }, [id]);

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!product) return <div>Loading...</div>;

    const navigateToList = () => navigate('/products');
    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h1 className="card-title text-primary mb-4">
                        {product.productName}
                    </h1>
                    <p className="card-text">
                        <strong>Price:</strong> ${product.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p className="card-text">
                        <strong>Rating:</strong> ⭐ {product.starRating}
                    </p>
                    <p className="card-text">
                        <strong>Description:</strong> {product.description}
                    </p>
                    <p className="card-text">
                        <strong>Product Code:</strong> {product.productCode}
                    </p>
                </div>
            </div>
            <button type='submit' className='btn btn-primary' onClick={navigateToList}>Back</button>
        </div>
    );
}

export default ProductDetails;
