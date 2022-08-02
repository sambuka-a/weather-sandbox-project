import { Card, Col, Row } from 'antd';
import React from 'react';

import AirQuality from './chunks/AirQuality';
import CurrentWeather from './chunks/CurrentWeather';
import CurrentLocation from './chunks/LocationInfo';

export const CurrentWeatherCard = () => (
  <div className='wrapper'>
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Location" bordered={false}>
            <CurrentLocation/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Current Weather" bordered={false}>
            <CurrentWeather/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Air Quality" bordered={false}>
            <AirQuality/>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);