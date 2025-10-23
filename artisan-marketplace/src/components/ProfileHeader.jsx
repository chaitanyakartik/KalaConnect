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
  const placeholderDataUrl = (label) => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
        <rect width='100%' height='100%' fill='#f5f5f5'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9e9e9e' font-family='Helvetica, Arial, sans-serif' font-size='16'>${label}</text>
      </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };
  return (
    <Box component="section" aria-labelledby="profile-heading" sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
      {profilePicture ? (
        <Box
          component="img"
          src={profilePicture}
          alt={`${name} profile picture`}
          onError={(e) => {
            e.currentTarget.src = placeholderDataUrl(name || 'Profile');
          }}
          sx={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }}
        />
      ) : (
        <Box component="img" src={placeholderDataUrl(name || 'Profile')} alt={`${name} profile placeholder`} sx={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }} />
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
