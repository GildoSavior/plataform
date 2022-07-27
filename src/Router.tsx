import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Home />} />
      <Route path="/event/lesson/:slug" element={<Home />} />
    </Routes>
  );
}
