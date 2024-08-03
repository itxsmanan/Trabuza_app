import React, { useState } from "react";
import { Row, Col, Card, Table, Avatar, Typography } from "antd";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";

const { Title } = Typography;

function Activities() {
  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "DATE",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "TIME",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "DURATION",
      key: "duration",
      dataIndex: "duration",
    },
    {
      title: "DESCRIPTION",
      key: "description",
      dataIndex: "description",
    },
  ];

  const data = [
    {
      key: "1",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face2} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>Michael John</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Manager</Title>,
      category: (
        <div>
          {" "}
          <p>Organization</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>23/03/20</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
    {
      key: "2",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face3} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>Alexa Liras</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Programmer</Title>,
      category: (
        <div>
          <p>Developer</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>23/03/20</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
    {
      key: "3",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>Laure Perrier</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Executive</Title>,
      category: (
        <div>
          <p>Projects</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>23/03/20</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
    {
      key: "4",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face4} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>Miriam Eric</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Marketing</Title>,
      category: (
        <div>
          <p>Organization</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>23/03/20</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
    {
      key: "5",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face5} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>Richard Gran</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Manager</Title>,
      category: (
        <div>
          <p>Organization</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>23/03/20</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
    {
      key: "6",
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={face6} />
          <div style={{ paddingLeft: 10 }}>
            <Title level={5}>John Levi</Title>
          </div>
        </Avatar.Group>
      ),
      title: <Title level={5}>Tester</Title>,
      category: (
        <div>
          <p>Developer</p>
        </div>
      ),
      time: <p>10:20 PM</p>,
      date: (
        <div>
          <span>14/04/17</span>
        </div>
      ),
      duration: (
        <div>
          <span>6 Months</span>
        </div>
      ),
      description: (
        <div>
          <span style={{ textWrap: "wrap" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      ),
    },
  ];

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
    <div classtitle="tabled">
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <Card
            bordered={false}
            classtitle="criclebox tablespace mb-24"
            style={{ padding: 15 }}
          >
            <div
              className="add-category"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2>Activities</h2>
            </div>

            <div classtitle="table-responsive">
              <Table
                columns={columns}
                dataSource={paginatedData}
                pagination={tableParams.pagination}
                onChange={handleTableChange}
                rowKey="key"
                classtitle="ant-border-space"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Activities;
