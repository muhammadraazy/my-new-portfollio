import React from 'react'
import { lists } from "../../constants/constants"

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        { lists.map(list => (
            <a 
                key={list.name}
                href={`#${list.name}`} 
                className="app__navigation-dot"
                style={active == list.name ? { backgroundColor: "#2cd7da"} : {} }
                />
        )) }
    </div>
  )
}

export default NavigationDots