import React from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import SideBar from '../SideBar/SideBar';
import {useSelector, useDispatch} from 'react-redux'
import { openAddModal } from '../ModalWindow/modalSlice';

function Tasks() {
  const { isOpen } = useSelector((state) => state.modal)
  return (
    <div>
 <SideBar/>
{isOpen ? <ModalWindow/> : null}
    </div>
  );
}

export default Tasks;
