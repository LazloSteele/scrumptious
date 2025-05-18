import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import IngredientCard from "./IngredientCard";
import SearchBar from "./SearchBar";
import type { Ingredient } from "./types";

const Ingredients: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // Handles the search functionality by fetching ingredients from the API
    // based on the search query. If the query is empty, it fetches all ingredients.
    const handleSearch = async (query: string) => {
        // If the query is empty, fetch all ingredients
        try {
            // Construct affinity query param from selectedIds state
            const affinityParam = selectedIds.length > 0 ? `&affinityTo=${selectedIds.join(",")}` : "";

            const response = await fetch(`${import.meta.env.VITE_API_URL}/ingredients?search=${query}${affinityParam}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setIngredients(data);
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
    };
    
    // Toggles the selection state of an ingredient based on its ID
    // If the ingredient is already selected, it removes it from the selectedIds set
    const toggleSelect = (id: number) => {
      setSelectedIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    };

    // Fetches ingredients based on the affinity to selected IDs when the selectedIds state changes
    // If no IDs are selected, it fetches all ingredients
    useEffect(() => {
      const fetchIngredientsByAffinity = async () => {
        try {
          // Construct the URL based on selectedIds
          // If selectedIds is empty, fetch all ingredients
          const affinityQuery = selectedIds.join(",");
          const url = selectedIds.length > 0
            ? `${import.meta.env.VITE_API_URL}/ingredients?affinityTo=${affinityQuery}`
            : `${import.meta.env.VITE_API_URL}/ingredients`;

          const response = await fetch(url);
          if (!response.ok) throw new Error("Network response was not ok");

          // Parse the response data
          // and update the ingredients state
          const data: Ingredient[] = await response.json();

          if (selectedIds.length > 0) {
            // Fetch full details of selected ingredients if needed
            // (Assuming you already have the full Ingredient objects of selected items locally,
            // otherwise you might need to fetch them individually or from a cache)

            // Here: filter out selected ingredients that are already included in data
            const missingSelectedIds = selectedIds.filter(
              (id) => !data.some((ingredient) => ingredient.id === id)
            );

            // Fetch full objects for those missing selected ingredients
            const fetchMissingIngredients = await Promise.all(
              missingSelectedIds.map(async (id) => {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/ingredients/${id}`);
                if (!res.ok) throw new Error(`Failed to fetch ingredient ${id}`);
                return await res.json();
              })
            );
            // Combine and set
            setIngredients([...fetchMissingIngredients, ...data]);
          } else {
            setIngredients(data);
          }
        } catch (error) {
          console.error("Error fetching ingredients:", error);
        }
      };

      fetchIngredientsByAffinity();
      }, [selectedIds]);
    
    return (
        <Box sx={{ 
            padding: 4,
            minWidth: "100%",
            boxSizing: "border-box"
          }}
        >
          <SearchBar onSearch={handleSearch} />

          <Grid container spacing={2} justifyContent="flex-start" sx={{ width: "100%", marginTop: 2, flexShrink: 0 }}>
            {ingredients.map((ingredient) => (
              <Grid key={ingredient.id}>
                <IngredientCard
                  name={ingredient.name}
                  selected={selectedIds.includes(ingredient.id)}
                  onClick={() => toggleSelect(ingredient.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
};

export default Ingredients;