import React from 'react'
import { Table, Tag } from 'antd'
import useFetch from 'hooks/useFetch'
import config from 'config'

const Products = ({ newProductId}) => {
  const { response : products, loading, error } = useFetch('/api/admin/products', newProductId)
  console.log('products', products)
  return (
    <Table
      scroll={{ x: 720 }}
      loading={loading}
      columns={columns}
      dataSource={products ?? []}
      rowKey={(record) => record.id}
    />
  )
}

const columns = [
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
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (is_active) => <Tag color={`${is_active ? 'green' : 'red'}`}>{is_active ? 'Activo' : 'Inactivo'}</Tag>,
  },
  // TODO: Add alt action buttons
]


export default Products
