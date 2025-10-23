import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import db from '../data/db';
import ProfileHeader from '../components/ProfileHeader';
import DesignCard from '../components/DesignCard';

const ArtisanProfilePage = () => {
  const { artisanId } = useParams();
  // artisan IDs in db may be numeric; normalize both sides to string for comparison
  const artisan = db.artisans.find((a) => String(a.id) === String(artisanId));

  if (!artisan) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" role="alert">
          Artisan not found
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The artisan you are looking for does not exist or may have been removed.
        </Typography>
      </Container>
    );
  }

  // Map crafts (which include itemId and estimatedPrice) to full item objects
  const designs = artisan.crafts
    .map((craft) => {
      for (const category of db.categories) {
        const item = category.items.find((i) => i.id === craft.itemId);
        if (item) return { ...item, estimatedPrice: craft.estimatedPrice };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ProfileHeader
            name={artisan.name}
            origin={artisan.origin}
            bio={artisan.bio}
            profilePicture={artisan.profilePicture}
          />
        </Grid>
      </Grid>

      <Typography variant="h3" sx={{ mt: 6, mb: 3 }} id="gallery-heading">
        All Designs by {artisan.name}
      </Typography>

      <Grid container spacing={3} aria-labelledby="gallery-heading">
        {designs.map((design) => (
          <Grid item xs={12} sm={6} md={4} key={design.id}>
            <DesignCard design={design} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArtisanProfilePage;