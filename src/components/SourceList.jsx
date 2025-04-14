import SourceItem from "./SourceItem";

const fixedItems = ["Crveno", "Zeleno", "Plavo", "Žuto"];

const SourceList = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {fixedItems.map((text, i) => (
        <SourceItem key={i} text={text} />
      ))}
    </div>
  );
};

export default SourceList;
