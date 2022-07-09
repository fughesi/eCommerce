import { useDarkTheme } from "../../context/DarkModeContext";
import { useNavContext } from "../../context/NavbarContext";
import { useSearchContext } from "../../context/SearchContext";
import Search from "../../resources/icons/Search";
import "./IndexPage.css";


type searchBarProps = {
  value: string | number
}


const IndexPage = () => {
  const { blur } = useNavContext();
  const { search, useSearchBar } = useSearchContext();

  console.log(search);
  return (
    <main className={`indexPageMain ${blur ? "blur" : ""}`}>
      <section>
        <div></div>
        <label htmlFor="searchBar" className="searchLabel">
          <input
            type="search"
            id="searchBar"
            name="searchBar"
            // onChange={()=>useSearchBar(value:searchBarProps)}
          />
        </label>
        {/* <Search width={25} /> */}
      </section>
    </main>
  );
};

export default IndexPage;
