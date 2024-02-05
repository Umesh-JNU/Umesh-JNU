import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { useTypeText } from '../utils';
import { FaPencilAlt } from 'react-icons/fa';

const titleObj = {
  about: "About Me",
  education: "My Education",
  skill: "My Skills",
  project: "My Projects"
}
export default function RContainer(props) {
  const pathname = window.location.pathname;
  const { text, phase } = useTypeText([titleObj[Object.keys(titleObj).filter(key => pathname.includes(key))[0]]], 200, 2000);

  console.log()
  return (
    <Container className='container-fluid p-0 d-flex justify-content-center position-relative'>
      <div className='fixed top'></div>
      <div className='position-relative w-100 py-md-5' style={{ minHeight: '100vh' }}>
        <div className='content-box p-md-4 p-3'>
          <div className='title'>
            {'<'} <span>{text}</span> <span className={`pencil ${phase}`}><FaPencilAlt size={38} /> </span>{'/>'}
          </div>
          {props.children}
        </div>
      </div>
      <Sidebar />
      <div className='fixed bottom'></div>
    </Container>
  )
}
