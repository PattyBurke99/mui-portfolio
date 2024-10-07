import { ChangeEvent, useState } from 'react';
import {
  Box, 
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Slide,
  TextField,
  Typography
 } from '@mui/material';
import emailjs from '@emailjs/browser';

import { contentCardWidthMd, contentCardWidthLg } from '../constants';

interface IFormData extends Record<string, string>  {
  user_name: string;
  user_email: string;
  message: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<IFormData>({
      user_name: '',
      user_email: '',
      message: ''
    });

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
         user_name: e.target.value
      })
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
         user_email: e.target.value
      })
    }

    const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
         message: e.target.value
      })
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
    
        const res = await emailjs.send('service_z0d8ozo', 'template_g57cmfl', formData, {
            publicKey: 'Qfhft5cghRNZ17ZvS',
        })

        console.log(res);
      };

    return (
        <Slide in direction="right" timeout={600}>
          <Card elevation={3} sx={{
            width: { md: 2*parseInt(contentCardWidthMd), lg: 2*parseInt(contentCardWidthLg)},
          }}>
            <CardHeader title={
              <Box sx={{position: 'relative'}}>
                  <Typography display="inline" variant="h5">Contact Me</Typography>
              </Box>
            }/>
            <CardContent>
              <FormControl fullWidth sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <TextField 
                  id="name"
                  label="Name"
                  variant="outlined"
                  size='small'
                  onChange={onNameChange}
                />
                <TextField 
                  id="email"
                  label="Email"
                  variant="outlined"
                  size='small' 
                  onChange={onEmailChange}
                />
                <TextField 
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={6}
                  onChange={onMessageChange}
                />
                <Button onClick={submitForm}>Submit</Button>
              </FormControl>
            </CardContent>
          </Card>
        </Slide>
    )
}

export default ContactForm;