// src/App.tsx
import { Button, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // check for .env wiring
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}\ingredients`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Data fetched from API:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello Scrumptious!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
