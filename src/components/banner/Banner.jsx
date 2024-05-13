import React from "react";
import bannerImg from "../../assets/bannerImg.png";
import bannerImg2 from "../../assets/bannerImg2.png";
import "../../sass/__banner.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="banner_wrapper">
            <div className="container">
              <div className="banner_section">
                <div className="banner_section-info">
                  <h3>Welcome to GreenShop</h3>
                  <h1>
                    Let’s Make a Better <span>Planet</span>
                  </h1>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>SHOP NOW</button>
                </div>
                <div className="banner_section-img">
                  <img clas src={bannerImg} alt="" />
                  <div>
                    <img src={bannerImg2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_wrapper">
            <div className="container">
              <div className="banner_section">
                <div className="banner_section-info">
                  <h3>Welcome to GreenShop</h3>
                  <h1>
                    Let’s Make a Better <span>Planet</span>
                  </h1>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>SHOP NOW</button>
                </div>
                <div className="banner_section-img">
                  <img clas src={bannerImg} alt="" />
                  <div>
                    <img src={bannerImg2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_wrapper">
            <div className="container">
              <div className="banner_section">
                <div className="banner_section-info">
                  <h3>Welcome to GreenShop</h3>
                  <h1>
                    Let’s Make a Better <span>Planet</span>
                  </h1>
                  <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button>SHOP NOW</button>
                </div>
                <div className="banner_section-img">
                  <img clas src={bannerImg} alt="" />
                  <div>
                    <img src={bannerImg2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
