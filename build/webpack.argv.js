let argv = {}

process.argv.forEach(v=>{
  if(v.indexOf('=') > -1){
    let arr = v.split('=');
    if(arr[0] && arr[1]){
      let key = arr[0].replace('--env.', '');
      argv[key] = arr[1];
    }
  }
})

if(!argv.name){
  argv.name = 'mall'
}

module.exports = argv;
