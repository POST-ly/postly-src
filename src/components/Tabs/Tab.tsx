import { useTabDispatch, useTabStore } from "./Tabs";

type Props = {
  children: React.ReactElement;
  id?: number;
};

const Tab = (props: Props) => {
  const { children, id } = props;
  const store = useTabStore();
  const dispatch = useTabDispatch();
  const currentTab = store.currentTab;

  const setTabFn = () => {
    dispatch({
      type: "SET_CURRENT_TAB",
      payload: id,
    });
  };
  return (
    <li
      data-tab="${tabId}AuthTab:apiKey"
      data-name="apikey"
      style={{ display: "flex", alignItems: "center" }}
      className={`tab ${currentTab === id && "tab-active"}`}
      onClick={setTabFn}
    >
      {children}
    </li>
  );
};

export default Tab;
