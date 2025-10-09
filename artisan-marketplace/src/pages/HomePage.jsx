// src/pages/HomePage.jsx
import React from 'react';
import { categories } from '../data/db';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

function HomePage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Explore Authentic Crafts
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', ':hover': { boxShadow: 6 } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.name}
                  </Typography>
                  <Typography>
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;