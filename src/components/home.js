import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Importing motion from framer-motion
import "./home.css"; // Ensure your CSS is imported
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import MarqueeComponent from "../components/marquee";

// Common video source for all slides
const commonVideoSrc = "herovideo.mp4"; // Replace with your video path

const slides = [
  {
    id: 1,
    title: "Delivering Stellar Precision Engineering Innovative Engineering",
    description: "We provide cutting-edge solutions to enhance your business performance.",
  },
  {
    id: 2,
    title: "Transforming Visions into Reality with Cutting-Edge Engineering",
    description: "Our team turns creative ideas into tangible results with advanced engineering.",
  },
  {
    id: 3,
    title: "Elevating Your Business with Innovative Engineering",
    description: "Innovative approaches that help businesses grow and succeed in a competitive market.",
  },
  {
    id: 4,
    title: "Crafting Excellence Through Engineering Mastery",
    description: "Mastering the art of engineering to deliver unmatched quality and precision.",
  },
  {
    id: 5,
    title: "Empowering Progress with High-Performance Engineering",
    description: "Empowering businesses to move forward with high-performance engineering solutions.",
  },
  {
    id: 6,
    title: "Transforming Visions into Reality with Cutting-Edge Engineering",
    description: "Bringing your ideas to life with state-of-the-art engineering technologies.",
  },
  {
    id: 7,
    title: "Crafting Excellence Through Engineering Mastery",
    description: "Engineering excellence that sets the standard for the industry.",
  },
];

const CarouselWithTextAnimation = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    pauseOnHover: false, // Ensures autoplay continues even when hovered
    prevArrow: (
      <button className="slick-prev">
        <i className="fas fa-arrow-left replay-arrow"></i> {/* Replay icon */}
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <i className="fas fa-arrow-right replay-arrow"></i> {/* Replay icon */}
      </button>
    ),
    responsive: [
      {
        breakpoint: 1200, // Large screens (Desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992, // Medium screens (Tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Small screens (Phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  // Function to split text into words
  const splitTextIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2, // Stagger the words with a delay
        }}
        className="animated-word"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <>
      <div className="carousel-container">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={commonVideoSrc} type="video/mp4" />
          </video>
        </div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-item">
              <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="carousel-content text-center">
                  <div>
                    {/* Animate title with blur and light text effect */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)", // Remove blur during animation
                      }}
                      transition={{ duration: 1, delay: 0 }} // Title appears first
                      className="animated-title"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Animate description word by word */}
                    <motion.p
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)", // Remove blur during animation
                      }}
                      transition={{ duration: 1, delay: 0.5 }} // Description appears after a delay
                      className="animated-description"
                    >
                      {splitTextIntoWords(slide.description)}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <MarqueeComponent />
    </>
  );
};

export default CarouselWithTextAnimation;
