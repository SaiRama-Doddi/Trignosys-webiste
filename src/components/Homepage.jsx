import React from "react";
import home from "../assets/homepage.jpg";   
import AnimatedContent from './AnimatedContent';   
import SplitText from "../animations/SplitText";

const HomePage = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
<section
  className="relative h-[55vh] sm:h-[65vh] md:h-[55vh] lg:h-[55vh] xl:h-[60vh] bg-cover bg-center flex items-center justify-start py-6 sm:py-12"
  style={{
    backgroundImage: `url(${home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>

  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>

  <div className="relative z-10 mx-6 sm:mx-12 md:ml-24 max-w-lg text-left text-[#1c6bdd]">
    <SplitText
      text="Effective Strategies For"
      className="text-lg sm:text-xl md:text-3xl font-semibold"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="left"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
      TRAINING & DEVELOPMENT
    </h1>

    <AnimatedContent
      distance={150}
      direction="horizontal"
      reverse={false}
      duration={1.2}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <button className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-[#1c6bdd] text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 text-sm sm:text-base">
        Get Started
      </button>
    </AnimatedContent>
  </div>
</section>


  );
};

export default HomePage;
