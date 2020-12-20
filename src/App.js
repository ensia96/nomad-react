import React from "react";
import axios from "axios";

import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
    /*
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    */
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

/*

  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

const foodILike = [
  { id: 1, name: "haha", img: "hoho", rating: 3 },
  { id: 2, name: "haha1", img: "hoho3" },
  { id: 3, name: "haha2", img: "hoho2", rating: 3 },
  { id: 4, name: "haha3", img: "hoho1" },
];

function Food({ name, img, rating }) {
  return (
    <div>
      <h1>This is how i laugh! {name}</h1>
      <p>funny level : {rating} / 5</p>
      <h2>{img}</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};  

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food
          key={food.id}
          name={food.name}
          img={food.img}
          rating={food.rating}
        />
      ))}
    </div>
  );
}
*/

export default App;
