const Digest = () => {
  return (
    <>
      <div style={{ margin: "9px 0" }}>
        <input
          type="text"
          id="${tabId}authDigestUsername"
          placeholder="Username"
        />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input
          type="text"
          id="${tabId}authDigestPassword"
          placeholder="Password"
        />
      </div>

      <div style={{ margin: "9px 0" }}>
        <button
          style={{ position: "relative" }}
          onclick="return showDropdown('.${tabId}authDigestAlgortihmDropdown')"
          class="bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          <span>
            Algorithm: <span id="${tabId}authDigestAlgorithm">MD5</span>{" "}
            <span class="icon-arrow-down"></span>
          </span>
          <div class="dropdown ${tabId}authDigestAlgortihmDropdown close">
            <ul>
              <li>
                <a onclick="return setAuthDigestAlgorithm('${tabId}', 'MD5', '${tabId}', '${type}')">
                  MD5
                </a>
              </li>
              <li>
                <a onclick="return setAuthDigestAlgorithm('${tabId}', 'SHA-1', '${tabId}', '${type}')">
                  SHA-1
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestRealm" placeholder="Realm" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestNonce" placeholder="Nonce" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestUri" placeholder="Uri" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestOpaque" placeholder="Opaque" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestQop" placeholder="Qop" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestNc" placeholder="NC" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input type="text" id="${tabId}authDigestCnonce" placeholder="Cnonce" />
      </div>
      <div style={{ margin: "9px 0" }}>
        <button
          onclick="return setAsAuth(event, 'Digest', '${tabId}', '${type}')"
          class="bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          Set As Auth.
        </button>
      </div>
    </>
  );
};

export default Digest;
