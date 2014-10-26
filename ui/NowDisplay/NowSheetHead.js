/** @jsx React.DOM */
var NowSheetHead = React.createClass({
  
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

      <section className="styleguide__feature-spotlight">
      <div className="featured-spotlight">
        <div className="container-medium">
            <div className="featured-spotlight__container g--pull">
                
                <div className="container-small">


             <p className="base">
             <b> {this.state.message} </b>
             <br/>
             Time     
             </p>

               		

               		     
                </div>

            </div>
        </div>
    </div>






	</section>



    );
  }
});
