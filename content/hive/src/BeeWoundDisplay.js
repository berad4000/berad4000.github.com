/** @jsx React.DOM */
var BeeWoundDisplay = React.createClass({
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




<section>

        <div className="page-header">
        <div className="container">
            <h3 className="xxlarge text-divider"> -5 hours 34 min 56 secs </h3>
            <p className="large page-header__excerpt g-wide--push-1 g-wide--pull-1">  
            <span className="base">
            Reduction to Life Span Caused by 
            </span>
            <br/>
            7 Wounds
            </p>
            
        </div>
    </div>

</section>
        

    );
  }
});
