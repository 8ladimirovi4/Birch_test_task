import { Modal } from 'antd';
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeDelModal } from './modalSlice';


function DelModalWindow() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const dispatch = useDispatch()
    
    const handleOk = () => {
        
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
