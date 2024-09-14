
import pic from '../assets/download.jpg';
import '../css/card.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
const CardI=(props)=>{   
    const cardcont = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Username and Passwords
            </Typography>
            <Typography variant="h5" component="div">
             
            </Typography>
           
            <Typography variant="body2">
              username  : passwords
              <br />
              mayank@gmail.com  : 123456
              <br />
              comphod@gmail.com : comphod
              <br />
              classauth@gmail.com : classauthority
              <br />
              auth@auth.com  : authority
            </Typography>
          </CardContent>
          
        </React.Fragment>
      );
       
    return(
        <>
        <div style={{display:"flex" ,alignItems:"center",justifyContent:"center" ,gap:"10rem",flexWrap:"wrap",marginTop:"150px"}}>
            <Link to={`/${props.link}`} className="linktext_card">
            
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Click to Signin  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This platform gives you the ability to apply and get leave approved online quickly.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


</Link>
<Card variant="outlined">{cardcont}</Card>
</div>
</>
    )
}
export default CardI