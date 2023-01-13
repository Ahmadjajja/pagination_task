import * as React from "react";

import { Col, Row, Input, Select, InputNumber } from "antd";
import  { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;

function App() {
  return (
    <>
      <Row gutter={[16, 24]}>
        <Col span={6} >
          {/* col-6 */}
        </Col>
        <Col span={12} >
          <Input.Group compact>
            <Input style={{ width: "50%" }} placeholder="search" prefix={<SearchOutlined />} />
            <Select defaultValue="All">
              <Option value="firstName">firstName</Option>
              <Option value="lastName">lastName</Option>
            </Select>
          </Input.Group>
        </Col>
        <Col span={6} >
          {/* col-6 */}
        </Col>
      </Row>
    </>
  );
}

export default App;
