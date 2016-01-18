var timeline = React.createClass({

  render: function() {
    return (
      <div>
        <h2> timeline goes here </h2>
        <button onClick={this.updateColor}> Click to update component </button>
        <div id='visualization' />
      </div>
    );
  },

  instantiateGraph: function () {
    var container = document.getElementById('visualization');
    var items = new vis.DataSet([
      {id: 1, content: 'item 1', start: '2013-04-20'},
      {id: 2, content: 'item 2', start: '2013-04-14'},
      {id: 3, content: 'item 3', start: '2013-04-18'},
      {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
      {id: 5, content: 'item 5', start: '2013-04-25'},
      {id: 6, content: 'item 6', start: '2013-04-27'}
    ]);

    var options = {};
    var timeline = new vis.Timeline(container, items, options);
  },

  updateColor: function () {
    this.setState({
      color: true
    });
  },

  updateComponent: function () {
    $('h2').css('color', 'red');
  },

  shouldComponentUpdate: function () {
    this.updateComponent();
    return false;
  },

  componentDidMount: function () {
    this.instantiateGraph();
  }

});


module.exports = timeline;
