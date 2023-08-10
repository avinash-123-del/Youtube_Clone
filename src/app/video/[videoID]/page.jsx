'use client'
import VideoDetails from '@/app/Components/VideoDetails';
import React from 'react'
const VideoID = ({params} ) => {
  return (
    <div>
      <VideoDetails id={params}/>
    </div>
  )
}

export default VideoID