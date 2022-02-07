import Square from "../Square";

const FirstSquare = ({ project, date, circles }) => {
  return (
    <div className="main-first-square">
      <div className="main-first-square__figures">
        <div className="main-first-square__figures-squares">
          <Square
            width="30px"
            height="26px"
            borderRadius=""
            background="#FFD999"
            border=""
          />
          <div>
            <Square
              width="30px"
              height="26px"
              borderRadius=""
              background="#FF9F00"
              border=""
            />
          </div>
        </div>

        <div className="main-first-square__figures-circles">
          <Square
            width="18px"
            height="18px"
            borderRadius="50px"
            background="#fff"
            border="1px solid #BEC0C8"
          />
          <div className="first">
            <Square
              width="18px"
              height="18px"
              borderRadius="50px"
              background="#fff"
              border="1px solid #BEC0C8"
            />
          </div>
          {circles > 2 ? (
            <div className="second">
              <Square
                width="18px"
                height="18px"
                borderRadius="50px"
                background="#fff"
                border="1px solid #BEC0C8"
              >{`+${circles}`}</Square>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="main-first-square__figures-points">
          <Square
            width="3px"
            height="3px"
            borderRadius="50px"
            background="#C4C4C4"
            border=""
          />
          <Square
            width="3px"
            height="3px"
            borderRadius="50px"
            background="#C4C4C4"
            border=""
          />
          <Square
            width="3px"
            height="3px"
            borderRadius="50px"
            background="#C4C4C4"
            border=""
          />
        </div>
      </div>

      <div className="main-first-square__data">
        <p className="main-first-square__title">{project}</p>
        <p className="main-first-square__date">Created: {date}</p>
      </div>
    </div>
  );
};

export default FirstSquare;
