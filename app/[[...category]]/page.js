import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategories,
  getTopRatedMovies,
  searchCategoryMovie,
} from "@/services/movie";

async function Home({ params, searchParams }) {
  let selectedCategory;
  let searchCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]);
    selectedCategory = results;
  }
  if (searchParams.search?.length > 0) {
    const { results } = await searchCategoryMovie(searchParams.search);
    searchCategory = results;
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
