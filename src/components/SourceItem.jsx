import { useDrag } from "react-dnd";

const SourceItem = ({ text }) => {
  const [, drag] = useDrag({
    type: "ITEM",
    item: { text }, // šta šalješ kada je prevučeno
  });

  return (
    <div
      ref={drag}
      style={{
        padding: "8px",
        backgroundColor: "#d0e0ff",
        border: "1px solid #aaa",
        cursor: "grab",
      }}
    >
      {text}
    </div>
  );
};

export default SourceItem;
