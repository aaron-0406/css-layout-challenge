import Square from "../Square";
import SectionTitle from "../main/SectionTitle";
import FirstSquare from "../main/FirstSquare";
import SecondSquare from "../main/SecondSquare";
import ThirdSquare from "../main/ThirdSquare";

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
        <div className="main-container__second-circles">
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
          <FirstSquare
            project="Client Documents"
            date="4.03.2020"
            circles={4}
          />
        </div>
      </section>

      <section className="main-container__third">
        <SectionTitle title="Recent Files" text="View All" />
        <div className="main-container__third-name-columns">
          <p>Name</p>
          <p>Members</p>
          <p>Last Modified</p>
        </div>
        <div className="main-container__third-list">
          <SecondSquare
            color="#FF9F00"
            title="Travel Landing Page"
            members={5}
            date="Mar 8, 2020"
          />
          <SecondSquare
            color="#4AC29D"
            title="True Photos"
            members={12}
            date="Mar 8, 2020"
          />
          <SecondSquare
            color="#FF6860"
            title="Dashboard Structure"
            members={10}
            date="Mar 8, 2020"
          />
          <SecondSquare
            color="#FF9F00"
            title="Character Illustration"
            members={3}
            date="Mar 10, 2020"
          />
        </div>
      </section>


      <section className="main-container__fourth">
        <SectionTitle title="Share with me" text="View All" />
        <div className="main-container__fourth-squares">
          <ThirdSquare project="Landing Page" date="20.02.2020" circles={2} />
          <ThirdSquare
            project="Illustration Pack"
            date="20.02.2020"
            circles={3}
          />
          <ThirdSquare project="CV Design" date="20.02.2020" circles={2} />
          <ThirdSquare
            project="Illustration Pack"
            date="20.02.2020"
            circles={3}
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
