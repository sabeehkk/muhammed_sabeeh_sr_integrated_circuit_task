import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Imgae from '../assets/image-from-rawpixel-id-12016981-png.png'
// import Shirt from '../assets/—Pngtree—white shirt_15733092.png'
import Shirt2 from '../assets/—Pngtree—raglan sleeve t-shirt front and_9023170.png'
import cream from '../assets/—Pngtree—applying face cream composition_15606307.png'
import bottle from '../assets/—Pngtree—face cream honey lotion_4426171.png'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function Carousel() {
  return (
    <div  id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {/* First carousel item */}
        <div className="carousel-item active">
          <div
            className="d-flex justify-content-between align-items-center p-5" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 165, 0, 0))',height: '300px' }}>
            {/* Left side - Text Quote */}
            <div className="col-md-6">
              <blockquote className="blockquote">
              <p className="mb-4 pl-64" style={{ fontSize: '1rem', color: '#555' }}>
                 <RiDoubleQuotesL className='text-gray-400 inline-block text-4xl'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <span>Lorem Ipsum has been the industry's standard dummy !</span>
                  <RiDoubleQuotesR className='text-gray-400 inline-block text-4xl'/>
                </p>
                <footer className="blockquote-footer d-flex align-items-center pl-64">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sarah Locatelli"  className="rounded-circle me-3" width="40"/>
                    <div className="d-flex flex-column">
                        <strong>zeenath kayanikkal</strong>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>School HOD</span>
                    </div>
                    </footer>
              </blockquote>
            </div>
            {/* Right side - Image */}
            <div className="col-md-6 d-flex justify-content-end">
              <img className="img-fluid p-5" src={cream} alt="First slide"style={{ maxWidth: '80%' }}
              />
            </div>
          </div>
        </div>
        {/* Second carousel item */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center p-5"style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 165, 0, 0))', height: '300px' }}>
            {/* Left side - Text Quote */}
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p className="mb-4 pl-64" style={{ fontSize: '1rem', color: '#555' }}>
                 <RiDoubleQuotesL className='text-gray-400 inline-block text-4xl'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <span>Lorem Ipsum has been the industry's standard dummy !</span>
                  <RiDoubleQuotesR className='text-gray-400 inline-block text-4xl'/>
                </p>
            
                <footer className="blockquote-footer d-flex align-items-center pl-64">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Sarah Locatelli"  className="rounded-circle me-3" width="40"/>
                    <div className="d-flex flex-column">
                        <strong>Muhammed Sabeeh</strong>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>Head Master</span>
                    </div>
                    </footer>
              </blockquote>
            </div>
            {/* Right side - Image */}
            <div className="col-md-6 d-flex justify-content-end">
              <img
                className="img-fluid p-5"
                src={Shirt2}
                alt="First slide"
                style={{ maxWidth: '80%' }}
              />
            </div>
          </div>
        </div>
        {/* Third carousel item */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center p-5"style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 165, 0, 0))', height: '300px' }}>
            {/* Left side - Text Quote */}
            <div className="col-md-6">
              <blockquote className="blockquote">
              <p className="mb-4 pl-64" style={{ fontSize: '1rem', color: '#555' }}>
                 <RiDoubleQuotesL className='text-gray-400 inline-block text-4xl'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <span>Lorem Ipsum has been the industry's standard dummy !</span>
                  <RiDoubleQuotesR className='text-gray-400 inline-block text-4xl'/>
                </p>
                <footer className="blockquote-footer d-flex align-items-center pl-64">
                    <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt="Sarah Locatelli"  className="rounded-full me-3" width="40"/>
                    <div className="d-flex flex-column">
                        <strong>Faheem Ali</strong>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>Principal</span>
                    </div>
                    </footer>
              </blockquote>
            </div>
            {/* Right side - Image */}
            <div className="col-md-6 d-flex justify-content-end">
              <img
                className="img-fluid p-5"
                src={bottle}
                alt="First slide"
                style={{ maxWidth: '80%' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  );
}

export default Carousel;
