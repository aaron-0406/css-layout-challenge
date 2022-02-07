const Square = ({
  width,
  height,
  borderRadius,
  background,
  border,
  children,
}) => {
  const divStyleSquare = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    background: background,
    border: border,
  };

  return <div style={divStyleSquare}>{children}</div>;
};

export default Square;
