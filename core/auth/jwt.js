import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets/index.js";

function jwtSign(data) {
  return jwt.sign(data, JWT_SECRET.signKey);
}

function validateJwt(token) {
  try {
    // console.log(" jwt token", token);
    return jwt.verify(token, JWT_SECRET.signKey);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { jwtSign, validateJwt };
