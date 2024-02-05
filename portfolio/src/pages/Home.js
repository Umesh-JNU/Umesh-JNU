import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTypeText } from '../utils'
import { LinkRow } from '../components';

const textArray = ["a full stack developer", "a nodejs developer", "a software developer", "a coder"];

export default function Home() {
  const { text, phase, currentText } = useTypeText(textArray, 200, 2000, 50);

  return (
    <Container className='container-fluid'>
      <div>
        <div className='text-center'>
          <h1 className="greet">Hello folks!</h1>
        </div>
        <Row >
          <Col className="text-center pt-3">
            <h2><span className='hand'>👋</span>, I'm</h2>
            <span className="f-name">Umesh <span className="l-name">Kumar</span></span>
          </Col>
        </Row>
      </div>
      
      <div className='p-3 mt-3'>
        <p className="text-center auto-type">I'm&nbsp;
          <span className="typed-text" aria-label={currentText}>{text}</span>
          <span className={`typing-cursor ${phase}`}></span>
        </p>
      </div>

      <div className='mt-3'>
        <LinkRow />
      </div>
    </Container>
  )
}
