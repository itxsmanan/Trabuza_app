import React, { useState } from "react";
import { Card, Col, Row, Table, Typography } from "antd";

const { Title } = Typography;
const columns = [
  {
    title: "NAME",
    dataIndex: "title",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
  },
  {
    title: "CREATED At",
    dataIndex: "createdAt",
  },
  {
    title: "MESSAGE",
    dataIndex: "message",
  },
];

const data = [
  {
    key: "1",
    title: (
      <div>
        <Title level={5}>John Doe</Title>
      </div>
    ),
    email: <p>john.doe@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>
        I am interested in learning more about your services and would like to
        schedule a call.
      </p>
    ),
  },
  {
    key: "2",
    title: (
      <div>
        <Title level={5}>Jane Smith</Title>
      </div>
    ),
    email: <p>jane.smith@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>Can you provide more information regarding your refund policy?</p>
    ),
  },
  {
    key: "3",
    title: (
      <div>
        <Title level={5}>Robert Johnson</Title>
      </div>
    ),
    email: <p>robert.johnson@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>
        I would like to set up a meeting to discuss potential collaborations.
      </p>
    ),
  },
  {
    key: "4",
    title: (
      <div>
        <Title level={5}>Emily Davis</Title>
      </div>
    ),
    email: <p>emily.davis@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>
        There was an issue with my recent order. Could someone assist me with
        this?
      </p>
    ),
  },
  {
    key: "5",
    title: (
      <div>
        <Title level={5}>Michael Brown</Title>
      </div>
    ),
    email: <p>michael.brown@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>I have some feedback on your website that I would like to share.</p>
    ),
  },
  {
    key: "6",
    title: (
      <div>
        <Title level={5}>Sarah Wilson</Title>
      </div>
    ),
    email: <p>sarah.wilson@example.com</p>,
    createdAt: <p>2024-08-01</p>,
    message: (
      <p>
        Thank you for your prompt service. I just wanted to express my
        appreciation.
      </p>
    ),
  },
];

const ContactUs = () => {
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
    if (filters.title) {
      filteredData = filteredData.filter((item) =>
        item.title.props.children[1].props.children[0].props.children
          .toLowerCase()
          .includes(filters.title[0].toLowerCase())
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
              <h2>Contact Us</h2>
            </div>
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={tableParams.pagination}
                // loading={loading}
                onChange={handleTableChange}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ContactUs;
