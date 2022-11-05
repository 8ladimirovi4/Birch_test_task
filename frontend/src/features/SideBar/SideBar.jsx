import 'antd/dist/antd.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { openAddModal, openDelModal } from '../ModalWindow/modalSlice';
import { loadTasks, removeTask } from '../Tasks/tasksSlice';
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
    const dispatch = useDispatch()
    const { tasks } = useSelector((state) => state.tasks)
    const items1 = [
      {
          key: 0,
          label: 'add',
          onClick: function () {
              dispatch(openAddModal())
          }
        },
        {
          key: 1,
          label: 'edit',
          onClick: function () {
            console.log('2', )
          }
        },
      {
    key: 2,
    label: 'delete',
    onClick: function () {
      console.log('3')
    }
  }
  ];

useEffect(() => {
dispatch(loadTasks())
},[dispatch])

   return(
    <>
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={
              tasks.length 
              ? 
              tasks.map(el => {
              return  {id: el.id, label: el.label, onClick: function () {
                // dispatch(openDelModal())
                dispatch(removeTask({id: el.id}))
              }}
            }) 
            : 
            [{label: "loading tasks"}]}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    </Footer>
  </Layout>
  </>
   )
}
export default SideBar;