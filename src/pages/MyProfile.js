import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const reservedMission = missions.filter((item) => item.reserved === true);

  if (reservedMission.length === 0) {
    return (
      <div />
    );
  }
  return (
    <Container className="d-flex margin-30">
      <Col xs={6} md={4}>
        <ListGroup as="ul">
          <ListGroup.Item as="li"><h3>My Mission</h3></ListGroup.Item>
          {reservedMission.map((mission) => (
            <ListGroup.Item as="li" key={mission.id}>{mission.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Container>
  );
};

export default MyProfile;
