const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Path to the packages folder
const packagesDir = path.resolve(__dirname, "packages");

// Read all subdirectories in the packages directory
const packages = fs.readdirSync(packagesDir).filter((dir) => {
  const packageJsonPath = path.join(packagesDir, dir, "package.json");
  return fs.existsSync(packageJsonPath);
});

// Loop through each package and publish it
packages.forEach((pkg) => {
  const pkgPath = path.join(packagesDir, pkg);
  try {
    console.log(`Publishing package: ${pkg}`);
    execSync(`npm publish --access public`, { cwd: pkgPath, stdio: "inherit" });
    console.log(`Published package: ${pkg}`);
  } catch (error) {
    console.error(`Failed to publish package: ${pkg}`, error.message);
  }
});
