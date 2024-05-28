
"use client";
import "../styles/homepage.css";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useScrollPercentage } from "react-scroll-percentage";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Page() {
  const [Scrollref, percentage] = useScrollPercentage({ triggerOnce: true });
  const { ref, inView } = useInView({ triggerOnce: true }); // Initialize useInView hook
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    console.log(percentage);
  }, [percentage]);


  let products = [
    { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band",  slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
    { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue",  slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
    { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band",  slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band",  price: 9995, image: "/watches/w3.png" },
    { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ",  slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
    { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ",  slug: "fastrack-analog-unisex-adult-watch",  price: 804, image: "/watches/w5.png" },
    { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch",  slug: "timex-analog-black-dial-men-s-watch",  price: 2645, image: "/watches/w6.png" },
    { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch",  slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch",  price: 6897, image: "/watches/w7.png" }
    ]

  const hrRef = useRef(null);
  const mnRef = useRef(null);
  const scRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      if (hrRef.current) {
        hrRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      }
      if (mnRef.current) {
        mnRef.current.style.transform = `rotateZ(${mm}deg)`;
      }
      if (scRef.current) {
        scRef.current.style.transform = `rotateZ(${ss}deg)`;
      }
    };

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const limit = 35;

  const truncate = (str) => {
    if (str.length > limit) {
      return str.slice(0, limit) + "..."
    } else {
      return str
    }
  }

  // if (!isMounted) return null;
  return (
    <>
      <div className="all-hero-wrap">
        <Head>
          <title>Prokicks</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <img className='absolute vectorImg' src='/stocks/vector-blue-1.png'></img> */}
        <div className="heroSection text-white">
          <div className="img line">
            <div className="absolute h-1 rounded-full w-28 bg-gradient-to-r from-primary-300 to-secondary-600"></div>
          </div>
          <div className="hero-text">
            <span className="first-text">Welcome to</span>
            <span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                WatchHub Kerala
              </span>
            </span>
          </div>

          <div className="hero-left-container-wrap">
            <div className="img shoe">
              <img src="/stocks/w-2.png" />
            </div>

            <div className="img circle">
              <div className="w-96 h-96  rounded-full bg-gradient-to-br from-primary-300 to-secondary-700 "></div>
            </div>
          </div>
        </div>
      


        <div className=" relative counter-top-wrapper mx-auto text-white md:w-[70%] bg-[#000] rounded-xl mb-12 lg:px-12 py-16 pt-28 lg:grid lg:grid-cols-3 md:flex md:items-center md:justify-center w-[90%]">
          <div id="clock-wrapper" className="left-auto w-full flex justify-center items-start">
            <div class="clock">
              <div class="numbers">
                <div>
                  <span style={{ '--i': 0 }}><b>12</b></span>
                  <span style={{ '--i': 1 }}><b>3</b></span>
                  <span style={{ '--i': 2 }}><b>6</b></span>
                  <span style={{ '--i': 3 }}><b>9</b></span>
                </div>
                <div class="circle" id="hr" ref={hrRef}><i></i></div>
                <div class="circle" id="mn" ref={mnRef}><i></i></div>
                <div class="circle" id="sc" ref={scRef}><i></i></div>
              </div>
            </div>
          </div>

          {[{ title: "Customers", count: "5000" }, { title: "Products", count: "1000" }, { title: "Years of experience", count: "3" }].map((item) => {
            return (
              <div className="item flex flex-col items-center justify-center">
                <div className="wrapper py-4 flex items-center justify-center flex-col">
                  <div className="relative font-semibold number-counter text-4xl bg-clip-text text-transparent bg-gradient-to-br from-primary-300 to-secondary-700 ">
                    {item.count} <div className="absolute top-0 text-lg -right-4 text-white">+</div>
                  </div>
                  <div className="title-counter">
                    {item.title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>




        <div className="trending pl-4 md:pl-12 md:pr-4 my-8">
          <div className="my-6 flex justify-between items-center pr-3">
            <h1 className="text-white text-2xl text-bold ">Trending Products</h1>
            <span className="text-gray-400 text-sm"><Link href={"/products"}>View all</Link></span>
          </div>

{/* <div className="cards-wrapper-outer">
          <div className="cards flex gap-2 flex-wrap flex-row">
            {products.map((product) => {
              return (
                <div className="card flex flex-col bg-[#1e1c1c] rounded-md pb-3">
                  <div className="imageSection py-2">
                    <img src={product.image} />
                  </div>
                  <div className="contentSection text-white">
                    <div className="title-brand  p-2">
                      <div className="title text-sm">{truncate(product.name)}</div>
                      <div className="brand text-xs my-1 text-gray-300">{product.brand}</div>
                    </div>
                    <div className="priceSection px-2 py-1 ">
                      <div className="price text-md font-bold">₹ {product.price}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
</div> */}


<div className="cards-wrapper-outer overflow-x-auto">
      <div className="cards flex gap-2 flex-nowrap">
        {products.map((product) => {
          return (
            <div key={product.id} className="card flex flex-col bg-[#1e1c1c] rounded-md pb-3 min-w-[200px]">
              <Link href={"/product/"+product.slug}>
              <div className="imageSection py-2">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="contentSection text-white">
                <div className="title-brand p-2">
                  <div className="title text-sm">{truncate(product.name)}</div>
                  <div className="brand text-xs my-1 text-gray-300">{product.brand}</div>
                </div>
                <div className="priceSection px-2 py-1">
                  <div className="price text-md font-bold">₹ {product.price}</div>
                </div>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>

        </div>

 

{/* 
        <div class="container-wrap-hero py-12">
          <div class="conainer-box max-w-xl">
            <i class="bx bxs-phone text-primary-500"></i>
            <h1 class="text-white">+91 87339 66617</h1>
            <p class="text-white">Call For Order</p>
          </div>

          <div class="conainer-box">
            <i class="bx bxs-map text-primary-500"></i>
            <h1 class="text-white">111-111-11</h1>
            <p class="text-white">Call For Order</p>
          </div>

          <div class="conainer-box">
            <i class="bx bxs-timer text-primary-500"></i>
            <h1 class="text-white">111-111-11</h1>
            <p class="text-white">Call For Order</p>
          </div>
        </div> */}


        <div className="w-full flex items-center justify-center">
        </div>
<div className="flex justify-center items-center flex-col">
          {/* <div className="w-3/5 h-1 bg-gray-700 px-8"></div> */}
            <div className="scroller w-[100vw] md:w-[80vw]" data-direction="right" data-speed="slow">
              <div className="scroller__inner">
                {[...Array(16)].map((_, index) => (
                  <img key={index} src={"/brands/b" + (16 - (index)) + ".png"} className="w-48 px-2" />
                ))}
              </div>
            </div>
            <div className="scroller w-[100vw] md:w-[80vw]" data-direction="left" data-speed="slow">
              <div className="scroller__inner">
            
                {[...Array(16)].map((_, index) => (
                  <img key={index} src={"/brands/b" + (index + 1) + ".png"} className="w-48 px-2" />
                ))}
              </div>
            </div>
                {/* <div className="w-3/5 h-1 bg-gray-700 px-8"></div> */}
</div>

        {/* <main className="flex flex-col items-center  main text-white">
          <h2 className="mb-12 text-transparent text-3xl underline font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            About Us
          </h2>
          <div
            className="progress-hero"
            style={{
              height: `${percentage * 100}%`,
              width: "2px",
              background: "linear-gradient(to top, #FFEB3B, #FF5722)",
              position: "absolute",
              top: "0px",
              right: "20px",
            }}
          ></div>


      
          <section class="aboutContainer" id="about">
            <div class="about">
              <div class="about-img">
                <img src="/stocks/shoe-hero-1.png" />
              </div>
              <div class="about-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel reprehenderit eveniet fuga! Iusto a rem perspiciatis officia. Itaque ab ea expedita obcaecati consequatur numquam necessitatibus corporis illum at quod dolores hic quis, non pariatur assumenda labore, cumque cum laboriosam. Placeat repellendus, sunt a molestiae provident voluptas suscipit molestias accusamus, maiores iure esse reprehenderit neque distinctio et, quidem commodi. Aspernatur, aliquam.</p>
                <br />
                <a href="/products" class="btn btn-about">Shop Now</a>
              </div>
            </div>
          </section>

          <h1 style={{ textAlign: 'center' }}>Infinite Scroll Animation</h1>


        
           
        </main> */}

<div className="about-us text-white py-16 px-8 md:px-16 lg:px-32">
      {/* <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-400">About Us</h2>
        <p className="text-lg md:text-xl mt-4 text-gray-300">Discover the World of Exquisite Timepieces at Rehan's Collection</p>
      </div>

      <div className="story mb-12">
        <h3 className="text-2xl font-bold text-secondary-500 mb-4">Our Story</h3>
        <p className="text-gray-300 leading-relaxed">
          Rehan's Collection was founded with a passion for horology and a dedication to providing our customers with the finest watches available. Over the years, we have curated a diverse range of watches, ensuring that each piece meets our stringent standards of quality, craftsmanship, and design.
        </p>
      </div>

      <div className="collection mb-12">
        <h3 className="text-2xl font-bold text-secondary-500 mb-4">Our Collection</h3>
        <p className="text-gray-300 leading-relaxed">
          Our extensive collection features renowned brands such as Rolex, Omega, Tag Heuer, Seiko, and many more. From luxury brands that symbolize status and sophistication to innovative brands that push the boundaries of watchmaking, our collection is a testament to the art of fine watchmaking.
        </p>
      </div> */}

      <div className="why-choose-us mb-12">
        <h3 className="text-2xl font-bold text-secondary-500 mb-12">Why Choose Us?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <i className="bx bxs-trophy text-4xl text-primary-400 mb-4"></i>
            <h4 className="text-xl font-semibold text-primary-300 mb-2">Expertise</h4>
            <p className="text-gray-300 text-center">
              Our knowledgeable staff are watch enthusiasts who are passionate about helping you find the perfect timepiece.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bx bxs-watch text-4xl text-primary-400 mb-4"></i>
            <h4 className="text-xl font-semibold text-primary-300 mb-2">Quality</h4>
            <p className="text-gray-300 text-center">
              We offer only the highest quality watches, ensuring that each piece is authentic and crafted to the highest standards.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bx bxs-conversation text-4xl text-primary-400 mb-4"></i>
            <h4 className="text-xl font-semibold text-primary-300 mb-2">Customer Service</h4>
            <p className="text-gray-300 text-center">
              We are committed to providing exceptional service, from helping you choose the right watch to offering maintenance and repair services.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bx bxs-collection text-4xl text-primary-400 mb-4"></i>
            <h4 className="text-xl font-semibold text-primary-300 mb-2">Diverse Selection</h4>
            <p className="text-gray-300 text-center">
              With a wide range of brands and styles, we have something for everyone, whether you are a seasoned collector or new to the world of watches.
            </p>
          </div>
        </div>
      </div>

      <div className="cta text-center mt-16">
        <h3 className="text-2xl font-bold text-secondary-500 mb-4">Visit Us Today!</h3>
        <p className="text-gray-300 leading-relaxed mb-8">
          At WatchHubKerala, we believe that a watch is more than just a tool for telling time—it is a reflection of your personal style and a statement of who you are. We invite you to explore our collection and discover the perfect watch that speaks to you.
        </p>
        <Link href="/products" className="btn btn-primary text-white bg-gradient-to-r from-primary-400 to-secondary-600 px-6 py-3 rounded-full">
          Shop Now
        </Link>
      </div>
    </div>
      </div>
    </>
  );
}
