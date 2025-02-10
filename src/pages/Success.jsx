import React from 'react';
import img from '../assets/library.jpg';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${img}) no-repeat center center/cover`,
}

const overlay = {
    background: 'rgba(48, 47, 47, 0.5)',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    height: '50%',
    width: '50%',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default function Success() {
    
    return (
        <div style={style}>
            <div style={overlay}>
            <h1>Thank you for your purchase</h1>
            <p>Please Check your email for a reciept and a PDF copy of the book</p><br />
            <a href="/" style={{ color: 'orange', textDecoration: 'none' }}>Go home</a>
            </div>
        </div>
    );
}