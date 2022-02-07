import React, { useRef } from "react";
import Square from "../Square";
import ItemNavbar from "../asideLeft/ItemNavbar";

const AsideLeft = () => {
  const spanItem1 = useRef();
  const spanItem2 = useRef();
  const spanItem3 = useRef();
  const spanItem4 = useRef();
  const spanItem5 = useRef();
  const spanItem6 = useRef();

  return (
    <div className="asideleft-container">
      <div className="asideleft-container__first-square">
        <Square
          width="74px"
          height="21px"
          borderRadius="5px"
          background="linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%)"
          border=""
        />
      </div>

      <ul className="asideleft-container__navbar">
        <ItemNavbar refItem={spanItem1} nameItem="Home" />
        <ItemNavbar refItem={spanItem2} nameItem="My Files" />
        <ItemNavbar refItem={spanItem3} nameItem="Recent Files" />
        <ItemNavbar refItem={spanItem4} nameItem="Shared Filed" />
        <ItemNavbar refItem={spanItem5} nameItem="File Request" />
        <ItemNavbar refItem={spanItem6} nameItem="Trash" />
      </ul>

      <div className="asideleft-container__below">
        <section className="asideleft-container__below-first">
          <Square
            width="116px"
            height="111px"
            borderRadius="9px"
            background="#464C61"
            border=""
          >
            <ul>
              <li>
                <Square
                  width="15px"
                  height="15px"
                  borderRadius=""
                  background="#464C61"
                  border="1px solid #fff"
                />{" "}
                Upload file
              </li>

              <li>
                <Square
                  width="15px"
                  height="15px"
                  borderRadius=""
                  background="#464C61"
                  border="1px solid #fff"
                />{" "}
                Upload folder
              </li>

              <li>
                <Square
                  width="15px"
                  height="15px"
                  borderRadius=""
                  background="#464C61"
                  border="1px solid #fff"
                />{" "}
                New folder
              </li>

              <li>
                <Square
                  width="15px"
                  height="15px"
                  borderRadius=""
                  background="#464C61"
                  border="1px solid #fff"
                />{" "}
                More
              </li>
            </ul>
          </Square>
        </section>

        <div style={{ position: "relative" }}>
          <div className="asideleft-container__triangle"></div>
        </div>

        <section className="asideleft-container__below-second">
          <Square
            width="116px"
            height="30px"
            borderRadius="7px"
            background="#FF9F00"
            border=""
          >
            Create New{" "}
            <Square
              width="21px"
              height="21px"
              borderRadius="4px"
              background="#FFB233"
              border=""
            >
              +
            </Square>
          </Square>
        </section>
      </div>
    </div>
  );
};

export default AsideLeft;
