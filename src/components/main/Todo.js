import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import toast, { Toaster } from "react-hot-toast";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit, BiTrash } from "react-icons/bi";
import TodoForm from "./TodoForm";

const Todo = ({
  todos,
  isComplete,
  removeTodo,
  updateTodo,
  onOpen,
  isOpen,
  onClose,
  headerSidBarBg,
  color,
  BorderColorHeader,
  headerIconColor,
}) => {
  const notify = () => toast.success("Completed 🎉");
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    desc: "",
  });

  const submitHandler = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      desc: "",
    });
  };

  if (edit.id) {
    return (
      <TodoForm
        isOpen={isOpen}
        onClose={onClose}
        edit={edit}
        onsubmit={submitHandler}
      />
    );
  }

  return (
    <Box mt="14" width="full">
      <Heading
        size="md"
        mb="3"
        color={color}
        display={todos.length > 0 ? "block" : "none"}
      >
        Tasks {todos.length}
      </Heading>
      {todos.map((todo) => {
        return (
          <Box
            key={todo.id}
            bg={headerSidBarBg}
            borderRadius="10px"
            border="1px solid"
            borderColor={BorderColorHeader}
            p="1px"
            mt="3"
          >
            <Accordion allowMultiple>
              <AccordionItem as="a">
                <Flex alignItems="center">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    width={{ base: "31px", md: "27px", lg: "26px", xl: "26px" }}
                    height="25px"
                    borderRadius="8px"
                    border="2px solid"
                    ml="3"
                    transition=".1s ease-out"
                    cursor="pointer"
                    bg={todo.isComplete ? "#FF95C5" : "transparent"}
                    borderColor="#FF95C5"
                    onClick={() => {
                      isComplete(todo.id);
                      if (todo.isComplete) {
                        notify();
                      }
                    }}
                  >
                    {todo.isComplete ? <HiCheck color="white" /> : null}
                  </Flex>
                  <AccordionButton _hover={{}} as="a" cursor="pointer">
                    <Box
                      flex="1"
                      textAlign="left"
                      display="flex"
                      alignItems="center"
                    >
                      <Heading
                        size="md"
                        mb="1"
                        color={color}
                        as={todo.isComplete ? "s" : "a"}
                      >
                        {todo._title}
                      </Heading>
                    </Box>
                    <AccordionIcon mr="-15px" />
                  </AccordionButton>
                  <Menu>
                    <MenuButton
                      pl="0"
                      pr="3"
                      bg="transparent"
                      _focus={{ outline: "none" }}
                      _hover={{}}
                      _active={{}}
                      as={Button}
                      rightIcon={<BsThreeDots color={headerIconColor} />}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem
                        color={color}
                        icon={<BiEdit fontSize="17px" />}
                        onClick={() => {
                          onOpen();
                          setEdit({
                            id: todo.id,
                            value: todo._title,
                            desc: todo._desc,
                          });
                        }}
                      >
                        Edit
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        icon={<BiTrash fontSize="17px" />}
                        color="red.400"
                        onClick={() => removeTodo(todo.id)}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <AccordionPanel pb={4}>
                  <Text color={color}>{todo._desc}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
};

export default Todo;
