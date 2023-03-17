import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { AboutStyles } from "./AboutStyles";
import productsBanner from "../../../public/assets/images/backgrounds/products-hero.png";
import React from "react";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import logoImage from "../../../public/assets/images/backgrounds/logo-with-background.png";
import BionicReading from "../../components/BionicReading/BionicReading";

const About = () => {
  return (
    <AboutStyles>
      <HeroBanner
        heroBannerImage={productsBanner}
        heroBannerHeading="About Us"
        heroBannerClass={"heroBanner"}
      />
      <SkinnyBanner bannerHeading="Established 2023" />
      <img className="logo-image" src={logoImage} />
      <h3>Welcome to HolteLines!</h3>
      <BionicReading
        text={
          " We are a forward-thinking and innovative telecommunications company that was founded in 2023 with the goal of revolutionizing the way people communicate. Our team of experienced professionals is dedicated to providing our customers with the latest technology, unparalleled customer service, and affordable plans to meet everyone's needs."
        }
        as={"p"}
      />

      <SkinnyBanner bannerHeading={"Philosophy"} />
      <BionicReading
        text={
          "Our philosophy is based on the belief that communication is essential to progress. We believe that everyone should have access to a reliable and affordable communication services. We strive to provide our customers with the tools they need to stay connected to the world around them,whether they are making calls, sending text messages, or browsing the internet."
        }
        as={"p"}
      />

      <SkinnyBanner bannerHeading={"Services"} />
      <BionicReading
        text={
          "We offer a wide range of services to meet the diverse needs of our customers. Our plans are designed to be flexible and affordable, with options that include unlimited talk and text, as well as data plans for those who need to stay connected on the go. We also offer a variety of devices to choose from, including the latest smartphones from the most popular manufacturers. We understand that not everyone has the same needs when it comes to communication, which is why we offer customized plans to meet the unique needs of the individual customer. Whether you need a basic plan for occasional use or an unlimited plan for heavy usage, we have you covered."
        }
        as={"p"}
      />

      <SkinnyBanner bannerHeading={"Technology"} />
      <BionicReading
        text={
          "At HotleLines, we are committed to using the latest and most advanced technology to provide our customers with the best possible experience. We use state-of-the-art networks that offer fast and reliable connections, whether you are making a call or browsing the internet. Our devices are also designed with the latest technology, so you can enjoy all the latest features and capabilities."
        }
        as={"p"}
      />

      <SkinnyBanner bannerHeading={"Customer Service"} />
      <BionicReading
        text={
          "We understand that communication is essential, which is why we are committed to providing our customers with the best possible customer service. Our customer service team is available 24/7 to answer any questions or concerns you may have, and we are always happy to help you find the right plan for your needs. We believe that our customers deserve the best, which is why we go above and beyond to provide exceptional customer service."
        }
        as={"p"}
      />
    </AboutStyles>
  );
};

export default About;
