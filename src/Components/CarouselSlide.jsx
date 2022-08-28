import { IoLocation, IoBagHandleOutline } from "react-icons/io5";
import React, { Component, useContext } from "react";
import Slider from "react-slick";

import { data } from "./earlydata.js"
import { useState } from "react"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import task from "./Component.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from "./First.jsx";
import { AppContext } from "../Context/AppContext.jsx";
import { Stack } from "@chakra-ui/react";



const datas = data

export default function CarouselSlide() {

  const [data, setData] = useState(datas)
  const [add, setAdd] = useState({})
  const navigate = useNavigate()
  const { state, setState } = useContext(AppContext)



  const Adddata = (el) => {
    setState(el)
    setAdd(el)
    navigate("/first")
  }

  console.log(add)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true, // enable center mode
    // centerPadding: '50px' // set center padding
    
  };
  return (
    <div>

      {/* <div><First /></div> */}

      <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px", marginBottom: "20px" }} className="slick-slide"><h2>Be An Early Applicant</h2></div>

      <Slider {...settings}>
        {/* <div style={{ display: "flex", gap: "1rem",margin:"auto" }}> */}
        {data?.map((el) => (
          <Stack borderRightRadius="20" marginTop={20}>
          <div className={task.cr1} key={el.id}>

            <div className={task.box1} onClick={() => Adddata(el)}>

              <div style={{ display: "flex",marginLeft:"-10px" }}>
                <span >{el.head}</span>
                <div style={{ marginLeft: "300px" }}>{el.day}</div>
              </div>

              <div className={task.hd} style={{marginLeft:"0px"}}>
                <h4>{el.pos}</h4>
              </div>

              <div>
                <h4 style={{ marginLeft: "-300px" }}>{el.com}</h4>
              </div>

              <div style={{ display: "flex" }}>
                <span style={{ display: "flex", gap: "1rem", marginTop: "5px", marginBottom: "5px",marginLeft:"-7px" }}> <IoLocation />{el.cty} <IoBagHandleOutline />{el.ex} </span>
              </div>

              <div style={{ display: "flex", gap: "2rem",marginLeft:"18px" }}>
                <ul type="square"> <li>{el.ft1}</li></ul>

                <ul type="square"> <li>{el.ft2}</li></ul>

              </div>

              <div>
                <button className={task.btn2}>Apply</button>
              </div>
            </div>
            {/* <First /> */}
          </div>
          </Stack>
        ))


        }

        {/* </div> */}
      </Slider>

    </div>
  );

}