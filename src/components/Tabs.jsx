import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Tabs = () => {
  const { tab, active } = useContext(AppContext); //use context
  return (
    <>
      <h1>React Tabs</h1>
      <div className="box">
        <div className="tabs">
          <div
            onClick={() => active(1)}
            className={`${tab === 1 ? " tab active-tab" : "tab"}`}
          >
            tab1
          </div>
          <div
            onClick={() => active(2)}
            className={`${tab === 2 ? " tab active-tab" : "tab"}`}
          >
            tab2
          </div>
          <div
            onClick={() => active(3)}
            className={`${tab === 3 ? " tab active-tab" : "tab"}`}
          >
            tab3
          </div>
        </div>
        <div className="contents">
          <div
            className={`${tab === 1 ? "content active-content" : "content"}`}
          >
            content1
          </div>
          <div
            className={`${tab === 2 ? "content active-content" : "content"}`}
          >
            content2
          </div>
          <div
            className={`${tab === 3 ? "content active-content" : "content"}`}
          >
            content3
          </div>
        </div>
      </div>
    </>
  );
};
