import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../helpers'

export const SearchPage = () => {
  //console.log('->Navigate: Lleva a una url especifica')
  const navigate = useNavigate()

  //console.log('-> useLocation: Obtiene informacion de la URL')
  const location = useLocation();

  const {q=''} = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSeach = q.length === 0 ;
  const showError = q.length > 0 && heroes.length === 0;
  
  const {searchText, onInputChange} = useForm({searchText: q})

  
  //console.log('->queryString: Separa un valor de la url en parte')
  
  console.log('hay eroes by name: ', heroes)


  const onSearchSubmit = (event )=>{
     event.preventDefault();
//if ( searchText.trim().length <= 1 )return;
     //con navigate aparecera lo que estemos buscando en el url
     navigate(`?q=${searchText}`)
  }
  

  return (
    <>
      <h1>Search</h1>
      <hr/>
     <div className="row">
     <div className="col-5">
         <h4>Searching</h4>
         <hr/>
         <form onSubmit={onSearchSubmit}>
            <input type="text" 
             placeholder='Search a hero'
             className='form-control'
             name="searchText"
             autoComplete='off'
             value={searchText}
             onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
         </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr/>
        
         {/*
          (q==='')
          ? <div className='alert alert-primary'>
               Search a hero
            </div> : (heroes.length === 0) && 
            <div className='alert alert-danger'>
            No hero with <b>{q}</b>
       </div>
      */}

      <div className='alert alert-primary' style={{display: showSeach ? '' : 'none'}}>
          Search a hero
      </div>

      <div className='alert alert-danger' style={{display: showError ?  '' : 'none'}}>
            No hero with <b>{q}</b>
       </div>
       

        {
          heroes.map(hero => 
          (
            <HeroCard key={hero.key}{...hero}/>
          ) 
            )
        }
      </div>

     </div>
    </>
  )
}
