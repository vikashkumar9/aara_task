"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // React Icon for Hamburger Menu
import DropDown from "../ui/DropDown";

const menuData = [
  {
    label: "PORTFOLIO",
    subMenu: [
      { label: "Cyber Security", link: "/services/bankservices" },
      { label: "Data Center Modernization", link: "/services/paymentservices" },
      { label: "Network Transformations", link: "/services/utility" },
      { label: "Cloud Transformations", link: "/services/devices" },
      { label: "Digital Workspace", link: "/services/devices" },
      { label: "IT Managed Services", link: "/services/devices" },
    ],
  },
];
const aboutData = [
  {
    label: "ABOUT",
    subMenu: [
      { label: "About ValuePoints", link: "/services/bankservices" },
      { label: "Why ValuePoints", link: "/services/paymentservices" },
      { label: "The Board", link: "/services/utility" },
      { label: "Our Leadership", link: "/services/devices" },
      { label: "Awards & Recognition", link: "/services/devices" },
    ],
  },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      id="my-custom-id"
      className="flex flex-wrap items-center justify-between bg-white px-6 h-[85px]"
    >
      <div className="flex items-center">
        <a
          href="https://www.valuepointsystems.com/"
          aria-label="ValuePoint Systems Homepage"
        >
          <img
            src="https://www.valuepointsystems.com/wp-content/uploads/2023/01/Valuepoint_logo_NQ_11.1.2023.png"
            alt="ValuePoint Logo"
            className="h-[72px] w-[102px] object-contain"
          />
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-900 text-2xl hover:text-theme_color"
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>
      <div className="hidden md:flex w-full md:w-1/3 justify-center">
        <ul className="flex space-x-4">
          <li>
            <DropDown data={menuData} />
          </li>
          <li>
            <DropDown data={aboutData} />
          </li>
          <li>
            <a
              href="https://www.va"
              className="text-gray-900 hover:text-theme_color "
              aria-label="Partners Page"
            >
              PARTNERS
            </a>
          </li>
          <li>
            <a
              href="https://www.valuepointsy"
              className="text-gray-900 hover:text-theme_color "
              aria-label="Industries Page"
            >
              INDUSTRIES
            </a>
          </li>
          <li>
            <a
              href="https://www.valuepo"
              className="text-gray-900 hover:text-theme_color "
              aria-label="Blog Page"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              href="https://www.valuepointsys"
              className="text-gray-900 hover:text-theme_color "
              aria-label="Careers Page"
            >
              CAREER
            </a>
          </li>
          <li>
            <a
              href="https://www.valuepointsy"
              className="text-gray-900 hover:text-theme_color "
              aria-label="Contact Page"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex justify-end">
        <a
          href="tel:+917899900121"
          className="text-white bg-theme_color px-8 py-3 font-semibold rounded-tl-2xl rounded-br-2xl hover:bg-blue-950"
          aria-label="Call ValuePoint Systems"
        >
          +91 78999 00121
        </a>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 flex flex-col p-4">
          <button
            onClick={toggleSidebar}
            className="self-end text-gray-900 text-xl mb-4"
            aria-label="Close Menu"
          >
            ✕
          </button>
          <ul className="space-y-4">
            <li>
              <DropDown data={menuData} />
            </li>
            <li>
              <DropDown data={aboutData} />
            </li>
            <li>
              <a
                href="https://www.valuepoints"
                className="text-gray-900 hover:text-theme_color "
              >
                PARTNERS
              </a>
            </li>
            <li>
              <a
                href="https://www.valuepointsyst"
                className="text-gray-900 hover:text-theme_color "
              >
                INDUSTRIES
              </a>
            </li>
            <li>
              <a
                href="https://www.valuepoints"
                className="text-gray-900 hover:text-theme_color "
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="https://www.valuepointsys"
                className="text-gray-900 hover:text-theme_color "
              >
                CAREER
              </a>
            </li>
            <li>
              <a
                href="https://www.valuepointsys"
                className="text-gray-900 hover:text-theme_color "
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="tel:+917899900121"
                className="text-white bg-theme_color px-8 py-3 font-semibold rounded-tl-2xl rounded-br-2xl hover:bg-blue-950"
              >
                +91 78999 00121
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
