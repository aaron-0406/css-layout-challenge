import Square from "../Square";
import SectionTitle from "../main/SectionTitle";
import FirstSquare from "../main/FirstSquare";

const Main = () => {
  return (
    <div className="main-container">
      <section className="main-container__first">
        <Square
          width="100%"
          height="29px"
          borderRadius="5px"
          background="#FFFFFF"
          border=""
        >
          <Square
            width="15px"
            height="15px"
            borderRadius=""
            background="#FFFFFF"
            border="1px solid #BCBECA"
          />{" "}
          Search
        </Square>
      </section>

      <section className="main-container__second">
        <SectionTitle title="Recently Used" text="" />
        <div className="main-container__circles">
          <FirstSquare project="App Project" date="20.02.2020" circles={2} />
          <FirstSquare
            project="Project: fitbit"
            date="28.02.2020"
            circles={2}
          />
          <FirstSquare
            project="Client Documents"
            date="4.03.2020"
            circles={3}
          />
        </div>

        <SectionTitle title="Recent Files" text="View All" />
      </section>
    </div>
  );
};

export default Main;
