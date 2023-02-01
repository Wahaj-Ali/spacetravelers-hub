import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { fetchMissionData, updateMission } from '../Redux/Missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionData());
    }
  }, [missions, dispatch]);

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
    <Table striped bordered hover size="sm" className="margin-30">
      <thead>
        <tr>
          <th style={{ width: '150px' }}>Mission</th>
          <th>Description</th>
          <th style={{ width: '150px' }}>Status</th>
          <th style={{ width: '150px' }}> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td style={{ fontWeight: 'bold', padding: '16px' }}>{mission.name}</td>
            <td className="padding-16">{mission.description}</td>
            <td className="text-middle text-center"><Badge bg={mission.reserved ? 'primary' : 'secondary'}>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</Badge></td>
            <td className="text-middle text-center">
              <Button
                variant={mission.reserved ? 'outline-danger' : 'outline-primary'}
                onClick={() => { dispatch(updateMission(mission.id)); }}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </Button>
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
