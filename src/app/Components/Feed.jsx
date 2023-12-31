'use client'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/ContextApi'
import LeftNav from './LeftNav'
import '../scroll.css'
import VideoCard from './VideoCard'
const Feed = () => {
  const {loading,searchResults, setSearchQuery} = useContext(Context)


  useEffect(() => {
    
    setSearchQuery('')
    const rootElement = document.getElementById('root');
    
    if (rootElement) {
      rootElement.classList.remove('custom-h');
    }

  },[])
  return (
    <div className='flex flex-row h-[calc(100%-56px)] lg:h-[105vh] md:h-[110vh]'>
      <LeftNav />
      <div className="grow w-[calc(100%-500px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {!loading && searchResults &&
         searchResults?.map((item,index) => {
          if(item?.type !== 'video') return false
          return (
            <VideoCard key={index}
            video={item?.video}
            />
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Feed