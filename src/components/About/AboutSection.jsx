import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { AiOutlineAim } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="why-valuepoint"
      className="relative bg-white py-12 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="space-y-6">
            <h6
              className="text-sm font-semibold text-orange-600 leading-loose"
              data-aos="fade-up"
            >
              About Our Company
            </h6>
            <h2
              className="text-3xl font-bold text-black leading-relaxed"
              data-aos="fade-up"
            >
              Beyond Technology
            </h2>
            <div className="flex items-start" data-aos="fade-right">
              <div className="text-theme_color mr-4">
                <AiOutlineAim className="text-6xl" />
              </div>
              <div>
                <h5 className="text-lg text-black font-semibold leading-relaxed">
                  Who we are
                </h5>
                <p className="text-gray-900 leading-loose">
                  We accelerate Customer’s Business Transformation Journey
                  through our competence in Consulting, Integration, and
                  Security, delivering Next-Gen Digital Infrastructure
                  Technologies, Solutions, and Services.
                </p>
              </div>
            </div>
            <div className="flex" data-aos="fade-left">
              <div className="text-theme_color text-6xl mr-4">
                <GrReactjs />
              </div>
              <div>
                <h5 className="text-lg text-black font-semibold leading-relaxed">
                  What we do
                </h5>
                <p className="text-gray-900 leading-loose">
                  We collaborate with trusted IT partners to deliver outstanding
                  results through our portfolio services. We help you transform
                  your business to enhance your Revenue, Profitability, Business
                  Outcomes, and Customer Experience.
                  <br />
                  As of 10 October 2022, Value Point Systems is a Noventiq
                  company.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative bg-white">
          <div
            className="absolute top-0 left-0 w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-3/4 z-10"
            data-aos="zoom-in"
          >
            <img
              src="https://www.valuepointsystems.com/wp-content/uploads/2021/11/hypercoverged-768x512.jpeg"
              alt="hypercoverged"
              className="w-full h-auto object-cover rounded-lg shadow-md max-w-full"
            />
          </div>

          <div
            className="absolute top-24 left-10 sm:top-28 sm:left-12 md:top-24 md:left-16 lg:top-28 lg:left-20 w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/5 z-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="https://www.valuepointsystems.com/wp-content/uploads/2021/11/technical-upgrade.jpg"
              alt="technical-upgrade"
              className="w-full h-auto object-cover rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
