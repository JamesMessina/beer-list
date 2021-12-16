import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '50%',
    textAlign: 'center',
    height: '100px',
    width: '100px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: '50px'
  },
}));

export default function MaterialUIBeerCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [heartColor, setHeartColor] = React.useState("gray"); 
  const { name, first_brewed, tagline, image, abv, description, ibu, malts, yeast, hops} = props; 
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const changeHeartColor = (e) => {
    console.log("clicked", e.target.style.color);
    if(heartColor === "gray"){
      setHeartColor("red")
    }else{
      setHeartColor("gray")
    }
  }

  return (
    <Card style={{marginBottom: "10px"}} raised={true} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {abv}%
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={first_brewed}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="beer pic"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{color:heartColor}} onClick={(e) => changeHeartColor(e)} aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tagline: {tagline}</Typography>
          <Typography paragraph>Hops: {hops}</Typography>
          <Typography paragraph>Malts: {malts}</Typography>
          <Typography paragraph>Yeast: {yeast}</Typography>
          <Typography> IBU: {ibu}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
