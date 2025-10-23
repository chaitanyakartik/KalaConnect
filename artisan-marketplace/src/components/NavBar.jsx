import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import db from '../data/db';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function NavBar() {
  const navigate = useNavigate();
  const categories = db.categories || [];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (e) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const goToCategory = (categoryId) => {
    closeMenu();
    navigate(`/category/${categoryId}`);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#bf360c' }}>
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
          KalaConnect
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" onClick={openMenu} endIcon={<ArrowDropDownIcon />}>
            Categories
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
            {categories.map((c) => (
              <MenuItem key={c.id} onClick={() => goToCategory(c.id)}>
                {c.name}
              </MenuItem>
            ))}
          </Menu>
          {/* Artisans listing is accessible from category pages */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
