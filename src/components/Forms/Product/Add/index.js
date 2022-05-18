import React, { useState } from 'react'
import { Form, Input, Button, Upload, message, InputNumber, Checkbox, Row, Col } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import apiClient from 'services/axios'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const AddUser = ({ onFinish = ()=>{} }) => {
  const [isLoadingNewProduct, setProductStatus] = useState(false)
  const [isLoadingImage, setIsLoadingImage] = useState(false)
  const [thumbnail, setThumbnail] = useState(null)
  const [form] = Form.useForm()

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    getBase64(file, (imageUrl) => {
      setIsLoadingImage(false)
      form.setFieldsValue({ icon_image: imageUrl })
      setThumbnail(imageUrl)
    })

    return isJpgOrPng && isLt2M
  }
  const uploadButton = (
    <div>
      {isLoadingImage ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setIsLoadingImage(true)
      return
    }
    if (info.file.status === 'done') {
      // FROM REAL WORLD
    }
  }

  const onFormFinish = (values) => {
    console.log('values', values)
    const sanitizedData = {
      ...values,
      price: parseFloat(values.price),
      is_active: values.is_active ? 1 : 0,
    }
    setProductStatus(true)
    setTimeout(() => {
      apiClient
        .post('/api/admin/products', sanitizedData)
        .then((res) => {
          if (res.data) {
            message.success('New product saved')
            setProductStatus(false)
            onFinish && onFinish(res.data)
          }
        })
        .catch((err) => {
          message.error('Error guardando nuevo producto')
          setProductStatus(false)
        })
    }, 1)
  }

  const onFinishFailed = (errorInfo) => {
    message.error('Llena todos los campos')
  }
  console.log('form', form.getFieldsValue())
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFormFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
      layout="horizontal"
    >
      <Row>
        <Col span={8}>
          <Form.Item name="icon_image">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {thumbnail ? (
                <img src={thumbnail} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Porfavor llena este campo!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Code" name="code">
            <Input />
          </Form.Item>
          <Form.Item label="Precio" name="price">
            <InputNumber addonAfter="$" defaultValue={100} />
          </Form.Item>
          <Form.Item label="Status"  valuePropName="checked"  name="is_active" defaultValue="1">
            <Checkbox value="1" active>Activo</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoadingNewProduct}>
          Crear producto
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUser
