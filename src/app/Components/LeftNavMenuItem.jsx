import React from 'react'

const LeftNavMenuItem = ({text,icon,className,action}) => {
  return (
    <div
    className={
        "text-white text-lg cursor-pointer h-10 md:h-14 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
    }
    onClick={action}
>
    <span className="text-base mr-5">{icon}</span>
    {text}
</div>
  )
}

export default LeftNavMenuItem