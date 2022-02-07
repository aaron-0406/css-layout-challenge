import Square from "../Square";

const FourthSquare = ({ color, documents, files, storage }) => {
  return (
    <div className="fourth-square">
      <div className="fourth-square__first">
        <Square
          width="28px"
          height="28px"
          borderRadius="8px"
          background={color}
          border=""
        />
        <div>
          <p className="title-first">{documents}</p>
          <p className="title-second">{files} files</p>
        </div>
      </div>

      <div className="fourth-square__second">
        <Square
          width="54px"
          height="21px"
          borderRadius="4px"
          background="#fff"
          border=""
        >
          {storage} GB
        </Square>
      </div>
    </div>
  );
};

export default FourthSquare;
