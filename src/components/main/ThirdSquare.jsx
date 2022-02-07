import Square from "../Square";

const ThirdSquare = ({ project, date, circles }) => {
  return (
    <div className="main-fourth-square">
      <div className="main-fourth-square__figures">
        <div className="main-fourth-square__figures-squares">
          <Square
            width="30px"
            height="26px"
            borderRadius=""
            background="#FF9F00"
            border=""
          />
        </div>

        <div className="main-fourth-square__figures-circles">
          <Square
            width="18px"
            height="18px"
            borderRadius="50px"
            background="#fff"
            border="1px solid #4AC29D"
          />
          <div className="first">
            <Square
              width="18px"
              height="18px"
              borderRadius="50px"
              background="#fff"
              border="1px solid #FF6860"
            />
          </div>
          {circles > 2 ? (
            <div className="second">
              <Square
                width="18px"
                height="18px"
                borderRadius="50px"
                background="#fff"
                border="1px solid #FF9F00"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="main-fourth-square__data">
        <p className="main-fourth-square__title">{project}</p>
        <p className="main-fourth-square__date">Created: {date}</p>
      </div>
    </div>
  );
};

export default ThirdSquare;
