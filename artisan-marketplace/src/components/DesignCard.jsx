import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DesignCard({ design }) {
  const navigate = useNavigate();

  const openItem = () => {
    navigate(`/item/${design.id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={openItem} onKeyDown={(e) => e.key === 'Enter' && openItem()}>
        <CardMedia component="img" image={design.image} alt={design.name} sx={{ height: 150, objectFit: 'cover' }} />
        <CardContent>
          <Typography variant="h6" align="center">
            {design.name}
          </Typography>
          {design.estimatedPrice && (
            <Typography variant="body2" color="text.secondary" align="center">
              Est. Price: {design.estimatedPrice}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
