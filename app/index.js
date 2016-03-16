var generators = require('yeoman-generator');  
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = generators.Base.extend({  //必须extend自
  initializing: function () {
    // 初始化准备工作
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the groundbreaking ' + chalk.red('example') + ' generator!'
    ));
    this.name = path.basename(process.cwd());
    this.license = 'ISC';
    this.description = '';
    this.author = '';
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'name of app:',
        default: this.name
      },
      {
        type: 'input',
        name: 'description',
        message: 'description:',
        default: this.description
      },
      {
        type: 'list',
        name: 'kissy',
        message: 'which version of kissy',
        choices: [
          {
            name: 'KISSY@1.4.x',
            value: '1.4.x'
          },
          {
            name: 'KISSY@6.0.x',
            value: '6.0.x'
          }
        ]
      },
      {
        type: 'input',
        name: 'repo',
        message: 'git repository:',
        default: this.repo
      },
      {
        type: 'input',
        name: 'license',
        message: 'license',
        default: this.license
      },
      {
        type: 'input',
        name: 'author',
        message: 'author',
        default: this.author
      }
    ];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.pkgName = props.name;
      this.kissy = props.kissy;
      this.repo = props.repo;
      this.license = props.license;
      this.author = props.author;
      this.description = props.description;

      done(); 
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('_package.json', 'package.json');
      this.template('_gulpfile.js', 'gulpfile.js');
      this.copy('_src/less/index.less', 'src/less/index.less');
      this.copy('_src/js/index.js', 'src/js/index.js');
    }
  },

  install: function () {
    var done = this.async();

    this.spawnCommand('npm', ['install'])
      .on('exit', function(code) {
        if(code) {
          done(new Error('code: ' + code));
        } else {
          done();
        }
      })
      .on('error', done);
  },

  end: function () {
    var done = this.async();
    this.spawnCommand('gulp')
      .on('exit', function(code){
        if(code) {
          done(new Error('code: ' + code));
        } else {
          done();
        }
      })
      .on('error', done);
  }

});

