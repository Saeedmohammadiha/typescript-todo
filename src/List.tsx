import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Paper,
  Box
} from "@mui/material";


enum FilterType {
  All,
  Completed,
  Incomplete,
}



function List({
  data,
  setData,
}: {
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [filter, setFilter] = useState(FilterType.All);

  const handleCheckboxChange = (id: number) => {
    setData((prevTodos) => {
      return prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      );
    });
  };

  const handleFilterChange = (event: SelectChangeEvent<FilterType>) => {
    setFilter(Number(event.target.value));
  };

  const filteredTodos = data.filter((todo) => {
    if (filter === FilterType.Completed) {
      return todo.completed;
    } else if (filter === FilterType.Incomplete) {
      return !todo.completed;
    }
    return true;
  });

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth sx={{background: "#fff"}} >
          <InputLabel id="Filter">Filter</InputLabel>
          <Select
            labelId="Filter"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={(e) => handleFilterChange(e)}
          >
            <MenuItem value={FilterType.All}>All</MenuItem>
            <MenuItem value={FilterType.Completed}>Completed</MenuItem>
            <MenuItem value={FilterType.Incomplete}>Incomplete</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={4}>
          <Paper sx={{ padding: "1rem", margin: "10px 0" }}>
            {data?.length !== 0 ? (
              filteredTodos.map((todo) => {
                return (
                  <Grid
                    key={todo.id}
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6">{todo.title}</Typography>
                    {todo.description}
                    <Checkbox
                      color="success"
                      checked={todo.completed}
                      onClick={() => handleCheckboxChange(todo.id)}
                    />
                  </Grid>
                );
              })
            ) : (
              <Typography>No Todos</Typography>
            )}
          </Paper>
        </Stack>
      </Box>
    </>
  );
}

export default List;
