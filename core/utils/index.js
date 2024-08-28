import bcrypt from "bcrypt";

async function hash(input) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(input, salt);
    return hash;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function validateHash(input, hash) {
  try {
    // TODO

    console.log("input", input);
    console.log("hash", hash);

    let validatingHash = await bcrypt.compare(input, hash);

    console.log("validatingHash", validatingHash);
    return validatingHash;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { hash, validateHash };
