import { renderWidget } from "./MyChat";

declare global {
  interface Window {
    MyWidget: {
      render: (containerId: string) => void;
    };
  }
}

// Adiciona a função render ao objeto global
window.MyWidget = {
  render: (containerId: string) => renderWidget(containerId),
};
