// src/App.tsx
import { Typography, Paper } from "@mui/material";
import Ingredients from "./components/ingredients";
import SearchBar from "./components/SearchBar";

function App() {

  return (
    <Paper elevation={8} sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom align="center">
        Hello Scrumptious!
      </Typography>

      <SearchBar onSearch={(query) => console.log(query)} />

      <Ingredients />
    </Paper>
  );
}

export default App;
