import React from 'react'
import { Table, Tag } from 'antd'
import useFetch from 'hooks/useFetch'
import config from 'config'

const Orders = ({ newOrderId }) => {
  const { response : orders, loading, error } = useFetch('/api/admin/orders', newOrderId)
  console.log('orders', orders)
  const expandablaRows = rowParent => {
    console.log('e', rowParent)
    console.log('order', orders.products)
    return <Table columns={columnsExpandable} dataSource={rowParent.products} pagination={false} />
  }
  return (
    <Table
      scroll={{ x: 720 }}
      loading={loading}
      columns={columns}
      dataSource={orders ?? []}
      rowKey={(record) => record.id}
      expandedRowRender={orders && expandablaRows || []}
    />
  )
}

const columnsExpandable = [
  {
    title: 'Imagen',
    dataIndex: 'icon_image',
    key: 'icon_image',
    render: (icon_image) => (<img width="80" src={`${config.imagesUrl}${icon_image}`} />)
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code'
  },
  {
   title: 'Quantity',
   dataIndex: 'pivot',
   key: 'pivot',
   render: (pivot) => <>{pivot.quantity}</>
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (is_active) => <Tag color={`${is_active ? 'green' : 'red'}`}>{is_active ? 'Activo' : 'Inactivo'}</Tag>,
  },

]

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'client_name',
    key: 'client_name',
  },
  {
    title: 'Código',
    dataIndex: 'order_code',
    key: 'order_code'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Status',
    dataIndex: 'order_status',
    key: 'order_status',
    render: (order_status) => <Tag color={`${order_status ? 'green' : 'red'}`}>{order_status ? 'Abierto' : 'Cerrado'}</Tag>,
  },
  // TODO: Add alt action buttons
]


export default Orders



// function NestedTable() {
//   const expandedRowRender = () => {
//     const columns = [
//       { title: 'Date', dataIndex: 'date', key: 'date' },
//       { title: 'Name', dataIndex: 'name', key: 'name' },
//       {
//         title: 'Status',
//         key: 'state',
//         render: () => (
//           <span>
//             <Badge status="success" />
//             Finished
//           </span>
//         ),
//       },
//       { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//       {
//         title: 'Action',
//         dataIndex: 'operation',
//         key: 'operation',
//         render: () => (
//           <Space size="middle">
//             <a>Pause</a>
//             <a>Stop</a>
//             <Dropdown overlay={menu}>
//               <a>
//                 More <DownOutlined />
//               </a>
//             </Dropdown>
//           </Space>
//         ),
//       },
//     ];

//     const data = [];
//     for (let i = 0; i < 3; ++i) {
//       data.push({
//         key: i,
//         date: '2014-12-24 23:12:00',
//         name: 'This is production name',
//         upgradeNum: 'Upgraded: 56',
//       });
//     }
//     return <Table columns={columns} dataSource={data} pagination={false} />;
//   };

//   const columns = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'Platform', dataIndex: 'platform', key: 'platform' },
//     { title: 'Version', dataIndex: 'version', key: 'version' },
//     { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
//     { title: 'Creator', dataIndex: 'creator', key: 'creator' },
//     { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
//     { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
//   ];

//   const data = [];
//   for (let i = 0; i < 3; ++i) {
//     data.push({
//       key: i,
//       name: 'Screem',
//       platform: 'iOS',
//       version: '10.3.4.5654',
//       upgradeNum: 500,
//       creator: 'Jack',
//       createdAt: '2014-12-24 23:12:00',
//     });
//   }

//   return (
//     <Table
//       className="components-table-demo-nested"
//       columns={columns}
//       expandable={{ expandedRowRender }}
//       dataSource={data}
//     />
//   );
// }
