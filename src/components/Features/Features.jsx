"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-8 px-4 md:px-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h6
            className="text-lg font-semibold text-orange-600"
            data-aos="fade-right"
          >
            <a href="https://" target="_blank" rel="noopener noreferrer">
              About Noventiq
            </a>
          </h6>
          <h5 className="text-xl mt-4">
            <a
              href="https://noventiq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-orange-600"
            >
              Noventiq
            </a>
            <span className="text-base text-gray-900 font-normal ">
              (Noventiq Holdings PLC) is a leading global solutions and services
              provider in digital transformation and cybersecurity,
              headquartered in London. The company enables, facilitates, and
              accelerates digital transformation for its customers’ businesses,
              connecting organizations across a comprehensive range of
              industries with best-in-class IT vendors, alongside its own
              services and proprietary solutions.
            </span>
          </h5>
          <h5 className="text-base text-gray-900 mt-4">
            The company’s rapid growth is underpinned by its three-dimensional
            strategy to expand its market penetration, product portfolio, and
            sales channels. This is supported by an active approach to M&A,
            positioning Noventiq to capitalize on the industry’s ongoing
            consolidation. With around 6,400 employees globally, Noventiq
            operates in approximately 60 countries with significant growth
            potential in multiple regions including Latin America, EMEA, and
            APAC – with a notable presence in India.
          </h5>
        </div>
        <div className="mb-8 text-center">
          <h6
            className="text-lg font-semibold text-orange-600"
            data-aos="fade-right"
          >
            Why Choose Us?
          </h6>
          <h2 className="text-3xl text-black font-bold mt-4" data-aos="fade-up">
            High-end digital transformation results
          </h2>
          <p
            className="text-base mt-4 md:mx-24 text-gray-900"
            data-aos="fade-up"
          >
            There are several reasons why ValuePoint has the best access to
            high-end digital transformation results. But we added a few below:{" "}
          </p>
        </div>
        <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div
            className="flex items-start bg-white shadow rounded-lg p-6"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full text-orange-600 text-5xl hover:text-white mr-4 p-6 hover:bg-orange-600">
              <MdLightbulbOutline />
            </div>
            <div>
              <h3 className="text-2xl text-black font-semibold">
                Delivering Scalable Solutions
              </h3>
              <p className="text-base text-gray-600 mt-2">
                With about 10 operational branches in 3 countries of the world
                and a workforce of about 1,200, we have deeply rooted ourselves
                into the world of digital transformation{" "}
              </p>
            </div>
          </div>
          <div
            className="flex items-start bg-white shadow rounded-lg p-6"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full text-orange-600 text-5xl hover:text-white mr-4 p-6 hover:bg-orange-600">
              <MdOutlineRocketLaunch />
            </div>
            <div>
              <h3 className="text-2xl text-black font-semibold">
                Top Force in the Industry
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Member of Partner Advisory Boards of Technology Partners. Top 5
                System Integrator Cyber Security Integrator Top 100 IT companies
                in India. Engaged with 50+ Global Technology Partners{" "}
              </p>
            </div>
          </div>
          <div
            className="flex items-start bg-white shadow rounded-lg p-6"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full text-orange-600 text-5xl hover:text-white mr-4 p-6 hover:bg-orange-600">
              <IoIosPeople />
            </div>
            <div>
              <h3 className="text-2xl text-black font-semibold">
                Workforce Experience
              </h3>
              <p className="text-base text-gray-600 mt-2">
                Our workforce boasts of over 300 employees with over 10 years of
                individual experience in the digital transformation industry
              </p>
            </div>
          </div>
          <div
            className="flex items-start bg-white shadow rounded-lg p-6"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full text-orange-600 text-5xl hover:text-white mr-4 p-6 hover:bg-orange-600">
              <LuShoppingBag />
            </div>
            <div>
              <h3 className="text-2xl text-black font-semibold">
                Over 2,000 Happy Clients
              </h3>
              <p className="text-base text-gray-600 mt-2">
                We can incredibly boast of over 2,000 happy customers amongst
                Fortune 500, Global & SME's. 80% of our revenue comes from
                returning customers{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
