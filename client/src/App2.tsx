import * as React from "react";

import { Col, Row, Input, Select, InputNumber } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TableComponent from "./components/table/Tables";
import TagSelect from "./components/select/TagsSelect";
import { useQuery,  gql } from "@apollo/client";

const { Option } = Select;

function App() {
  return (
    <>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <TagSelect />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Input.Group
            compact
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <Input
              style={{ width: "100%" }}
              placeholder="search"
              prefix={<SearchOutlined />}
            />
            <Select defaultValue="All">
              <Option value="firstName">firstName</Option>
              <Option value="lastName">lastName</Option>
            </Select>
          </Input.Group>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <TableComponent />
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
}

export default App;
