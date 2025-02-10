import '../styles/home.css';
import React, { useEffect, useState } from 'react';
import heroImg from '../assets/glasses.jpg';
import icon from '../assets/icon.png';
import { FaAngleDoubleDown } from "react-icons/fa";
import Preview from '../components/preview';
import Footer from '../components/footer';
import book_one_img from '../assets/book-one.png';
import book_two_img from '../assets/book-two.png';
import book_three_img from '../assets/book-three.png';
import book_four_img from '../assets/book-four.png';
import book_five_img from '../assets/book-five.png';

const books = [
    {
        id: 1,
        title: 'Things Every First Year Student Should know',
        img: book_one_img,
        price: 20000.00,
        preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut voluptates necessitatibus tempora rerum ea!',
    },
    {
        id: 2,
        title: 'Spiritual Secrets for Academic turaround',
        img: book_two_img,
        price: 20000.00,
        preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut voluptates necessitatibus tempora rerum ea!',
    },
    {
        id: 3,
        title: 'You Can Win',
        img: book_three_img,
        price: 20000.00,
        preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut voluptates necessitatibus tempora rerum ea!',
    },
    {
        id: 4,
        title: 'Growing In Campus Ministry',
        img: book_four_img,
        price: 20000.00,
        preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut voluptates necessitatibus tempora rerum ea!',
    },
    {
        id: 5,
        title: 'I Will Make It',
        img: book_five_img,
        price: 20000.00,
        preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut voluptates necessitatibus tempora rerum ea!',
    },
];

export default function Home() {
    const [visiblePreview, setVisiblePreview] = useState(null);

    useEffect(() => {
        const handleSmoothScroll = (event) => {
          if (event.target.tagName === 'A' && event.target.hash !== '') {
            event.preventDefault();
            const targetId = event.target.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        document.addEventListener('click', handleSmoothScroll);
    
        return () => {
          document.removeEventListener('click', handleSmoothScroll);
        };
      }, []);

    const handleBuyNowClick = (book) => {
        setVisiblePreview(visiblePreview === book ? null : book);
    };

    return (
        <div>
            <section className="top">
                <div className="text">
                    <img src={icon} alt="Sam Mwakanema" />
                    <h3>Welcome to</h3>
                    <h1>Campus<br /><span style={{color: 'orange',}}>Unlimited</span></h1>
                    <FaAngleDoubleDown id='scroll' />
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="student in library" />
                </div>
            </section>
            <section className="two">
                <div className="txt2">
                    <h3>What It's all about!</h3>
                    <br />
                    <p><b>Campus Unlimited</b> is the hub for all things student life and academics related. <i>I motivate, coach and mentor. I am a trusted voice.</i><b>—Sam M</b></p>
                    <br />
                    <p>Check out some of the books I've written / Listen to Episodes from the Campus Unlimited podcast</p>
                    <br />
                    <br />
                    <a href="#bookstore">Books</a> <a href="#podcast">Podcast</a>
                </div>
                <div className="cu"></div>
            </section>
            <section className="books" id='bookstore'>
                <h2>Check Out some of the Books I've written</h2>
                <div className="books-container">
                    {books.map((book) => (
                        <div className="book" key={book.id} onClick={() => handleBuyNowClick(book)}>
                            <img src={book.img} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p onClick={() => handleBuyNowClick(book)}>Buy Now - MWK{book.price}</p>
                            {visiblePreview === book && <Preview book={[book.id, book.title, book.img, book.price, book.preview]} />}
                        </div>
                    ))}
                </div>
            </section>
            <section className="podcast" id='podcast'>
                <h1>PODCAST RSS FEED HERE</h1>  
            </section>
            <Footer />
        </div>
    );
}