import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Grid , Button, TextField} from "@mui/material";


function AddTodo({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
      description: description,
    };

    setData((prevTodos) => [...prevTodos, newTodo]);

    setTitle("");
    setDescription("");
  };

  return (
    <Grid container sx={{ width: "100%", margin: "20px 0" }}>
      <TextField
        fullWidth
        value={title}
        sx={{ margin: "10px 0", background: "#fff" }}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ margin: "10px 0" , background: "#fff"}}
        value={description}
        fullWidth
        multiline
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        endIcon={<AddIcon />}
        onClick={handleAddTodo}
      >
        Add
      </Button>
    </Grid>
  );
}

export default AddTodo;
