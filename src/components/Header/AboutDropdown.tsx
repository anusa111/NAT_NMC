import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Popover } from "antd";

import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

const AboutDropdown = () => {
  const { fetchedData } = useFetchData("messages");
  const messagesmenu = (
    <div className="!bg-white">
      {fetchedData?.map((msg: any, index: number) => (
        <div
          key={index}
          className="px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-sm lg:text-base hover:bg-gray-100 hover:text-primary"
        >
          <Link
            className=""
            style={{ textDecoration: "none", color: "inherit" }}
            href={`/about/messages/${msg?.slug}`}
          >
            <div>Message from {msg?.position}</div>
          </Link>
        </div>
      ))}
    </div>
  );

  const menu = (
    <Menu>
      <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
        <Link
          className=""
          style={{ textDecoration: "none", color: "inherit" }}
          href="/about/about-hospital"
        >
          <div>About Hospital</div>
        </Link>
      </div>
      <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
        <Link
          className=""
          style={{ textDecoration: "none", color: "inherit" }}
          href="/about/mission-and-vision"
        >
          <div>Mission and Vision</div>
        </Link>
      </div>
      <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
        <Link
          className=""
          style={{ textDecoration: "none", color: "inherit" }}
          href="/about/management-team"
        >
          <div>Management Team</div>
        </Link>
      </div>

      <div className="hidden lg:block">
      <Popover
          placement="right"
          title=""
          content={messagesmenu}
          trigger={["hover"]}
        >
          <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary cursor-pointer">
            Messages from Team
          </div>
        </Popover>
      </div>

      <div className="lg:hidden">
        <Popover
          placement="bottom"
          title=""
          content={messagesmenu}
          trigger={["click"]}
        >
          <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary cursor-pointer">
            Messages from Team
          </div>
        </Popover>
      </div>
    </Menu>
  );

  return (
    <Dropdown placement="bottom" overlay={menu}>
      <div
        className="ant-dropdown-link text-primary text-base md:text-lg font-medium hover:text-primaryYellow cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        About us <CaretDownOutlined />
      </div>
    </Dropdown>
  );
};

export default AboutDropdown;