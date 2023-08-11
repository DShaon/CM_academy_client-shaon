import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel>
      <div className=" hero min-h-screen  bg-[#A5CAD3]">
        <div className="md:flex ">
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-left text-neutral-content">
            <div className="md:space-y-8">
              <p className="text-white text-2xl ">Welcome to CM Academy</p>
              <h1 className="mb-5 text-4xl md:text-7xl font-semibold text-white">
                Empowering Learning Through Technology
              </h1>
              <h1 className="mb-5 md:text-2xl font-mono font-bold   text-slate-700">
                Unleash Your Potential Today - Elevate Your Skills with CM
                Academy&apos;s Engaging Courses! <br />
                Unlock Your Potential with CM Academy&apos;s Dynamic Courses!
                Are you ready to dive into a world of limitless possibilities?
                br Welcome to CM Academy, where learning knows no bounds.{" "}
              </h1>
              <p className="mb-5 text-white"></p>
              <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                Get Started
              </Link>
              <Link
                to="/"
                className="btn bg-white text-teal-400 font-semibold p-5 m-3"
              >
                View Courses
              </Link>
            </div>
          </div>
          <div>
            <img
              className=""
              src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div className=" hero min-h-screen  bg-[#A5CAD3]">
        <div className="md:flex ">
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-left text-neutral-content">
            <div className="md:space-y-8">
              <p className="text-white text-2xl ">Welcome to CM Academy</p>
              <h1 className="mb-5 text-4xl md:text-7xl font-semibold text-white">
                Empowering Learning Through Technology
              </h1>
              <h1 className="mb-5 md:text-2xl font-mono font-bold   text-slate-700">
                Unleash Your Potential Today - Elevate Your Skills with CM
                Academy&apos;s Engaging Courses! <br />
                Unlock Your Potential with CM Academy&apos;s Dynamic Courses!
                Are you ready to dive into a world of limitless possibilities?
                br Welcome to CM Academy, where learning knows no bounds.{" "}
              </h1>
              <p className="mb-5 text-white"></p>
              <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                Get Started
              </Link>
              <Link
                to="/"
                className="btn bg-white text-teal-400 font-semibold p-5 m-3"
              >
                View Courses
              </Link>
            </div>
          </div>
          <div>
            <img
              className=""
              src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className=" hero min-h-screen  bg-[#A5CAD3]">
        <div className="md:flex ">
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-left text-neutral-content">
            <div className="md:space-y-8">
              <p className="text-white text-2xl ">Welcome to CM Academy</p>
              <h1 className="mb-5 text-4xl md:text-7xl font-semibold text-white">
                Empowering Learning Through Technology
              </h1>
              <h1 className="mb-5 md:text-2xl font-mono font-bold   text-slate-700">
                Unleash Your Potential Today - Elevate Your Skills with CM
                Academy&apos;s Engaging Courses! <br />
                Unlock Your Potential with CM Academy&apos;s Dynamic Courses!
                Are you ready to dive into a world of limitless possibilities?
                br Welcome to CM Academy, where learning knows no bounds.{" "}
              </h1>
              <p className="mb-5 text-white"></p>
              <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                Get Started
              </Link>
              <Link
                to="/"
                className="btn bg-white text-teal-400 font-semibold p-5 m-3"
              >
                View Courses
              </Link>
            </div>
          </div>
          <div>
            <img
              className=""
              src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
