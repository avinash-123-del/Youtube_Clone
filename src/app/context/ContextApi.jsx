'use client'
import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectCategory, setSelectCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)


    useEffect(() => {
       fecthSelectedCategoryData(selectCategory)   //left side pannel call
    }, [selectCategory])

    const fecthSelectedCategoryData = (query) => {
        setLoading(true)
        fetchApi(`search/?q=${query}`).then(({contents} )=> {
            //console.log(contents)
            setSearchResults(contents)
            setLoading(false)
        })
    }

    const value = {
        searchResults, setSearchResults,
        loading, setLoading,
        selectCategory, setSelectCategory,
        mobileMenu, setMobileMenu
    }

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

