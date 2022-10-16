export default function Header() {
  return (
    <header>
      <div className="headerTitle">
        <span
          onclick="return showHis(event);"
          className="mobileSideBar icon-menu"
        ></span>
        <h2>POSTly</h2>
      </div>
      <nav>
        <ul>
          {/*<li><a className="nav-btn" onclick="return createApi(event)"><span>Create API </span><span className="icon-diamond"></span></a></li>*/}
          <li style={{ position: "relative" }}>
            <a
              className="nav-btn"
              onclick="return showDropdown('.createListDropdown')"
            >
              <span>Create </span>
              <span className="icon-plus"></span>
            </a>
            <div className="dropdown createListDropdown close">
              <ul>
                <li>
                  <a onclick="return createTeamModal(event)">
                    <span className="icon-people"></span>
                    <span>New Team </span>
                  </a>
                </li>
                <li>
                  <a onclick="return createMockServerTab(event)">
                    <span className="icon-layers"></span>
                    <span>New Mock Server </span>
                  </a>
                </li>
                <li>
                  <a onclick="return addNewTab(event)">
                    <span>New Request </span>
                    <span className="icon-chemistry"></span>
                  </a>
                </li>
                <li>
                  <a onclick="return createNewCollection(event)">
                    <span>New Collection </span>
                    <span className="icon-folder-alt"></span>
                  </a>
                </li>
                <li>
                  <a onclick="return createNewEnvTab(event)">
                    <span>New Env </span>
                    <span className="icon-grid"></span>
                  </a>
                </li>
                <li title="Imports a collection to the current team.">
                  <a onclick="return importCollectionModal(event)">
                    <span>Import Collection </span>
                    <span className="icon-cloud-download"></span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="nav-btn" onclick="return aboutModal(event)">
              <span>About </span>
              <span className="icon-question"></span>
            </a>
          </li>
          {/*<li><a className="nav-btn" onclick="return addToTeam(event)"><span>Add </span><span className="icon-people"></span></a></li>*/}
          <li id="authButtons" style={{ position: "relative" }}></li>
        </ul>
      </nav>
    </header>
  );
}
