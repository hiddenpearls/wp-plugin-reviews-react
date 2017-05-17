var React = require('react');
var api = require('../utils/api');


function ReviewsGrid (props) {

  if (props.reviews == 'Not Avalaibe') {
    return(
      <div className="not-found-plugin">No Plugin Found</div>
    )

  }

  function getPathFromUrl(url) {
    return url.split(/[?#]/)[0];
  }

  return (
    <div id="slider">
    <ul className='popular-list'>
      {props.reviews.data.map(function (repo, index) {
        return (
          <li key={repo.title} className='popular-item'>
            <div className="slider-container">
              <div className='space-list-items'>
                {/*<div className='date-block'>
                  <img src={getPathFromUrl(repo.avatar.src)} />
                </div>*/}
                <div className="item-description-block">
                  <div className="item-description">
                    <span className="rating star-{repo.rating}"></span>
                    <h2>{repo.title} {/*<span>{repo.date}</span>*/}</h2>
                    {repo.content}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial_by">
                <span className="avator sam" style ={ { backgroundImage: "url('" + getPathFromUrl(repo.avatar.src) + "')" } }>

                </span>
                <div className="testimonial_by_name">
                    <span className="name_t">@{repo.username.text}</span>
                    <span className="name_a">wordpress.org user</span>
                </div>
            </div>
          </li>
        )
      })}
    </ul>
    </div>
  )
}


class Review extends React.Component {

  constructor(props) {
    super();
      console.log(props);
    this.state = {
      value: '',
      selectedPlugin: props.slug,
      reviews: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {

    this.getDefault(this.state.selectedPlugin)
    // this.handleSubmit(this.state.selectedPlugin);
  }

  getDefault(plugin) {


    api.fetchReviews(plugin)
    .then(function (reviews) {
      this.setState(function () {
        return {
          reviews: reviews
        }
      });
    }.bind(this));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState(function () {
      return {
        selectedPlugin: this.state.value,
        reviews: null,
        value : ''
      }
    });

    api.fetchReviews(this.state.value)
    .then(function (reviews) {
      this.setState(function () {
        return {
          reviews: reviews
        }
      });
    }.bind(this));

  }


  render() {

    return (
      <div>
        {/*<form className="plugin-search" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} placeholder="Search Plugin" onChange={this.handleChange} />
          <button type="submit" >Submit</button>
        </form>*/}
        <h1 style={{textAlign: 'center'}}>Reviews for {this.props.slug}</h1>
        {!this.state.reviews
          ? <p style={{textAlign: 'center'}}>LOADING!</p>
          : <ReviewsGrid reviews={this.state.reviews}  />}
        </div>
      )
    }
  }

  module.exports = Review;
