import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DesignCard({ design }) {
  const navigate = useNavigate();

  const openItem = () => {
    navigate(`/item/${design.id}`);
  };

  const placeholderDataUrl = (label) => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
        <rect width='100%' height='100%' fill='#f5f5f5'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9e9e9e' font-family='Helvetica, Arial, sans-serif' font-size='20'>${label}</text>
      </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={openItem} onKeyDown={(e) => e.key === 'Enter' && openItem()}>
        <CardMedia
          component="img"
          image={design.image}
          alt={design.name}
          onError={(e) => {
            e.currentTarget.src = placeholderDataUrl(design.name || 'Image');
          }}
          sx={{ height: 150, objectFit: 'cover' }}
        />
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
