import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power4, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iphoneLogo from "../assets/img/iphoneLogo.png";
import one from "../assets/img/1.png";
import two from "../assets/img/2.png";
import three from "../assets/img/3.png";
import four from "../assets/img/4.png";
import five from "../assets/img/5.png";
import banner2 from "../assets/img/banner2.png";

export const MobileDisplay = () => {
  const iphoneRef = useRef(null);
  const widgetsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const iphone = iphoneRef.current;
    const widgets = widgetsRef.current.children;

    gsap.set(iphone, { x: 650, rotation: 90 });
    gsap.set(widgets, { opacity: 0, scale: 0 });

    function iPhoneAnimation() {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.to(iphone, { x: 650 })
        .to(iphone, { rotation: 0, scale: 0.9 })
        .to(iphone, { duration: 3, scale: 0.5 });
      return tl;
    }

    function widgetAnimation() {
      const tl = gsap.timeline();
      tl.to(widgets, { duration: 0, opacity: 1 });
      return tl;
    }

    const animations = [
      {
        selector: "#app-store",
        duration: 3,
        scale: 0.14,
        x: 400,
        y: -1300,
        ease: Power4.easeOut,
      },
      {
        selector: "#screen-time",
        duration: 3,
        scale: 0.3,
        x: -230,
        y: -1500,
        ease: Power2.easeOut,
      },
      {
        selector: "#weather",
        duration: 3,
        scale: 0.3,
        x: 650,
        y: -2200,
        ease: Power4.easeOut,
      },
      {
        selector: "#stocks",
        duration: 3,
        scale: 0.25,
        x: -230,
        y: -2970,
        ease: Power4.easeOut,
      },
      {
        selector: "#fitness",
        duration: 3,
        scale: 0.25,
        x: 1050,
        y: -3100,
        ease: Power2.easeOut,
      },
      {
        selector: "#find-my",
        duration: 3,
        scale: 1.1,
        x: 400,
        y: -3360,
        ease: Power4.easeOut,
      },
      {
        selector: "#calendar",
        duration: 3,
        scale: 0.9,
        x: 450,
        y: -2400,
        ease: Power2.easeOut,
      },

      {
        selector: "#wallet",
        duration: 3,
        scale: 1,
        x: 910,
        y: -3200,
        ease: Power4.easeOut,
      },
      {
        selector: "#apple-tv",
        duration: 3,
        scale: 1,
        x: 1200,
        y: -3100,
        ease: Power4.easeOut,
      },
      {
        selector: "#sleep",
        duration: 3,
        scale: 0.9,
        x: 170,
        y: -3350,
        ease: Power2.easeOut,
      },
      {
        selector: "#socials",
        duration: 3,
        scale: 1,
        x: 530,
        y: -3720,
        ease: Power2.easeOut,
      },
    ];
    const startTime = 2;
    const masterTimeline = gsap.timeline();

    masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

    animations.forEach((animation, index) => {
      const { selector, duration, scale, x, y, ease } = animation;
      const element = document.querySelector(selector);
      masterTimeline.add(
        gsap.to(element, { duration, scale, x, y, ease }),
        startTime + (index % 3) / 2
      );
    });

    ScrollTrigger.create({
      animation: masterTimeline,
      trigger: ".animation",
      scrub: 1,
      pin: true,
    });
  }, []);

  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center"}}>
      <section className="animation">
        <img ref={iphoneRef} className="iphone" src={iphoneLogo}  alt=""  /* style={{width: "500px", marginLeft:"200px"}} */  />
        <div ref={widgetsRef}>
          <img
            id="app-store"
            src={two}
            alt=""
            /*  style={{marginTop:"-1000px", marginLeft:"50px" }}  */
          />
          <img
            id="screen-time"
            className="widgets"
            src={one}
            alt=""
/*              style={{marginLeft:"0px", marginTop:"-600px", width:"500px" }}  */
          />
          <img
            id="weather"
            className="widgets"
            src={three}
            alt=""
          />
          <img
            id="stocks"
            className="widgets"
            src={five}
            alt=""
          />
        <img
          id="calendar"
          src="https://assets.codepen.io/8292695/calendar-widget.svg"
          alt=""
        />
        <img
          id="fitness"
          src={four}
          alt=""
        />
        <img
          id="find-my"
          src="https://assets.codepen.io/8292695/find-my-widget.svg"
          alt=""
        />
        <img
          id="sleep"
          src="https://assets.codepen.io/8292695/sleep-widget.svg"
          alt=""
        />
        <img
          id="apple-tv"
          src="https://assets.codepen.io/8292695/apple-tv.svg"
          alt=""
        />
        <img
          id="wallet"
          src="https://assets.codepen.io/8292695/wallet.svg"
          alt=""
        />
        </div>

      </section>

    </div>
  );
};
