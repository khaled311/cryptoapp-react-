import React from 'react'
import { Menu, Typography, Avatar } from "antd"
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from "../../images/cryptocurrency.png"

const menuItems = [
  {
    label: (
      <Link to="/">
        Home
      </Link>
    ),
    key: 'Home',
    icon: <HomeOutlined/>
  },
  {
    label: (
      <Link to="/cryptoCurrencies">
        CryptoCurrencies
      </Link>
    ),
    key: 'CryptoCurrencies',
    icon: <FundOutlined/>
  },
  {
    label: (
      <Link to="/exchanges">
        Exchanges
      </Link>
    ),
    key: 'Exchanges',
    icon: <MoneyCollectOutlined/>
  },
  {
    label: (
      <Link to="/news">
        News
      </Link>
    ),
    key: 'News',
    icon: <BulbOutlined/>
  },
];

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="slogan">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        </div>
        <Menu theme='dark' items={menuItems} />
      </div>
    </div>
  )
}

export default Navbar