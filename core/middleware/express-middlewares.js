import dotenv from "dotenv";

const getMethodPathIp = (req, res, next) => {
  console.log(
    `your Method is ${req.method} your Path is ${req.path} your IP is ${req.ip}`
  );
  next();
};


const sendError = (req, res, next) => {
  if (!res.headersSent) {
    res.status(404).json({
      message: "The requested resource was not found",
    });
  } else {
    console.error(
      "Headers have already been sent. Cannot send error response."
    );
  }
};

const authorization = (req, res, next) => {
  const authToken = req.headers.authorization;
  const secretToken = process.env.SECRET_TOKEN;

  console.log("1");

  if (!authToken) {
    console.log("2");
    return res
      .status(401)
      .json({ error: "Unauthorized - Authorization header missing" });
  }

  if (authToken === secretToken) {
    console.log("3");
    res.json({
      message: "You are authorized to access this route.",
    });
  } else {
    console.log("4");
    res.status(403).json({
      message:
        "Authorization failed. You are not authorized to access this route.",
    });
  }
};


export { getMethodPathIp, sendError, authorization };
