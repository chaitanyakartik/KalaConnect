// src/pages/ArtisanListPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { artisans } from '../data/db';
import { Container, Typography, Grid } from '@mui/material';
import ArtisanCard from '../components/ArtisanCard'; // We will create this component next

function ArtisanListPage() {
  const { itemId } = useParams();

  // Find all artisans who craft the selected item
  const relevantArtisans = artisans.filter(artisan => 
    artisan.crafts.some(craft => craft.itemId === itemId)
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Artisans for {itemId.replace('-', ' ')}
      </Typography>
      <Grid container spacing={4}>
        {relevantArtisans.length > 0 ? (
          relevantArtisans.map(artisan => {
            const craft = artisan.crafts.find(c => c.itemId === itemId);
            return (
              <Grid item key={artisan.id} xs={12} md={6}>
                <ArtisanCard 
                  artisan={artisan} 
                  estimatedPrice={craft.estimatedPrice} 
                />
              </Grid>
            );
          })
        ) : (
          <Typography>No artisans found for this item yet.</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default ArtisanListPage;