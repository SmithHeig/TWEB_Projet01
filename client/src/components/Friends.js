import React from 'react';

class Friends extends React.Component{
  constructor({match},props){
    super(props);
    this.state = {
      username: match.params.username,
      collaborators: {},
    }
  }

  componentDidMount(){
    const path = 'http://localhost:4000/friends/' + this.state.username;
    fetch(path)
      .then(results => {return results.json();})
      .then(data => {
        console.log(data);
        this.setState({collaborators: data});
      });
  }

  render(){
    return (
      <div>
        <h1>Friends</h1>
        <p>{this.state.username}</p>
      </div>
    )
  }; 
};

export default Friends;