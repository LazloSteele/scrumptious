// src/components/IngredientCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type IngredientCardProps = {
  name: string;
};

const IngredientCard: React.FC<IngredientCardProps> = ({ name }) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 120,
        margin: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
        },
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
