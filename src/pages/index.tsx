import styled from "styled-components";
import React, { useState } from "react";
import { Form } from "@/components/form";
import { Heading } from "@/styles/heading";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

const todos: Todo[] = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
  {
    id: 5,
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 31,
  },
  {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39,
  },
];

// Map => anything e.g. an object, a boolean, a string
// Filter => boolean
// Find => boolean

export default function Home() {
  const [counter, setCounter] = useState(0);

  const [number, setNumber] = useState<number>(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  const setCounterToNumber = () => {
    setCounter(number);
  };

  const completedTodos = todos.filter((todo) => {
    return todo.completed;
  }); // Return an array

  const incompletedTodos = todos.filter(({completed}) => {
    return !completed;
  });
  // Return an array
  // Return usually less items than the original array but it could return exact same number of items
  // This will not change the array items

  const bakingTodo = todos.find((todo) => {
    return todo.todo === "Bake pastries for me and neighbor";
  }); // Return just one item out of the array

  const movieTodo = todos.find((todo) => {
    return todo.todo === "Watch a classic movie";
  });

  return (
    <MainContainer color="white">2
      <Container padding="10px" color="#6400AA">
        <Heading fontSize={30} padding="5px" align="center">
          My Example Webpage
        </Heading>
        <SubHeading fontSize="25px" paddingBottom="5px" align="center">
          Welcome to my example webpage...
        </SubHeading>
      </Container>

      <SectionContainer color="light grey" padding="5px">
        <SectionTitle fontSize="20px" marginTop="5px">
          Main Body Title
        </SectionTitle>
        <SectionText fontSize="18px" lineHeight="1.5" marginTop="5px">
          This is a section where a body of text can be added.
        </SectionText>
        <Button onClick={add}>Add</Button>
        <Button onClick={subtract}>Subtract</Button>
        <Button onClick={reset}>Reset</Button>
      </SectionContainer>

      <input
        type="number"
        min={0}
        value={number}
        onChange={(e) => {
          setNumber(e.target.valueAsNumber);
        }}
      />
      <Button onClick={setCounterToNumber}>Set</Button>

      <Form buttonText="Submit" />

      <>
        {todos.map((todo) => {
          return (
            <div>
              <p>{todo.todo}</p>
            </div>
          );
        })} {/* Return an array, Return the exact same number of items as the original array. Returns something different than the original input */}
      </>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: ${(props) => props.color};
`;

const Container = styled.div<{ padding: string }>`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
`;

const SubHeading = styled.h2<{
  fontSize: string;
  paddingBottom: string;
  align: string;
}>`
  font-size: ${(props) => props.fontSize};
  padding-bottom: ${(props) => props.paddingBottom};
  text-align: ${(props) => props.align};
`;

const SectionContainer = styled.div<{ padding: string }>`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding};
`;

const SectionTitle = styled.h3<{ fontSize: string; marginTop: string }>`
  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
`;

const SectionText = styled.p<{
  fontSize: string;
  lineHeight: string;
  marginTop: string;
}>`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.marginTop};
  border: groove;
`;

const Button = styled.button`
  background-color: #6400aa;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }

  &:active {
    background-color: black;
  }
`;
