import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import burger from '../media/burgerbaner.jpg';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import bgicon from '../media/bgicon.png';
import beverages from '../media/beverages.png';
import fries from '../media/french.png';
import pizza from '../media/pizza.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import products from './products.json';
import { addToCart } from '../features/cartSlice';
import { useDispatch }  from 'react-redux';




// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00'),
];



export default function Chart() {
  const theme = useTheme();
  const getImage = (imageName) => {
    return require(`../media/${imageName}`);
  };

  const dispatch = useDispatch();

  const [buttonText, setButtonText] = React.useState({});
  const [iconColors, setIconColors] = React.useState({});
  


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    setButtonText(prevState => ({
      ...prevState,
      [product.id]: 'Added'
    }));

    setTimeout(() => {
      setButtonText(prevState => ({
        ...prevState,
        [product.id]: 'Add to cart'
      }));
    }, 2000); // Revert back after 2 seconds
  };

  
  const handleIconClick = (productId) => {
    setIconColors(prevState => ({
      ...prevState,
      [productId]: prevState[productId] === 'red' ? 'inherit' : 'red'
    }));
  };

  return (
    <React.Fragment>
      

      <Container style={{ width: '100%', flexGrow: 1, }}>
        
      <CardMedia
        component="img"
        height="300"
        image={burger}
        alt="Paella dish"
        sx={{objectFit:'cover'}}
        
      />
    <Box sx={{ display: 'flex', flexDirection: 'row', width:"100%", justifyContent:"space-between",marginTop:"50px"}}>
    <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>
        Category
      </Typography>
      <Button variant="text" endIcon={<ArrowForwardIcon />} size="medium" sx={{textTransform:"capitalize", color:"orange"}}>
  See all
</Button>
    </Box>

<Box  sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: "100%",
      justifyContent: {
        xs: 'center',  // Center items on extra-small screens
        sm: 'center',  // Center items on small screens
        md: 'space-evenly', // Evenly space items on medium and larger screens
      },
      flexDirection: {
        xs: 'column', // Stack items vertically on extra-small screens
        sm: 'row',    // Display items in a row on small and larger screens
      },
      alignItems: 'center',
      marginTop: "20px"
    }}>

<CardMedia
        component="img"
        height="100"
        image={bgicon}
        alt="Paella dish"
        sx={{objectFit:'cover', border:"2px solid gray", width:"100px" }}
        
        
      />
      

<CardMedia
        component="img"
        height="100"
        image={beverages}
        alt="Paella dish"
        sx={{objectFit:'cover', border:"2px solid gray", width:"100px", boxSizing:"border-box", padding: "10px 20px" }}
        
      />
      
      <CardMedia
        component="img"
        height="100"
        image={fries}
        alt="Paella dish"
        sx={{objectFit:'cover', border:"2px solid gray", width:"100px", boxSizing:"border-box", padding: "20px 20px" }}
        
      />
      <CardMedia
        component="img"
        height="100"
        image={pizza}
        alt="Paella dish"
        sx={{objectFit:'cover', border:"2px solid gray", width:"100px", boxSizing:"border-box", padding: "20px 20px" }}
        
      />
</Box>
         {/* Popular Dishes */}

         <Box sx={{ width: '100%', marginTop:"50px" }}>
         <Box sx={{ display: 'flex', flexDirection: 'row', width:"100%", justifyContent:"space-between",marginBottom:"30px"}}>
    <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>
        Popular Dishes
      </Typography>
      <Button variant="text" endIcon={<ArrowForwardIcon />} size="medium" sx={{textTransform:"capitalize", color:"orange"}}>
  See all
</Button>
    </Box>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
    {products.map((product)=>(
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 245 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"  onClick={() => handleIconClick(product.id)}>
                  <FavoriteIcon  style={{ color: iconColors[product.id] || 'inherit' }} />
              </IconButton>
              </CardActions>
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={getImage(product.image)}
          alt="Paella dish"
          sx={{padding:"15px"}}
        />
        <CardContent>
        <Rating name="size-small" defaultValue={2} size="small" />
          <Typography variant="body2" color="text.primary" sx={{fontWeight:"bold"}}>
             {product.name}
          </Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', width:'100%', marginTop:"10px"}}>
              <Typography variant="body2" color="orange" sx={{fontWeight:"bold", marginTop:"5px", fontSize:"15px"}}>
              ₹{product.price}
              </Typography>
              <Button
                        variant="contained"
                        size='small'
                        onClick={() => handleAddToCart(product)}
                        sx={{ backgroundColor: "orange", minWidth: "auto", width: "auto" }}
                      >
                        {buttonText[product.id] === 'Added' ? 'Added' : <AddIcon />}
                      </Button>
          </Box>
        </CardContent>
        
      </Card>
    </Grid>

))}

  </Grid>
</Box>

        </Container>

        
      


    
    
    

        {/* <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
            },
          ]}
          yAxis={[
            {
              label: 'Sales ($)',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              max: 2500,
              tickNumber: 3,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        /> */}
      
     </React.Fragment>
  );
}
