function sliders_plot(){

   var obj1_slider = new Slider(
         "#obj1_slider", {
             "id": "obj1_slider",
             "min": 0,
             "max": 100,
             "range": true,
             "value": [50, 100]
   });

  var obj2_slider = new Slider(
         "#obj2_slider", {
             "id": "obj2_slider",
             "min": 0,
             "max": 100,
             "range": true,
             "value": [50, 100]
   });
     
   var obj3_slider = new Slider(
         "#obj3_slider", {
             "id": "obj3_slider",
             "min": 0,
             "max": 100,
             "range": true,
             "value": [0, 100]
   });


obj1_slider.on("slide", function(e) {
   console.log(e);
   // Afficher le range séléctioné (need to do a #obj1_slider_txt object in html):
   // d3.select("#obj1_slider_txt").text("min: " + e[0] + ", max: " + e[1]);
});

obj1_slider.on("slide", function(e) {
   //e*100
   dimensions["awy_weight"].filter(e);
   
   my_plot_function( group_player.top(Infinity) );
});

};

           