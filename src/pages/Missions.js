import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Container, Button } from 'react-bootstrap';
import { fetchMissionData } from '../Redux/Missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissionData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const MissionTable = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><Button variant="secondary">Not a member</Button></td>
            <td>
              <Button variant="outline-primary">Join Mission</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container>
      <MissionTable />
    </Container>
  );
};

export default Missions;
