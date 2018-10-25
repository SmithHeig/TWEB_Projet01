import React, {Component} from 'react';
import GraphNetwork from './GraphNetwork';

class Friends extends Component{
  constructor({match},props){
    super(match, props);
    this.state = {
      username: match.params.username,
      collaborators: {},
      graph: undefined
    }

    this.makeGraphFromData = this.makeGraphFromData.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(){
    //this.fetchData();
  }

  fetchData(){
    const path = 'http://localhost:4000/friends/' + this.state.username;
    fetch(path)
      .then(results => {return results.json();})
      .then(data => {
        let graph = this.makeGraphFromData(data, this.state.username);
        this.setState({graph});
      })
      .catch(erreur => console.log("Erreur: " + erreur));
  }

  makeGraphFromData(collab, username){
    let g = {nodes: [], links: []};
    let nodes = [];
    let links = [];
    let usernameId;

    // NODES
    Object.keys(collab).map(function(key, index){
      let node = {}
      node.id = index;
      node.username = key;
      node.value = collab[key];
      
      nodes[index] = node;

      if(node.username.toLowerCase() === username.toLowerCase()) usernameId = node.id;

      return nodes;
    });
    g.nodes = nodes;

    // LINKS
    let i = 0;
    nodes.forEach(function(node){
      if(node.id !== usernameId){
        let link = {};
        link.source = usernameId;
        link.target = node.id;
        link.value = 100;
        links[i++] = link
        return links;
      }
    });

    g.links = links;
    
    return g;
  }

  render(){
    return (
      <div>
        <h1>Friends</h1>
        <GraphNetwork
         width={window.innerWidth}
         height={window.innerHeight - 200}
         graph={this.state.graph}
         reload={this.fetchData}
        ></GraphNetwork>
      </div>
    )
  }; 
};

export default Friends;