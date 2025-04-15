import { useState } from "react";
import TargetItem from "./TargetItem";
import DropZone from "./DropZone";

const TargetList = ({ items, setItems }) => {
  const handleDropAt = (nItem, index) => {
    const updated = [...items];
    let { count, display, type } = nItem;
    const allTypes = updated.filter((i) => i.type == type);
    if (allTypes.length > 0) {
      count = Math.max(...allTypes.map((i) => i.count)); //daj max count u nizu
      count++;
      display = `${type} (${count})`;
    }
    updated.splice(index, 0, { type, count, display });
    setItems(updated);
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div
      style={{ minHeight: "102px", border: "1px solid gray", padding: "3px" }}
    >
      <div style={{ textAlign: "right", padding: "3px" }}>
        <button onClick={() => setItems([])} title="izbrši sve">
          ❌
        </button>
      </div>
      <DropZone onDropAt={handleDropAt} />
      {items.map((item, index) => (
        <TargetItem
          key={index}
          index={index}
          text={item}
          moveItem={(from, to) => {
            const updated = [...items];
            const [removed] = updated.splice(from, 1);
            updated.splice(to, 0, removed);
            setItems(updated);
          }}
          onDropAt={handleDropAt}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default TargetList;
