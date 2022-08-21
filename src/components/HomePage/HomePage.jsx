import React from 'react'
import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom'
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'
import News from '../News/News'

const HomePage = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return "Loading...";

  return (
    <>
      <Typography.Title level={2} className="heading">Global Crypto Statistics</Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Cryptocurrencies" value={millify(globalStats?.total)}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Exchanges" value={millify(globalStats?.totalExchanges)}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Market Cap" value={millify(globalStats?.totalMarketCap)}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="24h Volume" value={millify(globalStats?.total24hVolume)}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Markets" value={millify(globalStats?.totalMarkets)}></Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
      </div>
      <News simplified/>
    </>
  )
}

export default HomePage