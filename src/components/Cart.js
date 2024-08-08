import * as React from 'react';
import Title from './Title';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import bigBurger from '../media/burger4.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { incrementQuantity, decrementQuantity } from '../features/cartSlice';

function Cart(){

  const getImage = (imageName) => {
    return require(`../media/${imageName}`);
  };
    const items = useSelector((state)=> state.allCart.cart );
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useDispatch();
    console.log(items);

    return(
        <>
            <Title>Your Items</Title>
            {items.map((data)=> (
            <Card sx={{ maxWidth: 345, marginBottom:"20px", paddingBottom:"30px"}}>
           
      <CardMedia
        sx={{ height: 140, objectFit:"contain"}}
        image={getImage(data.image)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="orange" sx={{fontWeight:"bold", marginTop:"5px", fontSize:"15px"}}>
              ₹{data.price * data.quantity}
              </Typography>
              <Rating name="size-small" defaultValue={data.rating} size="small" />
      </CardContent>
      <CardActions>
        <Box sx={{display:"flex", justifyContent:"space-between", width:"100%"}}>
        <Button size="small" variant='contained' onClick={()=>{dispatch(decrementQuantity(data.id))}} sx={{backgroundColor:"orange", color:"white"}}><RemoveIcon/></Button> {data.quantity} <Button size="small" variant='contained' onClick={()=>{dispatch(incrementQuantity(data.id))}} sx={{backgroundColor:"orange", color:"white"}}><AddIcon/></Button>
        </Box>
      </CardActions>
     
    </Card>



))}


<Box component="section" sx={{ p: 2, display:"flex", width:"100%" , justifyContent:"space-between"}}>
        
<Typography gutterBottom variant="p" component="div" sx={{fontWeight:"bold"}} >
          Total
        </Typography>
        <Typography gutterBottom variant="p" component="div" sx={{fontWeight:"bold", color:"orange"}}>
           ₹{totalPrice}
        </Typography>

        </Box>    

        <Button variant="contained" sx={{padding:"3px 0px", backgroundColor:"orange", fontSize:"14px"}}>Checkout</Button>

            


        
        
        </>
    )

}

export default Cart;