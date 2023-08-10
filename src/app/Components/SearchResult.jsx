import React, { useState, useEffect, useContext } from "react";
import { fetchApi } from "../utils/api";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import SearchResultsVideoCard from "./SearchResultsVideoCard";

const SearchResult = ({query}) => {

  const [result,setResult] = useState()
  const {setLoading}  = useContext(Context)
  const searchQuery = query.searchquery 

//console.log("search para",searchQuery);

  useEffect(() => {
    const rootElement = document.getElementById('root')

    if (rootElement) {
      return rootElement.classList.remove("custom-h")
    }
    fetchSearchResult()
  },[searchQuery])

  const fetchSearchResult = () => {
    setLoading(true)
    fetchApi(`search/?q=${searchQuery}`).then((res) => {
      //console.log(res);
      setResult(res?.contents)
      setLoading(false)

    })
  }

  return (
    // <div className="flex flex-row h-[calc(100%-56px)]">
    <div className="flex flex-row h-[calc(100%-56px)] lg:h-[105vh] ">
           <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item?.video;
                        return (
                            <SearchResultsVideoCard
                                key={video?.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
  )
}

export default SearchResult