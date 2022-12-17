import * as React from "react";

import type { PaginationProps } from "antd";
import { Pagination } from "antd";

function App() {

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log("current: ",current,"\n pagesize: ", pageSize);
  };

  return (
    <div>
      <div style={{display:"flex",justifyContent: "center"}}>List of Records</div>
      <hr />
      <div style={{display:"flex",justifyContent: "center"}}>

        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={100}
        />

      </div>
    </div>
  );
}

export default App;
