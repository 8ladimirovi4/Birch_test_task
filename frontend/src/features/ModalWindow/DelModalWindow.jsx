import { Modal } from 'antd';
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask } from '../Tasks/tasksSlice';
import { closeDelModal } from './modalSlice';



function DelModalWindow() {
    //useState не используется. Из antDesign 
    const [isModalOpen, setIsModalOpen] = useState(true);
    const dispatch = useDispatch()
    
    const handleOk = (e) => {
      const { id } = e.target
        dispatch(removeTask(id))
         };
    const handleCancel = () => {
          dispatch(closeDelModal())
         };

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form type='submit'>
<p>Are you sure you want to delete the task?</p>
      </form>
      </Modal>
    </div>
  )
}

export default DelModalWindow
