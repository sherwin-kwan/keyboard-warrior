// possible results are:

import { useState } from "react";

export default useResult = (initial) => {

  const [result, setResult] = useState(initial)

  return { result, setResult};
};
