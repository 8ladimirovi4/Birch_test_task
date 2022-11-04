import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPets, getPetList, getPetError  } from './petsSlice';

function PetList() {
  const dispatch = useDispatch();
  const pets = useSelector(getPetList);
  const error = useSelector(getPetError);

  useEffect(() => {
      dispatch(loadPets());
  },[dispatch]);

  if(error){
    return (
      <h2>Что то пошло не так</h2>
    )
  }
  
  return (
    <div>
      <h1>PetList</h1>
      {pets.length ? 
      <ul>
        {pets.map((pet) => <li key={pet.id}>{pet.name}</li>
        )}
        </ul>
: <span>loading.....</span>}
    </div>
  );
}

export default PetList;
