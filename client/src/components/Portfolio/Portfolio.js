import React from 'react';
import Style from './Portfolio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export const Portfolio = (props) => {
  return <section className={Style.portfolio}>
    <div className={Style.wrapperPortfolio}>
      <div className={Style.bgWrapper}>
      </div>
      <div className={Style.content}>
        <div className={Style.boxDetail}>
          contoh isi kotak
        </div>
        <div className={Style.slideCard}>
          <Swiper
            slidesPerView={3}
            direction={'vertical'}
          >
            <SwiperSlide>
              <div className={Style.logoProject}>
                <img src="/logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Style.logoProject}>
                <img src="/logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Style.logoProject}>
                <img src="/logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Style.logoProject}>
                <img src="/logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Style.logoProject}>
                <img src="/logo.png" />
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </div>
  </section>;
};