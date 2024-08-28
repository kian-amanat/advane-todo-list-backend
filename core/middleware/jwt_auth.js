import { validateJwt } from "../auth/jwt.js";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("header", authHeader);

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization header is missing!",
      });
    }

    const jwtToken = authHeader.split(" ")[1];
    // console.log("token", jwtToken);

    if (!jwtToken) {
      return res.status(401).json({
        message: "JWT token is missing!",
      });
    }

    let token = validateJwt(jwtToken);
    req.user = token;

    console.log("req.user", req.user);
    // return authHeader;
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { authMiddleware };
