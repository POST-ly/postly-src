import InputBox from "components/InputBox";

const URLArea = () => {
  return (
    <div className="urlArea">
      <InputBox />
      <button onclick="return send(event, '${tabId}')">
        Send
        <div id="${tabId}circleLoading" className="circle close">
          <div className="circle-ring" />
        </div>
      </button>
      <div className="btn-group">
        <button className="bg-gray" onclick="return saveRequest('${tabId}')">
          Save
        </button>
        <button onclick="return showDropdown('.${tabId}btnDropdown')">
          <i className="icon-arrow-down" />
        </button>
        <div
          className="dropdown ${tabId}btnDropdown close"
          style={{ left: "unset", right: 0 }}
        >
          <ul>
            <li>
              <a onclick="return saveRequest('${tabId}', true)">Save As</a>
            </li>
            {/*<li><a onclick="return deleteRequest('${tabId}')">Delete</a></li>*/}
            <li>
              <a onclick="return addToCollection('${tabId}')">
                Add to a collection
              </a>
            </li>
            <li>
              <a onclick="return removeReqFromCollection('${tabId}')">
                Remove from collection
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default URLArea;
