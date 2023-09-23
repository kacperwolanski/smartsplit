import { screenHeight } from "../appConsts";

const marginTopOffset = screenHeight > 700 ? 12 : 20;
export default headerStyle = {
  fontSize: 35,
  color: "white",
  fontWeight: "bold",
  textAlign: "left",
  marginTop: screenHeight / marginTopOffset,
  marginBottom: 30,
  marginLeft: 20,
};
