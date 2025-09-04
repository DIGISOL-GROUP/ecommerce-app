import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

const userTypes = [
  { label: 'Customer', value: 'customer' },
  { label: 'Admin', value: 'admin' },
];

const Login: React.FC = () => {
  const [userType, setUserType] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      setSuccess(false);
      return;
    }
    if (userType === 'admin' && email === 'admin@example.com' && password === 'admin') {
      setSuccess(true);
      setError('');
    } else if (userType === 'customer' && email === 'john@example.com' && password === '123') {
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid credentials.');
      setSuccess(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)' }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, minWidth: 350, maxWidth: 400 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
          Login
        </Typography>
        <Tabs
          value={userType}
          onChange={(_, val) => setUserType(val)}
          centered
          sx={{ mb: 3 }}
        >
          {userTypes.map(type => (
            <Tab key={type.value} label={type.label} value={type.value} />
          ))}
        </Tabs>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>Login successful!</Alert>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
            Login
          </Button>
        </form>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Demo credentials:<br />
            <strong>Customer:</strong> john@example.com / 123<br />
            <strong>Admin:</strong> admin@example.com / admin
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
