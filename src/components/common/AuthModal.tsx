import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Login from '../../pages/Login';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const AuthModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [step, setStep] = useState<'choose' | 'login' | 'register'>('choose');

  const handleChoose = (option: 'login' | 'register') => {
    setStep(option);
  };

  const handleBack = () => {
    setStep('choose');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {step === 'choose' && (
          <>
            <Typography variant="h6" textAlign="center" gutterBottom>
              Welcome to PowerStore
            </Typography>
            <Typography variant="body1" textAlign="center" gutterBottom>
              Please choose an option:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Button variant="contained" color="primary" onClick={() => handleChoose('login')}>Login</Button>
              <Button variant="outlined" color="secondary" onClick={() => handleChoose('register')}>Register</Button>
            </Box>
          </>
        )}
        {step === 'login' && (
          <>
            <Button onClick={handleBack} sx={{ mb: 2 }}>&larr; Back</Button>
            <Login />
          </>
        )}
        {step === 'register' && (
          <>
            <Button onClick={handleBack} sx={{ mb: 2 }}>&larr; Back</Button>
            <Typography variant="h5" textAlign="center" gutterBottom>Register</Typography>
            <form
              onSubmit={e => {
                e.preventDefault();
                // Registration logic can be added here
                setStep('choose');
                alert('Registration successful!');
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <input type="text" placeholder="Name" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
                <input type="email" placeholder="Email" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
                <input type="password" placeholder="Password" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
                <input type="tel" placeholder="Phone" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
                <select required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }}>
                  <option value="">Select Role</option>
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
                <Button type="submit" variant="contained" color="primary">Register</Button>
              </Box>
            </form>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default AuthModal;
