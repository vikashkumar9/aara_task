import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = ({ data }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="header h-full flex items-center">
      <nav className="relative w-full">
        <ul className="flex space-x-6">
          {data.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() =>
                setOpenMenus((prev) => ({ ...prev, [index]: true }))
              }
              onMouseLeave={() =>
                setOpenMenus((prev) => ({ ...prev, [index]: false }))
              }
            >
              <button
                className="text-gray-900 hover:text-orange-600  flex items-center space-x-2"
                onClick={() => toggleMenu(index)}
                aria-expanded={openMenus[index] || false}
              >
                {menu.label}
                <RiArrowDropDownLine className="ml-2 text-2xl" />
              </button>
              <ul
                className={`absolute bg-white left-0 z-50 text-base w-56 shadow-md rounded-md py-2 ${
                  openMenus[index] ? "block" : "hidden"
                }`}
              >
                {menu.subMenu.map((subItem, subIndex) =>
                  subItem.subMenu ? (
                    <li
                      key={subIndex}
                      className="relative group"
                      onMouseEnter={() =>
                        setOpenMenus((prev) => ({
                          ...prev,
                          [`${index}-${subIndex}`]: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setOpenMenus((prev) => ({
                          ...prev,
                          [`${index}-${subIndex}`]: false,
                        }))
                      }
                    >
                      <a
                        href={subItem.link}
                        className="block text-gray-900 text-xs  hover:text-orange-600 px-4 py-1.5"
                      >
                        {subItem.label}
                      </a>
                      <ul
                        className={`absolute left-full top-0 space-y-1 bg-white shadow-lg w-40 rounded-md py-1 ${
                          openMenus[`${index}-${subIndex}`] ? "block" : "hidden"
                        }`}
                      >
                        {subItem.subMenu.map((childItem, childIndex) => (
                          <li key={childIndex}>
                            <a
                              className="block text-gray-900 text-xs hover:text-orange-600 px-3 py-1"
                              href={childItem.link}
                            >
                              {childItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={subIndex}>
                      <a
                        className="block text-gray-700 hover:text-orange-600  px-4 py-1.5"
                        href={subItem.link}
                      >
                        {subItem.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DropDown;
