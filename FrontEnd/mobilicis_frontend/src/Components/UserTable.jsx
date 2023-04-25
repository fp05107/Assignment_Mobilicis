import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  chakra,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ users,handleEdit, handleDelete }) => {
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Table variant="striped" colorScheme="teal" borderWidth="1px" borderRadius="md">
      <TableCaption>Users Data</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Full Name</Th>
          <Th>Email</Th>
          <Th>Gender</Th>
          <Th>Income</Th>
          <Th>City</Th>
          <Th>Car</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>
              {user.first_name} {user.last_name}
            </Td>
            <Td>{user.email}</Td>
            <Td>{user.gender}</Td>
            <Td>${user.income.toFixed(2)}</Td>
            <Td>{user.city}</Td>
            <Td>{user.car}</Td>
            <Td>
              <chakra.button
                variant="ghost"
                colorScheme="teal"
                size="sm"
                mr={2}
                onClick={() => handleEdit(user.id)}
              >
                <FaEdit />
              </chakra.button>
              <chakra.button
                variant="ghost"
                colorScheme="red"
                size="sm"
                onClick={() => handleDelete(user.id)}
              >
                <FaTrash />
              </chakra.button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UserTable;
