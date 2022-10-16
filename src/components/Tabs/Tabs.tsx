import React, { Dispatch, useEffect } from "react";
import { getTabsCount } from "./utils";

const TabContext = React.createContext(undefined);
const TabDispatchContext = React.createContext<React.Dispatch<any>>(undefined);

export function useTabStore() {
  return React.useContext(TabContext);
}

export function useTabDispatch() {
  return React.useContext(TabDispatchContext);
}

const initialState = () => {
  return {
    tabs: [],
    currentTab: null,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TABS":
      const tabcount = action.payload;
      return {
        ...state,
        tabs: Array(tabcount).map((_, i) => ({ id: i, name: "TAB_" + i })),
        currentTab: tabcount > 0 ? 0 : null,
      };
    case "SET_CURRENT_TAB":
      const tabId = action.payload;
      return {
        ...state,
        currentTab: tabId,
      };

    default:
      break;
  }
  return state;
};

const Tabs = (props: { children: any }) => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TabContext.Provider value={state}>
      <TabDispatchContext.Provider value={dispatch}>
        {children}
      </TabDispatchContext.Provider>
    </TabContext.Provider>
  );
};

export default Tabs;
