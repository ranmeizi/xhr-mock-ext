// 这个plugin在构建模块时，记录一条需要注入的content_script

const isContentJs = (name) => /content_scripts\/.+\.js$/.test(name)
const isContentCss = (name) => /content_scripts\/.+\.css$/.test(name)

module.exports = class ContentScriptPlugin {
  constructor(manifest_content_script) {
    this.manifest_content_script = manifest_content_script
  }
  apply(compiler) {
    compiler.hooks.assetEmitted.tap(
      'ContentScriptPlugin',
      (file, { content, source, outputPath, compilation, targetPath }) => {
        if (isContentJs(file)) {
          this.manifest_content_script.js.push(file)
        } else if (isContentCss(file)) {
          this.manifest_content_script.css.push(file)
        }
      }
    )
  }
}