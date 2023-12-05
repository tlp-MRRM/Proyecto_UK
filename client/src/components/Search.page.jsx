import { Search } from "../pages/search/SearchPagination";
import { Footer } from "../pages/Footer";
import { Nav } from "../pages/Nav";

export const SearchPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Nav />
      <Search />
      <Footer />
    </div>
  );
};
