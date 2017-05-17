var React = require('react');
var Review = require('./Review');

class App extends React.Component{

  constructor(props) {
    super();

  }
  render(){

    return(
      <div className='container'>
        <Review slug={this.props.slug}/>
      </div>
    )
  }
}

App.defaultProps = {
  slug :  'wp-analytify'
}

module.exports = App;
