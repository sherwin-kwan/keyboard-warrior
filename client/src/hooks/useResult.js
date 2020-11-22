// possible results are:

import { useState } from "react";

const useResult = (initial) => {

  const [result, setResult] = useState(initial)

  return { result, setResult};
};

export default useResult;