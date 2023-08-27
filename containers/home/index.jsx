import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  topRatedMovies = [],
  selectedCategory,
  popularMovies = [],
  categories = [],
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories} />

      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => genre.id === +selectedCategory.id)?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Top Rated" movies={topRatedMovies} />
      <MoviesSection title="Popular Films" movies={popularMovies} />
    </div>
  );
}

export default HomeContainer;
