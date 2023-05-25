import React, { useMemo } from 'react'

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const {id,...rest} = useParams();
  const navigate = useNavigate();
  const hero =  useMemo(()=> getHeroById(id), [id]) 

  const onNavitageBack = () =>{
       navigate(-1)//-1 regresa a la ultima direccion de la url
  }

  //useMemo: memorizar valores
  //usecallback: memorizar funciones

  if(!hero){
    return <Navigate to="/marvel"/>
  }

  return (
    <div className='row mt-5 ' >
      <div className="col-4">
         <img 
           src={`/assets/${id}.jpg`}
           alt={hero.superhero}
           className='img-thumbnail animate__animated animate__fadeInLeft'
         />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
           <li className='list-group-item'>
              <b>Alter ego: </b>{hero.alter_ego}
           </li>
           
           <li className='list-group-item'>
              <b>publisher: </b>{hero.publisher}
           </li>

           <li className='list-group-item'>
              <b>First appearance </b>{hero.first_appearance}
           </li>
           
           <h5 className='mt-3'>Characters</h5>
           <p>{hero.characters}</p>

           <button className='btn btn-outline-primary' onClick={onNavitageBack}>Regresar</button>
        </ul>
      </div>
    </div>
  )
}
