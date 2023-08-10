'use client'
import React, { useContext } from 'react'
import { categories } from '../utils/constans'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '../context/ContextApi'
import { useRouter } from 'next/navigation'

const LeftNav = () => {
    const { selectCategory, setSelectCategory, mobileMenu } = useContext(Context)

    const router = useRouter()

    const clickHandler = (name,type) => {
        switch (type){
            case "category":
                return setSelectCategory(name)
            case "home":
                return setSelectCategory(name)
            case "home":
                return false
            default:
                break;
        }
    }
    return (
        <div
            className={`md:block w-[300px] overflow-y-hidden h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "translate-x-[-300px]"
                }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => (
                    <React.Fragment key={item.name}>
                        <LeftNavMenuItem
                            text={item.type === "home" ? 'Home' : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHandler(item.name,item.type ) 
                                router.push('/')
                                console.log(item.type);
                            }}
                            className={`${selectCategory === item.name ? "bg-white/[0.15]"
                                : ""}`}
                        />
                        {item.divider && (
                            <hr className="my-5 border-white/[0.2]" />

                        )}
                    </React.Fragment>
                ))}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Avinash Chandraker
                </div>
            </div>
        </div>
    )
}

export default LeftNav