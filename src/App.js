import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Challenge from "./components/challenge";
import Rank from "./components/rank";
import Layout from "./components/layout";
import Login from "./components/login";
import Join from "./components/join";
import Submit from "./components/question";
import Account from "./components/account";
import Passwd from "./components/passwd";
import PasswdReset from "./components/passwd/PasswdReset";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/challenge" element={<Challenge />}></Route>
          <Route path="/submit/:problemId" element={<Submit />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/passwd" element={<Passwd />} />
          <Route path="/passwdReset/:uid/:token" element={<PasswdReset />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
