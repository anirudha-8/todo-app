"use client";

import { useState } from "react";

import { Box, Button, Grid, Grid2, TextField } from "@mui/material";

export default function Home() {
  // state for the todo input field
  const [todo, setTodo] = useState("");

  // state for the list of todos
  const [todos, setTodos] = useState([]);

  // handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  // handle button click
  const handleAddToDo = () => {

    // add new todo to the list
    setTodos(prev => [...prev, todo]);

    // clear the input field after adding
    setTodo("");
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={todo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "100%",
            }}
            onClick={handleAddToDo}
          >
            Add ToDo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
