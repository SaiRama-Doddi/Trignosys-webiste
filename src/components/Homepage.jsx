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
      className="h-[90vh] bg-cover bg-center flex items-center text-[#1c6bdd]"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="ml-24 max-w-lg">
        

        <SplitText
          text=" Effective Strategies For"
          className="text-2xl font-semibold text-left"
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

        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
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
          <button className="mt-4 px-8 py-3 bg-[#1c6bdd] text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
            Get Started
          </button>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HomePage;
