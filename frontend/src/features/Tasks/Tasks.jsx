import React from 'react';

import SideBar from '../SideBar/SideBar';
import {useSelector } from 'react-redux'
import AddModalWindow  from '../ModalWindow/AddModalWindow';
import DelModalWindow from '../ModalWindow/DelModalWindow';


function Tasks() {
  const { addModalIsOpen } = useSelector(state => state.modal)
  const { delModalIsOpen } = useSelector(state => state.modal)
  return (
    <div>
 <SideBar/>
{ addModalIsOpen ? <AddModalWindow/> : null}
{ delModalIsOpen ? <DelModalWindow/> : null }
    </div>
  );
}

export default Tasks;
