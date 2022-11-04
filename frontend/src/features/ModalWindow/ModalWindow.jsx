import { Modal } from 'antd';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { closeAddModal } from './modalSlice';

const ModalWindow = () => {
  //useState не используется. Связан с antDesign. Без него падает приложение
  const [isModalOpen, setIsModalOpen] = useState(true);
  const taskTarget = useRef()
  const descriptionTarget = useRef()

const dispatch = useDispatch()
  const handleOk = () => {
 console.log(taskTarget.current.value)
 console.log(descriptionTarget.current.value)
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
export default ModalWindow;