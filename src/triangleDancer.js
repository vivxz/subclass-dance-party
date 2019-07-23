var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
};