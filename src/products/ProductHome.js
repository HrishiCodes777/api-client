import { Link } from 'react-router-dom';
import ecom from '../images/ecom.jpg';

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <div className="position-relative text-center bg-dark text-white">
                <img src={ecom} alt="ecom" className="img-fluid w-100" style={{ height: '70vh', objectFit: 'cover', opacity: '0.8' }} />
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-3 fw-bold">True Value Products</h1>
                    <p className="lead">High-quality products you can trust</p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            Explore Products
                        </Link>
                        <Link to="/products/add" className="btn btn-outline-light btn-lg">
                            Add Product
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
