import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [responseData, setResponseData] = useState(null);

  return (
    <div >
      <h1 >0832CS211199</h1>
      <InputForm setResponseData={setResponseData} />
      {responseData && <ResponseDisplay data={responseData} />}
    </div>
  );
};

export default App;
