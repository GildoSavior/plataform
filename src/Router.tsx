import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Home />} />
      <Route path="/event/lesson/:slug" element={<Home />} />
    </Routes>
  );
}
