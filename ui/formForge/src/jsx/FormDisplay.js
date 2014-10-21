/** @jsx React.DOM */

var FormDisplay = React.createClass({
 

  render: function() {
    
    return (

    	<FormImage src = { this.props.formImage } />
        
      //<div>
      //  <p>Focus</p>
      //  <p>{ this.props.value }</p>
        //<ProfilePic username={this.props.username} />
        //<ProfileLink username={this.props.username} />
      //</div>
    )
  }
});



var FormImage = React.createClass( {
  render: function() {
    return (
      <img src={ this.props.src } />
    );
  }
});



