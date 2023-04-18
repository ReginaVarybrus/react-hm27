import React from "react";

export const wsContext = React.createContext({
    sendMessage: () => {},
    messages: [],
    status: false,
  });

