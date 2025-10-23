import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box, Button, Chip, Divider } from '@mui/material';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import db from '../data/db';

const ItemDetailPage = () => {
  const { itemId } = useParams();

  // Find the item across all categories
  let item = null;
  let category = null;
  for (const cat of db.categories) {
    const foundItem = cat.items.find((i) => i.id === itemId);
    if (foundItem) {
      item = foundItem;
      category = cat;
      break;
    }
  }

  // Find all artisans who make this item
  const artisansMakingItem = db.artisans.filter((artisan) =>
    artisan.crafts.some((craft) => craft.itemId === itemId)
  );

  if (!item) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" role="alert">
          Item not found
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The item you are looking for does not exist or may have been removed.
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ mt: 2 }}>
            Back to Home
          </Button>
        </Link>
      </Container>
    );
  }

  const placeholderDataUrl = (label) => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>
        <rect width='100%' height='100%' fill='#f5f5f5'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9e9e9e' font-family='Helvetica, Arial, sans-serif' font-size='20'>${label}</text>
      </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Item Header */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.name}
              onError={(e) => {
                e.currentTarget.src = placeholderDataUrl(item.name || 'Item');
              }}
              sx={{ height: 400, objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
            {item.name}
          </Typography>
          <Chip label={category?.name || 'Item'} color="primary" sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            Category: <Link to={`/category/${category?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{category?.name}</Link>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" sx={{ mb: 3 }}>
            This item is handcrafted with care by skilled artisans. Reach out to the artisan directly for inquiries, customizations, or orders.
          </Typography>
        </Grid>
      </Grid>

      {/* Artisans Section */}
      <Typography variant="h4" sx={{ mb: 3, mt: 4 }}>
        Artisans Making This Item
      </Typography>

      {artisansMakingItem.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No artisans currently listed for this item.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {artisansMakingItem.map((artisan) => {
            const craftForItem = artisan.crafts.find((c) => c.itemId === itemId);
            return (
              <Grid item xs={12} md={6} key={artisan.id}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {artisan.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    📍 {artisan.origin}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {artisan.bio}
                  </Typography>

                  {/* Price */}
                  {craftForItem?.estimatedPrice && (
                    <Box sx={{ mb: 2, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Estimated Price
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {craftForItem.estimatedPrice}
                      </Typography>
                    </Box>
                  )}

                  <Divider sx={{ my: 2 }} />

                  {/* Contact Buttons */}
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Contact Artisan
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {artisan.whatsapp && (
                      <Button
                        variant="contained"
                        size="small"
                        href={`https://wa.me/${artisan.whatsapp.replace(/\s/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<MessageCircle size={16} />}
                        sx={{ bgcolor: '#25D366' }}
                      >
                        WhatsApp
                      </Button>
                    )}
                    {artisan.email && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={`mailto:${artisan.email}`}
                        startIcon={<Mail size={16} />}
                      >
                        Email
                      </Button>
                    )}
                    {artisan.phone && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={`tel:${artisan.phone}`}
                        startIcon={<Phone size={16} />}
                      >
                        Call
                      </Button>
                    )}
                  </Box>

                  {/* Link to artisan profile */}
                  <Link to={`/artisan/${artisan.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="text" size="small">
                      View All Designs →
                    </Button>
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Back to Category */}
      <Box sx={{ mt: 4 }}>
        <Link to={`/category/${category?.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined">
            ← Back to {category?.name}
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default ItemDetailPage;
