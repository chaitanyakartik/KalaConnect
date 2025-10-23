import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import db from '../data/db';

const ArtisanProfilePage = () => {
  const { artisanId } = useParams();
  // artisan IDs in db may be numeric; normalize both sides to string for comparison
  const artisan = db.artisans.find((a) => String(a.id) === String(artisanId));

  if (!artisan) {
    return <Typography variant="h4">Artisan not found</Typography>;
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
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          {artisan.profilePicture && (
            <Box
              component="img"
              src={artisan.profilePicture}
              alt={`${artisan.name}'s profile`}
              sx={{
                width: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1">
            {artisan.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            From: {artisan.origin}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {artisan.bio}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h3" sx={{ mt: 6, mb: 3 }}>
        All Designs by {artisan.name}
      </Typography>

      <Grid container spacing={3}>
        {designs.map((design) => (
          <Grid item xs={12} sm={6} md={4} key={design.id}>
            <Link to={`/item/${design.id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  image={design.image}
                  alt={design.name}
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
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArtisanProfilePage;