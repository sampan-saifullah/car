import { Col, Row, Input } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={6}>
      <Input placeholder="Basic usage" />;
      </Col>
      <Col span={6}>
      <Input placeholder="Basic usage 2" />;
      </Col>
      <Col span={6}>
      <Input.Password placeholder="input password" />
      </Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;