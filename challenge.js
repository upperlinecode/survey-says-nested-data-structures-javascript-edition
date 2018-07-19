console.log("Script running!")

// This is the data structure you'll interact with! It's pretty good. Scroll down for the first challenge.
var people = [
  {"Name" : "Daniel", "Nickname" : "Danny", "Age" : 31, "Favorite Bands" : ["Booker T and the MGs", "The Meters"], "Favorite Shows" : ["Mad Men", "Silicon Valley"], "Is Programmer" : true, "State" : "NY", "Hair Color" : "Brown", "Motto" : "Don't overthink it.", "Responded on" : "2017-08-01T15:01:54.086Z"},
  {"Name" : "Yaika", "Nickname" : "Yikes", "Age" : 30, "Favorite Bands" : ["Glass Animals", "Queen", "Gogol Bordello", "OK Go", "Nine Inch Nails"], "Favorite Shows" : ["Penny Dreadful", "Parks and Recreation", "Doctor Who", "Wynnona Earp"], "Is Programmer" : false, "State" : "TX", "Hair Color" : "Black", "Motto" : "I guess we'll find out. ", "Responded on" : "2017-08-01T15:47:36.608Z"},
  {"Name" : "Luke", "Nickname" : "Loki", "Age" : 28, "Favorite Bands" : ["Miike Snow", "Alt-J", "Linkin Park"], "Favorite Shows" : ["Game of Thrones", "Doctor Who", "I'm a Walking Cliche (that's not a show)"], "Is Programmer" : false, "State" : "N/A - UK", "Hair Color" : "Dark Blonde", "Motto" : "People have catchphrases in America?", "Responded on" : "2017-08-01T16:00:09.108Z"},
  {"Name" : "William ", "Nickname" : "Wild Bill", "Age" : 29, "Favorite Bands" : ["Pentatonix", "Mêlée", "Vampire Weekend", "ABBA", "Mumford & Sons"], "Favorite Shows" : ["Steven Universe", "Gilmore Girls", "Friends", "Star Trek: Deep Space Nine", "Buffy the Vampire Slayer"], "Is Programmer" : false, "State" : "TX", "Hair Color" : "Brown", "Motto" : "Being kind is always a good idea.", "Responded on" : "2017-08-01T16:30:31.922Z"},
  {"Name" : "Kathryn", "Nickname" : "Kath", "Age" : 51, "Favorite Bands" : ["Imagine Dragons", "Prince", "Eagles", "Ed Sheeran"], "Favorite Shows" : ["Game of Thrones", "Friends"], "Is Programmer" : false, "State" : "NC", "Hair Color" : "Brown", "Motto" : "You can practice being right or you can practice being kind. ", "Responded on" : "2017-08-01T16:42:14.923Z"},
  {"Name" : "Taylor", "Nickname" : "Tay", "Age" : 25, "Favorite Bands" : ["Joseph", "The National", "The Naked and Famous", "Beyonce", "In the Valley Below", "Lizzo"], "Favorite Shows" : ["The West Wing", "Chopped", "Westworld"], "Is Programmer" : true, "State" : "NY", "Hair Color" : "Brown", "Motto" : "The work always gets done.", "Responded on" : "2017-08-01T16:48:17.672Z"},
  {"Name" : "Makenzie", "Nickname" : "Kenzy", "Age" : 27, "Favorite Bands" : ["Something Corporate", "Blink-182", "Taking Back Sunday", "Brand New"], "Favorite Shows" : ["Bob's Burgers", "Buffy the Vampire Slayer", "Veronica Mars", "Arrested Developmenta"], "Is Programmer" : false, "State" : "TX", "Hair Color" : "Brown", "Motto" : "Meh", "Responded on" : "2017-08-01T16:49:27.957Z"},
  {"Name" : "Brenton", "Nickname" : "Smelly", "Age" : 30, "Favorite Bands" : ["Guster", "The Format", "Sakanaction", "John Denver", "Freelance Whales"], "Favorite Shows" : ["Rick and Morty", "Star Trek: Deep Space 9", "Futurama"], "Is Programmer" : false, "State" : "ON", "Hair Color" : "Blonde", "Motto" : "Ohmydog", "Responded on" : "2017-08-01T17:45:29.705Z"},
  {"Name" : "Max", "Nickname" : "Smallman", "Age" : 100, "Favorite Bands" : ["Madonna", "Prince", "Paul Simon", "The Danny Fenjves Band", "Jeff's Astors"], "Favorite Shows" : ["Game of Thrones", "30 Rock", "Parks and Rec"], "Is Programmer" : true, "State" : "CA", "Hair Color" : "Brown", "Motto" : "Get along little doggy", "Responded on" : "2017-08-01T17:59:34.221Z"},
  {"Name" : "Mike", "Nickname" : "Andy", "Age" : 19, "Favorite Bands" : ["Led Zeppelin", "K Flay", "Kongos"], "Favorite Shows" : ["Welcome to the NHK", "Nerve", "Imitation Game"], "Is Programmer" : false, "State" : "AZ", "Hair Color" : "Blonde", "Motto" : "I never die.", "Responded on" : "2017-08-01T18:28:36.363Z"},
  {"Name" : "Olivia", "Nickname" : "Liv", "Age" : 26, "Favorite Bands" : "", "Favorite Shows" : ["Parks and Rec", "Scandal", "Dexter"], "Is Programmer" : true, "State" : "AZ", "Hair Color" : "Blonde", "Motto" : "The best is yet to come!", "Responded on" : "2017-08-01T19:27:08.724Z"},
  {"Name" : "Rebecca", "Nickname" : "Becca", "Age" : 29, "Favorite Bands" : ["The Beatles", "Caro Emerald", "Amy Winehouse", "Stromae"], "Favorite Shows" : ["Hunter x Hunter", "Assassination Classroom", "One Piece"], "Is Programmer" : false, "State" : "TX", "Hair Color" : "Brown", "Motto" : "The thing is", "Responded on" : "2017-08-01T21:08:14.765Z"},
  {"Name" : "Daley", "Nickname" : "", "Age" : 25, "Favorite Bands" : ["Leon Bridges", "NEEDTOBREATHE", "Justin Timberlake", "Kelsea Ballerini", "Chance the Rapper"], "Favorite Shows" : ["Stranger Things", "The office", "Friday Night Lights"], "Is Programmer" : false, "State" : "TN", "Hair Color" : "Brown", "Motto" : ["You can lock your heart up", "and it will be safe from rejection", "but it will also be safe from intimacy."], "Responded on" : "2017-08-01T21:47:06.268Z"},
  {"Name" : "Tim", "Nickname" : "Tim", "Age" : 27, "Favorite Bands" : ["Kishi Bashi", "Passion Pit"], "Favorite Shows" : ["The Wire", "Game of Thrones"], "Is Programmer" : true, "State" : "CA", "Hair Color" : "Black", "Motto" : "Swing Away", "Responded on" : "2017-08-01T23:45:02.208Z"},
  {"Name" : "Ahmad", "Nickname" : "Ahms", "Age" : 29, "Favorite Bands" : ["Saves The Day", "Braid"], "Favorite Shows" : ["The West Wing", "Breaking Bad"], "Is Programmer" : false, "State" : "MI", "Hair Color" : "Black", "Motto" : "That's Dope!", "Responded on" : "2017-08-02T01:13:47.434Z"},
  {"Name" : "Chelsey", "Nickname" : "munchkin", "Age" : 29, "Favorite Bands" : ["Eli young band", "Panic at the Disco", "Fletcher", "Gryffin", "Alt-J"], "Favorite Shows" : ["WOD", "Vamp Diaries", "Flash", "Chuck"], "Is Programmer" : false, "State" : "ID", "Hair Color" : "Blonde", "Motto" : "Don't tell me", "Responded on" : "2017-08-02T01:20:14.070Z"},
  {"Name" : "Faedra", "Nickname" : "Mattox", "Age" : 43, "Favorite Bands" : ["OAR", "Crowder", "Dave Matthews", "Casting Crowns", "Dropkick Murphy's"], "Favorite Shows" : ["The Office", "Gilmore Girls", "So You Think You Can Dance", "Impractical Jokers", "Born This Way"], "Is Programmer" : false, "State" : "WI", "Hair Color" : "Brown", "Motto" : "She is clothed in strength and dignity and she laughs without fear of the future", "Responded on" : "2017-08-02T01:25:05.541Z"},
  {"Name" : "Terrace", "Nickname" : "T-Dawg", "Age" : 31, "Favorite Bands" : ["Chicago", "Earth Wind and Fire"], "Favorite Shows" : ["The Office", "Unbreakable Kimmy Schmidt", "The Fosters"], "Is Programmer" : false, "State" : "AZ", "Hair Color" : "Brown", "Motto" : "Beep beep beep. ", "Responded on" : "2017-08-02T02:36:57.550Z"},
  {"Name" : "Kate", "Nickname" : "KMoMo", "Age" : 27, "Favorite Bands" : ["Adele", "Børns", "Of Monsters and Men"], "Favorite Shows" : ["Game of Thrones", "The Great British Baking Show", "The Handmaid's Tale"], "Is Programmer" : false, "State" : "AZ", "Hair Color" : "Ombré ", "Motto" : ["Do not pity the dead. Pity the living; most of all", "pity those who live without love."], "Responded on" : "2017-08-02T05:15:27.842Z"},
  {"Name" : "Zaire", "Nickname" : "Zai", "Age" : 29, "Favorite Bands" : ["MCR", "panic at the disco", "fall out boy"], "Favorite Shows" : ["Rick and morty", "venture bros"], "Is Programmer" : false, "State" : "TX", "Hair Color" : "Black", "Motto" : "I totally got this ", "Responded on" : "2017-08-02T14:01:35.267Z"}
]

// All the survey responses are stored in an array called "people".

// 1a. Print out the name of the first person who responded to the survey




// 1b. Print out the age of the fifth person who responded to the survey




// 2a. Print out Faedra's favorite shows.




// 2b. Print out Brenton's second favorite band.




// 3a. For each person on this list, print out a descriptor of where they live.
// It will look something like thsis: "____ lives in _____."




// 3b. Print out each person's nickname.
// BONUS: Write some control flow that determines whether / how to respond if someone didn't provide a nickname.




// 4. Find the average of the respondents' ages.




// 5. Print out the percentage of respondents who have brown hair.




// 6. Create two new arrays - one for programmers, and one for non programmers.
//    Sort all the people in the contacts array into these two more specific arrays.




// 7. Iterate over the array in order to figure out how many respondents listed "The Office" as their one of their favorite shows.




// 8. Print out a list of all the bands that are liked by at least two people.
//    Pro-tip: some respondents capitalized band names and other respondents did not, so for example, if Panic at the Disco isn't listed, your code isn't accurately reporting your results.





// 9. Identify anyone on the list who has no common interests (bands or shows) with anyone else. Print their names.
