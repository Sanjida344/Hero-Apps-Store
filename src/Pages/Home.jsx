import React from "react";
import heroImg from "../assets/hero.png";
import Apps from "../components/Apps/Apps";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Hero Store - Home</title>
      </Helmet>
      {/* Hero */}
      <section className="w-full flex flex-col items-center text-center bg-[#f5f5f5] ">
        {/* Top Content */}
        <div className="max-w-4xl mt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base px-3">
            At <span className="font-semibold">Hero Store</span> we create
            powerful and innovative apps that make everyday life simpler,
            smarter, and more inspiring. Our mission is to transform your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Store Buttons */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <Link
              to={"https://play.google.com/store/apps"}
              className="btn flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-lg hover:shadow-lg transition"
            >
              <img
                src="https://img.icons8.com/?size=96&id=L1ws9zn2uD01&format=png"
                alt="Google Play"
                className="h-6"
              />
              <p>Play Store</p>
            </Link>
            <Link
              to={"https://apps.apple.com/bj/developer/apple/id284417353?mt=12"}
              className="flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-lg hover:shadow-lg transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                alt="App Store"
                className="h-6"
              />
              <p>App Store</p>
            </Link>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative mt-12 flex justify-center">
          <img
            src={heroImg}
            alt="App Preview"
            className="w-[250px] md:w-[300px] lg:w-[440px] object-contain"
          />
        </div>

        {/* Stats Section */}
        <div className=" w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12">
          <h2 className="hidden lg:block text-4xl font-bold text-center ">
            Trusted By Millions, Built For You
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
            <div>
              <h3 className="text-sm uppercase opacity-80">Total Downloads</h3>
              <p className="text-3xl md:text-4xl font-bold mt-2">29.6M</p>
              <p className="text-sm opacity-75 mt-1">
                21% More Than Last Month
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-80">Total Reviews</h3>
              <p className="text-3xl md:text-4xl font-bold mt-2">906K</p>
              <p className="text-sm opacity-75 mt-1">
                46% More Than Last Month
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase opacity-80">Active Apps</h3>
              <p className="text-3xl md:text-4xl font-bold mt-2">132+</p>
              <p className="text-sm opacity-75 mt-1">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>
      {/* Default 8 Data */}
      <Apps></Apps>
    </section>
  );
};

export default Home;