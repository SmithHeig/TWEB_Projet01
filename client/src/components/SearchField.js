import React from 'react';
import Button from '@material-ui/core/Button';
import './SearchField.css'
import { withRouter } from 'react-router-dom';

// Need CSS from SearchUser.css
class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.changeRoot = this.changeRoot.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  changeRoot() {
    if (this.props.reload) {
      console.log("hello");
      this.props.reload(this.state.username);
    }

    const path = "/friends/" + this.state.username;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="filedUsername"
            className="filedUsername"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <Button type="submit" id="searchButton" className="searchButton" variant="contained" color="primary" onClick={this.changeRoot}>
            Search
            </Button>
        </form>
      </div>
    )
  }
};

export default withRouter(SearchUser);