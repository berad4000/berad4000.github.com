/** @jsx React.DOM */
var BeeWoundList = React.createClass({
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


        <section className="styleguide__featured-section">




    <div className="featured-section">
        <div className="container-medium">
            <ul className="featured-list">

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

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>

                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className="featured-list__item clear">
                    <div className="container-small">
                        <div className="featured-list__content g--half">
                            
                            <p className="large">


                            Fractured Mantipula
                            <br />
                            <span className="base">Will Heal in 15 minutes</span>


                            
                            </p>
                            <h3 className="xlarge">Bruise</h3>
                            
                            
                        </div>
                        <div className="featured-list__img-wrapper g--half g--last">
                            <div className="featured-list__img">
                                <img src="./images/placeholder--small.png" alt="small image placeholder example" />
                            </div>
                        </div>
                    </div>
                </li>


            </ul>
        </div>
    </div>
</section>


        

    );
  }
});
