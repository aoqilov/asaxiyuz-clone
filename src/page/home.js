import React from "react";
import Afisha from "../components/afisha/Afisha";
import Miks from "../components/miks/Miks";
import Navbar from "../components/navbar/Navbar";
import Book from "../components/aside/book";
import "../components/aside/aside.scss";
import ForYou from "../components/sectionCard/forYou";
import Popular from "../components/sectionCard/popular";
import Phone from "../components/aside/phone";
import FooterMain from "../components/footer/footerMain";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Miks />
      <Afisha />
      <div className="block">
        <aside>
          <Book />
          <Phone />
        </aside>
        <section>
          <ForYou />
          <Popular />
        </section>
      </div>
      <footer>
        <FooterMain />
      </footer>
    </div>
  );
};

export default Home;
