import React from 'react'
import './DownloadButton.scss'
import { files } from '../../assets'

const DownloadButton = () => {

  const downloadResume = async() => {
      const res = await fetch(files.resume);
      const blob = await res.blob()
      const fileUrl = window.URL.createObjectURL(blob)

      const link = document.createElement('a');
      link.href = fileUrl
      link.download = files.resume

      link.click()
  }

  return (
    <div className='download-container'>
        <button onClick={downloadResume}> Download CV </button>
    </div>
  )
}

export default DownloadButton