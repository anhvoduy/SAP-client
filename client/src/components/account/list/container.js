import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import TableHeader from '../header';
import TableContent from '../content';

const AboutList = function({ accounts }) {  
  return (
    <Container>
      <Row>
        <Col>Chart Of Accounts</Col>
      </Row>
      <Row>
        <Table striped bordered hover size="sm">
          <TableHeader />          
          <TableContent accounts={accounts}/>         
        </Table>
      </Row>
    </Container>
  );
}

export default AboutList;