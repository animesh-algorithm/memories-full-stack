import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'

import useStyles from './styles'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const classes = useStyles()
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='firstName' label='First Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' half handleChange={handleChange} type='password' /> }
                         <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignup ? 'Sign Up': 'Sign in'}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In': "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
