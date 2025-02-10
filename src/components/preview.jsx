import React from 'react';
import '../styles/preview.css';
import { useNavigate } from 'react-router-dom';

export default function Preview({ book }) {
    const navigate = useNavigate();

    function sendBookToPaymentComponent() {
        // This function will send the book to the payment component
        navigate('/payment', { state: { book } });
    }

    return (
        <div className="pre">
            <div className="popup">
                <div className="preview">
                    <div className="preview-img">
                        <img src={book[2]} alt={book[1]} />
                    </div>
                    <div className="preview-content">
                        <h2>{book[1]}</h2>
                        <p>
                            {book[4]}
                        </p>
                        <p className="price">Price: ${book[3]}</p>
                        <button className="btn" onClick={sendBookToPaymentComponent}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}