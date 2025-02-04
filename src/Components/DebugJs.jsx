import React, { useState, useRef, useEffect } from "react";

const Debugjs = ({ toggleDrawing }) => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [drawingEnabled, setDrawingEnabled] = useState(true);
  const [zIndexS, setzIndexS] = useState("-8");

  const startDrawing = (e) => {
    if (!drawingEnabled) return;
    setDrawing(true);
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    setLastPosition(getCanvasCoordinates(clientX, clientY));
  };

  const draw = (e) => {
    if (!drawing || !drawingEnabled) return;

    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    const currentPosition = getCanvasCoordinates(clientX, clientY);

    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(currentPosition.x, currentPosition.y);
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;
    context.lineCap = "round";
    context.stroke();

    setLastPosition(currentPosition);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const getCanvasCoordinates = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const clearCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  useEffect(() => {
    if (drawingEnabled) {
      const canvas = canvasRef.current;

      const handleMouseDown = (e) => startDrawing(e);
      const handleMouseMove = (e) => draw(e);
      const handleMouseUp = () => stopDrawing();
      
      const handleTouchStart = (e) => startDrawing(e);
      const handleTouchMove = (e) => {
        e.preventDefault(); // Previne o comportamento de scroll no toque
        draw(e);
      };
      const handleTouchEnd = () => stopDrawing();

      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);

      canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
      canvas.addEventListener("touchend", handleTouchEnd);

      return () => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);

        canvas.removeEventListener("touchstart", handleTouchStart);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [drawing, lastPosition, drawingEnabled]);

  useEffect(() => {
    setDrawingEnabled(toggleDrawing);
    if (drawingEnabled === true) {
      setzIndexS("-8");
    } else if (drawingEnabled === false) {
      setzIndexS("1");
    }
  }, [toggleDrawing]);

  return (
    <div style={{ position: "absolute", width: "100vw", height: "220vh", zIndex: `${zIndexS}` }}>
      {drawingEnabled && (
        <div
          className="controls"
          style={{
            zIndex: 10,
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div>
            <label>Escolha a cor do lápis: </label>
            <input
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
            />
          </div>

          <div>
            <label>Escolha o tamanho do lápis: </label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(e.target.value)}
            />
            <span>{brushSize}</span>
          </div>

          <div>
            <button className="clearbtn" onClick={clearCanvas}>Limpar</button>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight * 2.2}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "transparent",
          zIndex: 9,
        }}
      ></canvas>
    </div>
  );
};

export default Debugjs;
