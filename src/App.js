import React from "react";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import InfoSection from "./pages/InfoSection";
import VideoSection from "./pages/VideoSection";
import HowItWorks from "./pages/HowItWorks";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <InfoSection />
      <VideoSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
