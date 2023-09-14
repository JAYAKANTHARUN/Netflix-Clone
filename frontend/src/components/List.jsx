import React,{useState,useRef} from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import { BiSolidRightArrow } from 'react-icons/bi'

import ListItem from './ListItem'

const List = () => {

    const [slidenumber,setslidenumber] = useState(0)

    const listref = useRef()
    const scroll = (direction) => {
        let distance = listref.current.getBoundingClientRect().x - 50
        if (direction==='left' && slidenumber>0){
            listref.current.style.transform = `translateX(${230 + distance}px)`
            setslidenumber(slidenumber-1)
        }
        if (direction==='right' && slidenumber<4){
            listref.current.style.transform = `translateX(${-230 + distance}px)`
            setslidenumber(slidenumber+1)
        }
    }

    return (
        <div className="bg-black">
            <h1 className="font-poppins font-bold text-[23px] text-white px-[50px] pt-[50px] pb-[20px] ">Continue to watch</h1>
            <div className="flex w-[100%] relative">
                <button onClick={() => scroll('left')} className={` ${slidenumber === 0 ? 'hidden' : ''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 left-0 top-0 bottom-0 m-auto `}><BiSolidLeftArrow className="text-white text-[50px] " /></button>
                <div className="flex gap-[5px] ml-[50px] transition duration-500 ease-in-out" ref={listref}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <button onClick={() => scroll('right')} className={` ${slidenumber === 4 ? 'hidden' : ''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 right-0 top-0 bottom-0 m-auto`}><BiSolidRightArrow className="text-white text-[50px]" /></button>
            </div>
        </div>
    )
}

export default List