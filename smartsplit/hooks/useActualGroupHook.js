import React from "react";
import useStore from "../store";

const useActualGroup = () => {
  const { actualGroupId, groups } = useStore();
  const actualGroup = groups.find((group) => group.id === actualGroupId);
  return { actualGroup };
};

export default useActualGroup;
