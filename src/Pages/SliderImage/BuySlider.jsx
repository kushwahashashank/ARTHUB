import React, { useState } from "react";
import "./slider.css";
import projects from "../../Data/Data.js";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Global/Actions/Index";
import { useParams } from "react-router-dom";

export default function Slider() {
  const [btntext, setBtntext] = useState("ADD TO CART");
  const myTimeout = setTimeout(change1, 1000);
  function change1() {
    setBtntext("ADD TO CART");
  }
  const { target } = useParams();
  function gettarget() {
    if (target) {
      console.log("abhi");
      return JSON.parse(target);
    } else {
      console.log("abhi");
      return 0;
    }
  }

  const dispatch = useDispatch();

  const slideIndex = gettarget();

  return (
    <>
      <div className="container-slider buySlider">
        {projects.map((e, index) => {
          return (
            <div
              key={e.distinct}
              className={
                slideIndex === index + 1
                  ? "slide active-anim show_slider"
                  : "slide hide_slider"
              }
            >
              <div className="image_slider">
                <img src={e.photo} alt="" />
              </div>

              <div className="values">
                <p className="name_image">{e.text}</p>
                <p className="details buy_price">&#x20b9;{e.price}</p>

                <p className="details">{e.desc}</p>
                <p className="details">{e.desc1}</p>
                <button
                  onClick={() => {
                    dispatch(
                      AddToCart(e.photo, e.price, e.text, e.id, e.price, 1)
                    );
                    setBtntext("ADDING...");
                    clearTimeout(myTimeout);
                  }}
                >
                  {btntext}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
