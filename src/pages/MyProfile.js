import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const reservedMission = missions.filter((item) => item.reserved === true);
  console.log(missions);
  return (
    <Container className="d-flex">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active><h3>My Mission</h3></ListGroup.Item>
        {reservedMission.map((mission) => (
          <ListGroup.Item as="li" key={mission.id}>{mission.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default MyProfile;
