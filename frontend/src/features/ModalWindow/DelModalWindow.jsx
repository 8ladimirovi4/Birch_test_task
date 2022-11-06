import { Modal } from 'antd';
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTask, removeTask } from '../Tasks/tasksSlice';
import { closeDelModal } from './modalSlice';



function DelModalWindow() {
    //useState не используется. Из antDesign 
    const [isModalOpen, setIsModalOpen] = useState(true);
    const dispatch = useDispatch()
    const { taskid } = useSelector(state => state.modal)

    const handleOk = () => {
      dispatch(delTask(taskid))
      dispatch(closeDelModal())
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
