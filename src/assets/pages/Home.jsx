import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../App.css';
import { EffectCards } from 'swiper/modules';
import {
  FaAlignRight,
  FaArrowAltCircleDown,
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp
} from "react-icons/fa";
import Adobe from "../../assets/logos/Adobe.png";
import Upwork from "../../assets/logos/pngegg.png";
import Figma from "../../assets/logos/Figma.png";
import Github from "../../assets/logos/Github.png";
import Fiverr from "../../assets/logos/fiverr.png";
import MyoMin from "../../assets/MyoMin.png";
import twoDthreeD from "../../assets/twoDthreeD.png";
import OnlineShop from "../../assets/OnlineShop.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [open, setOpen] = useState(false);
  return <div className="w-full mx-auto bg-primary">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-full flex justify-center items-center px-2 mt-10 overflow-hidden relative">
          <div className="grid grid-cols-12 relative">
            <div className="col-span-12 md:col-span-7 order-2 lg:order-1 ml-0 lg:ml-10">
              <div className="mt:mt-0 mt-7">
                <div>Hi there!👋👋</div>
                <div>
                  <div className="lg:text-4xl text-2xl font-bold">
                    I'm Myo Min Thu
                  </div>
                  <div className="lg:text-2xl font-quantico">
                    <TypeAnimation sequence={["Freelancer", 2000, "Graphic Designer", 2000, "Front-end Developer", 2000, "Back-end Developer", 2000, "Youtuber", 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-orange-500" />
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:my-5">
                  <div className="lg:hidden block my-2">
                    <p className="text-2xl">About</p>
                    <div className="w-10 bg-white h-[2px]" />
                  </div>
                  <p className="text-xl">
                    I am a full-stack developer with extensive experience in
                    web development. I am currently employed at a large
                    company, but I am also available for hire to work on your
                    web development projects. With my skills and expertise, I
                    am confident that I can help bring your ideas to life and
                    create successful web solutions.
                </p>
                <> &nbsp; </>
                  <p className="text-xl">
                    I am an enthusiastic, self-motivated, reliable,
                    responsible and hard working person. I am a mature team
                    worker and adaptable to all challenging situations. I am
                    able to work well both in a team environment as well as
                    using own initiative. I am able to work well under
                    pressure and adhere to strict deadlines.
                  </p>
                </div>
                <div className="flex gap-2 my-2 text-slate-400 text-2xl lg:mt-0 mt-3">
                  <div className="hover:text-slate-100">
                    <Link to="https://web.facebook.com/mgmyomin.mmt" target="_blank">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="hover:text-slate-100">
                    <Link to="https://m.me/mgmyomin.mmt" target="_blank">
                      <FaFacebookMessenger />
                    </Link>
                  </div>
                  <div className="hover:text-slate-100">
                    <Link to="https://wa.me/+959792115547" target="_blank">
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div className="hover:text-slate-100">
                    <Link to="https://t.me/mgmyominMMT" target="_blank">
                      <FaTelegram />
                    </Link>
                  </div>
                  <div className="hover:text-slate-100">
                    <Link to="https://www.linkedin.com/in/myo-min-thu/" target="_blank">
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div className="hover:text-slate-100">
                    <Link to="https://github.com/PIUMYOMIN" target="_blank">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <div className="flex gap-3 lg:mt-7 my-5">
                  <div>
                    <Link to="" className="lg:p-3 p-2 bg-blue-400 hover:bg-blue-500 rounded-lg">
                      Hire Me
                    </Link>
                  </div>
                  <div>
                    <Link to="" className="lg:p-3 p-2 border border-orange-600 hover:bg-orange-600 rounded-lg">
                      Download CV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center lg:justify-end lg:mb-0">
              <img src={MyoMin} alt="" className="w-full md:max-w-none md:h-full h-80 lg:h-auto object-cover object-top" />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-700 p-2 bottom-0">
          <div>A few of places I work</div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-center items-center gap-1">
              <img src={Adobe} alt="" className="w-12 object-contain" />
              <span className="lg:block hidden">Adobe</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={Figma} alt="" className="w-12 object-contain" />
              <span className="lg:block hidden">Figma</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={Upwork} alt="" className="w-12 object-contain" />
              <span className="lg:block hidden">Upwork</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={Github} alt="" className="w-12 object-contain" />
              <span className="lg:block hidden">Github</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={Fiverr} alt="" className="w-12 object-contain" />
              <span className="lg:block hidden">Fiverr</span>
            </div>
          </div>
        </div>
    </div>
    <div className="p-2">
      <div>
        <div className="text-center py-5 text-2xl text-white">Portfolios</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="!w-full !h-full py-2 lg:grid-cols-12"
        >
          <SwiperSlide>
            <div>
              <div>
                <img src={twoDthreeD} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  1.Thai 2D 3D
                </div>
                <div className="text-sm">
                  Type: Lottery
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <img src={OnlineShop} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  2.Phone & Accessories
                </div>
                <div className="text-sm">
                  Type: Online Shop
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <img src={twoDthreeD} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  3.Thai 2D 3D
                </div>
                <div className="text-sm">
                  Type: Lottery
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="!w-full !h-full py-2 lg:grid-cols-12"
        >
          <SwiperSlide>
            <div>
              <div>
                <img src={OnlineShop} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  2.Phone & Accessories
                </div>
                <div className="text-sm">
                  Type: Online Shop
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <img src={twoDthreeD} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  1.Thai 2D 3D
                </div>
                <div className="text-sm">
                  Type: Lottery
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <img src={OnlineShop} alt="" />
              </div>
              <div className="p-2">
                <div className="text-xl">
                  3.Phone & Accessories
                </div>
                <div className="text-sm">
                  Type: Online Shop
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>;
}
