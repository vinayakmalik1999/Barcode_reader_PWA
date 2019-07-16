import styled from "styled-components";
import { SideNav, Nav, NavContext } from "react-sidenav";
import * as React from "react";
import { Link } from 'react-router-dom'


const Container = styled.div`
  background: #2d353c;
  width: 200px;
  height: 420px;
  color: #a8acb1;
`;

const FlexCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  color: ${props => (props.selected ? "#FFF" : "inherit")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${props => (props.selected ? "#242a31" : "inherit")};
  &:hover {
    background: #242a31;
  }
`;
const IconCont = styled.div`
  color: ${props => (props.selected ? "#00acac" : "inherit")};
  line-height: 16px;
`;
const TextCont = styled.div`
  padding-left: 6px;
  line-height: 22px;
`;
interface INavItemProp {
  title: string;
}
const NavItem: React.FC<INavItemProp> = props => {
  const context = React.useContext(NavContext);

  return (
    <FlexCont selected={context.selected}>
      <TextCont>{props.title}</TextCont>
    </FlexCont>
  );
};

const NavTitle = styled.div`
  padding: 8px;
  font-size: 0.92em;
`;
const SubTitle = styled.div`
  display: flex;
  padding: 8px 22px;
  font-size: 0.88em;
  justify-content: flex-start;
  align-items: center;
  color: ${props => (props.selected ? "#FFF" : "inherit")} !important;
`;
const SubTitleIndicator = styled.div`
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background: ${props => (props.selected ? "#00acac" : "inherit")} !important;
`;

const SubNavItem: React.FC = props => {
  const context = React.useContext(NavContext);
  return (
    <SubTitle selected={context.selected}>
      <SubTitleIndicator selected={context.selected} />
      <div style={{ padding: 4 }}>{props.children}</div>
    </SubTitle>
  );
};
 export const WithIcons = () => {
  return (


      <SideNav  defaultSelectedPath="1" childrenToggleMode='click'>
        <Nav id="1">
        <Link to ="/" style={{ textDecoration: 'none' }}>    <NavItem  title={"DashBoard"} /></Link>
        </Nav>
        <Nav id="2">
          <NavItem title={"Outbound"} />
          <Nav id="2.1">
            <SubNavItem>Replenishment</SubNavItem>
          </Nav>
          <Nav id="2.2">
            <SubNavItem>Pick</SubNavItem>
          </Nav>
          <Nav id="2.3">
            <SubNavItem>Multi-Order Pick</SubNavItem>
          </Nav>
          <Nav id="2.4">
            <SubNavItem>User Defined Task</SubNavItem>
          </Nav>
          <Nav id="2.5">
            <SubNavItem>Pack</SubNavItem>
          </Nav>
          <Nav id="2.6">
            <SubNavItem>Ship</SubNavItem>
          </Nav>
        </Nav>
        <Nav id="3">
          <NavItem  title={"Inbound"} />
          <Nav id="3.1">
            <SubNavItem>Receiving</SubNavItem>
          </Nav>
          <Nav id="3.2">
            <SubNavItem>Putaway</SubNavItem>
          </Nav>
        </Nav>
      </SideNav>

  );
};
