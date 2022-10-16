import React from "react";

type Props = {
  children: React.ReactElement;
};

const TabBody = (props: Props) => {
  const { children } = props;
  return (
    <div>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { id: i })
      )}
    </div>
  );
};

export default TabBody;
