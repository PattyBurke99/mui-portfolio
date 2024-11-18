import { ChangeEvent, useState } from 'react';
import {
  Box, 
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormControl,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
 } from '@mui/material';
import emailjs from '@emailjs/browser';
import { z } from "zod";

import { contentCardWidthLg } from '../constants';

interface IFormData extends Record<string, string>  {
  user_name: string;
  user_email: string;
  message: string;
}

enum MessageState  {
  notSent, sending, sent
}

const FormDataSchema = z.object({
  user_name: z.string().min(3, {
    message: 'Name must be atleast 3 characters!'
  }).max(20, {
    message: 'Name must be less than 20 characters!'
  }),
  user_email: z.string().email({message: 'Invalid email!'}),
  message: z.string().min(20, {
    message: 'Message must be atleast 20 characters!'
  })
});

//Todo: change to react-hook-form or similar library for managing form state
//Did not initally realize how complicated managing the form state would become

function ContactForm() {
    const theme = useTheme();
    const isXlSize: boolean = useMediaQuery(theme.breakpoints.up("xl"));

    const [formData, setFormData] = useState<IFormData>({
      user_name: '',
      user_email: '',
      message: ''
    });

    const [formErrors, setFormErrors] = useState<IFormData>({
      user_name: '',
      user_email: '',
      message: ''
    });

    const [messageState, setMessageState] = useState<MessageState>(MessageState.notSent);

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

        try {
          FormDataSchema.parse(formData);
        } catch (e: any) {
          if (e instanceof z.ZodError) {
            const newErrors: Record<string, string> = {};
            e.errors.forEach((error) => {
              newErrors[error.path[0]] = error.message;
            });
            setFormErrors({...formErrors, ...newErrors});
          }
          return;
        }

        setMessageState(MessageState.sending);
        setFormErrors({      
          user_name: '',
          user_email: '',
          message: ''
        });

        const res = await emailjs.send('service_z0d8ozo', 'template_g57cmfl', formData, {
            publicKey: 'Qfhft5cghRNZ17ZvS',
        })

        setMessageState(MessageState.sent);

        console.log(res);
        //Todo: error handling based on res object
      };

    return (
        <Slide in direction="right" timeout={600}>
          <Card elevation={3} sx={{
            height: '100%',
            width: { lg: 2*parseInt(contentCardWidthLg)},
          }}>
            <CardHeader title={
              <Box sx={{position: 'relative'}}>
                <Typography display="inline" variant="h5">Contact Me</Typography>
              </Box>
            }/>
            <Divider />
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100% - 64px)',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <FormControl 
                fullWidth
                error={!!formErrors.user_name}
              >
                <TextField 
                  id="name"
                  label="Name"
                  variant="outlined"
                  size='small'
                  onChange={onNameChange}
                  error={!!formErrors.user_name}
                  helperText={formErrors.user_name}
                  value={formData.user_name}
                  disabled={messageState === MessageState.sent}
                />
              </FormControl>
              <FormControl 
                fullWidth
                error={!!formErrors.user_email}
              >
                <TextField 
                  id="email"
                  label="Email"
                  variant="outlined"
                  size='small' 
                  onChange={onEmailChange}
                  error={!!formErrors.user_email}
                  helperText={formErrors.user_email}
                  value={formData.user_email}
                  disabled={messageState === MessageState.sent}
                />
              </FormControl>
              <FormControl 
                fullWidth
                error={!!formErrors.message}
              >
                <TextField 
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={isXlSize ? 20 : 12}
                  onChange={onMessageChange}
                  error={!!formErrors.message}
                  helperText={formErrors.message}
                  value={formData.message}
                  disabled={messageState === MessageState.sent}
                />
              </FormControl>
              {(messageState !== MessageState.sent) &&
              <Button onClick={submitForm} sx={{
                backgroundColor: 'secondary.main',
                color: '#fff',
              }}>
                {(messageState === MessageState.notSent) ? 'Send Message'
                : <CircularProgress size="1.5rem"/>}
              </Button>}
              {(messageState === MessageState.sent) &&
                <Button
                  disabled
                  sx={{
                    backgroundColor: 'success.light',
                    color: '#fff'
                  }}
                >
                  Message Sent!
                </Button>
              }
            </CardContent>
          </Card>
        </Slide>
    )
}

export default ContactForm;