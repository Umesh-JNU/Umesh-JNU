import React, { useEffect, useRef } from 'react'
import { MdContactPhone } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUser, FaProjectDiagram, FaPuzzlePiece, FaFileInvoice, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const linkItem = [
  { icon: <FaHome size={25} />, url: "/", text: "Home" },
  { icon: <FaUser size={25} />, url: "/about-me", text: "About" },
  { icon: <FaGraduationCap size={25} />, url: "/education", text: "Education" },
  { icon: <FaPuzzlePiece size={25} />, url: "/skills", text: "Skills" },
  { icon: <FaProjectDiagram size={25} />, url: "/projects", text: "Projects" },
  { icon: <FaFileInvoice size={25} />, url: "/resume", text: "Resume" },
  { icon: <MdContactPhone size={25} />, url: "/contact", text: "Contact" },
];

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-box'>
        {linkItem.map(({ url, icon, text }) => (
          <Link key={url} to={url} className="sidebar-link f-center flex-column transition-all">
            <div className='sidebar-link-text d-flex align-items-center transition-all'>{text}</div>
            <span className='sidebar-link-end'></span>
            {icon}
            <span className='d-none'>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  )

}

