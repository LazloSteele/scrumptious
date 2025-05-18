// src/components/IngredientCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface IngredientCardProps {
  name: string;
  selected: boolean;
  onClick: () => void;
};

const IngredientCard: React.FC<IngredientCardProps> = ({ name, selected, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 200,
        height: 120,
        margin: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: "pointer",
        border: selected ? "1px solid #1976d2" : "1px solid #f5f5f5",
        backgroundColor: selected ? "#e3f2fd" : "#fff",
        transition: "all 0.2s ease-in-out",
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
        },
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IngredientCard;
