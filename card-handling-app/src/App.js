import './App.css';
import Tabs from "./Tabs";

function App() {
  const tabData = [
    { label: "Author" },
    { label: "Topic" },
    { label: "Relevance" },
  ];

  return (
    <div className="App">
      
      <div className="introduction">
        <h1>Find a Quote for You!</h1>
      </div>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;
