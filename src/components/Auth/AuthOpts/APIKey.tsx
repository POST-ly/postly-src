const APIKey = () => {
  return (
    <>
      <div style={{ margin: "9px 0" }}>
        <button
          style={{ position: "relative" }}
          onclick="return showDropdown('.${tabId}setApiKeyAddToTypeDropdown')"
          className="bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          <span>
            Add to:{" "}
            <span id="${tabId}setApiKeyAddToType" data-value="header">
              Header
            </span>{" "}
            <span className="icon-arrow-down" />
          </span>
          <div className="dropdown right-dropdown ${tabId}setApiKeyAddToTypeDropdown close">
            <ul>
              <li>
                <a onclick="return setApiKeyAddToType('params', 'Query Params', '${tabId}')">
                  Query Params
                </a>
              </li>
              <li>
                <a onclick="return setApiKeyAddToType('header', 'Header', '${tabId}')">
                  Header
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authAPIKey" placeholder="api_key" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input
          type="password"
          id="${tabId}authAPIValue"
          placeholder="api_value"
        />
      </div>
      <div style={{ margin: "4px 0" }}>
        <button
          onclick="return setAsAuth(event, 'APIKey', '${tabId}', '${type}')"
          className="bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          Set As Auth.
        </button>
      </div>
    </>
  );
};

export default APIKey;
