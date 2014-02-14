/**
 * @author Mathias Ask
 */

//here I am going to write down the last four movies that I have seen in theater. I will also write down 
			//whether the movie is animated or live action and who the star of the movie is. 

				var myMovies = [{
					"name" : "LegoMovie",
					"type" : "animated",
					"star" : "WillFerrel"
				}, {
					"name" : "Frozen",
					"type" : "animated",
					"star" : "KristenBell"
				}, {
					"name" : "WolfOfWallStreet",
					"type" : "LiveAction",
					"star" : "LeoDiCaprio"
				}, {
					"name" : "AmericanHustle",
					"type" : "LiveAction",
					"star" : "ChristianBale"
				}];

				console.log(myMovies);
				
			//now I am going to split the movies into two categories: live action and animated. I will call the first list 
			// myAnimated and the second one myLiveAction.
			
			var myAnimated = []
			var myLiveAction = []
			
			//And now I will, obviously, put Frozen and Lego Movie in the Animated category while Wolf Of Wall Street and American Hustle will go in Live Action.
			//I will create a conditional where if the type of a movie = Animated it will go in myAnimated while everything else goes in myLiveAction
			
			for(var i=0; i<4; i++) {
				
				console.log(i);
				
				var currentMovie = myMovies[i];
				
				
				console.log(currentMovie.type);
			
				
				if(currentMovie.type == "Animated") {
				
				myAnimated.push(currentMovie)
				
				}else{
				
				myLiveAction.push(currentMovie)
					
					
					
				}
				
				
				
				
			}
			
			console.log(myAnimated);
			console.log(myLiveAction);
		