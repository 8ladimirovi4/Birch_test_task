import 'antd/dist/antd.css'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { React, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTaskId, getTextId, openAddModal, openDelModal, openEditModal } from '../ModalWindow/modalSlice';
import { loadTasks, delTask, removeTask, loadText, addTask, editText, filterTasks, addText } from '../Tasks/tasksSlice';
import DelModalWindow from '../ModalWindow/DelModalWindow';
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.tasks)
    const { text } = useSelector (state => state.tasks)
    const { textid } = useSelector(state => state.modal)
    const [del, setDel] = useState(false)
    const [edit, setEdit] = useState(false)
    const [filter, setFilter] = useState(false)
    const [editTextToggle, setEditTextToggle ] = useState(true)
    const textValue = useRef()
    const filterValue = useRef()

    let items1
    items1 = [
      {
          key: 0,
          label: 'Add Task',
          onClick: function () {
              dispatch(openAddModal())
              setEdit(false)
              setDel(false)
          }
        },
        {
          key: 1,
          label: 'Edit Task',
          onClick: function () {
            setEdit(prev => ! prev)
            setDel(false)
          }
        },
      {
    key: 2,
    label: 'Delete Task',
    onClick: function () {
      setDel(prev => !prev)
      setEdit(false)
      
    }
  },
  {
    key: 3,
    label: <input placeholder='tasks filter' style={{color:"black", height: "30px", width:'300px' }} ref={filterValue} onChange={filterTasksFunc}/>,
    onClick: function () {      
    } 
  }
  ];

 

  if(del){
  items1 = [
      {
        key: 1,
        label: 'press "Done" to finish operatioin',
      },
      {
        key: 2,
        label: 'Done',
        onClick: function () {
          setDel(prev => !prev)
        }
      },
    ]
}

if(edit){
  items1 = [
    {
      key: 1,
      label: 'press "Done" to finish operatioin',
    },
    {
      key: 2,
      label: 'Done',
      onClick: function () {
        setEdit(prev => !prev)
      }
    },
  ]
}

useEffect(() => {
dispatch(loadTasks())
},[dispatch, filter])

useEffect(() => {
  dispatch(loadText())
  },[dispatch,editTextToggle])

function editTextArea () {
dispatch(editText({value: textValue.current.value, id: text.id}))
}

function filterTasksFunc () {
  if(!filterValue.current.value){
    setFilter(prev => !prev)
  }
  dispatch(filterTasks(filterValue.current.value))
}

function editTextFunc () {
  setEditTextToggle(prev => !prev)
}
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
                  }else if(edit) {
                    dispatch(openEditModal())
                    dispatch(getTaskId(el.id))
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
          }}>
            {editTextToggle 
            ?
            <p onClick={()=> {editTextFunc(); dispatch(getTextId(text.id))}}>{text.text}</p>
            :
            <>
          <textarea 
          defaultValue={text.text} 
          onChange={editTextArea} 
          ref={textValue}
          style={{width: '500px', height: '300px'}}
          >
          </textarea> <br/>
          <button onClick={() => {editTextFunc(); dispatch(loadText(textid))}}>done</button>
          </>
         
}

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