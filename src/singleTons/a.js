
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';
import { observer } from "mobx-react-lite"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import businessData from './ee';
import { pink } from '@mui/material/colors';
import { IconButton } from '@mui/material';

const theme = createTheme();

const BusinessDetails = observer(() => {

    const [edit, setEdit] = useState(false);
    const { register, handleSubmit } = useForm();
    const business = businessData.Data;

    function handleSubmitForm(event) {
        businessData.createOrUpdateBusinessdata(event);
        setEdit(false);
    };

    function handleSubmitEdit(event) {
        event.preventDefault();
        setEdit(true);
    };

    return (
        <>   
            <ThemeProvider theme={theme}  >
                <Container component="main" maxWidth="xs" sx={{ background: "pink" }} >
                    {edit ?
                        <Box component="form" onSubmit={handleSubmit(handleSubmitForm)} noValidate sx={{ mt: 15, ml: 1 }}>
                            <TextField
                                {...register('name')}
                                id="BusinessName"
                                label="Business Name"
                                defaultValue={business.name}
                                sx={{ mt: 5, mb: 2 }}
                                variant="standard"
                            />
                            <TextField
                                {...register('address')}
                                id="Address"
                                label="Address"
                                defaultValue={business.address}
                                sx={{ mb: 2 }}
                                variant="standard"
                            />
                            <TextField
                                {...register('phone')}
                                id="phone"
                                label="phone"
                                defaultValue={business.phone}
                                sx={{ mb: 2 }}
                                variant="standard"
                            />
                            <TextField
                                {...register('owner')}
                                id="owner"
                                label="owner"
                                defaultValue={business.owner}
                                sx={{ mb: 2 }}
                                variant="standard"
                            />
                            <TextField
                                {...register('logo')}
                                id="logo"
                                label="logo"
                                defaultValue={business.logo}
                                sx={{ mb: 2 }}
                                variant="standard"
                            />
                            <TextField
                                {...register('description')}
                                id="description"
                                label="description"
                                defaultValue={business.description}
                                sx={{ mb: 2 }}
                                variant="standard"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save
                            </Button>
                        </Box> :
                        <Box component="form" onSubmit={handleSubmitEdit} noValidate sx={{ mt: 9 }}>
                            <br></br>
                            <h1>Detailes</h1>
                            <p>Name: <strong>{business.name}</strong></p>
                            <p>Address: <strong>{business.address}</strong></p>
                            <p>Phone: <strong>{business.phone}</strong></p>
                            <p>Owner: <strong>{business.owner}</strong></p>
                            <p>Logo: </p>
                            <img src={business.logo} alt="logo" style={{ height: '150px' }} />
                            <p>Description: <strong>{business.description}</strong></p>
                            <IconButton sx={{ color: pink[500], mr: 43, mt: 3, mb: 2 }} aria-label="add an alarm" type="submit" variant="contained">
                                <EditIcon />
                            </IconButton>
                        </Box>
                    }
                </Container>
            </ThemeProvider>
        </>
    );
})

export default BusinessDetails;