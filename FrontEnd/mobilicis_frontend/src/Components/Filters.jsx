import React from "react";
import { Button,Stack } from "@chakra-ui/react";
const Filters = () => {
  return (
    <div>
      <Stack direction="column" spacing={4} align="center">
        <Button colorScheme="teal" variant="outline">
        Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
        </Button>
        <Button colorScheme="teal" variant="outline">
        Male Users which have phone price greater than 10,000.
        </Button>
        <Button colorScheme="teal" variant="outline">
        Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
        </Button>
        <Button colorScheme="teal" variant="outline">
        Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
        </Button>
        <Button colorScheme="teal" variant="outline">
        Show the data of top 10 cities which have the highest number of users and their average income.        </Button>
      </Stack>
    </div>
  );
};

export default Filters;
