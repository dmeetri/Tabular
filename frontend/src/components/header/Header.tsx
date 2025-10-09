import "./Header.css";

import AddTable from "../../assets/icons/PlusOutlined.svg";
import TableIcon from "../../assets/icons/ViewTable-2.svg";
import Image from "../../assets/icons/Image.svg";

import ToolButton from "../UI/button/ToolButton";

function Header() {
  return (
    <header>
      <div className="tools flex">
        <div className="container">
          <ToolButton
            imgSrc={TableIcon}
            imgAlt="table"
            textButton="таблица"
          />
          <ToolButton
            imgSrc={Image}
            imgAlt="media"
            textButton="медиа"
          />
        </div>
      </div>

      <div className="list-tables" id="list-tables">
        <div className="container">
          <ToolButton
            imgSrc={AddTable}
            imgAlt="add table"
            textButton=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;