import React, {Component} from 'react';
import GraphNetwork from './GraphNetwork';
import Info from '@material-ui/icons/Info';
import Search from '@material-ui/icons/Search';
import { Tooltip, IconButton } from '@material-ui/core';
import SearchField from './SearchField';
import {Link} from 'react-router-dom';
import "./Friends.css";


class Friends extends Component{
  constructor({match},props){
    super({match}, props);
    this.state = {
      username: match.params.username,
      collaborators: {},
      graph: undefined,
      searchFieldVisibile: false,
      status: 200
    }

    this.makeGraphFromData = this.makeGraphFromData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.reload = this.reload.bind(this);
    this.showSearchBar = this.showSearchBar.bind(this);

    this.textInfo = `
    That is the "friends" of ` + this.state.username + ` !
    The size of the bubbles represent the number of repositories 
    that this person had contribut to ` + this.state.username + ` repositories!
    Click on a user to see his friends`;
  }

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(){
    //this.fetchData();
  }

  reload(user){
    this.setState({username: user, graph: undefined}, () => this.fetchData());
  }

  fetchData(){
    const api = process.env.REACT_APP_API;
    const path = api + '/friends/' + this.state.username;
    fetch(path)
      .then(results => {
        if(results.status === 200){
          return results.json();
        } else {
          this.setState({status: 400});
          return {};
        }
      })
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

  showSearchBar(){
    this.setState({searchFieldVisibile: !this.state.searchFieldVisibile});
  }

  render(){
    return (
      <div>
        <div>
          <h1><Link to="/" id="link">Friends</Link>
            <Tooltip title={this.textInfo} placement="bottom" ><IconButton style={{color: 'white'}}><Info id="info" /></IconButton></Tooltip>
            <Tooltip title="New research"><IconButton style={{color: 'white'}} onClick={this.showSearchBar}><Search/></IconButton></Tooltip>
          </h1>
          {this.state.searchFieldVisibile ? <SearchField reload={this.reload}/>: null}
        </div>
        {this.state.status === 200? <GraphNetwork
         width={window.innerWidth}
         height={window.innerHeight - 200}
         graph={this.state.graph}
         reload={this.reload}
        ></GraphNetwork> 
        : <div><h2>Bad Request</h2><p>{this.state.username} does not exist or has no repo</p></div>}
      </div>
    )
  }; 
};

export default Friends;