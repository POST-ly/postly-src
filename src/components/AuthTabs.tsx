import APIKey from "./Auth/AuthOpts/APIKey";
import Basic from "./Auth/AuthOpts/Basic";
import Bearer from "./Auth/AuthOpts/Bearer";
import Digest from "./Auth/AuthOpts/Digest";
import { Tab, TabBody, TabList, TabPanel, Tabs } from "./Tabs";

const AuthTabs = () => {
  return (
    <div className="authTabCnt">
      <div className="tabs" style={{ borderBottom: "unset" }}>
        <Tabs>
          <TabList>
            <Tab>
              <a>API(Key)</a>
            </Tab>
            <Tab>
              <a>Basic</a>
            </Tab>
            <Tab>
              <a>Bearer</a>
            </Tab>
            <Tab>
              <a>Digest</a>
            </Tab>
          </TabList>

          <TabBody>
            <TabPanel
              data-tab="${tabId}AuthTab:apiKey"
              data-name="apikey"
              className="tab-content ${tabId}AuthTab tab-content-active APIKey"
            >
              <APIKey />
            </TabPanel>
            <TabPanel
              data-tab="${tabId}AuthTab:basic"
              data-name="basic"
              className="tab-content ${tabId}AuthTab Basic"
            >
              <Basic />
            </TabPanel>

            <TabPanel
              data-tab="${tabId}AuthTab:digest"
              data-name="digest"
              class="tab-content ${tabId}AuthTab Digest"
            >
              <Digest />
            </TabPanel>

            <TabPanel
              data-tab="${tabId}AuthTab:bearer"
              data-name="bearer"
              className="tab-content ${tabId}AuthTab Bearer"
            >
              <Bearer />
            </TabPanel>
            {/*
          <div class="tab-content ${tabId}AuthTabContent Hawk">
              <div>Hawk</div>
          </div> 
          <div class="tab-content ${tabId}AuthTabContent OAuth1">
              <div>OAuth 1.0</div>
          </div> 
          <div class="tab-content ${tabId}AuthTabContent OAuth2">
              <div>OAuth 2.0</div>
          </div> */}
          </TabBody>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthTabs;
