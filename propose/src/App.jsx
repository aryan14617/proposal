import { Routes, Route } from "react-router-dom";
import Home from "./Home";   // new
import NotSure from "./NotSure";
import Promised from "./Promised";
import Likes from "./Likes";
import Notlikes from "./Notlikes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promised" element={<Promised />} />
      <Route path="/notsure" element={<NotSure />} />
      <Route path="/likes" element={<Likes />} />   {/* new */}
      <Route path="/nolikes" element={<Notlikes />} />   {/* new */}
    </Routes>
  );
}
