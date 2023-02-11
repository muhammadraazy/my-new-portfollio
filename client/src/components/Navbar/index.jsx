import {useState} from 'react'
import "./Navbar.scss"
import { images } from "../../assets"
import { lists } from "../../constants/constants"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from 'framer-motion'

const Navbar = () => {
   const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className='app__navbar-logo'>
        <h2> Muhammad Razi </h2>
      </div>
      <ul className='app__navbar-links'>
         { lists.map(list => (
            <li key={list.id} className="app__flex p-text">
               <a href={`#${list.name}`}> {list.name} </a>
               <div />
            </li>
         )) }
      </ul>

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          { toggle && (
             <motion.div
               whileInView={{ x: [300, 0] }}
               transition={{ duration: 0.85, ease: "easeInOut" }}
             >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                    { lists.map(list => (
                      <li key={list.id}>
                        <a 
                          href={`#${list.name}`} 
                          onClick={() => setToggle(false)}> {list.name} </a>
                      </li>
                  )) }
                </ul>
             </motion.div>
          ) }
        </div>
        
    </nav>
  )
}

export default Navbar