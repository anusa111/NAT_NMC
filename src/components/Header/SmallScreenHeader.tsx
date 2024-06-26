/* eslint-disable @next/next/no-img-element */
import useFetchData from "@/hooks/useFetchData";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import SmDropdown from "./SmDropdown";
import AboutDropdown from "./AboutDropdown";
import MediaDropdown from "./MediaDropdown";

const SmallScreenNavbar = () => {
  const { fetchedData: departmentData } = useFetchData("departments");
  const { fetchedData: servicesData } = useFetchData("services");
  const { fetchedData: academicsData } = useFetchData("academics-program");
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-between items-center lg:hidden px-8 md:px-16 lg:px-24 xl:px-24 py-2 sticky top-0 z-40 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/NMC_logo.png" alt="Logo" className="w-12 h-auto" />
          <h1 className="text-base md:text-lg font-semibold text-primary">
            Nepal Medical College
          </h1>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div>
        <MenuOutlined onClick={showDrawer} className="text-xl text-primary" />
      </div>

      {/* Drawer */}
      <Drawer
        title="Nepal Medical College"
        placement="left"
        closable={true}
        onClose={onClose}
        open={visible}
      >
        <div className="grid gap-y-4">
          <NavItem name="Home" navigateTo="/" />
          <AboutDropdown />
          <SmDropdown
            slugroot="department"
            dropdownName="Departments"
            menuItems={departmentData}
          />
          <SmDropdown
            slugroot="service"
            dropdownName="Services"
            menuItems={servicesData}
          />
          <SmDropdown
            slugroot="academics"
            dropdownName="Academics"
            menuItems={academicsData}
          />
          <MediaDropdown />
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenNavbar;

const NavItem = ({ name, navigateTo }: any) => {
  return (
    <div>
      <Link
        href={navigateTo}
        className="text-base md:text-lg font-medium text-primary hover:text-primaryYellow"
      >
        {name}
      </Link>
    </div>
  );
};
