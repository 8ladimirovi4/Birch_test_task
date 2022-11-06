import { Modal } from 'antd';
import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeEditModal } from './modalSlice';

function EditModalWindow() {
    //useState не используется. Связан с antDesign. Без него падает приложение
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch()
  
  const handleOk = () => {
  dispatch(closeEditModal())
  };
  const handleCancel = () => {
    dispatch(closeEditModal())
  };

  return (
    <div>
       <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <form type='submit'>
<input type="text" placeholder='edit task'/>
      </form>
      </Modal>
    </div>
  )
}

export default EditModalWindow
