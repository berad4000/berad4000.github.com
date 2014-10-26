/** @jsx React.DOM */
var LifeSelector = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (


<section className="styleguide__article-nav">
    <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <div className="container-medium">
        <nav className="article-nav">
            <a href="#ignore-click" className="article-nav-link article-nav-link--prev">
                <p className="article-nav-count">02</p>
                <p>A need for responsive pages</p>
            </a>
            <a href="#ignore-click" className="article-nav-link article-nav-link--next">
                <p className="article-nav-count">04</p>
                <p>Create images for multiple resolutions</p>
            </a>
        </nav>
    </div>
</section>
        

    );
  }
});
