import React, { useState } from "react";
import Link from 'next/link'

import { Drawer, Button, Icon, Input , Menu, Dropdown } from "antd";
import  {IndexNavImg}  from '../libs/images'


function IndexNav() {
  const { Search } = Input;
  const [visible, setVisible] = useState(false);

  const storiesMenu = (
    <Menu>
      <Menu.Item>
        <Link href="/news"><a>Latest</a></Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about"><a>My Story</a></Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
    <header className="site-header">
      <div className="site-header__wrapper">
          <img src={IndexNavImg.hamburger} className="d-lg-none site-header__burger" onClick={()=> setVisible(true)} alt="menu"/>
        <Link href="/">
        <div className="site-header__logowrap">
          <img src={IndexNavImg.flixmatesLogo} style={{cursor:'pointer'}} width="35px" alt="flixmates-logo"/>
          <img src={IndexNavImg.flixmatesName} style={{cursor:'pointer'}} width="100px" alt="flixmates-name"/>
        </div>
        </Link>
        <nav className="d-none d-lg-block">
          <div className="site-header__menu">
            <Dropdown overlay={storiesMenu}>
              <a className="site-navigation__link"><span>Stories </span><Icon type="down" style={{ fontSize: '12px'}} /></a>
            </Dropdown>
              <a className="site-navigation__link"><span>Mood Board </span><Icon type="down" style={{ fontSize: '12px'}} /></a>
              <a className="site-navigation__link"><span>Jobs </span><Icon type="down" style={{ fontSize: '12px'}} /></a>
              <a className="site-navigation__link"><span>Auditions </span><Icon type="down" style={{ fontSize: '12px'}} /></a>
              <a className="site-navigation__link"><span>Events </span><Icon type="down" style={{ fontSize: '12px'}} /></a>
              <Search placeholder="search" onSearch={value => console.log(value)} style={{ width: 150 }}/>
              {/* <a className="site-navigation__link"><span>Hit or Miss </span><Icon type="down" style={{ fontSize: '12px'}} /></a> */}
          </div>
        </nav>
        <div className="site-header__signin">
          <Button className="mr-3">Log in</Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </header>
      <Drawer
        title={<><img src={IndexNavImg.flixmatesLogo} width="70" alt="flixmates-logo"/> FLIXMATES</>}
        placement="left"
        closable={false}
        className="d-lg-none"
        onClose={()=> setVisible(false)}
        visible={visible}
      >
        <div className="side-navigation">Stories </div>
        <div className="side-navigation">MOOD Board </div>
        <div className="side-navigation">Jobs & Auditions </div>
        <div className="side-navigation">Events </div>
        <div className="side-navigation">Hit or Miss </div>
        <div className="side-navigation__signin">
          <Button className="mr-3">Log in</Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </Drawer>
    </>
  );
}

export default IndexNav;
