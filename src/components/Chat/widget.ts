import { renderWidget } from "./MyChat";

declare global {
  interface Window {
    MyWidget: {
      render: (containerId: string) => void;
    };
  }
}

// Expondo a função globalmente
window.MyWidget = {
  render: (containerId: string) => renderWidget(containerId),
};

console.log("Widget carregado com sucesso");
