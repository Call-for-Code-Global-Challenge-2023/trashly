"use client";
import React, { useRef, useLayoutEffect } from "react";
import "@/_css/timeline.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbCameraStar } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { ImGift } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.to(".TLBox1", {
        scrollTrigger: {
          trigger: ".TLBox1",
          start: "top center",
          // toggleActions: "restart none none none",
        },
        duration: 1,
        // delay: 0.5,
        ease: "back.out(1)",
        x: -2000,
      });
      gsap.to(".TLBox2", {
        scrollTrigger: {
          trigger: ".TLBox2",
          start: "top center",
          // toggleActions: "restart none none none",
        },
        duration: 1,
        // delay: 0.5,
        ease: "back.out(1)",
        x: 2000,
      });
      gsap.to(".TLBox3", {
        scrollTrigger: {
          trigger: ".TLBox3",
          start: "top center",
          // toggleActions: "restart none none none",
        },
        duration: 1,
        // delay: 0.5,
        ease: "back.out(1)",
        x: -2000,
      });
      gsap.to(".TLBox4", {
        scrollTrigger: {
          trigger: ".TLBox4",
          start: "top center",
          // toggleActions: "restart none none none",
        },
        duration: 1,
        // delay:0.5,
        ease: "back.out(1)",
        x: 2000,
      });
      gsap.to(".TLBox5", {
        scrollTrigger: {
          trigger: ".TLBox5",
          start: "top center",
          // toggleActions: "restart none none none",
        },
        // delay:0.5,
        duration: 1,
        // delay: 2,
        ease: "back.out(1)",
        x: -2000,
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  return (
    <div ref={comp} className="timeline">
      <div className="TLBox1 timeline__event  animated fadeInUp delay-3s timeline__event--type1">
        <div className="timeline__event__icon "></div>
        <div className="timeline__event__date">
          <TbCameraStar style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content ">
          <div className="timeline__event__title">
            Enlist plastic wastes by clicking photo
          </div>
          <div className="timeline__event__description">
            <p>
              No more manual entry of product details! A customer can now simply
              take a picture of each and every plastic items that they have and
              upload it to Trashly. That's it!
            </p>
          </div>
        </div>
      </div>

      <div className="TLBox2 timeline__event animated fadeInUp delay-2s timeline__event--type2">
        <div className="timeline__event__icon"></div>
        <div className="timeline__event__date">
          <GiBrain style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            Determination of quantity by AI & ML
          </div>
          <div className="timeline__event__description">
            <p>
              Let the AI do the talking! The picture of the plastic wastes
              uploaded by the user can be perceived by our ML model and the
              quantity of the wastes can be easily determined.
            </p>
          </div>
        </div>
      </div>

      <div className="TLBox3 timeline__event animated fadeInUp delay-1s timeline__event--type3">
        <div className="timeline__event__icon"></div>
        <div className="timeline__event__date">
          <GiPiggyBank style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            Generation of cashback points by AI and ML
          </div>
          <div className="timeline__event__description">
            <p>
              Don't give it away for free! Based on the quantity of the plastic
              wastes available with the user, Trashly generates a significant
              amount of Cashback points to the user.
            </p>
          </div>
        </div>
      </div>

      <div className="TLBox4 timeline__event animated fadeInUp timeline__event--type1">
        <div className="timeline__event__icon"></div>
        <div className="timeline__event__date">
          <FaCartShopping style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            Automation on allocation of nearest vendor around the user's
            location
          </div>
          <div className="timeline__event__description">
            <p>
              Your Kabadiwala at your service! You can call your nearest vendor
              at your place and let them take away all your wastes. That's the
              fun of recycling from the comfort of your house.
            </p>
          </div>
        </div>
      </div>

      <div className=" TLBox5 timeline__event  animated fadeInUp delay-3s timeline__event--type2">
        <div className="timeline__event__icon "></div>
        <div className="timeline__event__date">
          <ImGift style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content ">
          <div className="timeline__event__title">
            Redeem cashback, deals, rewards and coupons
          </div>
          <div className="timeline__event__description">
            <p>
              Go and grab some exciting rewards! The cashback points generated
              to the users's account can be easily redeemed in the form of
              cashbacks, offers, soupons and many more exciting deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
