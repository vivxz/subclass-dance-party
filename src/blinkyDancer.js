var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dance"><img src="https://www.stickpng.com/assets/thumbs/59ac2e13a242c6528702d918.png"></span>');
  this.step();
  this.setPosition(top, left);
  
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  var that = this;
  var d = dancers.length

// $(document).ready(function(){
  this.$node.on('click', function(event){
    // var thisHeight = $(this.$node).height();
    // var thisWidth = $(this.$node).width();
    // var thisDancer = this;
    for (var i = 0; i < dancers.length; i++){
      dancers[i].$node.animate({
        top: $("body").height() * i/d,
        left: $("body").width() * i/d 
      });
    }
  });
// }

};

  // Dancer.prototype.step.call(this);
  // this.$node.mouseover(function(){
  //   that.$node.css("opacity", "0.3");
  // });
  // this.$node.mouseout(function(){
  //   that.$node.css("opacity", "1");
  // });
