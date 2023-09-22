import React from "react";
import "@/_css/timeline.css";
import { TbCameraStar } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { ImGift } from "react-icons/im";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
        <div className="timeline__event__icon"></div>
        <div className="timeline__event__date">
          <GiBrain style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            Determination of quantity and quality by AI & ML
          </div>
          <div className="timeline__event__description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event animated fadeInUp timeline__event--type1">
        <div className="timeline__event__icon"></div>
        <div className="timeline__event__date">
          <FaCartShopping style={{ height: "4rem", width: "4rem" }} />
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            Automation on allocation of nearest trader around the user's
            location
          </div>
          <div className="timeline__event__description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!
            </p>
          </div>
        </div>
      </div>

      <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
