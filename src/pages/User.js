import React, { useState } from "react";
import { Row, Col, Card, Table, Avatar, Typography, Button } from "antd";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const { Title } = Typography;

function Activities() {
  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
    },
    {
      title: "NUMBER",
      dataIndex: "number",
    },
    {
      title: "AGE",
      dataIndex: "age",
    },
    {
      title: "GENDER",
      dataIndex: "gender",
    },
    {
      title: "LOCATION",
      dataIndex: "location",
    },
    {
      title: "ACTIONS",
      key: "actions",
      dataIndex: "actions",
      render: () => <Button onClick={viewUser}>View</Button>,
    },
  ];
  const data = [
    {
      key: "1",
      avatar: <Avatar shape="square" size={40} src={face2} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face2}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>Michael John</Title>
        </div>
      ),
      email: <p>michael@mail.com</p>,
      number: <p>123-456-7890</p>,
      age: <p>30</p>,
      gender: <p>Male</p>,
      location: <p>New York, USA</p>,
    },
    {
      key: "2",
      avatar: <Avatar shape="square" size={40} src={face3} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face3}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>Alexa Liras</Title>
        </div>
      ),
      email: <p>alexa@mail.com</p>,
      number: <p>123-456-7891</p>,
      age: <p>28</p>,
      gender: <p>Female</p>,
      location: <p>Los Angeles, USA</p>,
    },
    {
      key: "3",
      avatar: <Avatar shape="square" size={40} src={face} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>Laure Perrier</Title>
        </div>
      ),
      email: <p>laure@mail.com</p>,
      number: <p>123-456-7892</p>,
      age: <p>35</p>,
      gender: <p>Female</p>,
      location: <p>Chicago, USA</p>,
    },
    {
      key: "4",
      avatar: <Avatar shape="square" size={40} src={face4} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face4}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>Miriam Eric</Title>
        </div>
      ),
      email: <p>miriam@mail.com</p>,
      number: <p>123-456-7893</p>,
      age: <p>40</p>,
      gender: <p>Female</p>,
      location: <p>Houston, USA</p>,
    },
    {
      key: "5",
      avatar: <Avatar shape="square" size={40} src={face5} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face5}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>Richard Gran</Title>
        </div>
      ),
      email: <p>richard@mail.com</p>,
      number: <p>123-456-7894</p>,
      age: <p>50</p>,
      gender: <p>Male</p>,
      location: <p>Philadelphia, USA</p>,
    },
    {
      key: "6",
      avatar: <Avatar shape="square" size={40} src={face6} />,
      name: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            shape="square"
            size={40}
            src={face6}
            style={{ marginRight: 10 }}
          />
          <Title level={5}>John Levi</Title>
        </div>
      ),
      email: <p>john@mail.com</p>,
      number: <p>123-456-7895</p>,
      age: <p>45</p>,
      gender: <p>Male</p>,
      location: <p>Phoenix, USA</p>,
    },
  ];

  const history = useHistory();
  const viewUser = () => {
    history.push("/viewUser");
  };
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
      total: data.length,
    },
    filters: {},
    sortField: null,
    sortOrder: null,
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });
  };

  // Function to apply filters
  const applyFilters = (data, filters) => {
    let filteredData = data;
    if (filters.name) {
      filteredData = filteredData.filter((item) =>
        item.name.props.children[1].props.children[0].props.children
          .toLowerCase()
          .includes(filters.name[0].toLowerCase())
      );
    }
    if (filters.category) {
      filteredData = filteredData.filter((item) =>
        item.category.props.children[0].props.children
          .toLowerCase()
          .includes(filters.category[0].toLowerCase())
      );
    }
    // Add more filters as needed
    return filteredData;
  };

  // Apply filters to the data
  const filteredData = applyFilters(data, tableParams.filters);

  // Pagination with filtered data
  const paginatedData = filteredData.slice(
    (tableParams.pagination.current - 1) * tableParams.pagination.pageSize,
    tableParams.pagination.current * tableParams.pagination.pageSize
  );

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            style={{ padding: 20 }}
          >
            <div
              className="add-category"
              style={{
                display: "flex",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <h2>Users</h2>
            </div>
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={tableParams.pagination}
                onChange={handleTableChange}
                rowKey="key"
                className="ant-border-space"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Activities;
