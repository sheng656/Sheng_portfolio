import { portfolioData } from "./data/portfolioData";

function App() {
  return (
    <main
      className="min-h-screen bg-surface-950 text-surface-100 font-body"
      data-default-theme={portfolioData.theme.defaultMode}
    />
  );
}

export default App;
