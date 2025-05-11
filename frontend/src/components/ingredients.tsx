import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import type { Ingredient } from "./types";
import IngredientCard from "./IngredientCard";

const Ingredients: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    
    useEffect(() => {
        async function fetchIngredients() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/ingredients`);
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setIngredients(data);
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
        }
    
        fetchIngredients();
    }, []);
    
    return (
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            {ingredients.map(ingredient => (
              <Grid item key={ingredient.id}>
                <IngredientCard name={ingredient.name} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
};

export default Ingredients;