/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import SmDropdown from "./SmDropdown";

const SmallScreenNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-between items-center lg:hidden px-8 md:px-16 lg:px-24 xl:px-24 py-2 sticky top-0 z-50 bg-white">
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
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="grid gap-y-4">
          <NavItem name="Home" navigateTo="/" />
          <NavItem name="About" navigateTo="/about" />
          <SmDropdown dropdownName="Departments" />
          <SmDropdown dropdownName="Services" />
          <NavItem name="Activities" navigateTo="/activities" />
          <NavItem name="Research" navigateTo="/research" />
          <SmDropdown dropdownName="Academics" />
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenNavbar;

const NavItem = ({ name, navigateTo }: any) => {
  return (
    <div>
      <Link href={navigateTo} className="text-base md:text-lg font-medium text-primary hover:text-primaryYellow">{name}</Link>
    </div>
  );
};
