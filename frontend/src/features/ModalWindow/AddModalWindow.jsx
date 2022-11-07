import { Modal } from 'antd';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createTask, createText } from '../Tasks/tasksSlice';
import { closeAddModal } from './modalSlice';

const AddModalWindow = () => {
  //useState не используется. Связан с antDesign. Без него падает приложение
  const [isModalOpen, setIsModalOpen] = useState(true);
  const taskTarget = useRef()
  const descriptionTarget = useRef()
  const dispatch = useDispatch()
  const { tasks } = useSelector(state => state.tasks)

  const handleOk = () => {
    dispatch(createTask({label: taskTarget.current.value, check: descriptionTarget.current.value}))
    dispatch(createText({text: descriptionTarget.current.value, check: taskTarget.current.value}))
    dispatch(closeAddModal())
  };
  const handleCancel = () => {
    dispatch(closeAddModal())
  };
  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form type='submit'>
<input type="text" ref={taskTarget} placeholder="Enter subject" style={{width: '400px'}}/> 
<br/>
<br/>
<input type="text" ref={descriptionTarget} placeholder="Enter text" style={{height: '200px', width:'400px'}}/>
      </form>
      </Modal>
    </>
  );
};
export default AddModalWindow;