 /**
  * 组件按需加载  路由匹配到了才加载本组件
 * React.lazy React.lazy 和 Suspense 一起使用
 * React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）。
 * import()   在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。
 */
 
import React, { Suspense } from "react";
import RouteConfig from "./routes/route.config";
import RouteView from "./routes/index";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <RouteView children={RouteConfig}></RouteView>
      </Suspense>
    </BrowserRouter>
  );
};


export default App;
