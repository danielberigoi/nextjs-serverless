import https from "https";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await makeRequest({
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/users",
    method: "GET",
  });

  res.statusCode = 200;
  res.json(users);
};

const makeRequest = (options: https.RequestOptions) =>
  new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding("utf8");
      let responseBody = "";
      res.on("data", (chunk) => (responseBody += chunk));
      res.on("end", () => resolve(JSON.parse(responseBody)));
    });

    req.on("error", (err) => reject(err));
    req.end();
  });

export default handler;
