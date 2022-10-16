const Basic = () => {
  return (
    <>
      <div style={{ margin: "9px 0" }}>
        <input
          type="text"
          id="${tabId}authBasicUsername"
          placeholder="Username"
        />
      </div>
      <div style={{ margin: "9px 0" }}>
        <input
          type="password"
          id="${tabId}authBasicPassword"
          placeholder="Password"
        />
      </div>
      <div style={{ margin: "4px 0" }}>
        <button
          onclick="return setAsAuth(event, 'Basic', '${tabId}', '${type}')"
          className="bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          Set As Auth.
        </button>
      </div>
    </>
  );
};

export default Basic;
