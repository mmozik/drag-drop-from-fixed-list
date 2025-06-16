import { useDrop } from "react-dnd";

const DropZone = ({ onDropAt, itemsCount = 0 }) => {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item) => {
      onDropAt(item, itemsCount);
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
      <i>Prevuci i pusti ovde da dodas na dno</i>
    </div>
  );
};

export default DropZone;
