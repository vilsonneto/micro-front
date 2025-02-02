(function () {
  function loadChatWidget() {
    if (document.getElementById("chat-widget-iframe")) return; // Evita múltiplas injeções

    var iframe = document.createElement("iframe");
    iframe.id = "chat-widget-iframe";
    iframe.src = "https://micro-front-sable.vercel.app/widget.js";
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "350px";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    iframe.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    document.body.appendChild(iframe);
  }

  // Garante que o script será executado após o carregamento do DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadChatWidget);
  } else {
    loadChatWidget();
  }
})();
