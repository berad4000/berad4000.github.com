/** @jsx React.DOM */
var BeeSheetHead = React.createClass({
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

                	<nav className="breadcrumbs">
    <p><a style={{ "color": "white"  }} href="#ignore-click" className="breadcrumbs__link">Traits</a> / <a style={{ "color": "white"  }} href="#ignore-click" className="breadcrumbs__link"> Powers </a> / <a href="#ignore-click" className="breadcrumbs__link" style={{ "color": "white"  }}> Stats </a> / <a href="#ignore-click" className="breadcrumbs__link" style={{ "color": "white"  }} > Wounds </a> </p>
</nav>

                    <h3 className="xxlarge" style={{ "text-align": "center" }} >High Queen Jodie Kindniss</h3>
                    <h3 className="base text-divider" style={{ "text-align": "center" }} >Currently Painting the Walls of the Queens Chamber</h3>
            	        
                    <h4 className="large" style={{ "text-align": "center" }}> 
                    
                    <img src="./images/hive1.png" alt="Smiley face" height="80" width="80" />
                 
                    <br/>
                    <br/>
                    <b> 500 years 11 months 12 days 45 minutes 34.6 seconds </b>
                    <br/>
                    <span className="base" style={{ "color": "red"  }}> 
                    7 wounds are taking 14 years 23 days 15 minutes and 23.6 seconds off 
                    </span>
                    </h4>
         

                    <br/>
                    <br/>

                    <section className="styleguide__quote">
   					<div className="quote">
        			
        			<div className="container">
            		
            		<blockquote className="quote__content g-wide--push-1 g-wide--pull-1 g-medium--push-1">
                	Everything I make is effectively a self-portrait. 
					I use visual language to create alternate worlds that are more comparisons then narratives of what is.
					By taking away the original narrative of a found image and reinterpreting the image as new, my aim is to deconstruct the familiar by creating a question. 
					I then push the question by installing my paintings in a way in which they create a conversation between one another. 
					I am thereby changing the conversation within the body of each individual painting, thus making an indirect conversation-narrative in the space between the paintings.
                	<p>High Queen Jodie Kindness / 11.09.798</p>
            		</blockquote>
        			</div>
    				</div>
					</section>

					<div className="container">
					  <ul className="list-guides-intro list-centered list--reset clear">

					   <li className="g-medium--half g-wide--1 theme--multi-device-layouts ">
					   
					   <p className="base">
					   <b> Hive </b>
					   <br/>
					   Simus Prime	   
					   </p>

					   </li>

				 
					   <li className="g-medium--half g-wide--1 theme--multi-device-layouts ">
					   
					   <p className="base">
					   <b> Role </b>
					   <br/>
					   Queen	   
					   </p>


					   </li>

					   <li className="g-medium--half g-wide--1 theme--multi-device-layouts ">
					   
					   <p className="base">
					   <b> Persona </b>
					   <br/>
					   Artist	   
					   </p>


					   </li>

					   <li className="g-medium--half g-wide--1 theme--multi-device-layouts g--last  ">
					    
					   <p className="base">
					   <b> Species </b>
					   <br/>
					   Apis andreniformis	   
					   </p>

					   </li>

					  </ul>
     

					</div>


					<div className="container">
					
					<h3 className="xlarge text-divider" style={{ "text-align": "center" }} > 
					Story 
					</h3>
            	    
            	    <p>
            	    The most notable thing about Time is that it is so purely relative. A large amount of reminiscence is, by common consent, conceded to the drowning man; and it is not past belief that one may review an entire courtship while removing one's gloves.

That is what Trysdale was doing, standing by a table in his bachelor apartments. On the table stood a singular-looking green plant in a red earthen jar. The plant was one of the species of cacti, and was provided with long, tentacular leaves that perpetually swayed with the slightest breeze with a peculiar beckoning motion.

Trysdale's friend, the brother of the bride, stood at a sideboard complaining at being allowed to drink alone. Both men were in evening dress. White favors like stars upon their coats shone through the gloom of the apartment.

As he slowly unbuttoned his gloves, there passed through Trysdale's mind a swift, scarifying retrospect of the last few hours. It seemed that in his nostrils was still the scent of the flowers that had been banked in odorous masses about the church, and in his ears the lowpitched hum of a thousand well-bred voices, the rustle of crisp garments, and, most insistently recurring, the drawling words of the minister irrevocably binding her to another.
            	    </p>
					
					</div>



               		

               		     
                </div>

            </div>
        </div>
    </div>






	</section>



    );
  }
});
