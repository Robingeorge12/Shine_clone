import task from "./Component.module.css"
import { Icon, search, Stack } from '@chakra-ui/react'
import { ChevronLeftIcon ,ChevronRightIcon} from '@chakra-ui/icons'
// import { MdSettings } from 'react-icons/md'
import { data } from "./earlydata.js"
import { useState } from "react"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"




const datas = data

export default function EarlyApplicant() {

    const [data, setData] = useState(datas)
    const [page, setPage] = useState(0)
    const [index, setIndex] = useState(0)
const navigate = useNavigate()

    useEffect(() => {


    }, [])

    // console.log(data)

    return (
        <div>

            <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px", marginBottom: "20px" }}><h2>Be An Early Applicant</h2></div>

            <div className={task.detail}>
                <Stack isInline> <div className={task.prev}><button style={{justifyContent:"center",alignItems:"center"}}><ChevronLeftIcon/></button></div></Stack>

                <div style={{ display: "flex", gap: "1rem",margin:"auto" }}>
                    {data?.map((el) => (
                        <div key={el.id} className={task.box} onClick={(<Link to={"/Work1"}></Link>)}>

                            <div style={{ display: "flex" }}>
                                <span >{el.head}</span>
                                <div style={{ marginLeft: "80px" }}>{el.day}</div>
                            </div>

                            <div className={task.hd}>
                                <h4>{el.pos}</h4>
                            </div>

                            <div>
                                <h4>{el.com}</h4>
                            </div>

                            <div style={{ display: "flex" }}>
                                <span> <img src={el} alt="ico" />{el.cty} <img src="" alt="ico" />{el.ex} </span>
                            </div>

                            <div style={{ display: "flex" }}>
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



                <div className={task.next}><button><ChevronRightIcon/></button></div>



            </div>

        </div>
    )
}