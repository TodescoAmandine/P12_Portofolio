import React from "react";
import Navigation from "../components/Navigation";
import  HeroSection  from "../components/HeroSection";
import Footer from "../components/Footer";
import BannerImage from "../assets/img/eberhard-min.webp"
import MyProjects from "../components/MyProjects";
import MySkills from "../components/MySkills";

const Home = () => {
  return (
    <div>
        <Navigation id='navi' />
        <HeroSection id='hero' imgbanner={BannerImage} 
        title={ <span>Bienvenue<br />sur le portofolio<br />d'Amandine Todesco</span>}
        about={ <span>Je suis une développeuse web junior. Le Web est pour moi un lieu où je peux exprimer ma créativité et ma passion pour la technologie. Je suis toujours à la recherche de nouveaux défis et prête à apprendre de nouvelles choses. 
        </span>}
        />
        <MyProjects />
        <MySkills/>
        <Footer id="footer"/>
    </div>
  );
};

export default Home;
