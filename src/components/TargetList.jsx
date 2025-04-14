import TargetItem from "./TargetItem";

const TargetList = ({ items, setItems }) => {
  const handleDropAt = (text, index) => {
    const updated = [...items];
    updated.splice(index, 0, text);
    setItems(updated);
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div
      style={{ minHeight: "102px", border: "1px solid gray", padding: "3px" }}
    >
      {items.map((text, index) => (
        <TargetItem
          key={index}
          index={index}
          text={text}
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
      <TargetItem isPlaceholder index={items.length} onDropAt={handleDropAt} />
    </div>
  );
};

export default TargetList;
