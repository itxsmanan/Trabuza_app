import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";

const AddCategory = () => (
  <div className="addCategory">
    <Row gutter={[24, 0]} style={{ height: "80vh" }}>
      <Col xs="24" xl={24}>
        <Card
          bordered={false}
          className="criclebox tablespace mb-24"
          style={{ height: "80vh" }}
        >
          <div
            className="title"
            style={{
              display: "flex",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <h2>Add Category</h2>
          </div>
          <div className="form-responsive" style={{ marginInlineStart: 30 }}>
            <Form
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Category Title"
                name="categoryTitle"
                rules={[
                  {
                    required: true,
                    message: "Please input category!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 4,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                  }}
                >
                  Add
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);
export default AddCategory;
