"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  const [todo, setTodo] = useState(""); // State for the todo input field
  const [todos, setTodos] = useState([]); // State for the list of todos

  // Handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Handle adding a new todo in todos array list
  const handleAddToDo = () => {
    if (todo.trim()) {
      setTodos((prev) => [...prev, todo]);
      setTodo(""); // Clear input field after adding
    }
  };

  // Handle deleting a specific todo specific using todo index
  const handleToDoDelete = (i) => {
    const updatedTodos = todos.filter((_, index) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter ToDo"
            variant="outlined"
            value={todo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            sx={{ height: "100%" }}
            onClick={handleAddToDo}
          >
            Add ToDo
          </Button>
        </Grid>

        {/* Display the todo list */}
        <Grid item xs={12}>
          <List>
            {todos.map((todo, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleToDoDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  border: 1,
                  my: 2,
                }}
              >
                <ListItemText primary={todo} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
