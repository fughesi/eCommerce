import "./IndexPage.css";
import { useNavContext } from "../../context/NavbarContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import PhotoCarousel from "../../components/photoCarousel/PhotoCarousel";
import NewestCollectionGrid from "../../components/NewestCollectionGrid/NewestCollectionGrid";

const IndexPage = () => {
  const { blur } = useNavContext();

  return (
    <main className={`indexPageMain ${blur ? "blur" : ""}`}>
      <section
        className="indexTopCardSection"
        aria-label="top photo and searchbar"
      >
        <div className="topHeroElement"></div>
        <SearchBar />
      </section>

      <section className="indexFilterSection" aria-label="popular now filter">
        <select name="cars" id="cars">
          <option value="">Popular Now</option>
          <option value="">stuff</option>
          <option value="">things</option>
          <option value="">more things</option>
        </select>

        <div>filter icon goes here</div>
      </section>

      <section className="indexPhotoGrid" aria-label="Photo Grid Section">
        <div>
          <PhotoCarousel />
        </div>

        <button>Next {`-->`}</button>
      </section>

      <section
        className="indexCallToActionPhoto"
        aria-label="photo with call-to-action"
      ></section>

      <section
        className="indexNewestStyles"
        aria-label="small photo grid with newest styles"
      >
        <NewestCollectionGrid />
      </section>

      <section className="indexEmailSignup" aria-label="email sign up">
        <h4>STAY IN TOUCH</h4>
        <form className="emailSignupGroup">
          <label htmlFor="emailSignup">
            <input type="email" id="emailSignup" placeholder="EMAIL ADDRESS" />
          </label>
          <label htmlFor="emailSignupSubmit">
            <button type="submit" id="emailSignupSubmit">
              submit
            </button>
          </label>
        </form>
      </section>

      <section
        className="indexSocialsFooter"
        aria-label="contact, EULA and socials"
      >
        <div className="">FOOTER </div>
      </section>
    </main>
  );
};

export default IndexPage;
