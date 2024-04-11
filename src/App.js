import { useEffect, useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import familyTree from './tree.json';
import './App.css';

function App() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}>
      <Tree
        orientation="vertical"
        rootNodeClassName="node-style"
        branchNodeClassName="node-style"
        centeringTransitionDuration={500}
        initialDepth={2}
        dimensions={dimensions}
        translate={{
          x: dimensions.width / 2.5,
          y: dimensions.height / 5,
        }}
        data={familyTree}
      />
    </div>
  );
}

export default App;
