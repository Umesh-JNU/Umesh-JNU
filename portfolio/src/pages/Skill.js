import React from 'react'
import { RContainer } from '../components'
import { SiAmazonaws, SiC, SiCplusplus, SiCss3, SiExpress, SiGooglecloud, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiRedux, SiSequelize, SiSocketdotio, SiSpring, SiTypescript, SiGraphql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const imgIcon = [
  {
    icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <title>
      </title>
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h">
      </path>
    </svg>, text: "C"
  },
  { icon: <SiCplusplus />, text: "C++" },
  { icon: <SiCss3 />, text: "CSS" },
  { icon: <SiHtml5 />, text: "HTML" },
  { icon: <SiExpress />, text: "Express" },
  { icon: <SiAmazonaws />, text: "AWS" },
  { icon: <SiJavascript />, text: "JavaScript" },
  { icon: <FaJava />, text: "Java" },
  { icon: <SiNodedotjs />, text: "NodeJS" },
  { icon: <SiGooglecloud />, text: "Google Cloud" },
  { icon: <SiMongodb />, text: "MongoDB" },
  { icon: <SiGraphql />, text: "GraphQL" },
  { icon: <SiPython />, text: "Python" },
  { icon: <SiReact />, text: "React" },
  { icon: <SiRedux />, text: "Redux" },
  { icon: <SiSequelize />, text: "Sequelize" },
  { icon: <SiSocketdotio />, text: "Socket" },
  { icon: <SiTypescript />, text: "TypeScript" },
  { icon: <SiSpring />, text: "Spring" },
];

const Marque = () => <div className='ltr d-flex g-4'>
  {imgIcon.map(({ icon, text }) => (
    <div className='ltr-item f-center gap-2'>
      <div className='ltr-item-icon f-center'>{icon}</div>
      <div className='ltr-item-text f-center'>{text}</div>
    </div>
  ))}
</div>;

export default function Skill() {
  return (
    <RContainer>
      <div className='py-4 margin-2 margin-md-3 overflow-hidden' style={{ background: '#57212b' }}>
        <div className='d-flex g-4'>
          <Marque />
          <Marque />
          <Marque />
        </div>
      </div>

    </RContainer >
  )
}
