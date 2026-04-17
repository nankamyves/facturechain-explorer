import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LogoVariants from "./pages/LogoVariants";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/logo-variants" element={<LogoVariants />} />
    </Routes>
  </BrowserRouter>
);

export default App;
