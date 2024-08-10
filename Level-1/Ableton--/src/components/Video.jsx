import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import thumbnail from '../assets/thumbnail.avif'

const Video = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
    }

    return (
        <div className='w-full max-w-[100rem] bg-white mx-auto'>
            <div className='relative p-4 mx-auto w-full md:max-w-[40rem] lg:max-w-[50rem]'>
                <div className='relative w-full pb-[56.25%]'> {/* 16:9 aspect ratio */}
                    {!playing ? (
                        <div 
                            className='absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer' 
                            onClick={handlePlay}
                        >
                            <img src={thumbnail} alt="Video thumbnail" className='absolute top-0 left-0 w-full h-full object-cover'/>
                            <div className='bg-textBlue rounded-full z-10 p-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="white">
                                    <path d="M7 6v12l10-6z"></path>
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <ReactPlayer
                                url="https://youtu.be/9SbnhgjeyXA"
                                width="100%"
                                height="100%"
                                playing={playing}
                                controls={true}
                            />
                        </div>
                    )}
                </div>
                <h3 className='py-2 text-xs font-semibold'>Why Ableton - Juanpe Bolivar</h3>
            </div>
        </div>
    );
}

export default Video