import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
