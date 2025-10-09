// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/db';
import { Container, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';

function CategoryPage() {
  const { categoryId } = useParams(); // Gets 'pottery' from the URL '/category/pottery'
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <Typography variant="h4">Category not found!</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" sx={{ my: 4 }}>
        {category.name}
      </Typography>
      <List component="nav" sx={{ bgcolor: 'background.paper', border: '1px solid #ddd' }}>
        {category.items.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItemButton component={Link} to={`/item/${item.id}`}>
              <ListItemText primary={item.name} />
            </ListItemButton>
            {index < category.items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default CategoryPage;