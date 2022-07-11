import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;

export const CustomHeader = styled(Header)`
  .ant-menu {
    justify-content: end;
  }
`;

export const Brand = styled.h1`
  float: left;
  margin-right: 50px;
  text-decoration: none;

  a {
    color: white;
  }
`;
