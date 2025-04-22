// Recursive File Explorer Project
// React.js + JavaScript

import React, { useState } from "react";

// Mock File System Data
const fileSystem = {
  name: "root",
  isFolder: true,
  items: [
    { name: "index.html", isFolder: false },
    {
      name: "src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        {
          name: "components",
          isFolder: true,
          items: [{ name: "FileExplorer.js", isFolder: false }]
        }
      ]
    },
    { name: "README.md", isFolder: false }
  ]
};

// Recursive Component
const FileExplorer = ({ data }) => {
  const [expand, setExpand] = useState(false);

  if (!data.isFolder) {
    return <div>📄 {data.name}</div>;
  }

  return (
    <div style={{ marginLeft: 20 }}>
      <div onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
        {expand ? "📂" : "📁"} {data.name}
      </div>

      {expand &&
        data.items.map((item, index) => (
          <FileExplorer key={index} data={item} />
        ))}
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>🧠 Recursive File Explorer</h2>
      <FileExplorer data={fileSystem} />
    </div>
  );
};

export default App;
