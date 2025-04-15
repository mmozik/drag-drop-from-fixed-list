import { useDrag } from "react-dnd";

const SourceItem = ({ type }) => {
  const [{ dragged }, drag] = useDrag({
    type: "ITEM",
    item: { display: type, type, count: 0 }, // šta šalješ kada je prevučeno
    collect: (monitor) => ({
      dragged: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        padding: "8px",
        backgroundColor: dragged ? "#f00" : "#d0e0ff",
        border: "1px solid #aaa",
        cursor: "grab",
      }}
    >
      {type}
    </div>
  );
};

export default SourceItem;
