import { Modal } from 'antd';
import { React, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../Tasks/tasksSlice';
import { closeEditModal } from './modalSlice';

function EditModalWindow() {
    //useState не используется. Связан с antDesign. Без него падает приложение
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch()
  const { taskid } = useSelector(state => state.modal)
  const taskTarget = useRef()

  const handleOk = () => {
  dispatch(closeEditModal())
  dispatch(editTask({ value: taskTarget.current.value , id: taskid }))

  };
  const handleCancel = () => {
    dispatch(closeEditModal())
  };

  return (
    <div>
       <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <form type='submit'>
<input type="text" placeholder='edit task'ref={taskTarget}/>
      </form>
      </Modal>
    </div>
  )
}

export default EditModalWindow
