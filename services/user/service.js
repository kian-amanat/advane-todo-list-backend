import { createUsers, getUserByUserName } from "../../model/user/index.js";
import { hash, validateHash } from "../../core/utils/index.js";
import { jwtSign } from "../../core/auth/jwt.js";

async function createUserService(userName, password) {
  const encryptionPassword = await hash(password);
  const createUserRes = await createUsers(userName, encryptionPassword);

  if (!createUserRes) {
    return false;
  } else {
    return createUserRes;
  }
}

async function loginUserService(username, password) {
  const user = await getUserByUserName(username);
  console.log("services =>>>>", user);

  if (user.length === 0) {
    console.log(false);
    return null;
  }

  const validatedHash = await validateHash(password, user[0].password);

  if (!validatedHash) {
    return null;
  } else {
    const jwtUserData = {
      id: user[0].id,
      username: user[0].user_name,
    };

    const userJwt = jwtSign(jwtUserData);
    return userJwt;
  }
}

export { createUserService, loginUserService };
