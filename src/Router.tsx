import { Route, Routes } from "react-router-dom";
import { DetailsGame } from "./pages/DetailsGame";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/details" element={<DetailsGame />} />
    </Routes>
  )
}