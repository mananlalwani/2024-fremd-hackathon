"use client"

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataViz = () => {
const data_input = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";
 const ref = useRef();

 useEffect(() => {
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    const svg = d3.select(ref.current)
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    d3.csv(data_input).then(function(data) {
      const sumstat = d3.group(data, d => d.name);
      const names = d3.group(data, d => d.name).keys().toArray();

      const x = d3.scaleLinear()
        .domain(d3.extent(data, function(d) { return d.year; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).ticks(5));

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.n; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      const color = d3.scaleOrdinal()
        .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999']);

      svg.selectAll(".line")
          .data(sumstat)
          .join("path")
            .attr("fill", "none")
            .attr("stroke", function(d){ return color(d[0]) })
            .attr("stroke-width", 1.5)
            .attr("d", function(d){ 
              return d3.line()
                .x(function(d) { return x(d.year); })
                .y(function(d) { return y(+d.n); })
                (d[1])
            }).attr("stroke-dasharray", "1000")
          .attr("stroke-dashoffset", "1000")
          .transition()
          .duration(2000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", 0);

      const legend = svg.selectAll(".legend")
            .data(data)
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", `translate(${0},${0})`);

      legend.selectAll("mylabels")
        .data(names)
        .enter()
        .append("text")
          .attr("x", 40)
          .attr("y", function(d,i){ return 10 + i*25})
          .style("fill", function(d){ return color(d)})
          .text(function(d){ return d})
          .attr("text-anchor", "left")
          .style("alignment-baseline", "middle");

      legend.selectAll("mydots")
        .data(names)
        .enter()
        .append("rect")
          .attr("x", 0)
          .attr("y", function(d,i){ return + i*(25)})
          .attr("width", 30)
          .attr("height",20)
          .style("fill", function(d){ return color(d)});
    });

    // Cleanup function
    return () => {
      d3.select(ref.current).selectAll("*").remove();
    };
 }, [data_input]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

 return <div id="my_dataviz" ref={ref}></div>;
};

export default DataViz;