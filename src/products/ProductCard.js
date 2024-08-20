import { Link } from 'react-router-dom';

export default function Card({ product }) {
    const { productName, price, category } = product;

    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">
                    <Link to={`/products/${product.productId}`} className="text-decoration-none text-primary">
                        {productName}
                    </Link>
                </h4>
                <p className="card-text">
                    <strong>Price:</strong> ${price.toFixed(2)}
                </p>
                <Link to={`search?category=${category}`}>
                    <h4 style={{color: "green"}}>{category}</h4>
                </Link>
            </div>
        </div>
    );
}
