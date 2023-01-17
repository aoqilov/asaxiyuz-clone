import React from "react";
import "./miks.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Miks = () => {
  return (
    <div>
      <div className="miks">
        <MenuIcon className="icon-menu" />
        <div className="tema">
          <h2>all departments</h2>
          <h2>kitoblar</h2>
          <h2>Telefonlar va gadjetlar</h2>
          <h2>televizorlar</h2>
          <h2>Sport tovarlari</h2>
          <h2>Maishiy texnika</h2>
          <h2>o'yin pristavkalari</h2>
        </div>
      </div>
    </div>
  );
};

export default Miks;
