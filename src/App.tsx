import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/pages/Home";
import Jobs from "./components/pages/Jobs";
import Messages from "./components/pages/Messages";
import MyNetwork from "./components/pages/MyNetwork";
import Notifications from "./components/pages/Notifications";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/mynetwork"
          element={
            <>
              <Header />
              <MyNetwork />
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <Header />
              <Jobs />
            </>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <Header />
              <Messages />
            </>
          }
        />
        <Route
          path="/notifications"
          element={
            <>
              <Header />
              <Notifications />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
