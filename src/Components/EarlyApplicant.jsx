import task from "./Component.module.css"
import { Icon,search, Stack } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'
import {data} from "./earlydata.js"
import { useState } from "react"
import { useEffect } from "react"


const datas = data

export default function EarlyApplicant()
{

    const [data,setData] = useState(datas)
const [page,setPage] = useState(0)
const [index,setIndex] = useState(0)


useEffect(()=>{


},[])

console.log(data)

    return(
        <div>

            <div style={{fontSize:"32px",fontWeight:"700",marginTop:"20px", marginBottom:"20px" }}><h2>Be An Early Applicant</h2></div>

  <div className={task.detail}>
  <Stack isInline> <div className={task.prev}><button> prev</button></div></Stack>

            <div style={{display:"flex",gap:"1rem"}}>
{data?.map((el)=>(
    <div key={el.id} className={task.box}>

                   <div style={{display:"flex"}}>
                    <span >{el.head}</span>
                    <div style={{marginLeft:"80px"}}>{el.day}</div>
                    </div>

                    <div>
                    <h3>{el.pos}</h3>
                    </div>
                 
                    <div>
                    <h3>{el.com}</h3>
                    </div>

                    <div style={{display:"flex"}}> 
                     <span> <img src={el} alt="ico"/>{el.cty} <img src="" alt="ico"/>{el.ex} </span>   
                    </div>

                    <div style={{display:"flex"}}>
                       <span><ul type="square"> <li>{el.ft1}</li></ul></span>
                       <span><ul type="square"> <li>{el.ft2}</li></ul></span>
                    </div>

                    <div>
                        <button className={task.btn2}>Apply</button>
                    </div>
        </div>

))
  
             
        
}

            </div>



            <div className={task.next}><button>next </button></div>

                
            
            </div>

        </div>
    )
}