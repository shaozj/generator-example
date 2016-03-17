# generator-example
an example of yeoman generator 

* initializing : 初始化阶段
* prompting : 接受用户输入阶段
* configuring : 保存配置信息和文件，如.*editorconfig
* default : 非特定的功能函数名称，如上面说到的method1
* writing : 生成项目目录结构阶段
* conflicts : 统一处理冲突，如要生成的文件已经存在是否覆盖等处理
* install : 安装依赖阶段，如通过npm、bower
* end : 生成器即将结束
