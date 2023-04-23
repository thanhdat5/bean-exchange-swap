import React from "react";

type Props = {
  children?: React.ReactNode;
};

type httpContextType = {
  requestCount: number;
};

type SetRequestCount = (add: boolean) => void;

const HttpContext = React.createContext({} as httpContextType);
const SetHttpContext = React.createContext({} as SetRequestCount);

function useRequestListContext() {
  const [requestCount, setReqCount] = React.useState<number>(0);
  const setRequestCount = (add: boolean) => {
    if (add) {
      let count = requestCount + 1;
      setReqCount(count);
    } else {
      let count = requestCount - 1;
      setReqCount(count);
    }
  };
  return { requestCount, setRequestCount };
}

export const HttpProvider = ({ children }: Props) => {
  const { requestCount, setRequestCount } = useRequestListContext();
  const httpContextValue: httpContextType = {
    requestCount: requestCount,
  };

  return (
    <HttpContext.Provider value={httpContextValue}>
      <SetHttpContext.Provider value={setRequestCount}>
        {children}
      </SetHttpContext.Provider>
    </HttpContext.Provider>
  );
};

export default HttpProvider;

export const useHttpContext = () => {
  return React.useContext(HttpContext).requestCount;
};

export const useSetHttpContext = () => {
  return React.useContext(SetHttpContext);
};
