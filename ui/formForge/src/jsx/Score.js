/** @jsx React.DOM */

var Score = React.createClass({
 

  render: function() {
    
    return (

     <Icon value={this.props.value} />
        
      <div>
      <p>Focus</p>
      <p>{ this.props.value }</p>
      </div>
      
    );
  }
});


