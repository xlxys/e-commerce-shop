import { useState, useEffect } from 'react';

import './Banner.css';

export default function Banner() {

  const slides = [
    {
      url: '/images/banners/banner1.png',
      title: "Our Newest Collection",
      text: "Get up to 30% Off now",
    },
    {
      url: '/images/banners/banner2.png',
      title: "Street Wear Like No Other",
      text: "Limited street Wear collection",
    },
    {
      url: '/images/banners/banner3.png',
      title: "Spring / Summer Collection",
      text: "Summer is here, get ready for it",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });


  return (
    <div className="Slider">
      <div className='Slides' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>

   
          <button className="SlideButton left" onClick={prevSlide}><i className="fa-solid fa-angle-up fa-rotate-270 fa-lg" style={{color: "#ffffff"}}></i></button>
          <button className="SlideButton right" onClick={nextSlide}><i className="fa-solid fa-angle-up fa-rotate-90 fa-lg" style={{color: "#ffffff"}}></i></button>


        <div className="SlideText">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].text}</p>
          <div className="container">
            <a href="/" className="button">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">SHOP NOW</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </a>

          </div>
        </div>

        <div className="SlideDots">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`SlideDot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}