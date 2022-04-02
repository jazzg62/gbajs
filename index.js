const fs = require('fs')
const util = fs.readFileSync('./js/util.js', 'utf8')
const core = fs.readFileSync('./js/core.js', 'utf8')
const arm = fs.readFileSync('./js/arm.js', 'utf8')
const thumb = fs.readFileSync('./js/thumb.js', 'utf8')
const mmu = fs.readFileSync('./js/mmu.js', 'utf8')
const io = fs.readFileSync('./js/io.js', 'utf8')
const audio = fs.readFileSync('./js/audio.js', 'utf8')
const video = fs.readFileSync('./js/video.js', 'utf8')
const proxy = fs.readFileSync('./js/video/proxy.js', 'utf8')
const software = fs.readFileSync('./js/video/software.js', 'utf8')
const irq = fs.readFileSync('./js/irq.js', 'utf8')
const keypad = fs.readFileSync('./js/keypad.js', 'utf8')
const sio = fs.readFileSync('./js/sio.js', 'utf8')
const savedata = fs.readFileSync('./js/savedata.js', 'utf8')
const gpio = fs.readFileSync('./js/gpio.js', 'utf8')
const gba = fs.readFileSync('./js/gba.js', 'utf8')
const xhr = fs.readFileSync('./resources/xhr.js', 'utf8')
const ep = fs.readFileSync('./js/export.js', 'utf8');

const list = [util, core, arm, thumb, mmu, io, audio, video, proxy, software, irq, keypad, sio, savedata, gpio, gba, xhr];
const _file = list.join('\n');

// 可直接使用
fs.writeFileSync('./gba.js', _file, err => {
if (err) {
    console.error(err)
    return
}
console.log('复制 gba.js 成功');
})

// 用于import引入
fs.writeFileSync('./gba.import.js', _file+'\n'+ep, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('复制 gba.import.js 成功');
})
