
import { IoLocation, IoBagHandleOutline } from "react-icons/io5";
import React, { Component } from "react";
import Slider from "react-slick";

import { data3 } from "./walkjob"
import { useState } from "react"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import task from "./Component.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@chakra-ui/react";

export default function CarWalks() {
  const [data, setData] = useState(data3)

  const settings = {
    dots: true,
    infinite: true,
    arrow:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    colums: 3

  };
  return (
    <div>
      <div style={{ fontSize: "32px", fontWeight: "700", marginTop: "20px", marginBottom: "20px" }}><h2>Walkin Jobs</h2></div>

      <Slider {...settings} style={{ gap: "1rem" }}>
        {/* <div style={{ display: "flex", gap: "1rem",margin:"auto" }}> */}
        {data?.map((el) => (
          <Stack key={el.id} >
          <div className={task.cr1} >

            <div className={task.box1}>

              <div style={{ display: "flex" }}>
                <span >{el.head}</span>
                <div style={{ marginLeft: "80px",marginLeft:"300px" }}>{el.day}</div>
              </div>

              <div style={{fontWeight:"800" ,marginLeft:"-20px"}}>
                <h4>{el.pos}</h4>
              </div>

              <div>
                <h4 style={{ marginLeft: "-80px" }}>{el.com}</h4>
              </div>

              <div style={{ display: "flex" }}>
                <span style={{ display: "flex", gap: "1rem", marginTop: "5px", marginBottom: "5px",marginLeft:"-0px" }}> <IoLocation />{el.cty} <IoBagHandleOutline />{el.ex} </span>
              </div>

              <div style={{ display: "flex", gap: "2rem",marginLeft:"15px" }}>
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