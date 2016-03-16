var generators = require('yeoman-generator');  

module.exports = generators.Base.extend({  //必须extend自
    method1 : function(){  //任务函数，当generator运行时会自动运行这些函数，这些函数有队列之分，下面会解释
        console.log('hello world...');
    }
});
