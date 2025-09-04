import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the message to your backend or email service
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 6, p: 3, boxShadow: 3, borderRadius: 3, background: '#fff' }}>
      <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom textAlign="center">
        We'd love to hear from you! Fill out the form below and our team will get back to you soon.
      </Typography>
      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thank you for contacting us! We'll respond as soon as possible.
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
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
          label="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
          Send Message
        </Button>
      </form>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Or reach us at: <br />
          <strong>support@powerstore.com</strong> <br />
          <strong>+237 650000001</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
