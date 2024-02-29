import React from "react";
import Fertilizers from './../components/Routes/Fertilizers/Fertilizers';
import TopBar from './../components/Routes/TopBar/TopBar';
import Plan from './../components/Routes/Plan/Plan';
import Forum from './../Query/Query';
import FAQ from './../components/Routes/FAQ/FAQ';
import Feedback from './../components/Routes/Feedback/Feedback';
import Footer from './../components/Routes/Footer/Footer';

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Hero /> */}
      {/* <Content/> */}
      {/* <Activities /> */}
      {/* <Bookings /> */}
      {/* <Gallery /> */}
      {/* <Contact /> */}
      <TopBar />
      <Plan />
      <Forum />
      <FAQ />
      <Fertilizers />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
