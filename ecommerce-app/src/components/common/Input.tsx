import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const Input: React.FC<TextFieldProps> = (props) => (
  <TextField variant="outlined" fullWidth margin="normal" {...props} />
);

export default Input;
