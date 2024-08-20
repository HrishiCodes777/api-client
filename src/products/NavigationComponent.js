import React from 'react'
import { Link } from 'react-router-dom';

function NavigationComponent() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="navbar-nav">
                <Link className="nav-link" to="/products">Products List</Link>
                <Link className="nav-link" to="/products/add">Add New</Link>
                <Link className="nav-link" to="/products/aboutus/history">History</Link>
                <Link className="nav-link" to="/products/aboutus/ourservices">Services</Link>
            </div>
        </div>
    </nav>
  );
}

export default NavigationComponent;
