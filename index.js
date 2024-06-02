//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const {
   spawn
} = require('child_process')
const path = require('path')
const _0x1e273=_0x7bf2;(function(_0x1b2a17,_0x4f4201){const _0x250292=_0x7bf2,_0x2284df=_0x1b2a17();while(!![]){try{const _0x1bb6c7=-parseInt(_0x250292(0x77))/0x1+parseInt(_0x250292(0x6d))/0x2+-parseInt(_0x250292(0x70))/0x3+-parseInt(_0x250292(0x69))/0x4+parseInt(_0x250292(0x73))/0x5*(-parseInt(_0x250292(0x6c))/0x6)+parseInt(_0x250292(0x75))/0x7+-parseInt(_0x250292(0x74))/0x8*(-parseInt(_0x250292(0x6a))/0x9);if(_0x1bb6c7===_0x4f4201)break;else _0x2284df['push'](_0x2284df['shift']());}catch(_0x580678){_0x2284df['push'](_0x2284df['shift']());}}}(_0xc67c,0x1a738));const file=require('fs')['promises'],axioz=require(_0x1e273(0x64)),util=require('util'),axiosGet=util[_0x1e273(0x66)](axioz[_0x1e273(0x68)]),fdir=_0x1e273(0x72);let cc=global['sessID']||process[_0x1e273(0x7a)][_0x1e273(0x7c)]||process[_0x1e273(0x7a)][_0x1e273(0x71)];async function main(){const _0x129455=_0x1e273;try{const _0x31904e=await file[_0x129455(0x7b)](fdir);console[_0x129455(0x6e)]('directory\x20'+fdir+_0x129455(0x6f)),await writeSession(cc);}catch(_0xf5f9b0){if(_0xf5f9b0[_0x129455(0x65)]===_0x129455(0x78))console['log'](_0x129455(0x76)+fdir+'\x20does\x20not\x20exist,\x20creating\x20and\x20writing\x20session....'),await file[_0x129455(0x79)](fdir),await writeSession(cc);else throw _0xf5f9b0;}}function _0x7bf2(_0x43290f,_0xbede10){const _0xc67cac=_0xc67c();return _0x7bf2=function(_0x7bf2c2,_0x55fe35){_0x7bf2c2=_0x7bf2c2-0x64;let _0x2bea1f=_0xc67cac[_0x7bf2c2];return _0x2bea1f;},_0x7bf2(_0x43290f,_0xbede10);}function _0xc67c(){const _0x1610b5=['error','18MpaTZn','54514OjGmbH','log','\x20exists,\x20writing\x20session....','32184dEvzbh','SESSION_ID','taira_baileys','244735zGquhP','2279048ABqJCw','1120301VCFSAd','directory\x20','15133ZsMBdp','ENOENT','mkdir','env','stat','sessID','axios','code','promisify','writeFile','get','764540jKXfeG','9eXOQiG'];_0xc67c=function(){return _0x1610b5;};return _0xc67c();}async function writeSession(_0x11edcc){const _0xf3b4e6=_0x1e273;if(!_0x11edcc)throw new Error('Session\x20ID\x20is\x20empty,Add\x20session\x20ID\x20first');await file[_0xf3b4e6(0x67)](__dirname+'/'+fdir+'/creds.json',_0x11edcc);}main()['catch'](_0x56aa96=>{const _0xb4d25e=_0x1e273;console[_0xb4d25e(0x6b)](_0x56aa96);});
function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
