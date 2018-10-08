import React from 'react';
import Button from '@material-ui/core/Button';
import './SearchField.css'
import Link from 'react-router-dom/Link';

// Need CSS from SearchUser.css
class SearchUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  render(){
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
            <br/>
            <Link to={"/friends/" + this.state.username}>
              <Button id="searchButton" className="searchButton" variant="contained" color="primary" >
                Search
              </Button>
            </Link>
        </form>
      </div>
    )
  }
};

export default SearchUser;