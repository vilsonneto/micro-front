(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://micro-front-sable.vercel.app/chat-widget";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  document.body.appendChild(iframe);
})();
