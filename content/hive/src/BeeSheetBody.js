/** @jsx React.DOM */
var BeeSheetBody = React.createClass({
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

    <section className="styleguide__page-header">
    <div className="page-header">
        <div className="container">
            <nav className="breadcrumbs">
            </nav>
            <h3 className="huge text-divider">

            1000 kg
            <br />

            <span className="base">
            Honey 56 kg
            </span>

            </h3>
            <p className="large page-header__excerpt g-wide--push-1 g-wide--pull-1">  Size </p>
        </div>
    </div>


    <div className="container">
        
        <ul className="list-guides-intro list-centered list--reset clear">
        
            <li className="g-medium--half g-wide--1 theme--multi-device-layouts  ">
                <a href="#ignore-click" className="themed">
                     <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                     <h3 className="large text-divider">Brain</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>

             <li className="g-medium--half g-wide--1 theme--multi-device-layouts  ">
                <a href="#ignore-click" className="themed">
                    
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                    
                    <h3 className="large text-divider">Antenna</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>

             <li className="g-medium--half g-wide--1 theme--multi-device-layouts  ">
                <a href="#ignore-click" className="themed">
                 
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                
                    <h3 className="large text-divider">Eyes</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>


            <li className="g-medium--half g-wide--1 theme--performance g-medium--last  g-wide--last ">
                <a href="#ignore-click" className="themed">
                       <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                        <h3 className="large text-divider">Wings</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>
        
        
        </ul>


        <ul className="list-guides-intro list-centered list--reset clear">
        
            <li className="g-medium--half g-wide--1 theme--multi-device-layouts  ">
                <a href="#ignore-click" className="themed">
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                     <h3 className="large text-divider">Stomach</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>
            <li className="g-medium--half g-wide--1 theme--introduction-to-media g-medium--last ">
                <a href="#ignore-click" className="themed">
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                     <h3 className="large text-divider">Genitals</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>
            <li className="g-medium--half g-wide--1 theme--user-input  ">
                <a href="#ignore-click" className="themed">
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                     <h3 className="large text-divider">Stinger</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>

            <li className="g-medium--half g-wide--1 theme--performance g-medium--last  g-wide--last ">
                <a href="#ignore-click" className="themed">
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                     <h3 className="large text-divider">Mystery</h3>
                </a>
                <p className="xlarge">56.67%</p>
                <p className="large"> 10kg</p>
            </li>
        
        </ul>

    </div>

</section>


    );
  }
});
