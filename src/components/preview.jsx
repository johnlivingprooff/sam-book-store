import React from 'react';
import '../styles/preview.css';

export default function Preview({ book }) {
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                            fermentum, quam vel lacinia tincidunt, nunc mi sollicitudin
                            ligula, id ultricies felis turpis nec sapien. Nullam nec
                            fermentum urna. Nulla facilisi. Nullam nec fermentum urna.
                            Nulla facilisi.
                        </p>
                        <p className="price">Price: ${book[3]}</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}