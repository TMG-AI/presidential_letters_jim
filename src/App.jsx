import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Letter from "./pages/Letter";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/letter/:id" element={<Letter />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
