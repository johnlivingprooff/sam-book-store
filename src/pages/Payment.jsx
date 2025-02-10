import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateTxRef } from 'paychangu-js';
import '../styles/Payment.css'
import Footer from '../components/footer';

export default function Payment() {
    const pay_ref = generateTxRef();
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state.book || {}; // Get the book from the location state

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Method One

        // Make payment
        const url = 'https://api.paychangu.com/mobile-money/payments/initialize';
        const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_PAYCHANGU_PRIVATE_KEY}`
        },
        body: JSON.stringify({
            mobile_money_operator_ref_id: '20be6c20-adeb-4b5b-a7ba-0769820df4fb',
            mobile: formData.phone,
            email: formData.email,  
            first_name: formData.name,
            amount: parseFloat(book[3]),
            charge_id: pay_ref
        })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            // Verify payment
            await handleSuccess();
        } catch (err) {
            console.error(err);
        }

    };

    const handleSuccess = async (e) => {

        const verifyUrl = `https://api.paychangu.com/mobile-money/payments/${pay_ref}/verify`;
        const verifyOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_PAYCHANGU_PRIVATE_KEY}`
            },
        };

        await fetch(verifyUrl, verifyOptions)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));

        navigate('/success');
    };

    if (!book) {
        return <h1>No book selected</h1>;
    }

    return (
        <div>
        <section className="pay_cont">
            <img src={book[2]} alt={book[1]} />
            <div className="pay_f">
                <h2>{book[1]} - MWK{book[3]}</h2>
                <p>Fill in Your Details and Click Buy now to purchase</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Airtel Number [09--------]"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Buy Now</button> 
                </form>
                <a href="/#bookstore">See other Books</a>
            </div>
        </section>
        <Footer />
        </div>
    );
}