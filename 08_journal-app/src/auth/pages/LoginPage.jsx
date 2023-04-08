import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
    email: '',
    password: ''
}

export const LoginPage =() => {

    const { email, password, onInputChange } = useForm( formData )

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector( (state) => state.auth )

    const isAuthenticating  = useMemo(() => status === 'checking', [ status ])

    const onSubmit = () => {
        event.preventDefault();
        dispatch( startLoginWithEmailPassword(email, password) )
    }

    const onGoogleSignIn = () => dispatch( startGoogleSignIn() )
    

    return ( 
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster" >
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" fullWidth name='email' value={ email } onChange={ onInputChange }></TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField label="Password" type="password" placeholder="password" fullWidth name='password' value={ password } onChange={ onInputChange }></TextField>
                    </Grid>
                    <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } sx={{ mt: 1 }}>
                           <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button disabled={ isAuthenticating } type="submit" variant="contained" fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button disabled={ isAuthenticating } variant="contained" fullWidth onClick={ onGoogleSignIn }>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Create an account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

                

    );
}

export default LoginPage;