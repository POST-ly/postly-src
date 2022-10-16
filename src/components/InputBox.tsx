const InputBox = () => {
  return (
    <div className="inputBox">
      <div className="methodCnt">
        <div className="method">
          <a
            id="${tabId}methodTypeButton"
            className="${tabId}MethodType"
            onclick="return showDropdown('.${tabId}methodTypeDropdown')"
          >
            POST
          </a>
        </div>
        <div className="dropdown right-dropdown ${tabId}methodTypeDropdown close">
          <ul>
            <li>
              <a onclick="return setMethodType('${tabId}', 'POST')">POST</a>
            </li>
            <li>
              <a onclick="return setMethodType('${tabId}', 'GET')">GET</a>
            </li>
            <li>
              <a onclick="return setMethodType('${tabId}', 'DELETE')">DELETE</a>
            </li>
            <li>
              <a onclick="return setMethodType('${tabId}', 'OPTIONS')">
                OPTIONS
              </a>
            </li>
            <li>
              <a onclick="return setMethodType('${tabId}', 'PUT')">PUT</a>
            </li>
            <li>
              <a onclick="return setMethodType('${tabId}', 'PATCH')">PATCH</a>
            </li>
          </ul>
        </div>
      </div>
      <input
        className="${tabId}UrlInput"
        type="text"
        id="urlTextArea"
        placeholder="Enter request URL"
      />
    </div>
  );
};

export default InputBox;
