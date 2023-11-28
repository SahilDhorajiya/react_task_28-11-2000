import axios from "axios";
export const api = async (url) => {
  try {
    let res = await axios.get(url);
    return res;
  } catch (err) {
    return err;
  }
};
