import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RubifiLconcept } from "./screens/RubifiLconcept";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RubifiLconcept />
  </StrictMode>,
);
