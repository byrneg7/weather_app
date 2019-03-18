import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '500px',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ContactCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contact Us"
          className={classes.media}
          height="400"
          image={require('./images/contact.jpg')}
          title="Contact Us"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Get in touch!
          </Typography>
          <Typography component="p">
            Please get in touch by dropping us an email at the address below!           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          byrneg7code@gmail.com
        </Button>
        
        
      </CardActions>
    </Card>
  );
}

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactCard);