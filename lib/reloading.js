var React = require('react');
var SVGs = require('./svg');

module.exports = React.createClass({

  displayName: 'Reloading',

  render: function () {
    var content = this.props.text ? this.props.text : 'Loading...';
    content = this.props.faIcon ? React.createElement("i", {className: this.props.faIcon}, '') : content;
    var svg = this.props.svgIcon ? SVGs[this.props.svgIcon] : null;
    content = this.props.svgIcon ? React.createElement("img", {src: 'data:image/svg+xml;utf8,' + svg}, '') : content;

    return (
      React.createElement("div", {
        className: this.props.className,
        style: {
          display: this.props.shouldShow ? 'block' : 'none'
        }
      }, this.props.children ? this.props.children : content)
    );

  }

});