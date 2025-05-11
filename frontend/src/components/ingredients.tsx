import React, { useEffect, useState } from "react";
import type { Ingredient } from "./types";

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
        <div>
        <h1>Ingredients</h1>
        <ul>
            {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
            ))}
        </ul>
        </div>
    );
};

export default Ingredients;