
const { spawn } = require('child_process');
async function createProject(selectedProject, projectName) {
  switch (selectedProject) {
    case "ReactJS":
      console.log("Creating a new React app...");
      // Run the create-react-app command as a child process
      const reactApp = spawn("npx", ["create-react-app", `${projectName}`]);
      reactApp.stdout.on("data", (data) => {
        console.log(data.toString());
      });
      reactApp.stderr.on("data", (data) => {
        console.error(data.toString());
      });
      reactApp.on("close", (code) => {
        console.log(`React app created with exit code ${code}`);
      });
      break;
    case "React Native":
      console.log("Creating a new React Native app...");
      // Run the react-native init command as a child process
      const reactNativeApp = spawn("npx", [
        "react-native",
        "init",
        `${projectName}`,
      ]);
      reactNativeApp.stdout.on("data", (data) => {
        console.log(data.toString());
      });
      reactNativeApp.stderr.on("data", (data) => {
        console.error(data.toString());
      });
      reactNativeApp.on("close", (code) => {
        console.log(`React Native app created with exit code ${code}`);
      });
      break;
    case "Angular":
      const angularApp = spawn("ng", ["new", `${projectName}`]);
      angularApp.stdout.on("data", (data) => {
        console.log(data.toString());
      });
      angularApp.stderr.on("data", (data) => {
        console.error(data.toString());
      });
      angularApp.on("close", (code) => {
        console.log(`Angular app created with exit code ${code}`);
      });
      break;
    case "Flutter":
      console.log("Creating a new Flutter app...");
      // Run the flutter create command as a child process
      const flutterApp = spawn("flutter", ["create", `${projectName}`]);
      flutterApp.stdout.on("data", (data) => {
        console.log(data.toString());
      });
      flutterApp.stderr.on("data", (data) => {
        console.error(data.toString());
      });
      flutterApp.on("close", (code) => {
        console.log(`Flutter app created with exit code ${code}`);
      });
      break;
    default:
      console.log("❗ 404 Error not found 📈");
      process.exit(1);
  }
}

module.exports = {
  createProject,
};
