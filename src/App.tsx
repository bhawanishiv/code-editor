import Editor from "./components/editor";

function App() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div>Sidebar</div>
      <div className="flex-1 ">
        <div className="flex items-center">
          <div>
            App.tsx
            <button>Close</button>
          </div>
        </div>
        <Editor />
      </div>
    </div>
  );
}

export default App;
