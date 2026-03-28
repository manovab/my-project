// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:5001"
// });

import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

export const api = axios.create({
  baseURL: isDev
    ? "" // ✅ MSW intercepts in development
    : process.env.REACT_APP_API_URL // ✅ real backend in production
});