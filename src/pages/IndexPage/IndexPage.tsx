import { useNavContext } from "../../context/NavbarContext";
import { useThemeContext } from "../../context/ThemeContext";
import "./IndexPage.css";
import React, { useRef } from "react";

const IndexPage = () => {
  const { blur } = useNavContext();
  const { scrollTracker } = useThemeContext();

  return (
    <main className={`indexPageMain ${blur ? "blur" : ""}`}>
      <section
        className="indexTopCardSection"
        aria-label="top photo and searchbar"
      >
        <div>put photo here</div>
        <div>put searchbar here</div>
      </section>

      <section className="indexFilterSection" aria-label="popular now filter">
        <div>popular now selector goes here</div>
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
