import React from 'react'
import { RContainer } from '../components'
import { Col, Row } from 'react-bootstrap'

const arr = [
  {
    title: "Jawaharlal Nehru University",
    imgPath: "jnu1.png",
    list: [
      "Computer Science & Engineering (CSE)",
      "B.Tech",
      "2019-2023"
    ]
  },
  {
    title: "Pragya Bharti Public School",
    imgPath: "pbps1.jpg",
    list: [
      <span>Completed 12th with <strong>86.6%</strong></span>,
      "(PCM + Physical Education + English)",
      "In 2019"
    ]
  },
  {
    title: "Manas Vidyalaya",
    imgPath: "manas.png",
    list: [
      "Completed matriculation in 2017",
      "10 CGPA"
    ]
  }
]
export default function Education() {
  return (
    <RContainer>
      <div class="content pt-3">
        <h5 style={{ textAlign: 'center', fontStyle: 'italic', margin: "1.5rem 0" }}>Education is the way to prove your existence.</h5>

        {arr.map(({ title, imgPath, list }) => (
          <Row className="mb-5 inst">
            <Col sm={12} md={4}>
              <div class="inst-img">
                <img src={`../images/${imgPath}`} alt="" class="img-fluid" />
              </div>
            </Col>
            <Col className="mt-3 mt-md-0">
              <div class="edu-content">
                <h1><em>{title}</em></h1>
                <ul>
                  {list.map((item) => <li key={title}>{item}</li>)}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </RContainer>
  )
}
