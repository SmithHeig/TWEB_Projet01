import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './GraphNetwork.css';

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
        .theta(0.9)
        .distanceMax(this.state.minSize/2)
      )
      .force("center", d3.forceCenter(this.props.width / 2, this.props.height / 2));
  }

  static contextTypes = {
    router: PropTypes.object
  }

  createGraph(){
    if(this.state.graph){
      const scaleY = 100;
      const sizeCercle = 10;

      let nodes = this.state.graph.nodes;

      let g = d3.select("#svg").append("g");

      // links
      this.link = 
        g
          .style("stroke", "#aaa")
          .selectAll("line")
          .data(this.state.graph.links)
          .enter().append("line");

      // nodes
      this.node = 
        g
          .append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(this.state.graph.nodes)
          .enter().append("circle")
          .attr("r", function(d, i){return nodes[i].value * sizeCercle;})
          .on("click", function(_, i) {
            if(this.state.graph.nodes[i].username !== this.state.user){
              this.setState({user: this.state.graph.nodes[i].username}, () => {this.changeRoot();});
            }
          }.bind(this))
          .on("mouseover", function(d){
            d3.select("#tooltip")
						.style("left", d.x + "px")
						.style("top", (d.y + scaleY)+ "px")
						.select("#value")
						.text(d.value);

					  d3.select("#tooltip").classed("hidden", false);
          })
          .on("mouseout", function() {
            d3.select("#tooltip").classed("hidden", true);
           })
          .call(d3.drag()
            .on("start", this.dragstarted)
            .on("drag", this.dragged)
            .on("end", this.dragended));
        

      // labels
      this.label = g.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(this.state.graph.nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("stroke","#fff").style("fill", "#fff").style("color","#fff").style("font-size", "28px")
        .on("click", function(_, i) {
          if(this.state.graph.nodes[i].username !== this.state.user){
            this.setState({user: this.state.graph.nodes[i].username}, () => {this.changeRoot();});
          }
        }.bind(this))
        .on("mouseover", function(d){
          d3.select("#tooltip")
          .style("left", d.x + "px")
          .style("top", (d.y + scaleY ) + "px")
          .select("#value")
          .text(d.value);


          d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function() {
          d3.select("#tooltip").classed("hidden", true);
         })
        .text(function(d) { return d.username; });

      // Zooom
      var zoom_handler = d3.zoom()
      .on("zoom", zoom_actions);
  
      zoom_handler(g); 
      
      function zoom_actions(){
        g.attr("transform", d3.event.transform)
      }

      // simulation

      this.simulation
      .nodes(this.state.graph.nodes)
      .on("tick", this.ticked)

    this.simulation.force("link")
      .links(this.state.graph.links);
    }
  }

  componentDidMount() {
    this.setState({graph: this.state.graph}, () => {
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
         .attr("cx", function (d) { return d.x; })
         .attr("cy", function(d) { return d.y; });

    this.label
      .attr("x", function(d) { return d.x; })
      .attr("y", function (d) { return d.y; });
  }

  render() {
    if(this.props.graph){
      return (
        <div>
          <svg className="container" id="svg"
            width={this.props.width} height={this.props.height}>
          </svg>
          <div id="tooltip" className="hidden">
            <b><p id="value">1</p></b>
          </div>
        </div>
      );
    } else {
      return <ReactLoading type="spin" width={this.state.minSize /2} height={this.state.minSize /2 } color="#fff" />;
    }

  }
}

export default withRouter(GraphNetwork);