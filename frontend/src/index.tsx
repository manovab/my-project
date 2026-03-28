// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function enableMocking() {
  console.log(process.env.NODE_ENV + " Environment");

  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass", // ✅ IMPORTANT
    });
  }
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});