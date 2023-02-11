import React from 'react'
import "./Header.scss"
import { images } from "../../assets"
import { motion } from 'framer-motion'
import { circles } from '../../constants/constants'
import { AppWrap } from "../../wrapper"

const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
         duration: 1,
         ease: "easeInOut"
      }
    }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
       <motion.div
         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
         transition={{duration: 0.9 }}
         className="app__header-info"
       >
          <div className="app__header-badge">
             <div className="badge__cmp app__flex">
                <span> 👋 </span>
                <div style={{ marginLeft: 20 }}>
                   <p className='p-text'> Hello, I am </p>
                   <h1 className='head-text'> Muhammad Razi </h1>
                </div>
             </div>

             <div className="tag__cmp app__flex">
               <p> Web Developer </p>
               <p> Mobile Developer </p>
               <p> Freelancer </p>
             </div>
          </div>
       </motion.div>

       <motion.div 
         whileInView={{ opacity: [0, 1] }}
         transition={{duration: 0.9, delayChildren: 0.9 }}
         className="app__header-img"
       >
          <img src={images.profile} alt="profile" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className='overlay_circle'
          />
       </motion.div>
       <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
       >
          { circles.map(circle => (
            <div className="circle__cmp app__flex" key={circle.id}>
                <img src={circle.item} alt="circles" />
            </div>
          )) }
       </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')