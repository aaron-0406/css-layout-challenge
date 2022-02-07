import Square from "../Square";

const SecondSquare = ({ color, title, members, date }) => {
  return (
    <Square
      width="100%"
      height="42px"
      borderRadius="10px"
      background="#fff"
      border=""
    >
      <div className="second-square__title">
        <Square
          width="21px"
          height="21px"
          borderRadius="5px"
          background={color}
          border=""
        />
        {title}
      </div>
      <p>{members} members</p>
      <p>{date}</p>
      <div className="second-square__points">
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
    </Square>
  );
};

export default SecondSquare;
