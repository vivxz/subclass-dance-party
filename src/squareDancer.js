var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"><img src="https://www.stickpng.com/assets/thumbs/59ac2e71a242c6528702d921.png"></span>');
  this.step();
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};


