(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{478:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("全面学习Vue3")]),e._v(" "),t("p",[e._v("开启Vue3，本人是一名Vue2的开发者，对Vue3却是一知半解,在今年Vue3已经成为默认版本，到现在已过半年了，是该总结一番了")])]),e._v(" "),t("h2",{attrs:{id:"学习vue3的几种路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习vue3的几种路径"}},[e._v("#")]),e._v(" 学习Vue3的几种路径")]),e._v(" "),t("blockquote",[t("p",[e._v("Vue3"),t("a",{attrs:{href:"https://cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档"),t("OutboundLink")],1),e._v("  |  "),t("a",{attrs:{href:"https://vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"_1-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-cdn"}},[e._v("#")]),e._v(" 1.  CDN:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('<script src="https://unpkg.com/vue@next"><\/script>')])])]),e._v(" "),t("h3",{attrs:{id:"_2-codepen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-codepen"}},[e._v("#")]),e._v(" 2. Codepen")]),e._v(" "),t("ul",[t("li",[e._v("通过"),t("a",{attrs:{href:"https://codepen.io/yyx990803/pen/OJNoaZL",target:"_blank",rel:"noopener noreferrer"}},[e._v("Codepen"),t("OutboundLink")],1),e._v(" 的浏览器 playground")])]),e._v(" "),t("h3",{attrs:{id:"_3-vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vite"}},[e._v("#")]),e._v(" 3. Vite")]),e._v(" "),t("blockquote",[t("p",[e._v("尤大开发的新工具"),t("a",{attrs:{href:"https://cn.vitejs.dev/guide/why.html#the-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite"),t("OutboundLink")],1),e._v("，下一代前端开发与构建工具，原来是利用浏览器现在已经支持ES6的import；遇到import会发送一个http请求去加载对应的文件，vite拦截这些请求，做预编译，就省去了webpack冗长的打包事件，提升开发体验。")])]),e._v(" "),t("ul",[t("li",[e._v("安装")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yarn create vite-app hello-vue3（npm init vite-app hello-vue3）\nyarn (npm install)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("即可初始化一个 vite 项目（默认应用模板为 vue3.x），生成的项目结构十分简洁")])]),e._v(" "),t("div",{staticClass:"language-tree line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("|____node_modules\n|____App.vue // 应用入口\n|____index.html // 页面入口\n|____vite.config.js // 配置文件\n|____package.json\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h3",{attrs:{id:"_4-vue-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-cli"}},[e._v("#")]),e._v(" 4. vue-cli")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install -g @vue/cli # OR yarn global add @vue/cli\nvue create hello-vue3\n# select vue 3 prese\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"vue2和vue3的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2和vue3的区别"}},[e._v("#")]),e._v(" Vue2和Vue3的区别")]),e._v(" "),t("h3",{attrs:{id:"_1-vue3新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue3新特性"}},[e._v("#")]),e._v(" 1. Vue3新特性")]),e._v(" "),t("ol",[t("li",[e._v("Composition Api (最核心)")]),e._v(" "),t("li",[e._v("v-model更改")]),e._v(" "),t("li",[e._v("v-for的key节点上的使用情况更改")]),e._v(" "),t("li",[e._v("v-if和v-for对同一元素的优先级更高")]),e._v(" "),t("li",[e._v("ref内部v-for不再注册引用数组")]),e._v(" "),t("li",[e._v("功能组件只能使用普通函数创建")]),e._v(" "),t("li",[e._v("异步组件需要使用defineAsyncComponent创建方法")]),e._v(" "),t("li",[e._v("所有插槽都通过$slots")]),e._v(" "),t("li",[e._v("在destroyed生命周期的选项已更名为unmounted")]),e._v(" "),t("li",[e._v("在beforeDestroy生命周期的选项已更名为beforeUnmount。")])]),e._v(" "),t("h3",{attrs:{id:"_2-vue3优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue3优缺点"}},[e._v("#")]),e._v(" 2. Vue3优缺点")]),e._v(" "),t("ul",[t("li",[e._v("优点：\n"),t("ol",[t("li",[e._v("将Vue内部的绝大部分api对外暴露，使Vue具备开发大型项目的能力，例如compile编译api等")]),e._v(" "),t("li",[e._v("webpack的treeshaking(tree shaking 是 DCE 的一种方式，它可以在打包时忽略没有用到的代码。)支持度友好")]),e._v(" "),t("li",[e._v("使用Proxy进行响应式变量定义，性能提高1.2~2倍")]),e._v(" "),t("li",[e._v("ssr快了2~3倍")]),e._v(" "),t("li",[e._v("可在Vue2.0中单独使用composition-api插件，或者直接用它开发插件")]),e._v(" "),t("li",[e._v("对typescript支持更加友好")]),e._v(" "),t("li",[e._v("面向未来：对于尤雨溪最近创新的vite开发服务器（舍弃webpack、底层为Koa框架的高性能开发服务器）,直接使用的Vue3.0语法")])])]),e._v(" "),t("li",[e._v("缺点：\n"),t("ol",[t("li",[e._v("vue3将不再支持IE11，Vue 在 2.X 版本仍然支持 IE11，如果你想使用类似 Vue 3 的新特性，可以等等 Vue 2.7 版本。这次的 RFC 宣布，将会对 2.7 版本做向后兼容，移植 3.x 的部分新功能，以保证两个版本之间相似的开发体验。")]),e._v(" "),t("li",[e._v("对于习惯了Vue2.0开发模式的开发者来说，增加了心智负担，对开发者代码组织能力有体验")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);