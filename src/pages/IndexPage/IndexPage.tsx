import { useNavContext } from "../../context/NavbarContext";
import { useThemeContext } from "../../context/ThemeContext";
import MonkeyHead from "../../resources/logos/MonkeyHead";
import Search from "../../resources/icons/Search";
import "./IndexPage.css";

const IndexPage = () => {
  const { blur } = useNavContext();
  const { scrollTracker } = useThemeContext();

  return (
    <main className={`indexPageMain ${blur ? "blur" : ""}`}>
      <section
        className="indexTopCardSection"
        aria-label="top photo and searchbar"
      >
        <div className="things">
          <MonkeyHead className="monkey" />
        </div>
        <input type="search" placeholder="Search..." />
      </section>

      <section className="indexFilterSection" aria-label="popular now filter">
        <input type="text" list="data" />
        <datalist id="data">
          <option value="things" />
          <option value="stuff" />
          <option value="mooch" />
          <option value="tits" />
          <option value="hablo" />
        </datalist>
<map>tit</map>
        <form>
          <label htmlFor="vol">Volume (between 0 and 50):</label>
          <input type="range" id="vol" name="vol" min="0" max="50" />
          <input type="submit" />
          <input type="color" />
        </form>

        <div>filter icon goes here</div>
      </section>

      <section className="indexPhotoGrid" aria-label="Photo Grid Section">
        <div>photo grid goes here with title</div>
        <div>dot dot dot</div>
        <button>next button</button>
      </section>

      <section
        className="indexCallToActionPhoto"
        aria-label="photo with call-to-action"
      >
        <div>biggy photo with call to action</div>
      </section>

      <section
        className="indexNewestStyles"
        aria-label="small photo grid with newest styles"
      >
        <div>photogrid with newest styles - total of 4</div>
      </section>

      <section className="indexEmailSignup" aria-label="email sign up">
        <div>email sign up bar</div>
      </section>

      <section
        className="indexSocialsFooter"
        aria-label="contact, EULA and socials"
      >
        <div>large 1/2 ratio footer with socials and contact will go here</div>
      </section>
    </main>
  );
};

export default IndexPage;
