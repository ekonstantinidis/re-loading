var React = require('react');
var Loading = require('../../');

var loadingStyle = {
  textAlign: 'center',
  padding: '10px 0'
};

var Example = React.createClass({

  displayName: 'ExampleIcon',

  getInitialState: function () {
    return {
      loading: true
    };
  },

  toggleLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },

  render: function() {
    return (
      <div className='row'>
        <h4>Example</h4>
        <div className='col-md-8' style={loadingStyle}>
          <Loading shouldShow={this.state.loading} faIcon='fa fa-refresh fa-spin' />
        </div>
        <div className='col-md-4'><button className='btn btn-block btn-default' onClick={this.toggleLoading}>Toggle</button></div>
      </div>
    );
  }
});

React.render(<Example />, document.getElementById('example-icon'));
