import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { MdContactPhone } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUser, FaProjectDiagram, FaPuzzlePiece, FaFileInvoice, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const linkItem = [
  { icon: <FaUser />, url: "/about-me", text: "About Me" },
  { icon: <FaGraduationCap />, url: "/education", text: "Education" },
  { icon: <FaPuzzlePiece />, url: "/skills", text: "Skills" },
  { icon: <FaProjectDiagram />, url: "/projects", text: "Projects" },
  { icon: <FaFileInvoice />, url: "/resume", text: "Resume" },
  { icon: <MdContactPhone />, url: "/contact", text: "Contact" },
];

const socialLink = [
  { icon: <FaEnvelope size={70}/>, url: "mailto:umesh15900951@gmail.com" },
  { icon: <FaGithub size={70}/>, url: "https://github.com/Umesh-JNU" },
  { icon: <FaLinkedinIn size={70}/>, url: "https://www.linkedin.com/in/umesh-kumar-76b143193/" }
];

export default function LinkRow() {
  return (
    <>
      <Row>
        {linkItem.map(({ url, icon, text }) => (
          <Col key={url} className='f-center'>
            <Link className="link" to={url}>
              <div className="icon-box">{icon}</div>
              <div className="link-text">{text}</div>
            </Link>
          </Col>
        ))}
      </Row>

      <div className='m-auto mt-4 f-center'>
        {socialLink.map(({ icon, url }) => (
          <a href={url} key={url} target='_blank' className='social-link'>
            {icon}
          </a>
        ))}
      </div>
    </>
  )
}
