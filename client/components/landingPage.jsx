const Link = ReactRouterDOM.Link;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/new'>
          <button onClick={this.props.getMapList}>
            Create New Game
          </button>
        </Link>
      </div>
    )
  }
}