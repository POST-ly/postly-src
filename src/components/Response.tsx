const Response = () => {
  return (
    <div className="ViewModeResponse">
      <div className="response">
        <h3 className="responseHeader">Response</h3>
        <div id="display">
          <div className="tabs">
            <ul className="tabul responseTab flex-wrap">
              <li className="tab ${tabId}responseTab tab-active">
                <a onclick="return setResponseTab(event, '${tabId}', 'Body')">
                  Body
                </a>
              </li>
              <li className="tab ${tabId}responseTab">
                <a onclick="return setResponseTab(event, '${tabId}', 'Headers')">
                  Headers
                </a>
              </li>
              <li className="tab ${tabId}responseTab">
                <a onclick="return setResponseTab(event, '${tabId}', 'Tests')">
                  Tests
                </a>
              </li>
              <li className="${tabId}responseStats">
                <div
                  className="float-right"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  Status:
                  <span
                    style={{ margin: "0 2px", whiteSpace: "nowrap" }}
                    className="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatus close"
                  />
                  <span
                    style={{ whiteSpace: "nowrap" }}
                    className="<!--bg-green--> color-white bd-rad-3 pad-3 ${tabId}responseStatusText close"
                  />
                </div>
                <div
                  className="float-right"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  Time:
                  <span
                    style={{ whiteSpace: "nowrap" }}
                    className="bd-rad-3 pad-3 ${tabId}responseTime close"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="tab-content ${tabId}responseTabContent tab-content-active Body">
              {/*Response Body*/}
              <div
                className="tabs"
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "unset",
                }}
              >
                <ul
                  className="tabul responseViews"
                  style={{ borderBottom: "unset" }}
                >
                  <li
                    className="${tabId}response tab tab-active"
                    data-tab="${tabId}response:prettier"
                  >
                    <a onclick="return refreshDisplay('Prettier')">Prettier</a>
                  </li>
                  <li
                    className="${tabId}response tab"
                    data-tab="${tabId}response:raw"
                  >
                    <a onclick="return refreshDisplay('Raw')">Raw</a>
                  </li>
                  <li
                    className="${tabId}response tab"
                    data-tab="${tabId}response:preview"
                  >
                    <a>Preview</a>
                  </li>
                  <li
                    className="${tabId}response tab"
                    data-tab="${tabId}response:visualizerpreview"
                  >
                    <a>Visualizer(Preview)</a>
                  </li>
                </ul>
                <ul
                  className="tabul"
                  style={{ marginLeft: "2px", borderBottom: "unset" }}
                >
                  <li className="tab">
                    <a
                      onclick="return copyResponse(event, '${tabId}')"
                      className="icon-docs"
                      title="Copy response to Clipboard."
                    />
                  </li>
                  <li className="tab">
                    <a
                      onclick="return downloadResponseBtn(event, '${tabId}')"
                      className="icon-cloud-download"
                      title="Download response."
                    />
                  </li>
                </ul>
              </div>
              <div>
                <div
                  data-tab="${tabId}response:prettier"
                  className="${tabId}response tab-content tab-content-active"
                >
                  <div
                    style={{ border: "1px solid rgb(221, 221, 221)" }}
                    className="${tabId}responsePrettierDisplay"
                  />
                </div>
                <div
                  data-tab="${tabId}response:raw"
                  className="${tabId}response tab-content"
                >
                  <div
                    style={{ border: "1px solid rgb(221, 221, 221)" }}
                    className="${tabId}responseRawDisplay"
                  />
                </div>
                <div
                  data-tab="${tabId}response:preview"
                  className="${tabId}response tab-content"
                >
                  <div className="${tabId}responsePreviewDisplay">
                    <iframe
                      className="previewFrame"
                      id="${tabId}responsePreviewIframe"
                    />
                  </div>
                </div>
                <div
                  data-tab="${tabId}response:visualizerpreview"
                  className="${tabId}response tab-content"
                >
                  <div className="${tabId}responseVisualizerPreviewDisplay">
                    <iframe
                      className="previewFrame"
                      id="${tabId}responseVisualizerPreviewIframe"
                    />
                  </div>
                </div>
              </div>
              {/*Response Body*/}
            </div>
            <div className="tab-content ${tabId}responseTabContent Headers">
              {/*Response Headers*/}
            </div>
            <div className="tab-content ${tabId}responseTabContent Tests"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
