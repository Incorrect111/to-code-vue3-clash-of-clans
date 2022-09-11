const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: '/to-code-vue3-clash-of-clans/',
	productionSourceMap: false,
	assetsDir: 'assets',
	filenameHashing: false
})
