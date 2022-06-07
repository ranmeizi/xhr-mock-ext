const webpack = require('webpack');
const shell = require('shelljs');
const config = require('./webpack.config')
const fs = require('fs')
const path = require('path')
const ContentScriptPlugin = require('./plugins/ContentScriptPlugin')
const InjectScriptPlugin = require('./plugins/InjectScriptPlugin')


const manifest = require('../src/manifest.json')

const manifest_content_scripts = {
  matches: ['<all_urls>'],
  css: [],
  js: []
}

const mainfest_web_accessible_resources = []

// 删除之前的目录
shell.rm('-rf', path.resolve(__dirname, '../output'));


config.plugins.push(new ContentScriptPlugin(manifest_content_scripts))
config.plugins.push(new InjectScriptPlugin(mainfest_web_accessible_resources))

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err)
  } else {
    // 重写manifest
    fs.writeFileSync(path.resolve(__dirname, '../output/manifest.json'), JSON.stringify({
      ...manifest,
      web_accessible_resources: mainfest_web_accessible_resources,
      content_scripts: [manifest_content_scripts]
    }))
  }
});
