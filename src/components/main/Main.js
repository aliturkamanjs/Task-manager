import React, { useEffect, useState } from "react";
import Card from "../../common/card";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";

import toast, { Toaster } from "react-hot-toast";

const Main = ({
  MainBg,
  headerSidBarBg,
  color,
  BorderColorHeader,
  headerIconColor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todos, setTodos] = useState([]);

  const notify = () => toast

  useEffect(() => {
    getTodosLs();
  }, []);

  useEffect(() => {
    addTodosLs();
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo._title || !todo._desc || /^\s*$/.test(todo._title, todo._desc)) {
      notify().error("Please enter all fields");
      return;
    }

    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    notify().success("Task added 🥳");
  };

  const updateTodo = (todoId, newValue) => {
    if (
      !newValue._title ||
      !newValue._desc ||
      /^\s*$/.test(newValue._title, newValue._desc)
    ) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    notify().success("Updated 💥");
  };

  const isComplete = (id) => {
    let completedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completedTodo);
  };

  const delteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodosLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodosLs = () => {
    let TodosLs = localStorage.getItem("todos");
    if (TodosLs === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let getTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(getTodos);
    }
  };

  return (
    <Box h="full" bg={MainBg} height="fit-content" minH="full" >
      <Toaster notify={notify} />
      <Container
        maxW="container.lg"
        border="1px solid"
        borderColor="transparent"
        height="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="53px"
        pr={{ base: "3", md: "3", lg: "3", xl: "0" }}
      >
        <Flex
          mt="12"
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Box
              mr="3"
              w="33px"
              h="33px"
              cursor="pointer"
              borderRadius="10px"
              background="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.700"
              transition=".1s"
              bg={BorderColorHeader}
            >
              <IoChevronBackOutline color={headerIconColor} />
            </Box>
            <Heading color={color} size="lg">
              Personal
            </Heading>
          </Flex>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="8px"
            borderRadius="10px"
            cursor="pointer"
          >
            <BsThreeDots color={headerIconColor} />
          </Box>
        </Flex>

        <Card
          onClick={onOpen}
          mt="12"
          display="flex"
          alignItems="center"
          borderRadius="10px"
          borderColor={BorderColorHeader}
          cursor="pointer"
          bg={headerSidBarBg}
        >
          <Box
            mr="3"
            w="25px"
            h="25"
            borderRadius="8px"
            bg="#FF95C5"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MdAdd fontSize="18px" />
          </Box>
          <Heading color={color} size="sm">
            Add New Task
          </Heading>
        </Card>
        <TodoForm
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onsubmit={addTodo}
          color={color}
          headerSidBarBg={headerSidBarBg}
        />
        <Todo
          todos={todos}
          isComplete={isComplete}
          removeTodo={delteTodo}
          updateTodo={updateTodo}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          headerSidBarBg={headerSidBarBg}
          color={color}
          BorderColorHeader={BorderColorHeader}
          headerIconColor={headerIconColor}
        />
      </Container>
    </Box>
  );
};

export default Main;
