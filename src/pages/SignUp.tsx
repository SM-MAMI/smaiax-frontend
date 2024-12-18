import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Card, CardContainer } from '../components/auth/CardContainer.tsx';
import { RegisterDto } from '../api/openAPI';
import { useValidation } from '../hooks/useValidation.ts';
import { useAuthenticationService } from '../hooks/services/useAuthenticationService.ts';
import { useSnackbar } from '../hooks/useSnackbar.ts';
import { SmaiaxTextAndDotsIcon } from '../assets/SmaiaxTextAndDots.tsx';
import { SmaiaXAbsoluteRoutes } from '../constants/constants.ts';

export default function SignUp() {
    const {
        emailError,
        emailErrorMessage,
        passwordError,
        passwordErrorMessage,
        firstnameError,
        firstnameErrorMessage,
        lastnameError,
        lastnameErrorMessage,
        usernameError,
        usernameErrorMessage,
        validateEmail,
        validatePassword,
        validateFirstname,
        validateLastname,
        validateUsername,
    } = useValidation();

    const { register } = useAuthenticationService();

    const navigate = useNavigate();

    const { showSnackbar } = useSnackbar();

    const validateInputs = (registerDto: RegisterDto) => {
        let isValid = true;

        if (!validateEmail(registerDto.email)) {
            isValid = false;
        }

        if (!validatePassword(registerDto.password)) {
            isValid = false;
        }

        if (!validateFirstname(registerDto.name.firstName)) {
            isValid = false;
        }

        if (!validateLastname(registerDto.name.lastName)) {
            isValid = false;
        }

        if (!validateUsername(registerDto.username)) {
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const registerDto: RegisterDto = {
            email: data.get('email') as string,
            password: data.get('password') as string,
            username: data.get('username') as string,
            name: {
                firstName: data.get('firstname') as string,
                lastName: data.get('lastname') as string,
            },
        };

        if (!validateInputs(registerDto)) {
            return;
        }

        try {
            await register(registerDto);

            showSnackbar('success', 'Successfully signed up!');
            navigate(SmaiaXAbsoluteRoutes.SIGN_IN);
        } catch (error) {
            showSnackbar('error', 'Registration failed!');
            console.error('Registration failed:', error);
        }
    };

    return (
        <Box sx={{ height: '100%', display: 'flex' }}>
            <CardContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <SmaiaxTextAndDotsIcon />

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                            textAlign: 'center',
                        }}>
                        Sign up
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={(event) => {
                            void handleSubmit(event);
                        }}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="firstname">First name</FormLabel>
                            </Box>
                            <TextField
                                fullWidth
                                id="firstname"
                                placeholder="Jon"
                                name="firstname"
                                autoComplete="firstname"
                                error={firstnameError}
                                helperText={firstnameErrorMessage}
                                color={firstnameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="lastname">Last name</FormLabel>
                            </Box>
                            <TextField
                                fullWidth
                                id="lastname"
                                placeholder="Snow"
                                name="lastname"
                                autoComplete="lastname"
                                error={lastnameError}
                                helperText={lastnameErrorMessage}
                                color={lastnameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="username">Username</FormLabel>
                            </Box>
                            <TextField
                                fullWidth
                                id="username"
                                placeholder="JohnSnow42"
                                name="username"
                                autoComplete="username"
                                error={usernameError}
                                helperText={usernameErrorMessage}
                                color={usernameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                            </Box>
                            <TextField
                                fullWidth
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                            </Box>
                            <TextField
                                fullWidth
                                id="password"
                                placeholder="••••••"
                                name="password"
                                autoComplete="new-password"
                                variant="outlined"
                                type="password"
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <Divider />
                        <Button type="submit" fullWidth variant="contained">
                            Sign up
                        </Button>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{ textAlign: 'center', marginRight: 1 }}>
                                Already have an account?
                            </Typography>
                            <Typography>
                                <Link
                                    component={RouterLink}
                                    to={SmaiaXAbsoluteRoutes.SIGN_IN}
                                    variant="body2"
                                    sx={{ alignSelf: 'center' }}>
                                    Sign in
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </CardContainer>
        </Box>
    );
}
