const cprocess = require('child_process')
let argv = {}
process.argv.forEach(v=>{
  if(v.indexOf('=') > -1){
    let arr = v.split('=');
    if(arr[0] && arr[1]){
      let obj = {}
      let key = arr[0].replace('--env.', '');
      argv[key] = arr[1];
    }
  }
})
let envstr = '';
Object.keys(argv).forEach(k=>{
  envstr += `--env.${k}=${argv[k]} `
})
let cmd = 'npm run startdev -- ' + envstr
let dev = cprocess.exec(cmd, {detached: true}, function(error, stdout, stderr) {
  if(error) console.log(error)   
})
dev.stdout.pipe(process.stdout)
dev.stderr.pipe(process.stderr)
