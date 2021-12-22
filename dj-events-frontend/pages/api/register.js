import { API_URL } from "@/config/index";
import axios from "axios";
import cookie from "cookie";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    const strapiRes = await axios
      .post(`${API_URL}/auth/local/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle success.

        // console.log("WELL DONE!");
        // console.log("USER PROFILE", response.data.user);
        // console.log("USER TOKEN", response.data.jwt);

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", response.data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7, // a week
            sameSite: "strict",
            path: "/",
          })
        );
        //console.log(response);

        res.status(200).json({ user: response.data.user });
      })
      .catch((error) => {
        // Handle error
        res.status(error.response.status).json({
          message: error.response.data.message[0].messages[0].message,
        });
      });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed.` });
  }
};
