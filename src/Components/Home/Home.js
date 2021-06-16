import React from "react";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";
// import FooterCol from "../FooterCol/FooterCol";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Terms from "../Terms/Terms";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services></Services>
      <Terms></Terms>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Doctors></Doctors>
      <Contact></Contact>
      {/* <FooterCol></FooterCol> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
