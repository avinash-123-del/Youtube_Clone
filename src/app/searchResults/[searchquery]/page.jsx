'use client'
import SearchResult from '@/app/Components/SearchResult'
import React from 'react'
const Query = ({params}) => {
  return (
    <div>
      <SearchResult query={params}/>
    </div>
  )
}

export default Query