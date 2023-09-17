import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategories,
  getTopRatedMovies,
  searchCategoryMovie,
} from "@/services/movie";

async function Home({ params }) {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
    { results: searchCategory },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
    searchCategoryMovie(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      searchCategory={searchCategory}
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory : [],
      }}
    />
  );
}
export default Home;
