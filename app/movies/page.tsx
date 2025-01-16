// import React from "react";
// import '../style/movies.css';

//server component



// interface Movie {
//   id: string;
//   title: string;
//   posterUrl: string;
//   description: string;
// }

// const PopularMovies = async () => {
//   const url = "https://imdb8.p.rapidapi.com/title/get-most-popular-movies";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": '63695740afmsh56228531e4a5ff8p1b4fefjsnc1572e64a38d',
//       "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     },
//   };

//   let movies: Movie[] = [];
//   try {

//     const response = await fetch(url, options);
//     const movieIDs = await response.json();

//     const movieDetailsPromises = movieIDs.map(async (id: string) => {
//       const detailResponse = await fetch(
//         `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id.split("/")[2]}`,
//         options
//       );
//       const details = await detailResponse.json();
//       console.log(details)
  

//       if (!details.image) {
//         return null; 
//       }
    
//       return {
//         id: details.id,
//         title: details.title || " ",
//         posterUrl: details.image.url,
       
//       };
//     });

  
//     movies = (await Promise.all(movieDetailsPromises)).filter((movie) => movie !== null);
   
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }

//   return (
//     <div>
//       <h1 className="popular-title">Popular Movies</h1>
//       <div className="movies-list">
//         {movies.map((movie) => (
//           <div className="card-container" key={movie.id}>
//             <div className="card">
//               {/* front */}
//               <div className="card-front">
//                 <img
//                   src={movie.posterUrl}
//                   alt={movie.title}
//                   className="card-image"
//                 />
//               </div>
  
//               {/* back */}
//               <div className="card-back">
//                 <h3>{movie.title}</h3>
//                 <p>{movie.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default PopularMovies;
