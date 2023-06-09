import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    label: (
      <Link to={"/"} rel="noopener noreferrer">
        მთავარი გვერდი
      </Link>
    ),
    key: "Users",
    icon: <UserOutlined />,
  },
];

const UsersHeader: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Layout></Layout>
    </Layout>
  );
};

export default UsersHeader;
