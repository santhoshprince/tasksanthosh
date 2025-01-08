import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarqueeComponent from "../components/marquee";
import icon1 from "../img/Icon1.png";
import icon2 from "../img/Icon2.png";
import icon3 from "../img/Icon3.png";
import slide1 from "../img/1.jpeg";
import slide2 from "../img/2.jpeg";
import slide3 from "../img/3.jpeg";
import slide4 from "../img/4.jpeg";
import slide5 from "../img/5.jpeg";
import our1 from "../img/Turning.jpg";
import our2 from "../img/Mill- Turn.jpg";
import our3 from "../img/Milling.jpg";
import our4 from "../img/Asembly.jpg";

const Home = () => {
  const commonVideoSrc = "herovideo.mp4";

  const slides = [
    {
      id: 1,
      title: "Delivering Stellar Precision Engineering Innovative Engineering",
      description:
        "You’re A1 Partner in Engineering Excellence Unleashing the Power of Precision Engineering for Your Business",
    },
    {
      id: 2,
      title: "Transforming Visions into Reality with Cutting-Edge Engineering",
      description:
        "Redefining Possibilities Through Precision and Innovation. Your Trusted Partner for Advanced Engineering Solutions",
    },
    {
      id: 3,
      title: "Elevating Your Business with Innovative Engineering",
      description:
        "Bridging Creativity and Functionality. Discover Tailored Engineering Solutions for Every Challenge",
    },
    {
      id: 4,
      title: "Crafting Excellence Through Engineering Mastery",
      description:
        "Turning Complex Ideas into Seamless Solutions. Precision Engineering Built for Tomorrow’s Needs",
    },
    {
      id: 5,
      title: "Empowering Progress with High-Performance Engineering",
      description:
        "Driving Success Through Expertise and Technology. Engineering Solutions That Propel Growth and Efficiency",
    },
  ];

  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    pauseOnHover: false,
    prevArrow: (
      <button className="slick-prev">
        <i className="fas fa-arrow-left replay-arrow"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <i className="fas fa-arrow-right replay-arrow"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1200,
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

  const h1Ref = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);

  // Setup useInView hooks with threshold for more precise control
  const h1InView = useInView(h1Ref, { once: false, margin: "-100px" });
  const pInView1 = useInView(pRef1, { once: false, margin: "-100px" });
  const pInView2 = useInView(pRef2, { once: false, margin: "-100px" });
  const pInView3 = useInView(pRef3, { once: false, margin: "-100px" });

  // Sequence timing for column content
  const columnVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const sections = [
    {
      title: "Innovative Engineering, Reliable Solutions",
      content:
        "At Prax Engineering Ltd, we pride ourselves on our ability to innovate and deliver exceptional engineering solutions. Our team of skilled engineers combines decades of experience with a forward-thinking approach to meet the ever evolving demands of industries like aerospace, automotive, and beyond. Whether designing advanced components for high-performance applications or engineering custom solutions for unique challenges, we bring precision, expertise, and creativity to every project. With state-of-the art technology and a commitment to excellence, we ensure every product we deliver exceeds expectations in both quality and performance.",
      image: slide1,
    },
    {
      title: "Precision Manufacturing",
      content:
        "Our state-of-the-art manufacturing facilities and stringent quality control processes ensure that every component we produce meets the highest standards of precision and reliability. From prototyping to large-scale production, we have the capabilities to handle projects of any size and complexity.",
      image: slide2,
    },
    {
      title: "Advanced Technology",
      content:
        "We invest in the latest technology and software to stay at the forefront of engineering innovation. Our advanced CAD/CAM systems, CNC machines, and metrology equipment enable us to design, manufacture, and inspect components with unparalleled accuracy and efficiency.",
      image: slide3,
    },
    {
      title: "Customer-Focused Approach",
      content:
        "At Prax Engineering, we prioritize building long-term partnerships with our clients. We work closely with you to understand your unique requirements and develop tailored solutions that meet your specific needs. Our commitment to exceptional customer service ensures that you receive the support and attention you deserve throughout the entire project lifecycle.",
      image: slide4,
    },
    {
      title: "Global Reach, Local Expertise",
      content:
        "With a global network of suppliers and partners, we have the capability to source materials and components from around the world. At the same time, our local presence and in-depth knowledge of regional markets allow us to provide personalized service and support to our clients, no matter where they are located.",
      image: slide5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.4, 0.0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 2, // Add a delay of 2 seconds before the exit animation starts
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      x: -100,
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 2, // Add a delay of 2 seconds before the exit animation starts
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
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
                    <motion.h1
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{ duration: 1, delay: 0 }}
                      className="animated-title"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{ duration: 1, delay: 0.5 }}
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

      <section className="world-in-motion py-5">
        <motion.section
          className="world-in-motion py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container text-white">
            <motion.h1
              ref={h1Ref}
              className="text-center mb-4"
              style={{ color: "#141414" }}
              // variants={textVariants}
              initial="hidden"
              animate={h1InView ? "visible" : "hidden"}
              // transition={{ duration: 0.5 }}
            >
              Precision Engineering Solutions for a{" "}
              <span style={{ color: "#0043F1" }}>World in Motion</span>
            </motion.h1>

            <div className="row justify-content-between">
              <div className="col-md-3 col-sm-12 text-center mb-4">
                {/* <motion.div 
             
              variants={columnVariants}
              initial="hidden"
              animate={pInView1 ? "visible" : "hidden"}
              custom={0}
            > */}
                <div className="icon mb-3">
                  <img src={icon1} alt="Global Reach" className="img-fluid" />
                </div>
                {/* </motion.div> */}
                <motion.h5
                  ref={pRef1}
                  style={{ color: "#141414", fontFamily: "Inter" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView1 ? "visible" : "hidden"}
                  custom={1}
                >
                  Precision and Quality
                </motion.h5>
                <motion.p
                  style={{ color: "#141414", fontFamily: "Poppins-Medium" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView1 ? "visible" : "hidden"}
                  custom={2}
                >
                  Prax Engineering specializes in precision engineering,
                  delivering high-quality machine components that enhance
                  efficiency and reduce costs.
                </motion.p>
              </div>

              <div className="col-md-3 col-sm-12 text-center mb-4">
                {/* <motion.div 
              className="icon mb-3"
              variants={columnVariants}
              initial="hidden"
              animate={pInView2 ? "visible" : "hidden"}
              custom={3}
            >
              <img src={icon2} alt="Engineering Excellence" className="img-fluid" />
            </motion.div> */}
                <div className="icon mb-3">
                  <img src={icon2} alt="Global Reach" className="img-fluid" />
                </div>
                <motion.h5
                  ref={pRef2}
                  style={{ color: "#141414", fontFamily: "Inter" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView2 ? "visible" : "hidden"}
                  custom={4}
                >
                  Advanced Technology
                </motion.h5>
                <motion.p
                  style={{ color: "#141414", fontFamily: "Poppins-Medium" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView2 ? "visible" : "hidden"}
                  custom={5}
                >
                  We use advanced MRP and production control software to
                  streamline manufacturing, ensuring accurate and flawless
                  results.
                </motion.p>
              </div>

              <div className="col-md-3 col-sm-12 text-center mb-4">
                {/* <motion.div 
              className="icon mb-3"
              variants={columnVariants}
              initial="hidden"
              animate={pInView3 ? "visible" : "hidden"}
              custom={6}
            >
              <img src={icon3} alt="Innovative Progress" className="img-fluid" />
            </motion.div> */}
                <div className="icon mb-3">
                  <img src={icon3} alt="Global Reach" className="img-fluid" />
                </div>
                <motion.h5
                  ref={pRef3}
                  style={{ color: "#141414", fontFamily: "Inter" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView3 ? "visible" : "hidden"}
                  custom={7}
                >
                  Innovation and Partnership
                </motion.h5>
                <motion.p
                  style={{ color: "#141414", fontFamily: "Poppins-Medium" }}
                  variants={columnVariants}
                  initial="hidden"
                  animate={pInView3 ? "visible" : "hidden"}
                  custom={8}
                >
                  Partner with us to create industry-leading solutions that
                  drive innovation, efficiency, and success in your business.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>
      </section>
      <section className="innovative-engineering py-5">
        <div className="container-fluid">
          <div
            className="row align-items-center "
            style={{
              overflow: "hidden",
              position: "sticky",
              bottom: 0,
              width: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                className="col-md-6 col-sm-12 mb-4 d-flex flex-column justify-content-center"
                key={`content-${currentIndex}`}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="text-column">
                  <h1 className="mb-4 heading">
                    {sections[currentIndex]?.title}
                  </h1>
                  <p>{sections[currentIndex]?.content}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                className="col-md-6 col-sm-12"
                style={{ paddingRight: "0px", overflow: "hidden" }}
                key={`image-container-${currentIndex}`}
              >
                <motion.div
                  className="image-column"
                  key={`image-${currentIndex}`}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={sections[currentIndex]?.image}
                    alt={`Engineering Solutions ${currentIndex + 1}`}
                    className="img-fluid img-contain"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section
        className="additional-section py-5"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 className="text-center mb-5">Explore More Solutions</h2>
          <div className="row">
            <div className="col-md-7 mb-4">
              <div className="image-box">
                <div className="image-wrapper">
                  <img
                    src={our1}
                    alt="Turning"
                    className="img-fluid normal-image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="image-text">
                    <h1>TURNING</h1>
                    <p>
                      Meet the aero electric RV that will change how you travel
                    </p>
                    <a href="#" className="arrow-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="image-box">
                <div className="image-wrapper">
                  <img
                    src={our2}
                    alt="Turning"
                    className="img-fluid normal-image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="image-text">
                    <h1>MILL-TURN</h1>
                    <p>
                    Meet the aero electric RV that will change how you travel
                    </p>
                    <a href="#" className="arrow-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 mb-4">
              <div className="image-box">
                <div className="image-wrapper">
                  <img
                    src={our3}
                    alt="Turning"
                    className="img-fluid normal-image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="image-text">
                    <h1>MILLING</h1>
                    <p>
                    Meet the aero electric RV that will change how you travel
                    </p>
                    <a href="#" className="arrow-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-4">
              <div className="image-box">
                <div className="image-wrapper">
                  <img
                    src={our4}
                    alt="Turning"
                    className="img-fluid normal-image"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="image-text">
                    <h1>ASSEMBLY</h1>
                    <p>
                    Meet the aero electric RV that will change how you travel
                    </p>
                    <a href="#" className="arrow-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
