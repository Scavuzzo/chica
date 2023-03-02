import Image from 'next/image';
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from 'styles/Slider.module.scss';
import 'swiper/css';
import "swiper/css/navigation";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface Slider {
    images: any,
    alt: string
}

const PrevButton = () => {
    const swiper = useSwiper()
    return <KeyboardArrowLeftIcon className={`${styles.btnLeft} ${styles.btn}`} onClick={() => swiper.slidePrev()} />

}
const NextButton = () => {
    const swiper = useSwiper()
    return <KeyboardArrowRightIcon className={`${styles.btnRight} ${styles.btn}`} onClick={() => swiper.slideNext()} />
}

const Slider = ({ images, alt }: Slider) => {


  return (
    <div className={styles.sliderContainer} >
        <Swiper
            className={styles.img}
            modules={[Autoplay]}
            spaceBetween={0}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
        >
        {
            images.map((image: any, i: number) => {
                return <SwiperSlide key={i}> <Image src={images[i]} priority alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /></SwiperSlide>
            })
        }
            <PrevButton/>
            <NextButton/>
        </Swiper>
    </div>
    
  )
}

export default Slider