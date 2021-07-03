export default class MoviesAnalyzer {
    constructor(movies, users) {
        this.movies = movies;
        this.users = users;
    }

    topWatchlistedMoviesAmongFriends(userId) {

     let movieCounts = {};
     let sortable = []
     let topFour = []

        let friends = this.users.find(user => user.userId === userId).friends
        for( let movie of this.movies){
          for (let friend of friends)
           if (movie.watchlist.includes(friend)) {
      
           movieCounts[movie.title]=  movieCounts[movie.title] + 1 || 1}
            }
            for (let key in movieCounts){
                sortable.push([key, movieCounts[key]])
            }
            sortable.sort((a,b) => { 
                 if(b[1] == a[1]) {
                    return a[0].localeCompare(b[0]);
               }
                return b[1] - a[1]
            });
            
            for(let i=0; i<4; i++){
                topFour.push(sortable[i][0]);
            }
            return topFour
           
        }}