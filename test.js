const os = require('os');

console.log(os)
//cpu架构
const arch = os.arch();
console.log("cpu架构：" + arch);

//操作系统内核
const kernel = os.type();
console.log("操作系统内核：" + kernel);

//操作系统平台
const pf = os.platform();
console.log("平台：" + pf);

//主机名
const hn = os.hostname();
console.log("主机名：" + hn);

//主目录
const hdir = os.homedir();
console.log("主目录：" + hdir);


//cpu
const cpus = os.cpus();
console.log('*****cpu信息*******');
cpus.forEach((cpu, idx, arr) => {
    var times = cpu.times;
    console.log(`cpu${idx}：`);
    console.log(`型号：${cpu.model}`);
    console.log(`频率：${cpu.speed}MHz`);
    console.log(`使用率：${((1 - times.idle / (times.idle + times.user + times.nice + times.sys + times.irq)) * 100).toFixed(2)}%`);
});

//网卡
console.log('*****网卡信息*******');
const networksObj = os.networkInterfaces();
for (let nw in networksObj) {
    let objArr = networksObj[nw];
    console.log(`\r\n${nw}：`);
    objArr.forEach((obj, idx, arr) => {
        console.log(`地址：${obj.address}`);
        console.log(`掩码：${obj.netmask}`);
        console.log(`物理地址：${obj.mac}`);
        console.log(`协议族：${obj.family}`);
    });
}
