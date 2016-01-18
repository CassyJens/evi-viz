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
      <div>
        <h1> Evi-Viz </h1>
        <TimelineComponent />
      </div>, getRoot());
  }

});

new Router();

Backbone.history.start();
