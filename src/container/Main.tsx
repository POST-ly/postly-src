import RequestBody from "../components/RequestBody";
import RequestTab from "../components/RequestTab";

function Main() {
  return (
    <div className="container">
      <div className="historyCnt mhistoryCnt mClose">
        <div className="historyCntTop">
          <div
            onclick="return showHistoryCnt()"
            style={{
              padding: "5px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <span
              className="icon-close"
              style={{
                paddingTop: "4px",
                paddingBottom: "4px",
                fontSize: "22px",
              }}
            ></span>
          </div>
        </div>
        <div className="tabs">
          <ul className="tabul">
            <li className="tab history tab-active">
              <a onclick="return toggleHistoryTabs(event, 'History')">
                History
              </a>
            </li>
            <li className="tab history">
              <a onclick="return toggleHistoryTabs(event, 'Collections')">
                Collections
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="history History tab-content tab-content-active">
            <div
              style={{
                padding: "9px 0",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                className="color-white bg-default pad-6"
                style={{ display: "flex", alignItems: "center" }}
                onclick="return clearAllHistory(event)"
              >
                <span style={{ paddingRight: "3px" }}>Clear History</span>
                <span
                  style={{ paddingTop: "2px" }}
                  className="icon-trash"
                ></span>
              </button>
            </div>
            <ul className="history historyUl">
              {/* <!--<li className="historyLi" onclick="return historyItemClick(event)"><span className="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">POST</span><span className="historyItemName">Untitled request</span></li>
                            <li className="historyLi" onclick="return historyItemClick(event)"><span className="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">POST</span><span className="historyItemName">Untitled request</span></li>--> */}
            </ul>
          </div>
          <div className="history Collections tab-content">
            <div
              style={{
                padding: "9px 0",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                className="color-white bg-default pad-6"
                style={{ display: "flex", alignItems: "center" }}
                onclick="return createNewCollection(event)"
              >
                <span style={{ paddingRight: "3px" }}>New Collection</span>
                <span
                  style={{ paddingTop: "2px" }}
                  className="icon-plus"
                ></span>
              </button>
            </div>
            <ul className="collections historyUl">
              <li
                className="historyLi"
                onclick="return historyCollectionsFolderClick(event, '.historyCollectionsFolder')"
              >
                <span className="icon-folder"></span>
                <span> Project 1</span>
                <ul className="historyCollectionsFolder close">
                  <li
                    className="historyLi"
                    onclick="return historyItemClick(event)"
                  >
                    <span className="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">
                      POST
                    </span>
                    <span className="historyItemName">Untitled request</span>
                  </li>
                  <li
                    className="historyLi"
                    onclick="return historyItemClick(event)"
                  >
                    <span className="historyItem historyItemMethodType color-orangered bd-rad-3 pd-2">
                      POST
                    </span>
                    <span className="historyItemName">Untitled request</span>
                  </li>
                </ul>
              </li>
              <li
                className="historyLi"
                onclick="return historyCollectionsFolderClick(event)"
              >
                <span className="icon-folder">{/* <!-- &#128194 --> */}</span>
                <span> Project 2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="horiDivider"></div>
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "1px solid rgb(221, 221, 221)",
            paddingBottom: "2px",
          }}
        >
          <span id="teamChatArea" style={{ paddingRight: "2px" }}></span>
          <span
            style={{
              position: "relative",
              paddingRight: "2px",
              whiteSpace: "nowrap",
            }}
          >
            Envs:
            <a
              onclick="return showDropdown('.envsDropdown')"
              style={{
                padding: "3px",
                background: "gray",
                color: "white",
                borderRadius: "2px",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              <span id="currentEnvDisplay" data-value="noEnviron">
                No Environ{" "}
              </span>
              <span className="icon-arrow-down"></span>
            </a>
            <div className="dropdown envsDropdown close">
              <ul id="envsList">
                <li className="divider"></li>
                <li>
                  <a onclick="return createNewEnvTab()">Create New Env</a>
                </li>
              </ul>
            </div>
          </span>
          <span style={{ position: "relative", whitespace: "nowrap" }}>
            Teams:
            <a
              onclick="return showDropdown('.teamsDropdown')"
              style={{
                padding: "3px",
                background: "gray",
                color: "white",
                borderRadius: "2px",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              <span id="currentTeamDisplay">{/* <!--Personal-->  */}</span>
              <span className="icon-arrow-down"></span>
            </a>
            <div className="dropdown teamsDropdown close">
              <ul id="teamsList">
                <li>
                  <a onclick="return selectTeam()">Personal</a>
                </li>
              </ul>
              <ul>
                <li
                  className="horiDivider"
                  style={{
                    backgroundColor: "tomato",
                    width: "100%",
                    height: "1px",
                  }}
                ></li>
                <li>
                  <a onclick="return manageTeamModal()">Manage Team</a>
                </li>
                <li>
                  <a onclick="return allTeamsModal()">All Teams</a>
                </li>
              </ul>
            </div>
          </span>
        </div>

        <div className="mainTabs">
          <ul id="mainTab">
            {/* <!--<li className="mainTab"><a onclick="return requestTab()" className="mainTabName"><b>POST</b> localhost:5000/api/</a><span><a className="mainTabClose">X</a></span></li>
                <li className="mainTab"><a className="mainTabName"><b>GET</b> localhost:2000/api/reg</a><span><a className="mainTabClose">X</a></span></li>--> */}
            {/* <!--<li className="mainTabAdd"><a onclick="return addNewTab(event)">+</a></li> --> */}
            <RequestTab />
          </ul>
          <a className="mainTabAdd" onclick="return addNewTab(event)">
            +
          </a>
        </div>
        <div id="tabContainer">
          <RequestBody />
        </div>
      </div>
    </div>
  );
}

export default Main;
