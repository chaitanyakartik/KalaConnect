// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/db';
import { Container, Typography, Card, CardActionArea, CardMedia, CardContent, Box } from '@mui/material';
import styles from './CategoryPage.module.css';

function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" color="text.secondary">
          Category not found!
        </Typography>
      </Container>
    );
  }

  return (
    <>
      {/* HEADER / HERO SECTION */}
      <Box 
        className={styles.categoryHeader} 
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <Box className={styles.headerContent}>
          <Typography variant="h2" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
            {category.name}
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '700px', margin: '0 auto' }}>
            {category.description}
          </Typography>
        </Box>
      </Box>

      {/* GRID SECTION */}
      <Container sx={{ py: 6 }}>
        <Box className={styles.cardGrid}>
          {category.items.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id} className={styles.cardLink}>
              <Card className={styles.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    className={styles.cardImage}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" textAlign="center">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default CategoryPage;
