import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog';






const useStyles = makeStyles({
  root: {
    width: 310,
    margin: '20px 30px',
    height: '370'
   
    
  },
  media: {
    height: 140,
     
  },

  bu: {
    margin: '5px',
    
    fontFamily: 'Indie Flower',
    backgroundColor: "#EFFFFA",
    color: "black",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  



  return (
    <Card className={classes.root} id="tosh">
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={props.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          <Button variant="contained" className={classes.bu} href={props.display_url} target="_blank"> {props.displayOn}</Button>
          <Button  variant="contained" className={classes.bu} href={props.url_des} target="_blank">Description</Button>
          
            
          
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{margin: 'auto',width: '34%',}}>
      <Dialog movie={props}/>
      </CardActions>
    </Card>

   
  );
}