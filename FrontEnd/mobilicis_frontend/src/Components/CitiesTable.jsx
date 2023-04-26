import React from 'react'

const CitiesTable = ({ cities }) => {
  return (
    <Table
    variant="striped"
    colorScheme="green"
    borderWidth="1px"
    borderRadius="md"
  >
    <TableCaption>Cities Data</TableCaption>
    <Thead>
      <Tr>
        <Th>City</Th>
        <Th>Total Users</Th>
        <Th>Average Income</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {cities.map((city) => (
        <Tr key={city._id}>
          <Td>{city._id}</Td>
          <Td>
            {city.totalUsers} 
          </Td>
          <Td>
            {city.avgIncome} 
          </Td>
         
        </Tr>
      ))}
    </Tbody>
  </Table>
  )
}

export default CitiesTable