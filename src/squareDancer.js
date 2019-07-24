var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"><img src="https://www.stickpng.com/assets/thumbs/59ac2e71a242c6528702d921.png"></span>');
  this.step();
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  var that = this;
  Dancer.prototype.step.call(this);
  this.$node.mouseover(function(){
      that.$node.css("opacity", "0.4");
  });
  this.$node.mouseout(function(){
    that.$node.css("opacity", "1");
  });
};


