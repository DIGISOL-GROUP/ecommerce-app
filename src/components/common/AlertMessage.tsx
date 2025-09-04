import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertMessageProps {
  severity?: 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ severity = 'info', children }) => (
  <Alert severity={severity} sx={{ my: 2 }}>
    {children}
  </Alert>
);

export default AlertMessage;
