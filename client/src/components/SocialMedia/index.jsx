import React from 'react'
import { socialMedias } from './socialMedia'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        { socialMedias.map(social => (
          <div>
              <a href={social.link} target="_blank" rel='noreferrer'>
                <social.icon />
              </a>
          </div>
        )) }
    </div>
  )
}

export default SocialMedia