import useStore from "../store";

export const usePath = () => {
  const { updatePath } = useStore();

  const moveTo = (destination) => {
    updatePath(destination);
  };

  const goBack = () => {
    updatePath("back");
  };

  return { goBack, moveTo };
};
