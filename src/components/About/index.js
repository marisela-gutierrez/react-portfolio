import React from 'react'
import profileImage from "../../assets/Images/My-picture.jpg";

function About() {

  return (
    <section id="about">
      <img src={profileImage}/>
      <p>
        Since finishing my undergraduate Marketing degree December 2019, I have excelled in my current sales role within the logistics industry,
        This experience has helped me better understand my strengths and goals, positioning me to redirect my career path to Web Development, 
        where I believe my business education, previous experience, and demonstrated abilities will result in a successful career serving others and 
        helping them achieve their goals.
        <br/>
        <br/>
        Relatively new to Web Development and ready to take the next step in my career, leveraging my personal resilience 
        and adaptability, ability to multi-task in a fast-paced environment, and commitment to continual learning and constant improvement.
        I enjoy problem-solving,learning programming languages, and being creative.   
      </p>
    </section>
  )
}

export default About;