import React from "react";
import { Button, Card, Col, Form, Row } from "antd";
import { Input } from "antd";
const { TextArea } = Input;

const Announcements = () => {
  return (
    <div className="announcement">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            style={{ height: "85vh" }}
          >
            <div
              className="title"
              style={{
                display: "flex",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <h2>Add Announcements</h2>
            </div>
            <div className="form-responsive" style={{ marginInlineStart: 30 }}>
              {" "}
              <Form>
                <Form.Item>
                  <TextArea
                    rows={8}
                    placeholder="Announcement..."
                    maxLength={4}
                    style={{
                      width: "50%",
                      marginTop: 50,
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Announcements;
