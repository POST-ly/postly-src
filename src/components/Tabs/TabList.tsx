import React from "react";
import { useEffect } from "react";
import { useTabDispatch } from "./Tabs";
import { getTabsCount } from "./utils";

const TabList = (props) => {
  const { children } = props;
  console.log(children);
  const tabCount = getTabsCount(children);

  const dispatch = useTabDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_TABS",
      payload: tabCount,
    });
  }, [tabCount]);

  return (
    <ul
      style={{ borderBottom: "unset" }}
      className="tabul flex-wrap responseViews"
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { id: i })
      )}
    </ul>
  );
};

export default TabList;
