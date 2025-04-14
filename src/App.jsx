import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SourceList from "./components/SourceList";
import TargetList from "./components/TargetList";
import { useState } from "react";

function App() {
  const [targetItems, setTargetItems] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Izvor</h2>
      <SourceList />
      <h2>Ciljna lista</h2>
      <TargetList items={targetItems} setItems={setTargetItems} />
    </DndProvider>
  );
}

export default App;
