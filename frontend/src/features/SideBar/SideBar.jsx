import 'antd/dist/antd.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTaskId, openAddModal, openDelModal } from '../ModalWindow/modalSlice';
import { loadTasks, delTask, removeTask, loadText, addTask } from '../Tasks/tasksSlice';
import DelModalWindow from '../ModalWindow/DelModalWindow';
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.tasks)
    const { text } = useSelector (state => state.tasks)
    const [del, setDel] = useState(false)
    const [edit, setEdit] = useState(false)

    const items1 = [
      {
          key: 0,
          label: 'add',
          onClick: function () {
              dispatch(openAddModal())
              setEdit(false)
              setDel(false)
          }
        },
        {
          key: 1,
          label: 'edit',
          onClick: function () {
            setEdit(prev => ! prev)
            setDel(false)
          }
        },
      {
    key: 2,
    label: 'delete',
    onClick: function () {
      setDel(prev => !prev)
      setEdit(false)
      
    }
  }
  ];

  if(del){
    items1.push(
      {
        key: 3,
        label: 'ok',
        onClick: function () {
          setDel(prev => !prev)
        }
      }
    )
}

if(edit){
  items1.push(
    {
      key: 4,
      label: 'ok',
      onClick: function () {
      setEdit(prev => !prev)
      }
    }
  )
}

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
              return  {
                id: el.id, 
                label: el.label,
                onClick: function () {
                  if(del){
                    dispatch(openDelModal())
                    dispatch(getTaskId(el.id))
                     // dispatch(delTask(el.id))
                  }else {
                   dispatch(loadText(el.id))
                  }
              }}
            }) 
            : 
            [{label: ""}]}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          <p>{text.text}</p>
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