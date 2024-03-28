import { SubCategory } from "@/interface/Dropdown";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const DropdownItems = ({ dropdownName, fetchedData, slugroot }: any) => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setMenuItems(fetchedData);
      setActiveMenuItem(fetchedData[0]?.name);
    }
  }, [fetchedData]);

  const handleMenuItemHover = (menuItem: any) => {
    setActiveMenuItem(menuItem?.name);
  };

  return (
    <Dropdown
      placement="bottom"
      overlay={
        <Menu>
          <div className="lg:w-[70vw] xl:w-[60vw] flex">
            <div className="w-full grid gap-4 max-h-96 overflow-y-scroll overflow-hidden custom-scrollbar-dropdown p-2">
              {menuItems?.map((menuItem: any) => (
                <Link
                  key={menuItem?.id}
                  href={`/${slugroot}/${menuItem?.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    onMouseEnter={() => handleMenuItemHover(menuItem)}
                    className={`flex items-center justify-between w-full px-4 py-2 text-nowrap text-sm md:text-base lg:text-lg xl:text-xl hover:bg-gray-100 hover:text-primary rounded-lg ${
                      menuItem?.name === activeMenuItem
                        ? "bg-gray-100 text-primary"
                        : ""
                    }`}
                  >
                    {menuItem?.name}

                    {menuItem?.items && menuItem?.items?.length > 0 && (
                      <div>
                        <FaChevronRight />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full p-2">
              {menuItems.map((menuItem: any) => (
                <div
                  key={menuItem?.id}
                  className={`p-4 grid lg:grid-cols-2 gap-8 ${
                    menuItem?.name === activeMenuItem ? "block" : "hidden"
                  }`}
                >
                  {menuItem?.items &&
                    menuItem?.items?.length > 0 &&
                    menuItem?.items?.map((subItem: SubCategory) => (
                      <Link
                        key={subItem?.id}
                        href={`/${slugroot}/${menuItem?.slug}/${subItem?.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-sm md:text-base lg:text-lg hover:underline hover:text-primary">
                          {subItem?.name}
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </Menu>
      }
    >
      <a className="text-primary text-sm md:text-base lg:text-lg font-medium hover:text-primaryYellow cursor-pointer inline-flex items-center">
        {dropdownName} <CaretDownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownItems;