import "@/styles";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

async function deferRender() {
  if (process.env.REACT_APP_MSW_MOKING === "true") {
    const { worker } = await import("./mocks/browser");
    worker.start({
      serviceWorker: {
        url: "/client/mockServiceWorker.js",
      },
    });
  }

  return;
}

deferRender().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
