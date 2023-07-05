import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Challenge from "./components/challenge";
import Rank from "./components/rank";
import Layout from "./components/layout";
import Login from "./components/login";
import Join from "./components/join";
import Submit from "./components/question";
import Sys from "./components/challenge/sys";
import Linux from "./components/challenge/linux";
import Cryp from "./components/challenge/cryp";
import Web from "./components/challenge/web";
import Account from "./components/account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/challenge" element={<Challenge />}>
            <Route path="sys" element={<Sys />} />
            <Route path="linux" element={<Linux />} />
            <Route path="web" element={<Web />} />
            <Route path="cryp" element={<Cryp />} />
          </Route>
          <Route path="/submit/:problemId" element={<Submit />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
