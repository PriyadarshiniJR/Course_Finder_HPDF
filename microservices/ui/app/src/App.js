import React, { Component } from 'react'; 
import CustomInput from './components/custominput';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography';
import ColoredScrollbars from './components/scrollbar';
import Loading from './components/loading';
import { LinearProgress } from 'material-ui/Progress';

const styles=theme=>({
  grid1: {
    flexBasis: "30%",
      // border:"1px solid white",
    margin: '0 auto', 
  },
  grid2: {
    flexBasis: "10%",
    marginBottom: '20px',
    // border:"1px solid red"
  },
  grid3: {
    flexBasis: "40%",
    width: '500px',
     // border:"1px solid #fff",
     margin: '0 auto',
     paddingTop: '20px'
  },
  container: {
   height: '100%',
   // border: '1px solid white'
  },
  text :{
    color: 'rgb(151, 165, 175)',
    fontFamily: "'Montserrat','Lato', 'Open Sans', sans-serif",
    marginLeft: '40px',
    marginBottom: '20px',
    // border: '1px solid red',
    marginTop: "100px",
    // width: '600px'
  },
  resultContainer: {
    // border: '1px solid blue',
    margin: '0 auto',
    paddingLeft: '100px',
    paddingRight: '50px'
  },
  resultText: {
    color: 'white',
    fontFamily: "'Lato', 'Open Sans', sans-serif",
    marginBottom: "5px"
    // border: '1px solid red',
  },
  resultTitle: {
    fontFamily: "'Lato', 'Open Sans', sans-serif",
    color: 'rgb(151, 165, 175)',
    // border: '1px solid red',
    // margin: '0 auto',
    marginBottom: "10px",
    marginTop: "10px"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      keys: [],
      values: [],
      loading: false,
      input: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    this.setState({
      input: e,
      loading: true
    })
 // console.log(e);
    fetch(`https://app.brashly30.hasura-app.io/query?input=${e}`)
    .then( results=> results.json())
    .then( object => {
      console.log(object)
      var kes = Object.keys(object)
      var valus = Object.values(object)
      // console.log(keys)
      this.setState({
        keys: kes ,
        values: valus, 
        loading: false
      });
    })
    .catch(error => console.log(error))
      // console.log(this.state.keys)

  }
  render() {
    const {classes} =this.props
    var keys =this.state.keys;
    return (
    <ColoredScrollbars>
      <Grid container className={classes.container} direction='column'>
       <Grid item xs={12} className={classes.grid1}>
          <Typography variant='display4' className={classes.text}>Course Finder</Typography>
       </Grid>
        <Grid item xs={12} className={classes.grid2}>
          <CustomInput onSubmit={this.handleSubmit}/>
        </Grid>
        <Grid item xs={12} className={classes.grid3}>
        
          {(this.state.input!== '')&&((this.state.loading)?(<Loading/>):(
            <div className={classes.resultContainer}>
                <Typography variant="display1" className={classes.resultTitle}>Wit.ai understands:</Typography>
                {keys.map(
                (item, index) =>
                  <Typography className={classes.resultText} variant="headline" key={index}>
                    {item} : {this.state.values[index]}
                  </Typography>)}
            </div>))}
        </Grid>
     </Grid>
     </ColoredScrollbars>
   )
  }
}
        

export default withStyles(styles)(App);

