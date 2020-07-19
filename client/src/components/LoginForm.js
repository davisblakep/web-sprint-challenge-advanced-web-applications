import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// import axios and MaterialUI

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 325,
    maxWidth: 325,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))


export default function LoginForm(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
})

const inputChange = (e) => {
    e.persist();
    setFormState({...formState, [e.target.name]: e.target.value});
}


let history = useHistory();


const submitForm = (e) => {
    e.preventDefault();
   
    axiosWithAuth()
        .post('/api/login', formState)
        .then(res => {
           console.log("Axios submit form res", res);
           window.localStorage.setItem('token', res.data.payload);
           history.push('/bubbles');
         
        })
        .catch(err => console.log(err))

    setFormState({username: "", password: ""})
        
}

  return (
      <div style={{paddingTop: "4%"}}>
        <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
           <CardContent>
              <Typography variant="h5" component="h2">
               Login
              </Typography>
              <br />
           <form onSubmit={submitForm} className={classes.form} autoComplete="off">
              <FormControl required>
                 <TextField 
                 autoFocus
                 required={true} 
                 id="username" 
                 name="username"
                 label="Username" 
                 value={formState.name}
                 onChange={inputChange}
                 variant="filled" 
                 />
              </FormControl>
              <FormControl required>
                 <TextField 
                 id="password" 
                 name="password"
                 label="Password" 
                 value={formState.password}
                 onChange={inputChange}
                 variant="filled" 
                 type="password" 
                 required={true}
                 />
               </FormControl>
             <CardActions>
           <Button type="submit" size="small">Submit</Button>
          </CardActions>
        </form>
      </CardContent>
     </Card>
    </div>
 );
}

