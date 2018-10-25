import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/*const graph = {
  "nodes": [
    {"id": "1"},
    {"id": "2"},
    {"id": "4"},
    {"id": "8"},
    {"id": "16"},
    {"id": "11"},
    {"id": "12"},
    {"id": "14"},
    {"id": "18"},
    {"id": "116"}
  ],
  "links": [
    {"source": "1", "target": "2", "value": 1},
    {"source": "2", "target": "4", "value": 1},
    {"source": "4", "target": "8", "value": 1},
    {"source": "4", "target": "8", "value": 1},
    {"source": "8", "target": "16", "value": 1},
    {"source": "16", "target": "1", "value": 1}
  ]
}*/

class GraphNetwork extends Component {

  constructor(props){
    super(props);
    this.node = null;
    this.link = null;
    this.label = null;


    this.state = {
      graph: undefined,
      minSize: this.props.height > this.props.width ? this.props.width : this.props.height,
      user: ""
    }

    this.dragstarted = this.dragstarted.bind(this);
    this.dragended = this.dragended.bind(this);
    this.dragged = this.dragged.bind(this);
    this.ticked = this.ticked.bind(this);
    this.createGraph = this.createGraph.bind(this);
    this.changeRoot = this.changeRoot.bind(this);

    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      //.force("charge", d3.forceManyBody().strength(-200))
      .force('charge', d3.forceManyBody()
        .strength(-5000)
        .theta(0.8)
        .distanceMax(this.state.minSize)
      )
  // 		.force('collide', d3.forceCollide()
  //       .radius(d => 40)
  //       .iterations(2)
  //     )
      .force("center", d3.forceCenter(this.props.width / 2, this.props.height / 2));
  }

  static contextTypes = {
    router: PropTypes.object
  }

  createGraph(){
    if(this.props.graph){
      console.log(this.props.graph);

      let nodes = this.props.graph.nodes;

      var g = d3.select("svg");
      console.log(g);

      // links
      this.link = 
        g
          .style("stroke", "#aaa")
          .selectAll("line")
          .data(this.props.graph.links)
          .enter().append("line");

      // nodes
      this.node = 
        g
          .append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(this.props.graph.nodes)
          .enter().append("circle")
          .attr("r", function(d, i){return nodes[i].value * 10;})
          .on("click", function(_, i) {
            this.setState({user: this.props.graph.nodes[i].username}, () => {this.changeRoot();});
          }.bind(this))
          .call(d3.drag()
            .on("start", this.dragstarted)
            .on("drag", this.dragged)
            .on("end", this.dragended));
        

      // labels
      this.label = g.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(this.props.graph.nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("stroke","#fff").style("fill", "#fff").style("color","#fff").style("font-size", "28px")
        .on("click", function(_, i) {
          this.setState({user: this.props.graph.nodes[i].username}, () => {this.changeRoot();});
        }.bind(this))
        .text(function(d) { return d.username; });
      
      this.simulation
        .nodes(this.props.graph.nodes)
        .on("tick", this.ticked)

      this.simulation.force("link")
        .links(this.props.graph.links);
    }
  }

  componentDidMount() {
    this.setState({graph: this.props.graph}, () => {
      this.createGraph();
    });
  }

  componentDidUpdate(){
    if(this.props.graph !== this.state.graph){
      this.setState({graph: this.props.graph}, () => {
        this.createGraph();
      });
    }
  }

  changeRoot(){ 
    this.props.reload(this.state.user);

    const path = "/friends/" + this.state.user;
    this.props.history.push(path);
  }

  dragstarted(d) {
    if (!d3.event.active) {
      this.simulation.alphaTarget(0.3).restart()
    }
    d.fx = d.x
    d.fy = d.y
  //  simulation.fix(d);
  }
  
  dragged(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
  //  simulation.fix(d, d3.event.x, d3.event.y);
  }
  
  dragended(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    if (!d3.event.active) this.simulation.alphaTarget(0);
    //simulation.unfix(d);
  }

  ticked() {
    this.link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    this.node
         .style("fill", "#bababa") //efefef
         .style("stroke", "#424242")
         .style("stroke-width", "1px")
         .attr("cx", function (d) { return d.x+5; })
         .attr("cy", function(d) { return d.y-9; });

    this.label
      .attr("x", function(d) { return d.x; })
          .attr("y", function (d) { return d.y; });
  }

  render() {
    if(this.props.graph){
      return (
        <svg className="container" id="svg"
          width={this.props.width} height={this.props.height}>
        </svg>
      );
    } else {
      return <ReactLoading type="spin" width={this.state.minSize /2} height={this.state.minSize /2 } color="#fff" />;
    }

  }
}

export default withRouter(GraphNetwork);