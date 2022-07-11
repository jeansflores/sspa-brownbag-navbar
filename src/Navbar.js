import React from "react";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as S from "./Navbar.styles";

const items = [
  {
    key: 1,
    label: <Link to="/">Gallery</Link>,
  },
  {
    key: 2,
    label: <Link to="/about">About</Link>,
  },
];

const Navbar = () => {
  return (
    <Router>
      <S.CustomHeader>
        <S.Brand>
          <Link to="/">SSPA Brownbag</Link>
        </S.Brand>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </S.CustomHeader>
    </Router>
  );
};

export default Navbar;
