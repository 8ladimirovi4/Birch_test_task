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
  console.log(tasks[tasks.length - 1].id);

  const handleOk = () => {
    dispatch(createTask(taskTarget.current.value))
    dispatch(createText(descriptionTarget.current.value))
    dispatch(closeAddModal())
  };
  const handleCancel = () => {
    dispatch(closeAddModal())
  };
  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form type='submit'>
<input type="text" ref={taskTarget}/>
<input type="text" ref={descriptionTarget}/>
      </form>
      </Modal>
    </>
  );
};
export default AddModalWindow;