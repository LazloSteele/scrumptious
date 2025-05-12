import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    onSearch: (query: string) => void;
    }

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setQuery(newValue);
        onSearch(newValue);
    };



    return (
        <TextField
            variant="outlined"
            placeholder="Search ingredients..."
            value={query}
            onChange={handleInputChange}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    style: {
                        padding: "10px",
                        borderRadius: "4px",
                        backgroundColor: "#f5f5f5",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                }
            }}
            fullWidth
        />
    );
};

export default SearchBar;
// src/components/SearchBar.tsx