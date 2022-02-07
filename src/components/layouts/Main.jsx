import Square from "../Square";
import SectionTitle from "../main/SectionTitle";

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
      </section>
    </div>
  );
};

export default Main;
