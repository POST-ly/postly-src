import React from "react";
import { useTabStore } from "./Tabs";

const TabPanel = (props) => {
  const { children, id } = props;
  const store = useTabStore();
  const currentTab = store.currentTab;

  return (
    <div
      data-tab="${tabId}AuthTab:apiKey"
      data-name="apikey"
      className={`tab-content ${currentTab === id && "tab-content-active"}`}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { id: i })
      )}
    </div>
  );
};

export default TabPanel;
