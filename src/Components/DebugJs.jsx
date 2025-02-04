import React, { useState, useRef, useEffect } from "react";

const Debugjs = ({ toggleDrawing }) => {
  // Referência para o canvas e o contexto de desenho
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [brushColor, setBrushColor] = useState("black"); // Cor do pincel
  const [brushSize, setBrushSize] = useState(5); // Tamanho do pincel
  const [drawingEnabled, setDrawingEnabled] = useState(true); // Controle de habilitação do desenho
  const [zIndexS, setzIndexS]=useState("-8")
  // Função para iniciar o desenho
  const startDrawing = (e) => {
    if (!drawingEnabled) return; // Não começa a desenhar se o desenho estiver desabilitado
    setDrawing(true);
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    setLastPosition(getCanvasCoordinates(clientX, clientY));
  };

  // Função para continuar desenhando
  const draw = (e) => {
    if (!drawing || !drawingEnabled) return; // Não desenha se o modo de desenho estiver desabilitado
    
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    const currentPosition = getCanvasCoordinates(clientX, clientY);

    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(currentPosition.x, currentPosition.y);
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor; // Usando a cor do pincel selecionada
    context.lineCap = "round";
    context.stroke();

    setLastPosition(currentPosition); // Atualiza a última posição
  };

  // Função para parar o desenho
  const stopDrawing = () => {
    setDrawing(false);
  };

  // Função para obter as coordenadas do mouse/touch relativas ao canvas
  const getCanvasCoordinates = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Redefinir o canvas
  const clearCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  // Desenhando no canvas
  useEffect(() => {
    if (drawingEnabled) {
      const canvas = canvasRef.current;

      const handleMouseDown = (e) => startDrawing(e);
      const handleMouseMove = (e) => draw(e);
      const handleMouseUp = () => stopDrawing();
      
      const handleTouchStart = (e) => startDrawing(e);
      const handleTouchMove = (e) => draw(e);
      const handleTouchEnd = () => stopDrawing();

      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);

      canvas.addEventListener("touchstart", handleTouchStart);
      canvas.addEventListener("touchmove", handleTouchMove);
      canvas.addEventListener("touchend", handleTouchEnd);

      // Limpeza dos eventos quando o componente for desmontado
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

  // Alterar o estado de drawingEnabled com base no toggleDrawing
  useEffect(() => {
    setDrawingEnabled(toggleDrawing); 
    if(drawingEnabled == true){
      setzIndexS("-8")
    } else if(drawingEnabled == false){
      setzIndexS("1")
    }
  }, [toggleDrawing]);

  return (
    <div style={{ position: "absolute", width: "100vw", height: "220vh", zIndex:`${zIndexS}` }}>
      {/* Controles - Só aparecem se drawingEnabled for true */}
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
              onChange={(e) => setBrushColor(e.target.value)} // Atualiza a cor do pincel
            />
          </div>

          <div>
            <label>Escolha o tamanho do lápis: </label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(e.target.value)} // Atualiza o tamanho do pincel
            />
            <span>{brushSize}</span> {/* Exibe o tamanho do pincel */}
          </div>

          <div>
            <button className="clearbtn" onClick={clearCanvas}>Limpar</button>
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={window.innerWidth} // Largura 100% da tela
        height={window.innerHeight *2.1} // Altura 100% da tela
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
