import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

const Button: React.FC<MuiButtonProps> = (props) => (
  <MuiButton variant="contained" color="primary" {...props} />
);

export default Button;
