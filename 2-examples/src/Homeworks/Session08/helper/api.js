import axios from "axios";

export async function getData(props) {
  const { url } = props;
  try {
    let response = await axios.get(url);
    let temp = await response.data;
    return temp;
  } catch (err) {
    console.log("Error: ", err.message);
    return undefined;
  }
}
