const FormNode = () => {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>KEY</th>
          <th>VALUE</th>
        </tr>
      </thead>
      <tbody id="${tabId}bodyTr">
        <tr id="${tabId}bodyLast">
          <td />
          <td>
            <input id="${tabId}bodyKey" type="text" placeholder="Key" />
          </td>
          <td>
            <input id="${tabId}bodyValue" type="text" placeholder="Value" />
          </td>
          <td>
            <button onclick="return addBody(${tabId}bodyKey, ${tabId}bodyValue)">
              +
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FormNode;
