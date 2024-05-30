import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
  AppBar,
  Container,
  Toolbar,
  Paper,
  TextField,
  Grid,
  Typography,
  Link,
  Button,
  Box,
  Select,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

export default function Checkout() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (value) => {
    alert(JSON.stringify(value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <React.Fragment>
        <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
          <Paper
            variant='outlined'
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant='h6' gutterBottom>
                1.Shipping address    
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label='First name'
                    fullWidth
                    variant='standard'
                    {...register('firstName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label='Last name'
                    fullWidth
                    variant='standard'
                    {...register('lastName')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label='Address line1'
                    fullWidth
                    variant='standard'
                    {...register('address')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label='Address line2'
                    fullWidth
                    variant='standard'
                    {...register('address')}
                  />
                </Grid>
            
              </Grid>
            </Box>

            <Box sx={{ my: 3 }}>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='City'
                    fullWidth
                    variant='standard'
                    {...register('cardName')}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    
                    label='state/province/region'
                    fullWidth
                    variant='standard'
                    {...register('cardName')}
                  />
                </Grid>
            
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='ZIP Postal Code'
                    fullWidth
                    variant='standard'
                    {...register('expDate')}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    label='Country'
                    fullWidth
                    variant='standard'
                    {...register('cvv')}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box>
             
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox defaultChecked {...register('saveForLater')} />
                  }
                  label='Use this address for payment details'
                />
              </FormGroup>
            </Box>
            <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // Aligns items to the right
        mt: 3, // Adds top margin to the container
      }}
    >

            <Button
              type='submit'
              variant='contained'
              sx={{  ml: 1 }}
              
            >
              Next
            </Button>
            </Box>
          </Paper>
        </Container>
      </React.Fragment>
    </form>
  );
}