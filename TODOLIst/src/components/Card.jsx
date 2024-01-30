import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data,reference }) => {
    return (
        <div>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative w-60 flex-shrink-0 h-72 rounded-[50px] bg-zinc-900/90 overflow-hidden text-white py-10 px-8'>
                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
                <div className="footer absolute bottom-0  w-full  left-0">
                    <div className='flex items-center justify-between px-8 py-3 mb-3'>
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center'>
                            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#000' />}
                        </span>
                    </div>
                    { 
                        data.tag.isOpen && (
                            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                            </div>
                        )
                    }

                </div>

            </motion.div>

        </div>
    )
}

export default Card
