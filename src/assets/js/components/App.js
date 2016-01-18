/**
* @jsx React.DOM
*/

var getRoot= function () {
  return document.getElementById('app');
}

var TimelineComponent = require('./timeline');

var Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function () {
    console.log('rendering index');

    React.render(
      React.createElement("div", null, 
        React.createElement("h1", null, " Evi-Viz "), 
        React.createElement(TimelineComponent, null)
      ), getRoot());
  }

});

new Router();

Backbone.history.start();
