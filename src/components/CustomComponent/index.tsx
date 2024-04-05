"use client";

import React, { useState, useEffect } from "react";

interface CustomComponentProps {
  initialText?: string;
  initialColor?: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({
  initialText = "Default Text",
  initialColor = "black",
}) => {
  const [text, setText] = useState(initialText);
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <input type="color" value={color} onChange={handleColorChange} />
      <div style={{ color }}>{text}</div>
    </div>
  );
};

export default CustomComponent;
