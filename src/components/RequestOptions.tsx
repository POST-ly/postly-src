import AuthTabs from "./AuthTabs";
import BinaryNode from "./BinaryNode";
import FormNode from "./FormNode";
import GraphQLDisplay from "./GraphQLDisplay";
import RawNode from "./RawNode";

const RequestOptions = () => {
  return (
    <div className="postDataCnt">
      <div className="tabs">
        <ul className="tabul flex-wrap" style={{ display: "flex" }}>
          <li
            data-name="authorization"
            className="tab ${tabId}postDataCntTab tab-active"
          >
            <a>Authorization</a>
          </li>
          <li data-name="headers" className="tab ${tabId}postDataCntTab">
            <a>Headers</a>
          </li>
          <li data-name="body" className="tab ${tabId}postDataCntTab">
            <a>Body</a>
          </li>
          <li data-name="params" className="tab ${tabId}postDataCntTab">
            <a>Params</a>
          </li>
          <li data-name="tests" className="tab ${tabId}postDataCntTab">
            <a>Tests</a>
          </li>
          <li data-name="prerequest" className="tab ${tabId}postDataCntTab">
            <a>Pre-Request</a>
          </li>
          <li data-name="previewrequest" className="tab ${tabId}postDataCntTab">
            <a>Preview(Request)</a>
          </li>
          <li data-name="visualizer" className="tab ${tabId}postDataCntTab">
            <a>Visualizer</a>
          </li>
          <li data-name="more" className="tab ${tabId}postDataCntTab">
            <a>More</a>
          </li>
          <li
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              title="Click to toggle Two-Side Column Layout"
              className="icon-screen-desktop"
              onclick="return toggleSideView(event, '${tabId}')"
            />
          </li>
        </ul>
        <div>
          <div
            data-name="authorization"
            className="tab-content ${tabId}postDataCntTabContent tab-content-active Authorization"
          >
            <AuthTabs />
          </div>
          <div
            data-name="headers"
            className="tab-content ${tabId}postDataCntTabContent Headers table-responsive"
          >
            <table>
              <thead>
                <tr>
                  <th />
                  <th>KEY</th>
                  <th>VALUE</th>
                </tr>
              </thead>
              <tbody id="${tabId}headersTr">
                <tr id="${tabId}headersLast">
                  <td />
                  <td className="headersTr">
                    <input
                      id="${tabId}headersKey"
                      type="text"
                      placeholder="Key"
                      onclick="return showDropdown('.${tabId}headersDropdown')"
                    />
                    <div className="dropdown ${tabId}headersDropdown close">
                      <ul>
                        <li>
                          <a onclick="return addHeadersKey(event, ${tabId}headersKey)">
                            Accept
                          </a>
                        </li>
                        <li>
                          <a onclick="return addHeadersKey(event, ${tabId}headersKey)">
                            Content-Type
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <input
                      id="${tabId}headersValue"
                      type="text"
                      placeholder="Value"
                    />
                  </td>
                  <td>
                    <button onclick="return addHeaders(${tabId}headersKey, ${tabId}headersValue)">
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            data-name="body"
            className="tab-content ${tabId}postDataCntTabContent Body"
          >
            <div>
              <button
                style={{ position: "relative" }}
                onclick="return showDropdown('.${tabId}setBodyTypeDropdown')"
                className="bg-default color-white pad-6 pad-left-12 pad-right-12 btn-block"
              >
                <span>
                  Set Type:{" "}
                  <span id="${tabId}setBodyType" data-value="form">
                    Form
                  </span>{" "}
                  <span className="icon-arrow-down" />
                </span>
                <div className="dropdown ${tabId}setBodyTypeDropdown close">
                  <ul>
                    <li>
                      <a onclick="return setBodyType('form', 'Form')">Form</a>
                    </li>
                    <li>
                      <a onclick="return setBodyType('graphql', 'GraphQL')">
                        GraphQL
                      </a>
                    </li>
                    <li>
                      <a onclick="return setBodyType('raw', 'Raw')">Raw</a>
                    </li>
                    <li>
                      <a onclick="return setBodyType('binary', 'Binary')">
                        Binary
                      </a>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
            <div id="${tabId}Bodyform" className="table-responsive">
              <FormNode />
            </div>
            <div id="${tabId}Bodygraphql" className="close">
              <GraphQLDisplay />
            </div>
            <div id="${tabId}Bodyraw" className="close">
              <RawNode />
            </div>
            <div id="${tabId}Bodybinary" className="close">
              <BinaryNode />
            </div>
          </div>
          <div
            data-name="params"
            className="tab-content ${tabId}postDataCntTabContent Params table-responsive"
          >
            <table>
              <thead>
                <tr>
                  <th />
                  <th>KEY</th>
                  <th>VALUE</th>
                </tr>
              </thead>
              <tbody id="${tabId}paramsTr">
                <tr id="${tabId}paramsLast">
                  <td />
                  <td>
                    <input
                      id="${tabId}paramsKey"
                      type="text"
                      placeholder="Key"
                    />
                  </td>
                  <td>
                    <input
                      id="${tabId}paramsValue"
                      type="text"
                      placeholder="Value"
                    />
                  </td>
                  <td>
                    <button onclick="return addParams(${tabId}paramsKey, ${tabId}paramsValue)">
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            data-name="tests"
            className="tab-content ${tabId}postDataCntTabContent Tests"
          >
            <div
              style={{ border: "1px solid rgb(221, 221, 221)" }}
              id="${tabId}postDataCntTabContentTestsEditor"
            ></div>
            {/*<div>
                                        <textarea style="width: 100%; border: 1px solid rgb(221,75,57);" id="${tabId}TextTests"></textarea>
                                    </div>*/}
          </div>
          <div
            data-name="prerequest"
            className="tab-content ${tabId}postDataCntTabContent Pre-Request"
          >
            <div
              style={{ border: "1px solid rgb(221, 221, 221)" }}
              id="${tabId}postDataCntTabContentPreRequestScriptEditor"
            ></div>
          </div>
          <div
            data-name="previewrequest"
            className="tab-content ${tabId}postDataCntTabContent PreviewRequest"
          >
            <div>
              <button
                className="pad-6"
                style={{ position: "relative" }}
                onclick="return showDropdown('.${tabId}previewRequestDropdown')"
              >
                <span
                  id="${tabId}previewRequestCodeSnippet"
                  data-value="nodejsAxios"
                  data-mode="javascript"
                >
                  Nodejs(Axios)
                </span>
                <i
                  style={{
                    paddingTop: "2px",
                    display: "block",
                    float: "right",
                    paddingLeft: "3px",
                  }}
                  className="icon-arrow-down"
                />
                <div className="dropdown right-dropdown ${tabId}previewRequestDropdown close">
                  <ul>
                    <li>
                      <a onclick="return setCodeSnippet('nodejsAxios', 'Nodejs(Axios)', 'javascript')">
                        Nodejs(Axios)
                      </a>
                    </li>
                    <li>
                      <a onclick="return setCodeSnippet('curl', 'cURL', 'shell')">
                        cURL
                      </a>
                    </li>
                    <li>
                      <a onclick="return setCodeSnippet('fetch', 'Fetch', 'javascript')">
                        Fetch
                      </a>
                    </li>
                  </ul>
                </div>
              </button>
              <button
                className="pad-6 icon-reload"
                onclick="return setCodeSnippet()"
              />
              <button className="pad-6" onclick="return copyCodeSnippet(event)">
                Copy
              </button>
            </div>
            <div className="divider" />
            <div
              style={{ border: "1px solid rgb(221, 221, 221)" }}
              id="${tabId}postDataCntTabContentPreviewRequestEditor"
            ></div>
          </div>
          <div
            data-name="visualizer"
            className="tab-content ${tabId}postDataCntTabContent Visualizer"
          >
            <div
              style={{ border: "1px solid rgb(221, 221, 221)" }}
              id="${tabId}postDataCntTabContentVisualizerEditor"
            ></div>
          </div>
          <div
            data-name="more"
            className="tab-content ${tabId}postDataCntTabContent More"
          >
            <div className="tabs">
              <ul className="tabul responseViews">
                <li
                  className="${tabId}moreViews tab tab-active"
                  data-tab="${tabId}moreViews:options"
                >
                  <a>Options</a>
                </li>
                <li
                  className="${tabId}moreViews tab"
                  data-tab="${tabId}moreViews:settings"
                >
                  <a>Settings</a>
                </li>
              </ul>
            </div>
            <div>
              <div
                data-tab="${tabId}moreViews:options"
                className="${tabId}moreViews tab-content tab-content-active"
              >
                <div
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid rgb(221, 221, 221)",
                  }}
                >
                  <p
                    style={{
                      margin: "9px 0",
                      fontSize: "15px",
                      color: "rgb(101, 101, 101)",
                    }}
                  >
                    <span
                      style={{ paddingRight: "2px" }}
                      className="icon-question"
                    />
                    This option will download the response of the request when
                    successfull.
                  </p>
                  <input
                    id="${tabId}downloadResponseOpt"
                    type="checkbox"
                    onchange="return setOptions(event, 'downloadres')"
                  />{" "}
                  Download response
                </div>
                <div
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid rgb(221, 221, 221)",
                  }}
                >
                  <p
                    style={{
                      margin: "9px 0",
                      fontSize: "15px",
                      color: "rgb(101, 101, 101)",
                    }}
                  >
                    <span
                      style={{ paddingRight: "2px" }}
                      className="icon-question"
                    />
                    This will use the POSTly proxy server to proxy your request.
                  </p>
                  <input
                    id="${tabId}useProxyOption"
                    type="checkbox"
                    onchange="return setOptions(event, 'useproxy')"
                  />{" "}
                  Use proxy
                </div>
                <div
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid rgb(221, 221, 221)",
                  }}
                >
                  <p
                    style={{
                      margin: "9px 0",
                      fontSize: "15px",
                      color: "rgb(101, 101, 101)",
                    }}
                  >
                    <span
                      style={{ paddingRight: "2px" }}
                      className="icon-question"
                    />
                    This option will preview Image and Video response.
                  </p>
                  <input
                    id="${tabId}previewImgVideoOpt"
                    type="checkbox"
                    onchange="return setOptions(event, 'previewimgvideo')"
                  />{" "}
                  Preview(Image/Video)
                </div>
              </div>
              <div
                data-tab="${tabId}moreViews:settings"
                className="${tabId}moreViews tab-content"
              >
                <div>
                  <div
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <p
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        color: "rgb(101, 101, 101)",
                      }}
                    >
                      <span
                        style={{ paddingRight: "2px" }}
                        className="icon-question"
                      />
                      This defines the number of times a request retries itself
                      when it errors out.
                    </p>
                    <div style={{ margin: "4px 0" }}>
                      No of request retries:
                    </div>
                    <input
                      id="${tabId}noOfRequestRetries"
                      type="text"
                      placeholder
                    />
                  </div>
                  <div
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <p
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        color: "rgb(101, 101, 101)",
                      }}
                    >
                      <span
                        style={{ paddingRight: "2px" }}
                        className="icon-question"
                      />
                      This defines the maximum time for a request to timeout.
                      This is very helful when a server takes long to return a
                      response.
                    </p>
                    <div style={{ margin: "4px 0" }}>Request Timeout(ms):</div>
                    <input id="${tabId}requestTimeout" type="text" />
                  </div>
                  <div
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <p
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        color: "rgb(101, 101, 101)",
                      }}
                    >
                      <span
                        style={{ paddingRight: "2px" }}
                        className="icon-question"
                      />
                      <strong>Max Redirects</strong> defines the maximum number
                      of redirects to follow. If set to 0, no redirects will be
                      followed.
                    </p>
                    <div style={{ margin: "4px 0" }}>Max Redirects:</div>
                    <input id="${tabId}maxRedirects" type="text" />
                  </div>
                  <div
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgb(221, 221, 221)",
                    }}
                  >
                    <p
                      style={{
                        margin: "9px 0",
                        fontSize: "15px",
                        color: "rgb(101, 101, 101)",
                      }}
                    >
                      <span
                        style={{ paddingRight: "2px" }}
                        className="icon-question"
                      />
                      <strong>With Credentials</strong> indicates whether or not
                      cross-site Access-Control requests should be made using
                      credentials
                    </p>
                    <input
                      id="${tabId}withCredentials"
                      type="checkbox"
                      onchange="return setOptions(event, 'withcredentials')"
                    />{" "}
                    With Credentials
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestOptions;
