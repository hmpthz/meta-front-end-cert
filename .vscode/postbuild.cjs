const fs = require('node:fs');

if (fs.existsSync('./build'))
    fs.rmSync('./build', { recursive:true });

fs.cpSync('./course3', './build/course3', { recursive:true });
fs.renameSync('./course4/build', './build/course4');
fs.renameSync('./course5/build', './build/course5');
fs.renameSync('./course7/build', './build/course7');
fs.renameSync('./course8/build', './build/course8');
fs.renameSync('./final/dist', './build/final');