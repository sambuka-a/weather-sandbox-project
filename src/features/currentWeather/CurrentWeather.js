import { Card, Col, Row } from 'antd';
import React from 'react';

import AirQuality from './chunks/AirQuality';

export const CurrentWeather = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Air Quality" bordered={false}>
          <AirQuality/>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);