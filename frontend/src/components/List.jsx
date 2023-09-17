import React,{useState,useRef} from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import { BiSolidRightArrow } from 'react-icons/bi'

import ListItem from './ListItem'

const List = ({type}) => {

    const [slidenumber,setslidenumber] = useState(0)

    const isMobile = window.innerWidth <= 640
    const maxSlides = isMobile ? 10 : 4;

    const listref = useRef()
    const scroll = (direction) => {

        const isMobile = window.innerWidth <= 640

        let distance = listref.current.getBoundingClientRect().x - (isMobile ? 20 : 50)
        if (direction==='left' && slidenumber>0){
            listref.current.style.transform = `translateX(${230 + distance}px)`
            setslidenumber(slidenumber-1)
        }

        if (direction==='right' && slidenumber< (isMobile ? 8 : 4) ){
            listref.current.style.transform = `translateX(${-230 + distance}px)`
            setslidenumber(slidenumber+1)
        }
    }

    return (
        <div className="bg-black">
            <h1 className="font-poppins font-bold sm:text-[23px] text-[13px] text-white sm:px-[50px] px-[20px] sm:pt-[50px] sm:pb-[20px] pt-[8px] pb-[8px] ">{type}</h1>
            <div className="flex w-[100%] relative">   {/*${isMobile?'overflow-x-scroll':''}*/}
                <button onClick={() => scroll('left')} className={` ${slidenumber === 0 ? 'hidden' : ''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 left-0 top-0 bottom-0 m-auto `}><BiSolidLeftArrow className="text-white sm:text-[50px] text-[20px] " /></button>
                <div className="flex gap-[5px] sm:ml-[50px] ml-[20px] transition duration-500 ease-in-out" ref={listref}>
                    <ListItem index={0} type={type}/>
                    <ListItem index={1} type={type}/>
                    <ListItem index={2} type={type}/>
                    <ListItem index={3} type={type}/>
                    <ListItem index={4} type={type}/>
                    <ListItem index={5} type={type}/>
                    <ListItem index={6} type={type}/>
                    <ListItem index={7} type={type}/>
                    <ListItem index={8} type={type}/>
                    <ListItem index={9} type={type}/>
                </div>
                <button onClick={() => scroll('right')} className={` ${slidenumber === maxSlides ? 'hidden' : ''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 right-0 top-0 bottom-0 m-auto`}><BiSolidRightArrow className="text-white sm:text-[50px] text-[20px] " /></button>
            </div>
        </div>
    )
}

export default List