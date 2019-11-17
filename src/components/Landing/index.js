  
// import React from 'react';
// import Tutor from '../Tutor'
// const Landing = () => (
//   <div>
//     <h1>Landing</h1>
//     <Tutor></Tutor>
//   </div>
// );

// export default Landing;
import React from 'react'
import Tutor from '../Tutor'
export default function Landing() {
  return (
    <div>
      <Tutor name="1" major="cse" intro="I am tutor"></Tutor>
      <Tutor name="2" major="cse" intro="I am tutor"></Tutor>
      <Tutor name="3" major="cse" intro="I am tutor"></Tutor>
      <Tutor name="4" major="cse" intro="I am tutor"></Tutor>
      <Tutor name="5" major="cse" intro="I am tutor"></Tutor>
    </div>
  )
}
