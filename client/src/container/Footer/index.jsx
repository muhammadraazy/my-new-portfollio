import {useState} from 'react'
import "./Footer.scss"
import { images } from "../../assets"
import { AppWrap, MotionWrap } from "../../wrapper"
import { client } from "../../client"

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { name, email, message } = formData

  const handleChange = (e) => {
     const { name, value } = e.target;

     setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
     setIsLoading(true)

     const contact = {
        _type: 'contact',
        name,
        email,
        message
     }

     client.create(contact)
     .then(() => {
        setIsLoading(false)
        setIsFormSubmitted(true)
     })
  }

  return (
    <>
      <h2 className="head-text"> take a coffee & have a chat with me </h2>

      <div className="app__footer-cards">
         <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:raazy.devs@gmail.com" className='p-text'>
               raazy.devs@gmail.com
            </a>
         </div>
         <div className="app__footer-card">
            <img src={images.mobile} alt="email" />
            <a href="tel:+62895626557946" className='p-text'>
              +62895626557946
            </a>
         </div>
      </div>

      { !isFormSubmitted ? 
      <div className="app__footer-form app__flex">
         <div className="app__flex">
            <input 
                type="text" className='p-text' 
                placeholder='Your Name ..' onChange={handleChange} 
                name="name" value={name} />
         </div>
         <div className="app__flex">
            <input 
                type="email" className='p-text' 
                placeholder='Your Email ..' onChange={handleChange} 
                name="email" value={email} />
         </div>
         <div>
            <textarea 
              name="message" cols="30" 
              rows="10" value={message}
              onChange={handleChange}
              className='p-text' 
              placeholder='Your Message ..'
              />
         </div>
          <button className='p-text' onClick={handleSubmit} type="button"> { isLoading ? 'Sending' : "Send Message" } </button>
      </div>
        : <div> 
            <h3 className='head-text'> Thank you for getting in touch </h3>  
         </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')