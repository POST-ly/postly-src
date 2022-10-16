const Bearer = () => {
  return (
    <>
      <div style={{ margin: "9px 0" }}>
        <input
          type="text"
          id="${tabId}authBearerToken"
          placeholder="Bearer token"
        />
      </div>
      <div style={{ margin: "4px 0" }}>
        <button
          onclick="return setAsAuth(event, 'Bearer', '${tabId}', '${type}')"
          className="saveRequestUrlModalBtn bg-default color-white pad-6 pad-left-12 pad-right-12"
        >
          Set As Auth.
        </button>
      </div>
    </>
  );
};

export default Bearer;
