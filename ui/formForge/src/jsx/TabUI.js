/** @jsx React.DOM */

var TabUI = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});
