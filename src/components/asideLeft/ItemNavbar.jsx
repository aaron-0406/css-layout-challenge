import Square from "../Square";

const ItemNavbar = ({ refItem, nameItem }) => {
  const overItem = (ref) => {
    ref.current.classList.toggle("toggleItem");
  };

  return (
    <li
      onMouseOver={() => overItem(refItem)}
      onMouseOut={() => overItem(refItem)}
    >
      <span ref={refItem}></span>
      <Square
        width="15px"
        height="15px"
        borderRadius=""
        background=""
        border="1px solid #fff"
      />
      {nameItem}
    </li>
  );
};

export default ItemNavbar;
