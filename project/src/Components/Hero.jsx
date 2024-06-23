import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bannerImg1 from "../assets/bannerImg1.jpg";
import bannerImg2 from "../assets/BannerImg2.jpg";

const Hero = () => {
  const slideProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  };

  return (
    <div className="slide-container bg-white pt-2">
      <Slide {...slideProperties}>
        <div className="flex flex-col md:flex-row">
          <div className="px-4 h-[300px] md:h-[500px] w-full md:w-[50%]">
            <img src={bannerImg1} alt='image' className="h-full w-full object-cover"/>
          </div>
          <div className="flex items-center px-6 w-full md:w-[50%] text-black">
            <p>Internet Banking is simple, convenient, 100% secure, and lets you carry out a wide range of banking transactions and access numerous Net Banking features in just a few clicks. Now, say goodbye to long queues and unwanted delays. Net Banking instantly unlocks a better lifestyle anytime and anywhere.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-4 h-[300px] md:h-[500px] w-full md:w-[50%]">
            <img src={bannerImg2} alt='image' className="h-full w-full object-cover"/>
          </div>
          <div className="flex items-center px-6 w-full md:w-[50%] text-black">
            <p>Your bank is always just a few clicks away. Make over 200 important transactions without stepping out with online solutions.

Transfer money, pay utility and credit card bills, get statements on email and view your loan account easily and conveniently. This online Banking is secure, fast, and convenient.</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Hero;
