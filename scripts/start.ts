import { watch } from "node:fs";
import { exec } from "node:child_process";

const serverProcess = exec("bun ./scripts/server.ts");

serverProcess.on("error", (error) => {
  console.error("Server process failed:", error);
});

serverProcess.stderr?.on("data", (data) => {
  console.error("Server process failed (stderr):", data);
});

serverProcess.stdout?.on("data", (data) => {
  console.log(data.slice(0, -1));
});

const execBuild = (printStdout: boolean = true) =>
  exec("bun ./scripts/build.ts", (error, stdout, stderr) => {
    if (error) {
      console.error("Build process failed:", error);
    }

    if (stderr) {
      console.error("Build process failed (stderr):", stderr);
    }

    if (stdout && printStdout) {
      console.log(stdout);
    }
  });

let buildProcess = execBuild();

const buildWatcher = watch("./src", { recursive: true }, () => {
  buildProcess.kill();
  buildProcess = execBuild(false);

  console.log("Build updated");
});

// Stop process on Ctrl-C
process.on("SIGINT", () => {
  buildProcess.kill();
  buildWatcher.close();

  serverProcess.kill();

  process.exit(0);
});
