# webpack-demo

项目目录：
* build
* config
* dist
* node_modules
* packages (公用包，最好不依赖第三方）
	* ui（UI库  alert, toast, picker, modal...） 
		* alert
			* template.art
			* index.js
			* index.less
	* utils（基础工具，任何人、任何地方都能用）
		都是逻辑代码，需写测试
	* less （底层less）
		* common.less
 	* README.md
* src
	* @shared (共享组件、工具、方法、第三方应用)
        * components（UI组件）
            * example1
                * images
                * index.less
                * index.js | index.vue
            * README.md
        * wx（项目中涉及wx jssdk的方法）
        * utils（项目中的工具方法）
        * report（数据上报）
        * less（项目中可以公用的样式）
        	* header.less
        	* footer.less
    * assets
    	* scripts
    	* styles
  	* project1 (项目名)
  		* api（接口）
  	    * static（静态文件）
        * components (项目组件)
        * mock（数据模拟）
        	* mock.js
        * pages（页面）
        	* index（首页）
        		* index.less
        		* index.vue
        		* index.js
        	* order（订单页）
        * main.js

