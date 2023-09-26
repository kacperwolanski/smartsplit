import useStore from "../store";
import useScreen from "./useScreenHook";

export const usePath = () => {
  const { updatePath, path, setPreviousScreen, setSlideDirection } = useStore();
  const { chooseScreen } = useScreen();
  const previousScreen = chooseScreen(path[path.length - 1]);

  const moveTo = (destination) => {
    setPreviousScreen(previousScreen);
    setSlideDirection("right");
    updatePath(destination);
  };

  const goBack = () => {
    setPreviousScreen(previousScreen);
    setSlideDirection("left");
    updatePath("back");
  };

  return { goBack, moveTo };
};
