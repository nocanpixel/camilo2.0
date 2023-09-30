import React, { useState, useEffect } from 'react';
import './styles.css'

const Spotlight: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [highlightedElement, setHighlightedElement] = useState(null);
  
    // Track cursor position
    const trackCursor = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    // Highlight an element on hover
    const handleElementHover = (elementId:any) => {
      setHighlightedElement(elementId);
    };
  
    // Remove highlight when leaving the element
    const handleElementLeave = () => {
      setHighlightedElement(null);
    };

  return (
    <div className="spotlight-container" onMouseMove={trackCursor}>
      {/* Spotlight */}
      <div
        className="spotlight bg-blue-600"
        style={{
          top: cursorPosition.y + 'px',
          left: cursorPosition.x + 'px',
        }}
      ></div>

      {/* Elements to highlight */}
      <div
        className={`highlightable-element ${highlightedElement === 'element1' ? 'highlighted' : ''}`}
        onMouseEnter={() => handleElementHover('element1')}
        onMouseLeave={handleElementLeave}
      >
        Element 1
      </div>

      <div
        className={`highlightable-element ${highlightedElement === 'element2' ? 'highlighted' : ''}`}
        onMouseEnter={() => handleElementHover('element2')}
        onMouseLeave={handleElementLeave}
      >
        Element 2
      </div>
    </div>
  );
};

export default Spotlight;