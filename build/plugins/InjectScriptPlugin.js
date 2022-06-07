const isInjectJs = (name) => /inject_scripts\/.+\.js$/.test(name)

module.exports = class InjectScriptPlugin {
  constructor(mainfest_web_accessible_resources) {
    this.mainfest_web_accessible_resources = mainfest_web_accessible_resources
  }
  apply(compiler) {
    compiler.hooks.assetEmitted.tap(
      'InjectScriptPlugin',
      (file, { content, source, outputPath, compilation, targetPath }) => {
        if (isInjectJs(file)) {
          this.mainfest_web_accessible_resources.push(file)
        }
      }
    )
  }
}