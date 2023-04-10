import React from "react";
import Layout from "../components/Layout/Layout";
const About = () => {
  return (
    <Layout title={"About us - Funtopia"}>
      <div className="gen-container row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="aboutinfo text-justify mt-2">
            Welcome to our online toy shopping website! We are excited to offer
            you a wide variety of toys for children of all ages. Our website is
            designed to provide a convenient and enjoyable shopping experience,
            allowing you to browse and purchase toys from the comfort of your
            own home. <br></br>We offer a diverse range of toys that are
            carefully selected to meet the needs and interests of children at
            different developmental stages. From educational toys that promote
            learning and creativity to fun and interactive toys that encourage
            active play, we have something for every child.<br></br> Our website
            is user-friendly, allowing you to easily navigate through our
            different categories of toys and filter by age range, price, and
            other criteria to find the perfect toy for your child. We also offer
            detailed product descriptions and images, giving you a clear idea of
            what to expect before making a purchase.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
