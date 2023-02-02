import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function Cards() {
  const state = useSelector(state => state.cities);

  return (
    <div className='cards'>
      { 
        state?.map(e => (
          <Card key={e.id} id={e.id} name={e.name} temp_min={e.main.temp_min} temp_max={e.main.temp_max} icon={e.weather[0].icon}/>
        ))
      }
    </div>
  )
}

export default Cards