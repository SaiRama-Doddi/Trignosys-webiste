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
      className="h-[50vh] sm:h-[70vh] md:h-[60vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="mx-6 sm:mx-12 md:ml-24 max-w-full sm:max-w-md md:max-w-lg text-left text-[#1c6bdd]">
        
        {/* Subheading animated */}
        <SplitText
          text="Effective Strategies For"
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2"
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

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold leading-tight mb-2 drop-shadow-lg">
          TRAINING & DEVELOPMENT
        </h1>

        {/* CTA Button with animation */}
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
          <button className="mt-2 px-6 sm:px-8 py-2 sm:py-2 bg-[#1c6bdd] text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 text-sm sm:text-base">
            Get Started
          </button>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HomePage;
