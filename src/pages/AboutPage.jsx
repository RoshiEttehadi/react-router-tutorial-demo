import React from "react";

function AboutPage() {
    return (
    <div>
        <h1>About Us</h1>
        <img
            id="teamimage"
            src={require("../images/2.jpg")}
            width="400"
            height="200"
            alt="Our Team"

          />
        <h2>Our aim is to build a better world by empowering young people. 
        We help students to follow their dreams and passion by raising money for their education.  We will cover everything from tuition to study abroad trips.
        We believe anyone who wants to make a real difference in the world, deserve an opportunity to study.
        Tell us your story and get people to donate.</h2>
        <h1>Founder</h1>
        <h2>Mrs. Shaista Javeed M.S, M.Ed
            Phone: 714-875-5437</h2>
        <br />
        <h3>All general information requests should be directed to office@Corecal.org</h3>
    </div>
   );
}

export default AboutPage;