import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
    <CircularProgress />
  </div>
);

export default Loader;
