import styled from "styled-components";
import { SideNav, Nav, NavContext } from "react-sidenav";
import * as React from "react";
import { useState, useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { MdMenu,MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

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
const MyContext = React.createContext();
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button onClick={ctx.toggleMenu}>Toggle menu</button>
  )
}
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu
    customBurgerIcon={  <div><IconContext.Provider value={{ color: "#d0cccc", className: "logo",size: '1.8em' }}>
        <MdMenu/>
        </IconContext.Provider>
        </div> }
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
    <SideNav  defaultSelectedPath="1" childrenToggleMode='click'>
      <Nav id="1">
      <Link to ="/" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >    <NavItem  title={"DashBoard"} /></Link>
      </Nav>
      <Nav id="2">
        <NavItem title={"Outbound"} />
        <Nav id="2.1">
        <Link to ="/Replenishment" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
          <SubNavItem>Replenishment</SubNavItem>
          </Link>
        </Nav>
        <Nav id="2.2">
        <Link to ="/Pick" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
          <SubNavItem>Pick</SubNavItem>
          </Link>
        </Nav>
        <Nav id="2.3">
          <Link to ="/Multi_Order_Pick" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
          <SubNavItem>Multi-Order Pick</SubNavItem>
          </Link>
        </Nav>
        <Nav id="2.4">
          <Link to ="/User_Defined_Task" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
          <SubNavItem>User Defined Task</SubNavItem>
          </Link>
        </Nav>
        <Nav id="2.5">
        <Link to ="/Pack" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
          <SubNavItem>Pack</SubNavItem>
          </Link>
        </Nav>
        <Nav id="2.6">
        <Link to ="/Ship" style={{ textDecoration: 'none' ,color: '#eaeaea' }} onClick={ctx.toggleMenu} >
          <SubNavItem>Ship</SubNavItem>
          </Link>
        </Nav>
      </Nav>
      <Nav id="3">
        <NavItem  title={"Inbound"} />
        <Nav id="3.1">
        <Link to ='/receiving' style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu}>  <SubNavItem>Receiving</SubNavItem></Link>
        </Nav>
        <Nav id="3.2">
        <Link to ="/Putaway" style={{ textDecoration: 'none' ,color: '#eaeaea' }} onClick={ctx.toggleMenu} >
          <SubNavItem>Putaway</SubNavItem>
          </Link>
        </Nav>
      </Nav>
      <Nav id="4">
      <Link to ="/stuff" style={{ textDecoration: 'none' ,color: '#eaeaea'}} onClick={ctx.toggleMenu} >
        <NavItem  title={"ListPage"} />
        </Link>
        </Nav>
    </SideNav>
    </Menu>
  )
}

 export const WithIcons = () => {

   const [menuOpenState, setMenuOpenState] = useState(false)
  return (
    <MyProvider>
    <Navigation/ >


    </MyProvider>


  );
};
