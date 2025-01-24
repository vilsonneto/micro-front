import React from "react";
import ReactDOM from "react-dom/client";

const MyChat = () => {
  return (
    <div
      style={{ padding: "20px", background: "lightblue", borderRadius: "5px" }}
    >
      <h3>Widget de Exemplo</h3>
      <p>Este é um widget React renderizado via Google Tag Manager.</p>
    </div>
  );
};

// Função para montar o widget dinamicamente usando createRoot
export const renderWidget = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<MyChat />);
  } else {
    console.error(`Elemento com id '${containerId}' não encontrado.`);
  }
};
