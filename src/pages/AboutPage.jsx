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
        <h3>Our aim is to build a better world by empowering young people. 
        We help students to follow their dreams and passion by raising money for their education.  We will cover everything from tuition to study abroad trips.
        We believe anyone who wants to make a real difference in the world, deserve an opportunity to study.
        Tell us your story and get people to donate.</h3>
        <h1>Founder</h1>
        <h3>Mrs. Roshi Ettehadi
            Phone: 449-107-181</h3>
        <h3>All general information requests should be directed to roshi@gmail.com</h3>
    </div>
   );
}

export default AboutPage;