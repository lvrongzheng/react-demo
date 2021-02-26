import * as React from "react";
import RouteView from "../routes/index";


const Layout = (props) => {
  const handleClick = React.useCallback((e) => {
    const { name } = e.target;
    props.history.push(name);
  }, [props.history]);

  return (
    <div>
      <div>
        <button name="/basic/page1" onClick={handleClick}>
          Page1
        </button>
        <button name="/basic/page2" onClick={handleClick}>
          Page2
        </button>
        <button name="/basic/page3" onClick={handleClick}>
          Page3
        </button>
      </div>
      <RouteView {...props} />
    </div>
  );
};

export default Layout;