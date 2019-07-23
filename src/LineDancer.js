var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="line"><img src="https://www.stickpng.com/assets/thumbs/59ac2e0aa242c6528702d917.png"></span>');
  this.step();
  this.setPosition(top, left);
}

LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};