  function parcoords_plot(){

  // quantitative color scale
  var blue_to_brown = d3.scale.linear()
    .domain([20, 50])                 //modular: get min/max of colored axis
    .range(["steelblue", "green"])
    .interpolate(d3.interpolateLab);

  var color = function(d) { 
    return blue_to_brown(d['sde_score']);
  };

  var parcoords = d3.parcoords()("#parcoords_canvas")
      .color(color)
      .alpha(0.4);

  //Create Parallel Coordinates chart
  parcoords
      .data(full_data)
      //.hideAxis(["sde_weight","sdl_weight", "awy_weight"])    //modular: names of hidden axis in the parcoord plot
      .composite("darker")
      .render()
      .shadows()
      .reorderable()
      .brushMode("1D-axes");  // enable brushing
  

  var sltBrushMode = d3.select('#sltBrushMode')

  sltBrushMode.selectAll('option')
    .data(parcoords.brushModes())
    .enter()
      .append('option')
      .text(function(d) { return d; });

  sltBrushMode.on('change', function() {
    parcoords.brushMode(this.value);
    switch(this.value) {
    case 'None':
      d3.select("#pStrums").style("visibility", "hidden");
      d3.select("#lblPredicate").style("visibility", "hidden");
      d3.select("#sltPredicate").style("visibility", "hidden");
      d3.select("#btnReset").style("visibility", "hidden");
      break;
    case '2D-strums':
      d3.select("#pStrums").style("visibility", "visible");
      break;
    default:
      d3.select("#pStrums").style("visibility", "hidden");
      d3.select("#lblPredicate").style("visibility", "visible");
      d3.select("#sltPredicate").style("visibility", "visible");
      d3.select("#btnReset").style("visibility", "visible");
      break;
    }
  });

  sltBrushMode.property('value', '1D-axes');

  d3.select('#btnReset').on('click', function() {parcoords.brushReset();})
  d3.select('#sltPredicate').on('change', function() {
    parcoords.brushPredicate(this.value);
  });

  }