// import * as React from 'react';
// import { auth } from '../firebase-config';
// import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Alert, Collapse } from '@mui/material';
// import { useState } from 'react';
// import pic from '../assets/photo_login.avif';
// import { setDoc } from 'firebase/firestore';
// import { doc } from 'firebase/firestore';
// import { firestore } from 'firebase/firestore';

// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from 'firebase/auth';

// function SignInSide({ setIsAuth }) {
//   const navigate = useNavigate();
//   const [alert, setAlert] = useState(false);
//   const [alert2, setAlert2] = useState(false);
//   const [alert3, setAlert3] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get('email');
//     const password = data.get('password');

//     if (email === '' || password === '') {
//       setAlert(true);
//       return;
//     }

//     setAlert(false);
//     setAlert2(true);
//     setAlert3(false);

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await setDoc(doc(firestore,'users',userCredential.user.uid),{
//         // name: signupData.name,
//         email: signupData.email,
//       });
      
//       setIsAuth(true);
//       Navigate('/');


//       navigate(window.location.pathname, { replace: true });

//       if (email === 'auth@auth.com') {
//         navigate('/auth');
//       } else if (email === 'comphod@gmail.com') {
//         navigate('/hod');
//       } else if (email === 'classauth@gmail.com') {
//         navigate('/classauth');
//       } else {
//         navigate('/stu');
//       }
//     } catch (err) {
//       setAlert2(false);
//       setAlert3(true);
//       console.error(err.message);
//     }
//   };

//   const defaultTheme = createTheme();

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={6}
//           sx={{
//             backgroundImage: `url(${pic})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign In
//             </Typography>
//             <Collapse in={alert}>
//               <Alert severity="error">Fill in the complete details</Alert>
//             </Collapse>
//             <Collapse in={alert2}>
//               <Alert severity="success">Authenticating. Please Wait</Alert>
//             </Collapse>
//             <Collapse in={alert3}>
//               <Alert severity="error">Error sign in. Check your credentials</Alert>
//             </Collapse>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

// export default SignInSide;
