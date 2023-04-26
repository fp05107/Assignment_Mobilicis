import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import "./App.css";
import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import UserTable from "./Components/UserTable";
import {
  getTopCities,
  getUsers,
  getUsersByCar,
  getUsersByIncomeAndCar,
  getUsersByLastNameM,
  getUsersByPhonePrice,
} from "./Components/api";
import CitiesTable from "./Components/CitiesTable";
function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [usertype, setUsertype] = useState("");
  const navigate = useNavigate();

  function fetchUsersAndUpdateData(page, limit,usertype) {
    if (usertype === "usersByIncomeAndCar") {
      getUsersByIncomeAndCar({ page, limit }).then((res) => setUsers(res));
    } else if (usertype === "usersByPhonePrice") {
      getUsersByPhonePrice({ page, limit }).then((res) => setUsers(res));
    } else if (usertype === "usersByLastNameM") {
      getUsersByLastNameM({ page, limit }).then((res) => setUsers(res));
    } else if (usertype === "usersByCar") {
      getUsersByCar({ page, limit }).then((res) => setUsers(res));
    } else {
      getUsers({ page, limit }).then((res) => setUsers(res));
    }
  }
  useEffect(() => {
    fetchUsersAndUpdateData(page, limit,usertype)
  }, [page,limit,usertype]);

  // console.log(users);
  const handleClick = (usertype) => {
    setPage(0);
    setUsertype(usertype);
  };
  const navigateCities = () => {
    // 👇️ navigate to /
    navigate('/cities');
  };
  return (
    <div className="App">
      <Stack direction="column" spacing={4} align="center">
        <Button
          onClick={() => handleClick("usersByIncomeAndCar")}
          colorScheme="teal"
          variant="outline"
        >
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </Button>
        <Button
          onClick={() => handleClick("usersByPhonePrice")}
          colorScheme="teal"
          variant="outline"
        >
          Male Users which have phone price greater than 10,000.
        </Button>
        <Button
          onClick={() => handleClick("usersByLastNameM")}
          colorScheme="teal"
          variant="outline"
        >
          Users whose last name starts with “M” and has a quote character length
          greater than 15 and email includes his/her last name.
        </Button>
        <Button
          onClick={() => handleClick("usersByCar")}
          colorScheme="teal"
          variant="outline"
        >
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
          email does not include any digit.
        </Button>
        <Button
          onClick={() => navigateCities()}
          colorScheme="teal"
          variant="outline"
        >
          Show the data of top 10 cities which have the highest number of users
          and their average income.{" "}
        </Button>
        <Routes>
          <Route path="/cities" element={<CitiesTable />} />
        </Routes>
      </Stack>
      <UserTable users={users} />
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              onClick={() => setPage(0)}
              isDisabled={page === 0}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={() => setPage(page - 1)}
              isDisabled={page === 0}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {page}
            </Text>{" "}
            {/* of{" "}
            <Text fontWeight="bold" as="span">
              {page}
            </Text>  */}
          </Text>
          <Text flexShrink="0">Go to page:</Text>{" "}
          <NumberInput
            ml={2}
            mr={8}
            w={28}
            min={1}
            onChange={(value) => {
              setPage(value);
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            // value={pageSize}
            onChange={(e) => {
              setLimit(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={() => setPage(page + 1)}
              isDisabled={users.length === 0}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              onClick={() => setPage(page + 10)}
              isDisabled={users.length === 0}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
