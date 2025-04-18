import { useDrop, useDrag } from "react-dnd";
import { useRef } from "react";

const TargetItem = ({
  text,
  index,
  moveItem,
  onDropAt,
  isPlaceholder,
  removeItem,
}) => {
  const ref = useRef(null);
  const [{ over }, drop] = useDrop({
    accept: "ITEM",
    // hover(item, monitor) {
    //   if (!text || !monitor.isOver({ shallow: true })) return;
    //   if (item.internal && item.index !== index) {
    //     moveItem(item.index, index);
    //     item.index = index;
    //   }
    // },
    drop(item, monitor) {
      if (!item.internal) {
        onDropAt(item, index); // spolja ubačen
      } else moveItem(item.index, index);
    },
    collect: (monitor, props) => ({
      over: monitor.isOver(),
    }),
  });

  const [, drag] = useDrag({
    type: "ITEM",
    item: { text, index, internal: true },
  });

  // Ako je placeholder (na kraju liste), nema drag
  // if (isPlaceholder) {
  //   return (
  //     <div
  //       ref={drop}
  //       style={{
  //         border: "1px dashed gray",
  //         margin: "3px",
  //         padding: "9px",
  //       }}
  //     >
  //       <i>Drop zona</i>
  //     </div>
  //   );
  // }

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        padding: "9px",
        margin: "3px",
        backgroundColor: over ? "#ccc" : "#f0f0f0",
        border: "1px solid #bbb",
        cursor: "move",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{text.display}</span>
      <button
        onClick={() => removeItem(index)}
        style={{ marginLeft: 10 }}
        title={`izbriši ${text.display}`}
      >
        ❌
      </button>
    </div>
  );
};

export default TargetItem;
