import { Children, cloneElement } from "react";

function makeTypeChecker(tabsRole) {
  return (element) => !!element.type && element.type.tabsRole === tabsRole;
}

const isTab = makeTypeChecker("Tab");
const isTabList = makeTypeChecker("TabList");
const isTabPanel = makeTypeChecker("TabPanel");

function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}

function deepForEach(children, callback) {
  return Children.forEach(children, (child) => {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (
      child.props &&
      child.props.children &&
      typeof child.props.children === "object"
    ) {
      if (isTabList(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

export function getTabsCount(children) {
  // let tabCount = 0
  // deepForEach(children, (child) => {
  //   if (isTab(child)) tabCount++;
  // });
  // return tabCount;
  return Children.count(children);
}
