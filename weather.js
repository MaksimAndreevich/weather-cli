#!/ust/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved");
  } catch (e) {
    printError(`"Token not saved" ${e.message}`);
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.s) {
    // save city
  }
  if (args.h) {
    printHelp();
  }
  if (args.t) {
    saveToken(args.t);
  }

  // show weather
};

initCli();
