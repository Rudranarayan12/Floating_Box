import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
    const ref=useRef(null);
    const data=[
        {desc:"ndiuud bbub2u  ubb2hhu2 d2uhduh ubb23yb.",filesize:'.9mb',close:false,tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"},
    },
    {desc:"ndiuud bbub2u  ubb2hhu2 d2uhduh ubb23yb.",filesize:'.9mb',close:false,tag:{isOpen:true, tagTitle:"Download Now",tagColor:"blue"},
    },
    {desc:"ndiuud bbub2u  ubb2hhu2 d2uhduh ubb23yb.",filesize:'.9mb',close:false,tag:{isOpen:false, tagTitle:"Upload",tagColor:"green"},
    },
    ];
  return (
    <>
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      
      </div>
      
    </>
  )
}

export default Forground
