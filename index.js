const fs = require("fs");

const isNumeric = (ns) => /^[0-9]+$/.test(ns);

const _formatObj = (text, obj) => {
    let res = "";
    for(let i = 0; i < text.length; i++){
        if(text.substr(i, 2) === "%{"){
            i += 2;
            let prop = "";
            while(text[i] !== "}"){
                prop += text[i++];
                if(text[i] === "^" && text[i + 1] === "}"){
                    prop += "}";
                    i += 2;
                }
            }
            res += obj[prop];
        } else if(text.substr(i, 2) === "^%"){
            res += "%";
            i++;
        } else {
            res += text[i];
        }
    }
    return res;
}

const _format = (text, ...opts) => {
    let res = "";
    for(let i = 0, cOpt; i < text.length; i++){
        if(text.substr(i, 2) === "%["){
            i += 2;
            let joiner = "";
            while(text[i] !== "]"){
                joiner += text[i++];
                if(text[i] === "^" && text[i + 1] === "]"){
                    joiner += "]";
                    i += 2;
                }
            }
            res += opts.join(joiner);
        } else if(text[i] === "%" && isNumeric(text[i + 1])){
            let n = "";
            while(isNumeric(text[++i])){
                n += text[i];
            }
            res += opts[Number(n)];
            --i;
        } else if(text.substr(i, 2) === "%{"){
            i++;
            let prop = "";
            while(text[i] !== "}"){
                prop += text[++i];
                if(text[i] === "^" && text[i + 1] === "}"){
                    prop += "}";
                    i += 2;
                }
            }
            return 
        } else if(text.substr(i, 2) === "^%"){
            res += "%";
            i++;
        } else {
            res += text[i];
        }
    }
    return res;
}

const format = (...args) => {
    if(typeof args[1] === "object") return _formatObj(...args);
    
    return _format(...args);
}

format.object = _formatObj;
format.regular = _format;

const read = (fileName) =>
    fs.readFileSync(fileName).toString();

const write = (fileName, data) =>
    (fs.writeFileSync(fileName, data), data);

const log = (...text) =>
    text.forEach(t => process.stdout.write(t));

const logln = (...text) =>
    text.forEach(t => console.log(t));

const logf = (...args) =>
    process.stdout.write(format(...args));

const logfln = (...args) =>
    console.log(format(...args));

module.exports = {
    read: read,
    write: write,
    log: log,
    logln: logln,
    logf: logf,
    logfln: logfln,
    format: format,
    version: "1.0.2"
};