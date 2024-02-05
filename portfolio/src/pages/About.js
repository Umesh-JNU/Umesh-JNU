import React from 'react'
import { RContainer } from '../components'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const arr = [
  { title: "Professional Journey", comp: <>My passion for creating things from scratch and my interest for problem-solving led me to pursue a career in technology. I developed my abilities, obtained practical experience, and learned about the exciting field of <span>web development</span> through two rewarding internships.</> },
  { title: "Expertise", comp: <>My area of expertise is developing scalable and reliable online apps. I enjoy every part of the development process, from creating server-side code to designing interactive user interfaces. My mastery of the <span>MERN</span> stack enables me to design streamlined, lightning-fast applications that provide a remarkable user experience.</> },
  { title: "Beyond Coding", comp: <>Although my specialty is coding, I also appreciate <span>teamwork</span> and <span>good communication</span>. Strong collaboration and effective communication, in my opinion, are necessary for completing tasks successfully. I tackle every task with an optimistic outlook and a dedication to development.</> },
  { title: "Let's Connect", comp: <>I'm excited about interacting with like-minded people, working with them on fascinating initiatives, and adding to the rapidly expanding tech community. Please go through my portfolio. If you would like to talk about a project or idea, I can be reached by message. <Link to={"/contact"}><FaExternalLinkAlt /></Link></> }
];

export default function About() {
  return (
    <RContainer>
      <div className='content pt-3'>
        <p>
          Greetings from my portfolio! I am an enthusiastic, hardworking professional who has a strong interest in technology and its imaginative uses. As a <span>Full Stack Developer</span> with a focus on the <span>MERN (MongoDB, Express.js, React, Node.js)</span> stack, I enjoy using tidy and effective code to bring creative concepts to life.
        </p>

        <div className='step'>
          <img src='/images/img.jpg' alt="" className='fluid-img about-img' />

          {arr.map(({ title, comp }) => (

            <div className='step-item'>
              <div className='step-item-dot'></div>
              <div className='step-item-border'></div>
              <div className='step-item-content'>
                <h4>{title}</h4>
                <p>
                  {/*  */}
                  {comp}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
          Thank you for visiting, and I look forward to connecting with you!
        </p>

      </div>
    </RContainer >
  )
}
