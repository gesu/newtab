(function(window, document){
  'use strict';

  function Floater(elem) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const initialVel = 2;
    const acceleration = 1;

    const floaterWidth = 135;
    const floaterHeight = 100;

    let xPos = Math.random() * (windowWidth - floaterWidth);
    let yPos = Math.random() * (windowHeight - floaterHeight);
    let xVel = Math.random() < 0.5 ? initialVel : -initialVel;
    let yVel = Math.random() < 0.5 ? initialVel : -initialVel;

    elem.style.left = `${xPos}px`;
    elem.style.top = `${yPos}px`;

    function inBounds(position, offset, max, min) {
      return (position + offset) > max || position < min;
    }

    this.loop = function() {
      xPos += xVel;
      yPos += yVel;

      if (inBounds(xPos, floaterWidth, windowWidth, 0)) {
        xVel *= (-1 * acceleration);
      }

      if (inBounds(yPos, floaterHeight, windowHeight, 0)) {
        yVel *= (-1 * acceleration);
      }

      elem.style.left = `${xPos}px`;
      elem.style.top = `${yPos}px`;

      window.requestAnimationFrame(function() {
        this.loop();
      }.bind(this));
    }
  }

  let el = document.getElementById('floater');
  let floater = new Floater(el);
  floater.loop();

})(window, document);
