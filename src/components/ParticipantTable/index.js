
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { Container, Title, Description, Row, TableWrapper, Table, Thead, Th, Td } from './style';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4563'];

const ParticipantPieChart = ({ participants }) => {
  return (
    <Container>
            <Title>DATA</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
            <Row>
                <TableWrapper>
                    <Table>
                        <Thead>
                            <tr>
                                <Th>First name</Th>
                                <Th>Last name</Th>
                                <Th>Participation</Th>
                            </tr>
                        </Thead>
                        <tbody>
                        {participants.map((participant, index) => (
          <tr key={index}>
            <Td>{participant.firstName}</Td>
            <Td>{participant.lastName}</Td>
            <Td>{participant.participation}%</Td>
          </tr>
        ))}
                        </tbody>
                    </Table>
                </TableWrapper>

                <PieChart width={400} height={400}>
      <Pie
        data={participants}
        dataKey="participation"
        nameKey="firstName"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {participants.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
                
            </Row>
        </Container>

    
  );
};

export default ParticipantPieChart;
