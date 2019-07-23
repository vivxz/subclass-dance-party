var TriangleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

TriangleDancer.prototype = Object.create(Dancer.prototype);
TriangleDancer.prototype.constructor = TriangleDancer;

TriangleDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
};
dfdsfs