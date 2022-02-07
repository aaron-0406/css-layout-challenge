import Square from "../Square";
import FourthSquare from "../asideRight/FourthSquare";

const AsideRight = () => {
  const listStorage = [
    {
      color: "#FF9F00",
      documents: "Documents",
      files: 720,
      storage: 200,
    },
    {
      color: "#689FF8",
      documents: "Documents",
      files: 720,
      storage: 125,
    },
    {
      color: "#4AC29D",
      documents: "Documents",
      files: 720,
      storage: 75,
    },
    {
      color: "#BCBECA",
      documents: "Documents",
      files: 720,
      storage: 50,
    },
  ];

  return (
    <div className="asideright-container">
      <section className="asideright-container__section1">
        <div className="first">
          <Square
            width="15px"
            height="15px"
            borderRadius=""
            background="#C4C4C4"
            border=""
          />
          <Square
            width="15px"
            height="15px"
            borderRadius=""
            background="#C4C4C4"
            border=""
          />
        </div>
        <div className="second">
          <p>
            Name <span style={{ visibility: "hidden" }}>x</span>
          </p>
          <Square
            width="31px"
            height="31px"
            borderRadius="50px"
            background="#C4C4C4"
            border=""
          />
        </div>
      </section>
      <section className="asideright-container__section2">
        <p className="asideright-container__section2-title">Storage</p>
        <div className="asideright-container__section2-progress-circle1"></div>
        <div className="asideright-container__section2-progress-circle2"></div>
        <div className="asideright-container__section2-progress-circle3"></div>
        <div className="asideright-container__section2-progress-circle4"></div>
        <Square
          width="115px"
          height="115px"
          borderRadius="50%"
          background="#C4C4C4"
          border=""
        />

        <ul>
          {listStorage.map((item) => {
            return (
              <FourthSquare
                color={item.color}
                documents={item.documents}
                files={item.files}
                storage={item.storage}
              />
            );
          })}
        </ul>
      </section>
      <section className="asideright-container__section3">
        <Square
          width="194px"
          height="202px"
          borderRadius="18px"
          background="#fff"
          border=""
        >
          <div className="rectangle">
            <Square
              width="119px"
              height="73px"
              borderRadius="11px"
              background="linear-gradient(270.15deg, #689FF8 0.15%, #FF6860 54.7%, #FF9F00 99.9%)"
              border=""
            />
          </div>

          <p className="title-first">Buy more space now!</p>
          <p className="title-second">Upgrade to cloud premium</p>
          <Square
            width="116px"
            height="30px"
            borderRadius="7px"
            background="#FF9F00"
            border=""
          >
            Upgrade Account!
          </Square>
        </Square>
      </section>
    </div>
  );
};

export default AsideRight;
