const RequestTab = () => {
  return (
    <li className="mainTab mainTabActive">
      <a onclick="" class="mainTabName">
        <b id="">POST</b> <span id="${id}TabName">Untitled request</span>
      </a>
      <span>
        <a className="mainTabClose" onclick="return removeTab(event, '${id}')">
          X
        </a>
      </span>
    </li>
  );
};

export default RequestTab;
