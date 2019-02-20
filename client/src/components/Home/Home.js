import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grade from '@material-ui/icons/Grade';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import red from '@material-ui/core/colors/red';
import Work from '@material-ui/icons/Work';
import Assessment from '@material-ui/icons/Assessment';
import School from '@material-ui/icons/School';
import Description from '@material-ui/icons/Description';
import { Card, CardImg, } from 'reactstrap';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import { HashLink as Link } from 'react-router-hash-link';


import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  margin: {
    margin: 10,
    paddingBottom: 50
  },
  card: {
    Width: "auto",
  },

  projectCards: {
    width: 350,
  },

  actions: {
    display: 'flex',
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
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

  extraPadding: {
    padding: theme.spacing.unit * 2,
  },

  cardImg: {
    height: 350,
    width: "auto",
  },

  cardMargin: {
    margin: 10
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    expanded: false,
    spacing: '16',
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Grid container justify="center" alignItems="center" className={classes.extraPadding}>
          <Typography className={classes.margin}>
            <h3 class='headerColor link2'>Taylor Darnell</h3>
            <Grid container justify="center" alignItems="center">
              <p class='text3'>Front-End Web Developer</p>
            </Grid>
          </Typography>
        </Grid>
        <Divider />
        <List className={classes.extraPadding}>
          {[<Button href='Home#About' class='text4'>About</Button>,
          <Button href='Home#Projects' class='text4'>Projects</Button>, <Button href='Home#Skills' class='text4'>Skills</Button>,
          <Button href='Home#Awards' class='text4'>Awards</Button>, <Button href='Home#Education' class='text4'>Education</Button>,
          <Button href='Home#Contact' class='text4'>Contact</Button>,
          <Button href='https://docs.google.com/document/d/1ptx704h2wUrqgO6IFiFY65UGFVJtgcYHkvwbaN-uPhY/edit?usp=sharing' class='text4' >Resume</Button>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index === 0 ? <AccountCircle nativeColor='#009688' /> : index === 1 ? <Work nativeColor='#3f51b5' /> :
                index === 2 ? <Assessment nativeColor='#673ab7' /> : index === 3 ? <Grade nativeColor='#ff5722' /> : index === 4 ? <School nativeColor='#FFAB40' /> : index === 5 ? <MailIcon nativeColor='#5d4037' /> :
                  index === 6 ? <Description nativeColor='#424242' /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="center" alignItems="center">
              <Typography class='appBarText headerSections' variant='h5'>Taylor Darnell</Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}

            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        {/* This is where the Main Page Starts ---------------------------------------------------------------------------------- */}
        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          <Paper class='backGround taylorImg'>
            <div class='container-fluid'>
              <div class='col-sm-12'>
                <div class='quote quoteText'>
                  <span>Driven to leave an </span>
                  <span class='teal'>&nbsp;Impact </span>
                  <br></br>
                  <span>on the world for </span>
                  <span class='underline'>Future Generations</span>.
        </div>
              </div>
            </div>
          </Paper>
          <br></br>

          <Paper>
            <div class="container-fluid header" >
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='About'>About</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>
          <div class="container">
            <Paper>
              <div class="container">
                <div class='row'>
                  <div class='col cardPadding'>
                    <p class='text textResponsive'>
                      <b> Mission-driven front end developer with a passion for thoughtful UI design,
                collaboration, and learning. </b>
                    </p>
                    <p class='text textResponsive'>
                      I’ve always sought out opportunities and challenges that are meaningful to me.
                      Although my professional path has taken many twists and turns
                       — from World Traveling Musician to Sr. Account Executive
                       — I've never stopped engaging my passion to help others and solve problems.
                 </p>

                    <p class='text textResponsive'>
                      As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things,
                      and my mission-driven work ethic to bring the best effort to any challenge presented.
                      That's why I’m excited to make a big impact at a high growth company.
                </p>
                    <hr></hr>
                    <Grid container justify="center" alignItems="center">
                      <p class='text textResponsive'>
                        <b>Current Focus:</b> Mongo Database | Express | React | Node.js
                </p>
                    </Grid>
                  </div>
                </div>
              </div>
            </Paper>
          </div>


          <br></br>

          {/* <Paper>
            <div class="container-fluid header">
                <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Experience'>Experience</Typography>
                </Grid>
                </div>
            </Paper>
            <br></br>

            <Grid container justify="center" alignItems="center">
          <Card className={classes.card}>
        <img src='./images/uci3.jpg' alt='UCI' class='extraPadding uciImg' />
        <hr></hr>
        <CardActions className={classes.actions} disableActionSpacing>
        <p class='text2'><b>University of California, Irvine</b></p>
        <br></br> */}
          {/* <Typography variant='p' >July 26th, 2018 - January 26th, 2019</Typography> */}
          {/* <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <p  class='text4 textResponsive'><b>Coding Boot Camp:</b></p>
            <p class='text4 textResponsive'>
              An intensive 24 week program where you learn the fundamentals of full-stack development.
            </p>
            <p class='text4 textResponsive'>
            The Coding Boot Camp was designed to help students develop the skills and professional network needed to capitalize on the high demand web development career track.
            </p>
            <p class='text4 textResponsive'>
            Gain practical web development experience and build a professional portfolio through a strategically engineered curriculum, centered around real-world projects.
            </p>
            <p class='text4 textResponsive'>
            You will learn marketable skills such as HTML5, CSS3, JavaScript, jQuery, C#, ASP.Net, Bootstrap, React.js, Node.js, MongoDB, MySQL, and more.
            </p>
            <p class='text4 textResponsive'>
            Benefit from dynamic, real-time classes taught by skilled instructors who know what it takes to succeed in the industry and
            become employer competitive through various career services like technical interview training, portfolio reviews, resume support, 1:1 career coaching, and more.
            </p>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
       */}
          <Paper>
            <div class="container-fluid header">
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Projects'>Projects</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>


          <div class='container'>
            <Grid container justify="center" alignItems="center">
              <div class='row text-center'>
                <div class='col-md cardPhone'>
                  <Card className={classes.card}>
                    <CardImg className={classes.cardImg} src="./images/pokemonNewSize.png" alt="clickyGame" />
                    <CardContent>
                      <h4><b>Clicky Game</b></h4>
                      <p class='text4 textResponsive'>A game where you click different images until you click the same Pokemon twice.</p>
                    </CardContent>
                    <CardActions>
                      <Grid container justify="center" alignItems="center">
                        <Button href='https://clickypokemongame.herokuapp.com/' size="small" color="primary" target='_blank'>View Online</Button>
                        <Button href='https://github.com/tdarnell117/clickygame/tree/master/dec18' size="small" color="primary" target='_blank'>View Source</Button>
                      </Grid>
                    </CardActions>
                  </Card>
                </div>
                <div class='col-md'>
                  <Card className={classes.card}>
                    <CardImg className={classes.cardImg} src='./images/bank2.png' alt="piggY" />
                    <CardContent>
                      <h4><b>Piggy Bank</b></h4>
                      <p class='text4 textResponsive'>Mobile-Focused web application where you can track and save your spendings.</p>
                    </CardContent>
                    <CardActions>
                      <Grid container justify="center" alignItems="center">
                        <Button href='https://piggybudget.herokuapp.com/' size="small" color="primary" target='_blank'>View Online</Button>
                        <Button href='https://github.com/kitlingmui/budgetapp' size="small" color="primary" target='_blank'>View Source</Button>
                      </Grid>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </Grid>
          </div>

          <br></br>
          <Paper>
            <div class="container-fluid header">
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Skills'>Skills</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>

          <div class="container">
            <Paper>
              <div class='container-fluid text-align'>
                <h1 class='text skillsHeader'><b>HTML</b></h1>
              </div>
              <hr></hr>
              <div class='container'>
                <div class='row text-center'>
                  <div class='col'>
                    <figure>
                      <img src='./images/html5logo6.jpg' alt='HTML5' class='pic iconSize' />
                      <figcaption class='text3 iconTextSize'>HTML 5</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/reactlogo2.png' alt='JSX' class='pic iconSize' />
                      <figcaption class='iconTextSize'>JSX</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <br></br>
          <div class="container">
            <Paper>
              <div class='container-fluid text-align'>
                <h1 class='text skillsHeader'><b>CSS</b></h1>
              </div>
              <hr></hr>
              <div class='container'>
                <div class='row text-center'>
                  <div class='col'>
                    <figure>
                      <img src='./images/css3.svg' alt='CSS3' class='pic iconSize' />
                      <figcaption class='iconTextSize'>CSS3</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/matlogo2.png' alt='Material' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Material UI</figcaption>
                    </figure>
                  </div>
                  {/* <div class="w-100"></div> */}
                  <div class='col'>
                    <figure>
                      <img src='./images/bootstrap4.jpg' alt='Bootstrap' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Bootstrap</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/materialDesignlogo.jpg' alt='Material Design' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Material Design</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <br></br>
          <div class="container">
            <Paper>
              <Grid container justify="center" alignItems="center">
                <h1 class='text skillsHeader'><b>Javascript</b></h1>
              </Grid>
              <hr></hr>
              <div class='container'>
                <div class='row text-center'>
                  <div class='col'>
                    <figure>
                      <img src='./images/reactlogo2.png' alt='React' class='pic iconSize' />
                      <figcaption class='iconTextSize'>React</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/javalogo2.png' alt='Javascript' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Javascript</figcaption>
                    </figure>
                  </div>
                  {/* <div class="w-100"></div> */}
                  <div class='col'>
                    <figure>
                      <img src='./images/jquery2.jpg' alt='Jquery' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Jquery</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/node.png' alt='Node' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Node</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <br></br>
          <div class="container">
            <Paper>
              <Grid container justify="center" alignItems="center">
                <h1 class='text skillsHeader'><b>Back-End</b></h1>
              </Grid>
              <hr></hr>
              <div class='container'>
                <div class='row text-center'>
                  <div class='col'>
                    <figure>
                      <img src='./images/mongologo.webp' alt='Mongo DB' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Mongo Database</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/mySQL2.png' alt='MySQL' class='pic iconSize' />
                      <figcaption class='iconTextSize'>MySQL</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <br></br>
          <div class="container">
            <Paper>
              <Grid container justify="center" alignItems="center">
                <h1 class='text skillsHeader'><b>Other</b></h1>
              </Grid>
              <hr></hr>
              <div class='container'>
                <div class='row text-center'>
                  <div class='col'>
                    <figure>
                      <img src='./images/github.png' alt='GitHub' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Github</figcaption>
                    </figure>
                  </div>
                  <div class='col'>
                    <figure>
                      <img src='./images/heroku2.png' alt='Heroku' class='pic iconSize' />
                      <figcaption class='iconTextSize'>Heroku</figcaption>
                    </figure>
                  </div>
                </div>
              </div>

            </Paper>
          </div>
          <br></br>
          <Paper>
            <div class="container-fluid header">
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Awards'>Awards</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>
          <div class="container">
            <Paper>
              <div class="container-fluid">
                <div class='row text-center'>
                  <div class='col-sm'>
                    <img src='./images/badge1.png' alt='badge1' class='awards awardsMoblie'></img>
                  </div>
                  <div class='col-sm'>
                    <img src='./images/badge2.png' alt='badge2' class='awards awardsMoblie'></img>
                  </div>
                  <div class='col-sm'>
                    <img src='./images/badge3.png' alt='badge3' class='awards awardsMoblie'></img>
                  </div>
                  <div class='col-sm'>
                    <img src='./images/badge4.png' alt='badge4' class='awards awardsMoblie'></img>
                  </div>
                  <div class='col-sm'>
                    <img src='./images/badge5.png' alt='badge5' class='awards awardsMoblie'></img>
                  </div>
                </div>
              </div>

            </Paper>
          </div>

          <br></br>

          <Paper>
            <div class="container-fluid header">
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Education'>Education</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>

          <div class="container">
            <Paper>
              <div class="container cardPadding">
                <div class='row'>
                  <div class='col-sm-4'>
                    <img src='./images/uci3.jpg' alt='UCI' class='educationImg2 educationResponsive'></img>
                  </div>
                  <div class='col-sm-8'>
                    <p class='link headerResponsive'>
                      <a href='https://uci.edu/' class='headerColor'> University of California,<br></br> Irvine</a>
                    </p>
                    <hr></hr>
                    <p class='text textResponsive2'>
                      July 26th, 2018 - January 26th, 2019
                <ul>
                        <li>Certification</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}><b>Coding Boot Camp:</b></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <p class='text4 textResponsive'></p>
                  <p class='text4 textResponsive'>
                    An intensive 24 week program where you learn the fundamentals of full-stack development.
                    The Coding Boot Camp was designed to help students develop the skills and professional network needed to capitalize on the high demand web development career track.
              {/* Gain practical web development experience and build a professional portfolio through a strategically engineered curriculum, centered around real-world projects. */}
                    {/* You will learn marketable skills such as HTML5, CSS3, JavaScript, jQuery, C#, ASP.Net, Bootstrap, React.js, Node.js, MongoDB, MySQL, and more.
            Benefit from dynamic, real-time classes taught by skilled instructors who know what it takes to succeed in the industry and
            become employer competitive through various career services like technical interview training, portfolio reviews, resume support, 1:1 career coaching, and more. */}
                  </p>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
          </div>


          <br></br>
          <div class="container">
            <Paper>
              <div class="container cardPadding">
                <div class='row'>
                  <div class='col-sm-4'>
                    <img src='./images/miLogo.gif' alt='MI' class='educationImg educationResponsive'></img>
                  </div>
                  <div class='col-sm-8'>
                    <p class='link headerResponsive'>
                      <a href='https://www.mi.edu/' class='headerColor'> Musician's Institute,<br></br> Hollywood CA</a>
                    </p>
                    <hr></hr>
                    <p class='text textResponsive2'>
                      October 1st, 2010 - Febuary 20th, 2012
                <ul>
                        <li>Associates of Arts degree</li>
                        <li>Guitar performance</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <br></br>

          <Paper>
            <div class="container-fluid header">
              <Grid container justify="center" alignItems="center">
                <Typography variant='h3' class='headerText headerSections' id='Contact'>Contact</Typography>
              </Grid>
            </div>
          </Paper>
          <br></br>
          <div class="container">
            <Paper>
              <div class="container-fluid cardPadding">
                <Grid container justify="center" alignItems="center">
                  <img src='./images/email2.png' alt='Email' class='pic contactImg' />
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <a href='mailto:taylordarnell89@google.com' class='link2 headerColor textResponsive'>taylordarnell89@google.com</a>
                </Grid>
                <br></br>
                <Grid container justify="center" alignItems="center">
                  <img src='./images/github3.png' alt='Github' class='pic contactImg' />
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <a href='https://github.com/tdarnell117' class='link2 headerColor textResponsive'>github.com/tdarnell117 </a>
                </Grid>
                <br></br>
                <Grid container justify="center" alignItems="center">
                  <img src='./images/linkedin2.png' alt='Linkedin' class='pic contactImg' />
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <a href='https://www.linkedin.com/in/taylormdarnell/' class='link2 headerColor textResponsive'>linkedin.com/in/taylormdarnell/</a>
                </Grid>
              </div>
            </Paper>
          </div>
        </main>
      </div>

    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);