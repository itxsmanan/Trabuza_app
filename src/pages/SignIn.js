import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Layout,
  // Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  // Switch,
} from "antd";
import signinbg from "../assets/images/logo2.png";

const { Title } = Typography;
const { Content } = Layout;

function SignIn() {
  const history = useHistory();

  const email = useRef();
  const password = useRef();
  const [error, setError] = useState({ email: "", password: "" });

  const handleClick = () => {
    const emailValue = email.current.input.value; // Access input value
    const passwordValue = password.current.input.value; // Access input value

    // Reset error messages
    setError({ email: "", password: "" });

    if (emailValue === "admin@admin.com" && passwordValue === "admin") {
      localStorage.setItem("emailData", emailValue);
      localStorage.setItem("passwordData", passwordValue);
      console.log("Data stored in localStorage");
      history.push("/dashboard"); // Use navigate for redirection
    } else {
      // Set error messages
      setError({
        email: emailValue !== "admin@admin.com" ? "Invalid email" : "",
        password: passwordValue !== "admin" ? "Invalid password" : "", // Adjusted value
      });
    }
  };
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin">
          <Row
            gutter={[0, 28]}
            justify="space-around"
            style={{ height: "93vh" }}
            align="middle"
          >
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 9 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }} md={{ span: 12 }}>
              <Title
                className="mb-15"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(133,47,119,1) 0%, rgba(76,76,172,1) 33%, rgba(108,60,140,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                }}
              >
                Sign In
              </Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your email and password to sign in
              </Title>
              <Form>
                <Form.Item
                  validateStatus={error.email ? "error" : ""}
                  help={error.email}
                >
                  <Input ref={email} placeholder="Email" />
                </Form.Item>

                <Form.Item
                  validateStatus={error.password ? "error" : ""}
                  help={error.password}
                >
                  <Input
                    ref={password}
                    placeholder="Password"
                    type="password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    onClick={handleClick}
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(90deg, rgba(133,47,119,1) 0%, rgba(76,76,172,1) 33%, rgba(108,60,140,1) 100%)",
                      border: "none",
                    }}
                  >
                    SIGN IN
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default SignIn;
