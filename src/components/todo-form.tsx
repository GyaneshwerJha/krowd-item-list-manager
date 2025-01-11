import { FaNoteSticky, FaPlus } from "react-icons/fa6";
import { TextField, Button } from "@mui/material";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";

export default function TodoForm({ submit, change, text }) {
  const themeContext = useContext(ThemeContext);
  const { darkTheme } = themeContext;

  // Updated submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!text.trim()) {
      // Do nothing if the input is empty
      return;
    }
    submit(); // Call the submit function if text is not empty
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className={`text-center accordion mb-3 ${darkTheme ? "text-light" : ""}`}>
        <center>
          <FaNoteSticky /> Add Todos
        </center>
      </span>

      <TextField
        label="Todo title"
        onChange={change}
        value={text}
        className="w-100 mt-3"
        sx={{ backgroundColor: "white" }}
      />

      <center>
        <Button
          variant="contained"
          type="submit"
          startIcon={<FaPlus />}
          className="mt-2"
        >
          Add Todo
        </Button>
      </center>
    </form>
  );
}
