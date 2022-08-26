import { IoLocation,IoBagHandleOutline} from "react-icons/io5";
import React, { Component } from "react";
import Slider from "react-slick";

import {data2} from "./remotejob"
import { useState } from "react"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import task from "./Component.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarWalk() {
  const [data,setData] = useState(data2)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    colums:3
    
  };
  return (
    <div>
   <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px", marginBottom: "20px" }}><h2>Remote Jobs</h2></div>

      <Slider {...settings}  style={{gap:"1rem"}}>
        {/* <div style={{ display: "flex", gap: "1rem",margin:"auto" }}> */}
        {data?.map((el) => (
          <div className={task.cr1}>

            <div key={el.id} className={task.box1}>

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
                            <span style={{ display: "flex",gap:"1rem",marginTop:"5px",marginBottom:"5px" }}> <IoLocation/>{el.cty} <IoBagHandleOutline />{el.ex} </span>
                            </div>

                            <div style={{ display: "flex",gap:"2rem"  }}>
                                <ul type="square"> <li>{el.ft1}</li></ul>
                                <ul type="square"> <li>{el.ft2}</li></ul>
                            </div>

                            <div>
                                <button className={task.btn2}>Apply</button>
                            </div>
            </div>
          </div>
        ))



        }

        {/* </div> */}
      </Slider>

    </div>
  );

}