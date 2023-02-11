import {useState, useEffect} from 'react'
import "./Skills.scss"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import {Tooltip} from "react-tooltip"
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])


   useEffect(() => {
      const query = '*[_type == "experiences"]'
      const skillsQuery = '*[_type == "skills"]'

      client.fetch(query)
      .then(exp => {
        console.log(exp)
        setExperiences(exp)
      })
      client.fetch(skillsQuery)
      .then(skill => setSkills(skill))
   }, [])

  return (
    <>
       <h2 className='head-text'> Skills & Experience </h2>

       <div className="app__skills-container">
           <motion.div
             className='app__skills-list'
           >
            { skills.map(skill => (
              <motion.div 
                whileInView={{opacity: [0, 1]}}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor  }} >
                  <img src={urlFor(skill.icon)} alt="skills img" />
                </div>
                <p className='p-text'> {skill.name} </p>
              </motion.div>
            )) }
           </motion.div>
           <motion.div
             className='app__skills-exp'
           >  
             { experiences?.map(exp => (
                <motion.div
                  className='app__skills-exp-item'
                  key={exp.year}
                >
                   <div className="app__skills-exp-year">
                      <p className="bold-text"> {exp.year} </p>
                   </div>
                   <motion.div
                     className="app__skills-exp-works"
                   >
                     { exp.works.map(work => (
                      <>
                          <motion.div
                              whileInView={{opacity: [0, 1]}}
                              transition={{ duration: 0.5 }}
                              className="app__skills-exp-work"
                              data-tip
                              data-for={work.name}
                              key={work.name}
                          >
                                <h4 className='bold-text'> {work.name} </h4>
                                <p className="p-text"> {work.company} </p>
                          </motion.div>
                          <Tooltip
                              id={work.name}
                              effect="solid"
                              arrowColor="#fff"
                              className="skills-tooltip"
                          >
                            { work.desc }
                          </Tooltip>
                      </>
                     )) }
                   </motion.div>
                </motion.div>
             )) }
           </motion.div>
       </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')