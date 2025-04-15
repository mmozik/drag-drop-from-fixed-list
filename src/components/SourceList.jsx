import SourceItem from "./SourceItem";

const fixedItems = ["Crveno", "Zeleno", "Plavo", "Žuto"];

const SourceList = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {fixedItems.map((type, i) => (
        <SourceItem key={i} type={type} />
      ))}
    </div>
  );
};

export default SourceList;
