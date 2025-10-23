import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * ProfileHeader
 * Props:
 * - name
 * - origin
 * - bio
 * - profilePicture
 */
export default function ProfileHeader({ name, origin, bio, profilePicture }) {
  return (
    <Box component="section" aria-labelledby="profile-heading" sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
      {profilePicture && (
        <Box
          component="img"
          src={profilePicture}
          alt={`${name} profile picture`}
          sx={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }}
        />
      )}
      <Box>
        <Typography id="profile-heading" component="h1" variant="h4">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          From: {origin}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {bio}
        </Typography>
      </Box>
    </Box>
  );
}
