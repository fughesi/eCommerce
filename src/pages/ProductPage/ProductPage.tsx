import "./ProductPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageParade from "../../components/ImageParade/ImageParade";

// : React.FC<productprops>

const ProductPage = () => {
  return (
    <main className="productPageMain">
      <section className="productSearchSection" aria-label="search bar area">
        <div className="productSearch">
          <SearchBar />
        </div>
      </section>
      <section>
        <ImageParade />
      </section>
    </main>
  );
};

export default ProductPage;
