import { useNavContext } from "../../context/NavbarContext";
import { useFormDataContext } from "../../context/FormDataContext";
import { useSearchContext } from "../../context/SearchContext";
import { useThemeContext } from "../../context/ThemeContext";
import Search from "../../resources/icons/Search";
import "./IndexPage.css";
import React, { useRef } from "react";

const IndexPage = () => {
  const { blur } = useNavContext();
  const { search, useSearchBar } = useSearchContext();
  const { formData, getFormData } = useFormDataContext();
  const { scrollTracker, getVerticalScroll, getClientWidth } = useThemeContext();
  
  
  
  
  return (
    <main className={`indexPageMain ${blur ? "blur" : ""}`}>
      <section>
        <div></div>
        <label htmlFor="searchBar" className="searchLabel">
          <input
          
            type="search"
            id="searchBar"
            name="searchBar"
            value={search}
            onChange={useSearchBar}
          />
        </label>
        <form>
          <input
            type="tel"
            name="phoneNumber"
            id="things"
            placeholder="phone"
            value={formData.phoneNumber}
            onChange={getFormData}
          />
          <label htmlFor="quantity" className="searchLabel">
            Qu 5
          </label>
          <input
            type="tel"
            id="quantity"
            name="quantity"
            ></input>
  
          <input type="radio" name="tits" value="tits" />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            style={{
              transform: `translateY(${scrollTracker * 0.25}px)`,
            }}
            onChange={getFormData}
            />
        </form>
        <Search width={25} />
      </section>
    </main>
  );
};

export default IndexPage;
