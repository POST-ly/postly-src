import RequestOptions from "components/RequestOptions";
import Response from "components/Response";
import URLArea from "components/URLArea";

const RequestBody = () => {
  return (
    <div>
      <div className="ViewModeRequest">
        <URLArea />
        <RequestOptions />
      </div>
      <Response />
    </div>
  );
};

export default RequestBody;
