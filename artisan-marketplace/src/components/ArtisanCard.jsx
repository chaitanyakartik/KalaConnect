// src/components/ArtisanCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function ArtisanCard({ artisan, estimatedPrice }) {
  return (
    <Card sx={{ ':hover': { boxShadow: 6 } }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {artisan.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          From: {artisan.origin}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {artisan.bio}
        </Typography>
        <Typography variant="h6" color="primary">
          Est. Price: {estimatedPrice}
        </Typography>
        <Button size="small" variant="contained" sx={{ mt: 1 }}>
          View Designs
        </Button>
      </CardContent>
    </Card>
  );
}

export default ArtisanCard;