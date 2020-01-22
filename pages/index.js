import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
`

const Col = styled.div`
  flex: ${props => props.span};
`

export default function IndexPage() {
  return (
    <Row>
      <Col span={4}>Cell#1</Col>
      <Col span={4}>Cell#2</Col>
      <Col span={4}>Cell#2</Col>
    </Row>
  )
}
