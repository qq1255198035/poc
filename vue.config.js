const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				//依次导入的公用的scss变量，公用的scss混入，共用的默认样式
				additionalData: `@import "./src/assets/css/element.scss";@import "./src/assets/css/var.scss";@import "./src/assets/css/mixin.scss";`
			}
		}
	}
})
