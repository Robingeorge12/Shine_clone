import { IoLocation, IoBagHandleOutline } from "react-icons/io5";
import React, { Component } from "react";
import Slider from "react-slick";

import { data2 } from "./remotejob"
import { useState } from "react"
import { useEffect,useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import task from "./Component.module.css"
import { AppContext } from "../Context/AppContext.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@chakra-ui/react";

export default function CarRemote() {
  const [data, setData] = useState(data2)

  const [add, setAdd] = useState({})
  const navigate = useNavigate()
  const { state2, setState2} = useContext(AppContext)

  const Adddata = (el) => {
    console.log(el)
    setState2(el)
    setAdd(el)
    navigate("/second")
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    colums: 3

  };
  return (
    <div>
      <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px", marginBottom: "20px" }}><h2>Remote Jobs</h2></div>

      <Slider {...settings} style={{ gap: "1rem" }}>
        {/* <div style={{ display: "flex", gap: "1rem",margin:"auto" }}> */}
        {data?.map((el) => (
          <Stack>
          <div className={task.cr1} key={el.id}>

            <div className={task.box1} onClick={() => Adddata(el)}>

              <div style={{ display: "flex" }}>
                <span >{el.head}</span>
                <div style={{ marginLeft: "300px" }}>{el.day}</div>
              </div>

              <div className={task.hd}>
                <h4>{el.pos}</h4>
              </div>

              <div>
                <h4 style={{ marginLeft: "-150px" }}>{el.com}</h4>
              </div>

              <div style={{ display: "flex" }}>
                <span style={{ display: "flex", gap: "1rem", marginTop: "5px", marginBottom: "5px" }}> <IoLocation />{el.cty} <IoBagHandleOutline />{el.ex} </span>
              </div>

              <div style={{ display: "flex", gap: "2rem",marginLeft:"20px" }}>
                <ul type="square"> <li>{el.ft1}</li></ul>
                <ul type="square"> <li>{el.ft2}</li></ul>
              </div>

              <div>
                <button className={task.btn2}>Apply</button>
              </div>
            </div>
          </div>
          </Stack>
        ))

     

        }

        {/* </div> */}
      </Slider>

    </div>
  );

}