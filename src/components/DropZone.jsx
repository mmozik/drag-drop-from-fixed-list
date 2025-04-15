import { useDrop } from "react-dnd";

const DropZone = ({ onDropAt }) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item) => {
      onDropAt(item, 0);
    },
    canDrop: (item) => !item.internal,
  });

  return (
    <div
      ref={drop}
      style={{
        border: "1px dashed gray",
        margin: "3px",
        padding: "9px",
      }}
    >
      <i>Prebaci ovde da dodas na vrh</i>
    </div>
  );
};

export default DropZone;
