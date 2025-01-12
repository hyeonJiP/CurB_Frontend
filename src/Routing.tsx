import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/form/SignUp";
import Main from "./pages/main/Main";
import UploadFeed from "./components/form/feed/UploadFeed";
import MsgRoom from "./pages/messagebox/MsgRoom";
import Mailbox from "./pages/messagebox/Mailbox";
import Layout from "./UI/Layout";
import Feed from "./pages/main/Feed";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MsgRoom />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Feed />
            </Layout>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<UploadFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
