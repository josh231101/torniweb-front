import { Button, Modal } from 'antd'
import AddUser from 'components/Forms/User/Add'
import Users from 'components/Users'
import React, { useState } from 'react'

const UsersPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newUserId, setNewUserId] = useState(null)
  const onFinish= (newUser) => {
    setIsModalVisible(false)
    setNewUserId(newUser.id)
  }
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="mb-1">
        <Button type="primary" onClick={() => setIsModalVisible(!isModalVisible)}>
          Agregar nuevo usuario
        </Button>
      </div>
      <Users newUserId={newUserId} />
      <Modal
        centered
        visible={isModalVisible}
        title="Agregar nuevo usuario"
        visible={isModalVisible}
        footer={null}
        onCancel={()=>setIsModalVisible(false)}
      >
        <AddUser onFinish={onFinish} />
      </Modal>
    </div>
  )
}

export default UsersPage
