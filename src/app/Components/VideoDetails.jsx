import '../scroll.css'
import React, { useState, useEffect, useContext } from "react";
// import ReactPlayer from "react-player/youtube";
import dynamic from "next/dynamic";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { Context } from '../context/ContextApi';
import { fetchApi } from '../utils/api';
import Image from "next/image";

const VideoDetails = ({ id }) => {

  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { setLoading } = useContext(Context);
  console.log("video params",id.videoID);

  useEffect(() => {
    const rootElement = document.getElementById('root')

    if (rootElement) {
      return rootElement.classList.add("custom-h")
    }
     fetchVideoDetails()
    fetchRelatedDetails()
  }, [id.videoID])

  const fetchVideoDetails = () => {
    setLoading(true)
    fetchApi(`video/details/?id=${id.videoID}`).then((res) => {
      //console.log(res)
      setVideo(res)
      setLoading(false)
    })
  }

  const fetchRelatedDetails = () => {
    setLoading(true)
    fetchApi(`video/related-contents/?id=${id.videoID}`).then((res) => {
      console.log(res)
      setRelatedVideos(res)
      setLoading(false)
    })
  }

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

  return (

    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      {/* <div className="w-full max-w-[1280px] flex flex-col lg:flex-row"> */}
      <div className="w-full max-w-[1700px] flex flex-col lg:flex-row lg:h-[100vh]">
        <div className="flex flex-col lg:w-[calc(100%-350px)] z-0 xl:w-[calc(100%-300px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id.videoID}`}
              controls
              width="100%"
              height="90%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
              
            />
          </div>
          
          <div className="text-white font-bold text-sm md:text-xl mt-2 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <Image
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    width={50} height={50} alt="avtar"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white text-sm mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[450px] xl:w-[600px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails