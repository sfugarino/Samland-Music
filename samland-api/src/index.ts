require("@babel/register")({
  presets: ["@babel/env"],
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  only: [__dirname + "/../../"],
  ignore: [__dirname + "/../../**/node_modules"],
});
require("./app");
