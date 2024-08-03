import React, { useState } from "react";
import { Row, Col, Card, Table, Typography, Button } from "antd";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const { Title } = Typography;

function Category() {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",

      width: "20%",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
    },
  ];

  const data = [
    {
      key: "1",
      title: (
        <div>
          <Title level={5}>Hiking</Title>
        </div>
      ),
      createdAt: <p>2023-01-15</p>,
    },
    {
      key: "2",
      title: (
        <div>
          <Title level={5}>Swimming</Title>
        </div>
      ),
      createdAt: <p>2023-02-20</p>,
    },
    {
      key: "3",
      title: (
        <div>
          <Title level={5}>Cycling</Title>
        </div>
      ),
      createdAt: <p>2023-03-10</p>,
    },
    {
      key: "4",
      title: (
        <div>
          <Title level={5}>Running</Title>
        </div>
      ),
      createdAt: <p>2023-04-05</p>,
    },
    {
      key: "5",
      title: (
        <div>
          <Title level={5}>Yoga</Title>
        </div>
      ),
      createdAt: <p>2023-05-12</p>,
    },
    {
      key: "6",
      title: (
        <div>
          <Title level={5}>Weightlifting</Title>
        </div>
      ),
      createdAt: <p>2023-06-25</p>,
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

  const history = useHistory();
  const addCategory = () => {
    history.push("/addCategory");
  };

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
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <h2>Category</h2>

              <Button type="primary" htmlType="submit" onClick={addCategory}>
                Add Category
              </Button>
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

export default Category;
