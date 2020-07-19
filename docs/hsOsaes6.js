this["hsOsaes6"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/Request.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/Request.js ***!
  \**************************************************************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/log.js");
/* harmony import */ var _fsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fsUtil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/fsUtil.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");


const log = new _log__WEBPACK_IMPORTED_MODULE_1__["Log"]('NodeRequest');




const html2json = __webpack_require__(/*! html2json */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js").html2json;
log.messageLength = 120;
const protocol = { "http:": http__WEBPACK_IMPORTED_MODULE_3___default.a, "https:": https__WEBPACK_IMPORTED_MODULE_4___default.a };
class Request extends hsutil__WEBPACK_IMPORTED_MODULE_5__["Request"] {
    constructor() {
        super(...arguments);
        this.log = log;
    }
    getURL(url) {
        return (typeof url === 'string') ? new url__WEBPACK_IMPORTED_MODULE_0__["URL"](url) : url;
    }
    async readCached(fname) {
        try {
            const meta = JSON.parse(await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["readTextFile"](`${fname}-meta.json`));
            const data = await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["readFile"](fname + '.bin', false);
            if (this.pace) {
                this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) found cache for ${fname} `);
            }
            else {
                this.log.transient(`found cache for ${fname} `);
            }
            return { response: meta, data: data };
        }
        catch (e) {
            return undefined;
        }
    }
    async writeCached(fname, response) {
        try {
            const type = response.response.headers["content-type"];
            const meta = {
                headers: Object.assign({}, response.response.headers),
                statusCode: response.response.statusCode,
                statusMessage: response.response.statusMessage,
                txt: response.response.txt
            };
            await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["writeTextFile"](`${fname}-meta.json`, JSON.stringify(meta));
            await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["writeFile"](`${fname}.bin`, response.data, false);
        }
        catch (e) {
            this.log.warn(`error writing cache for content ${response.response.headers["content-type"]} and file ${fname}: ${e}`);
        }
    }
    async issueRequest(options, postData) {
        const request = this;
        const prot = protocol[options.protocol];
        return new Promise((resolve, reject) => {
            let data = '';
            this.log.debug(() => `requesting ${this.log.inspect(options, { depth: 4 })}`);
            const req = prot.request(options, (res) => {
                const encoding = request.isTextualContent(res.headers['content-type']) ? 'utf8' : 'binary';
                res.setEncoding(encoding);
                res.txt = encoding === 'utf8';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => {
                    resolve({ data: data, response: res });
                });
            });
            req.on('error', (e) => {
                reject({ data: '', error: e });
            });
            if (postData !== undefined) {
                req.write(postData);
            }
            req.end();
        });
    }
}
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: (data) => { try {
        return html2json(data);
    }
    catch (e) {
        return {};
    } }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsS0FBSyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBZSxPQUFPLENBQUM7QUFBRyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzRSxPQUFPLEtBQUssRUFBRSxNQUFlLFVBQVUsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBa0IsTUFBTSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxNQUFpQixPQUFPLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBUSxRQUFRLENBQUM7QUFLbEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUVqRCxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUV4QixNQUFNLFFBQVEsR0FBRyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQyxDQUFDO0FBR2hELE1BQU0sT0FBTyxPQUFRLFNBQVEsV0FBVztJQUF4Qzs7UUFPYyxRQUFHLEdBQVEsR0FBRyxDQUFDO0lBb0U3QixDQUFDO0lBbEVhLE1BQU0sQ0FBQyxHQUFjO1FBQzNCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBVVMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFZO1FBQ25DLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/cpUtil.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/cpUtil.js ***!
  \*************************************************************************************/
/*! exports provided: child_process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "child_process", function() { return child_process; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);

const child_process = {
    exec: (command, options) => new Promise((resolve, reject) => child_process__WEBPACK_IMPORTED_MODULE_0__["exec"](command, options, (error, stdout, stderr) => {
        error ? reject(error) : resolve({ stdout: stdout, stderr: stderr });
    }))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxLQUFLLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBYXpCLElBQUksRUFBRSxDQUFDLE9BQWMsRUFBRSxPQUFZLEVBQW9DLEVBQUUsQ0FDckUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFxRCxFQUFFLE1BQXVCLEVBQUUsRUFBRSxDQUMzRixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFTLEVBQUUsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO1FBQ2xFLEtBQUssQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUNMO0NBQ1IsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/fsUtil.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/fsUtil.js ***!
  \*************************************************************************************/
/*! exports provided: realPath, pathExists, fileSize, isFile, isDirectory, isLink, mkdirs, readDir, readFile, readTextFile, readJsonFile, writeFile, writeStream, writeTextFile, writeJsonFile, appendFile, appendFileSync, remove, removeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realPath", function() { return realPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathExists", function() { return pathExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectory", function() { return isDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLink", function() { return isLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdirs", function() { return mkdirs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDir", function() { return readDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTextFile", function() { return readTextFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readJsonFile", function() { return readJsonFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeStream", function() { return writeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTextFile", function() { return writeTextFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeJsonFile", function() { return writeJsonFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFile", function() { return appendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFileSync", function() { return appendFileSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return removeAll; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function stat(thePath) {
    const p = await realPath(thePath);
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["stat"](p, (err, stats) => {
            if (err) {
                console.log(`error getting stats for ${thePath}: ${err}`);
                reject(err);
            }
            else {
                resolve(stats);
            }
        });
    });
}
async function lstat(thePath) {
    const p = path__WEBPACK_IMPORTED_MODULE_1__["normalize"](thePath);
    return new Promise((resolve, reject) => fs__WEBPACK_IMPORTED_MODULE_0__["lstat"](p, (err, stats) => err ? reject(err) : resolve(stats)));
}
function error(err) {
    const msg = `*** error in fsUtil: ${err}, stack:\n${err.stack}`;
    throw new Error(msg);
}
function realPath(thePath) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["realpath"](thePath, (err, resolvedPath) => err ? reject(err) : resolve(resolvedPath));
    })
        .catch(error);
}
async function pathExists(thePath) {
    try {
        await stat(thePath);
        return true;
    }
    catch (e) {
        return false;
    }
}
async function fileSize(thePath) {
    try {
        return (await stat(thePath)).size;
    }
    catch (e) {
        return -1;
    }
}
async function isFile(thePath) {
    try {
        return (await stat(thePath)).isFile();
    }
    catch (e) {
        return false;
    }
}
async function isDirectory(thePath) {
    try {
        return (await stat(thePath)).isDirectory();
    }
    catch (e) {
        return false;
    }
}
async function isLink(thePath) {
    try {
        return (await lstat(thePath)).isSymbolicLink();
    }
    catch (e) {
        return false;
    }
}
async function mkdirs(thePath) {
    const p = path__WEBPACK_IMPORTED_MODULE_1__["normalize"](path__WEBPACK_IMPORTED_MODULE_1__["resolve"](process.cwd(), thePath));
    let dirs = p.split('/');
    dirs = dirs.map((dir, i) => dirs.slice(0, i + 1).join('/'));
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        const exists = await isDirectory(dir);
        if (!exists) {
            try {
                await fs__WEBPACK_IMPORTED_MODULE_0__["promises"].mkdir(dir);
            }
            catch (e) {
                if (e.code !== 'EEXIST') {
                    console.error(`error in mkdirs: ${e.code}`);
                    console.error(e);
                    throw `mkdir failed for ${dir}: ${p}\n${e}`;
                }
            }
        }
    }
    return p;
}
async function readDir(thePath) {
    const p = await realPath(thePath);
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["readdir"](p, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                files.path = p;
                resolve(files);
            }
        });
    })
        .catch(error);
}
function readFile(thePath, isText = true) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](thePath, isText ? 'utf8' : 'binary', (err, data) => err ? reject(err) : resolve(data));
    })
        .catch(error);
}
async function readTextFile(thePath) {
    try {
        return await readFile(thePath, true);
    }
    catch (err) {
        error(err);
    }
}
async function readJsonFile(thePath) {
    try {
        const data = await readFile(thePath, true);
        return (typeof data === 'string') ? JSON.parse(data) : data;
    }
    catch (err) {
        error(err);
    }
}
async function writeFile(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : 'binary';
    await mkdirs(path__WEBPACK_IMPORTED_MODULE_1__["dirname"](thePath));
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"](thePath, content, encoding, (err) => err ? reject(`mkdirs failed in writeFile for '${thePath}': ${err}`) : resolve(thePath));
    });
}
async function writeStream(thePath, content) {
    return await new Promise((resolve, reject) => {
        const s = fs__WEBPACK_IMPORTED_MODULE_0__["createWriteStream"](thePath, { flags: 'w', mode: 0o666 });
        s.on('error', (src) => reject(`writeStream error '${src}' for path '${thePath}'`));
        s.write(content, 'binary', () => resolve(thePath));
        s.end();
    });
}
async function writeTextFile(thePath, content) {
    return await writeFile(thePath, content, true)
        .catch(error);
}
async function writeJsonFile(thePath, obj) {
    return await Promise.resolve(obj)
        .then(JSON.stringify)
        .then(async (data) => await writeTextFile(thePath, data))
        .catch(error);
}
async function appendFile(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : { encoding: null };
    try {
        return await new Promise((resolve, reject) => {
            fs__WEBPACK_IMPORTED_MODULE_0__["appendFile"](thePath, content, encoding, (err) => err ? reject(err) : resolve(thePath));
        });
    }
    catch (e) {
        error(e);
    }
    ;
}
function appendFileSync(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : { encoding: null };
    try {
        fs__WEBPACK_IMPORTED_MODULE_0__["appendFileSync"](thePath, content, encoding);
        return thePath;
    }
    catch (e) {
        error(e);
    }
    ;
}
async function remove(thePath) {
    const dir = await isDirectory(thePath);
    return await new Promise((resolve, reject) => {
        dir ? fs__WEBPACK_IMPORTED_MODULE_0__["rmdir"](thePath, (e) => (e ? reject(e) : resolve(thePath)))
            : fs__WEBPACK_IMPORTED_MODULE_0__["unlink"](thePath, (e) => (e ? reject(e) : resolve(thePath)));
    });
}
async function removeAll(thePath) {
    const removed = [];
    const dir = await isDirectory(thePath);
    if (dir) {
        const list = await readDir(thePath);
        await Promise.all(list.map(async (i) => removed.push(...await removeAll(`${thePath}/${i}`))));
    }
    removed.push(await remove(thePath));
    return removed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxLQUFLLEVBQUUsTUFBZSxJQUFJLENBQUM7QUFDbEMsT0FBTyxLQUFLLElBQUksTUFBYSxNQUFNLENBQUM7QUE4QnBDLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBYztJQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBYyxFQUFFLEVBQUU7WUFDbkMsSUFBRyxHQUFHLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUNJO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBT0QsS0FBSyxVQUFVLEtBQUssQ0FBQyxPQUFjO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQU8sRUFBRSxLQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDNUUs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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/node_modules/process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/index.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/index.js ***!
  \************************************************************************************/
/*! exports provided: cp, Log, Request, fs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cpUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpUtil.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/cpUtil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cp", function() { return _cpUtil_js__WEBPACK_IMPORTED_MODULE_0__["child_process"]; });

/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log_js__WEBPACK_IMPORTED_MODULE_1__["Log"]; });

/* harmony import */ var _Request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _Request_js__WEBPACK_IMPORTED_MODULE_2__["Request"]; });

/* harmony import */ var _fsUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fsUtil.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/fsUtil.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fs", function() { return _fsUtil_js__WEBPACK_IMPORTED_MODULE_3__; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxFQUFFLEVBQUUsTUFBTyxhQUFhLENBQUM7QUFDbkQsY0FBcUMsVUFBVSxDQUFDO0FBQ2hELGNBQXFDLGNBQWMsQ0FBQztBQUVwRCxPQUFPLEtBQUssRUFBRSxNQUF1QixhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/log.js":
/*!**********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/log.js ***!
  \**********************************************************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");
/* harmony import */ var _fsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fsUtil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/fsUtil.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);





const COLOR = {
    clear: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    darkred: '\x1b[31m',
    darkgreen: '\x1b[32m',
    darkyellow: '\x1b[33m',
    darkblue: '\x1b[34m',
    darkmagenta: '\x1b[35m',
    darkcyan: '\x1b[36m',
    gray: '\x1b[37m',
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m'
};
class Log extends hsutil__WEBPACK_IMPORTED_MODULE_0__["Log"] {
    constructor(prefix) { super(prefix); }
    transient(msg) {
        return this.out(hsutil__WEBPACK_IMPORTED_MODULE_0__["Log"].INFO, msg.padEnd(this.messageLength || 80, ' ') + ' \r', { color: ['green'] });
    }
    output(color, header, line) {
        const c = color.map(c => COLOR[c]).join('');
        const msg = `${c}${header}${COLOR['clear']} ${line}`;
        if (this.LogFile) {
            Object(_fsUtil__WEBPACK_IMPORTED_MODULE_1__["appendFileSync"])(Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile), `${header} ${line}\n`);
        }
        if (line.slice(-1) === '\r') {
            process.stdout.write(msg);
        }
        else {
            console.log(msg);
        }
    }
    async logFile(filePattern) {
        if (filePattern === null) {
            this.LogFile = undefined;
            this.info("disabling logfile");
            return this.LogFile;
        }
        else if (filePattern === undefined) {
            return this.LogFile === undefined ? undefined : Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile);
        }
        else if (filePattern.indexOf('/') >= 0) {
            const parts = path__WEBPACK_IMPORTED_MODULE_2___default.a.parse(filePattern);
            try {
                const exists = await Object(_fsUtil__WEBPACK_IMPORTED_MODULE_1__["pathExists"])(parts.dir);
                if (!exists) {
                    this.LogFile = undefined;
                    this.warn(`path '${parts.dir}' doesn't exists; logfile disabled`);
                }
                else {
                    this.LogFile = filePattern;
                    this.info("now logging to file " + Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(filePattern));
                }
                return this.LogFile;
            }
            catch (e) {
                this.LogFile = undefined;
                this.error(`checking path ${parts.dir}; logfile disabled`);
                return this.LogFile;
            }
        }
        else if (filePattern === '') {
            this.LogFile = 'log-%YYYY-%MM-%DD.txt';
        }
        else {
            this.LogFile = filePattern;
        }
        this.info(this.LogFile ? `now logging to file ${Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile)}` : 'logfile disbaled');
        return this.LogFile;
    }
    getPrePostfix(indent, level, currIndent, colors) {
        const color = colors ? COLOR[colors[level % colors.length]] : '';
        return [`${currIndent}${indent}${color}`, colors ? COLOR.clear : '', '\n', currIndent];
    }
}
Log.log = new Log('');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxPQUFPLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxNQUFRLFFBQVEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVksVUFBVSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBUSxVQUFVLENBQUM7QUFDNUMsT0FBUSxJQUFJLE1BQXFCLE1BQU0sQ0FBQztBQUt4QyxNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTyxTQUFTO0lBRXJCLElBQUksRUFBUSxTQUFTO0lBQ3JCLEdBQUcsRUFBUyxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLEtBQUssRUFBTyxTQUFTO0lBQ3JCLE9BQU8sRUFBSyxTQUFTO0lBQ3JCLE1BQU0sRUFBTSxTQUFTO0lBRXJCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLEdBQUcsRUFBUyxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLE1BQU0sRUFBTSxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBQ3RCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBRXRCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLFNBQVMsRUFBRyxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLFdBQVcsRUFBQyxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBRXRCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLE1BQU0sRUFBTSxVQUFVO0lBQ3RCLFNB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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/node_modules/process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js ***!
  \************************************************************************************/
/*! exports provided: uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return uniquefy; });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE1BQU0sVUFBVSxRQUFRLENBQUksS0FBUyxFQUFFLEdBQWtCO0lBQ3JELE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDM0MsT0FBTyxHQUFHLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js ***!
  \***********************************************************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSiJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js":
/*!****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js ***!
  \****************************************************************************************/
/*! exports provided: AuthBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthBasic", function() { return AuthBasic; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestBasic');

class AuthBasic extends _Auth__WEBPACK_IMPORTED_MODULE_1__["Auth"] {
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
function _atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVTtJQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RCxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/node_modules/buffer/index.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js":
/*!*****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js ***!
  \*****************************************************************************************/
/*! exports provided: AuthDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDigest", function() { return AuthDigest; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestDigest');


class AuthDigest extends _Auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] {
    constructor() {
        super(...arguments);
        this.nc = 0;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/(([^"]|"[^"]*")*?)(,)/g, (...rest) => {
        const part = rest[1];
        const kv = part.split('=').map((v) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVTtRQUNyQixJQUFJLE1BQVUsQ0FBQztRQUNmLElBQUksRUFBUyxDQUFDO1FBRWQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxD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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js ***!
  \***************************************************************************************/
/*! exports provided: shortCheckSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return shortCheckSum; });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFRO0lBQ25DLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js ***!
  \***********************************************************************************/
/*! exports provided: date, ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return ms; });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    let r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return (typeof formatString !== 'string' || isNaN(date.getTime())) ?
        'invalid' :
        formatString
            .replace(/%YYYY/g, '' + date.getFullYear())
            .replace(/%YY/g, '' + (date.getFullYear() % 100))
            .replace(/%MMMM/g, monthStr[date.getMonth()][1])
            .replace(/%MMM/g, monthStr[date.getMonth()][0])
            .replace(/%MM/g, formatNumber(date.getMonth() + 1, 2))
            .replace(/%M/g, '' + (date.getMonth() + 1))
            .replace(/%DDDD/g, dayStr[date.getDay()][1])
            .replace(/%DDD/g, dayStr[date.getDay()][0])
            .replace(/%DD/g, formatNumber(date.getDate(), 2))
            .replace(/%D/g, '' + date.getDate())
            .replace(/%hh/g, formatNumber(date.getHours(), 2))
            .replace(/%h/g, '' + date.getHours())
            .replace(/%mm/g, formatNumber(date.getMinutes(), 2))
            .replace(/%m/g, '' + date.getMinutes())
            .replace(/%ss/g, formatNumber(date.getSeconds(), 2))
            .replace(/%jjj/g, formatNumber(date.getMilliseconds(), 3))
            .replace(/%jj/g, formatNumber(date.getMilliseconds() / 10, 2))
            .replace(/%j/g, formatNumber(date.getMilliseconds() / 100, 1));
}
const ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLFNBQVMsWUFBWSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBY0QsTUFBTSxVQUFVLElBQUksQ0FBQyxZQUFtQixFQUFFLElBQUksR0FBQyxJQUFJLElBQUksRUFBRTtJQUNyRCxPQUFPLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFBLENBQUM7UUFDVixZQUFZO2FBQ1AsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxNQUFNLEVBQUksRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlDLE9BQU8sQ0FBQyxRQUFRLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hELE9BQU8sQ0FBQyxPQUFPLEVBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hELE9BQU8sQ0FBQyxNQUFNLEVBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQsT0FBTyxDQUFDLEtBQUssRUFBSSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEMsT0FBTyxDQUFDLFFBQVEsRUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUMsT0FBTyxDQUFDLE9BQU8sRUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUMsT0FBTyxDQUFDLE1BQU0sRUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pELE9BQU8sQ0FBQyxLQUFLLEVBQUksRUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNuQyxPQUFPLENBQUMsTUFBTSxFQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQsT0FBTyxDQUFDLEtBQUssRUFBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25DLE9BQU8sQ0FBQyxNQUFNLEVBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNwRCxPQUFPLENBQUMsS0FBSyxFQUFJLEVBQUUsR0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdEMsT0FBTyxDQUFDLE1BQU0sRUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BELE9BQU8sQ0FBQyxPQUFPLEVBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUMxRCxPQUFPLENBQUMsTUFBTSxFQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVELE9BQU8sQ0FBQyxLQUFLLEVBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBR0QsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHO0lBQ2QsV0FBVyxFQUFLLENBQUMsR0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEdBQUc7SUFDM0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDO0lBQzVDLFFBQVEsRUFBUSxDQUFDLENBQVEsRUFBSSxFQUFFLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7SUFDL0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7SUFDakQsU0FBUyxFQUFPLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFVLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbEQsT0FBTyxFQUFTLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0NBQ3ZELENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js ***!
  \*************************************************************************************/
/*! exports provided: timeout, delay, Pace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return Pace; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
class Pace {
    constructor({ pace = 100, maxConcurrent = -1, collectionPeriod = 0 }) {
        this.maxConcurrent = -1;
        this.pace = 0;
        this.waitUntil = 0;
        this.waiting = 0;
        this.started = 0;
        this.queue = {};
        this.collectionPeriod = 0;
        this.pace = pace;
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }
    isAllowed() { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }
    setPace(ms) { this.pace = ms; }
    setMaxConcurrent(maxConcurrent) { this.maxConcurrent = maxConcurrent; }
    inQueue() { return this.waiting; }
    inProgress() { return this.started; }
    async add(fn, key) {
        const now = new Date().getTime();
        const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
        this.waitUntil += this.pace;
        let item;
        if (key && this.queue[key]) {
            item = this.queue[key];
            clearTimeout(item.timer);
            item.fn = fn;
            item.added = now;
        }
        else {
            key = key || `${now}-${Math.floor(Math.random() * 100000)}`;
            item = { fn: fn, added: now, pace: this, key: key };
            this.queue[key] = item;
            this.waiting++;
        }
        return this.resolveItem(item, callTime - now);
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = async (_item) => {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    await belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = await _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            };
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sT0FBTyxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFTNUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQWdDRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFtQkQsTUFBTSxPQUFPLElBQUk7SUFpQ2IsWUFBWSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFDLENBQUMsRUFBQztRQS9CcEQsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQWMsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBY2pDLHFC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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js ***!
  \**************************************************************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony import */ var _AuthDigest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthDigest */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthBasic */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Request');



log.messageLength = 120;
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: undefined }) => {
            this.pace = pace === undefined ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__["Pace"]({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.decode = undefined;
        this.cacheName = (options) => this.cache === undefined ? undefined :
            `${this.cache}/${options.path.replace(/q=(.*?)\//g, 'q=$1-').replace(/\?/g, '')}`;
    }
    async get(url, { useCached = true, headers = {} } = {}) {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }
    async put(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, useCached, headers, postData);
    }
    async post(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, useCached, headers, postData);
    }
    getURL(url) {
        return (typeof url === 'string') ? new URL(url, document.URL) : url;
    }
    getOptions(url, method) {
        url = this.getURL(url);
        const prefix = '';
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: prefix + url.pathname,
            path: prefix + url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${url.port ? ':' + url.port : ''}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            result.data = this.decode(result.data, options);
        }
        return result;
    }
    async readCached(fname) {
        return undefined;
    }
    async writeCached(fname, response) {
    }
    async requestOptions(options, useCached, postData) {
        const fname = this.cache ? this.cacheName(options) : undefined;
        if (fname && useCached && options.method === 'GET') {
            const result = await this.readCached(fname);
            if (result !== undefined) {
                return result;
            }
        }
        let request;
        if (this.pace) {
            this.log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        }
        else {
            request = this.request(options, postData);
        }
        this.log.debug(() => `${options.method}-ing ${options.url}`);
        const response = await request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
        }
        this.log.debug(() => `received ${options.method} ${response.response.statusMessage} ${options.method} ${options.url}`);
        const code = response.response.statusCode || response.response.status;
        if (code >= 200 && code < 300) {
            if (fname && options.method === 'GET') {
                await this.writeCached(fname, response);
            }
        }
        return response;
    }
    async request(options, postData) {
        try {
            const response = await this.issueRequest(options, postData);
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) {
                return response;
            }
            else if (this.credentials) {
                authenticate = authenticate.trim();
                let auth;
                if (authenticate.indexOf('Digest') === 0) {
                    auth = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__["AuthDigest"](this.credentials.user, this.credentials.password);
                }
                else if (authenticate.indexOf('Basic') === 0) {
                    auth = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__["AuthBasic"](this.credentials.user, this.credentials.password);
                }
                else {
                    throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                }
                auth.testAuth(options, response.data, response.response);
                return this.request(options);
            }
            else {
                throw `authentication missing; call 'setCredentials' before calling 'get'`;
            }
        }
        catch (e) {
            throw `error requesting ${options.url}: ${e}`;
        }
    }
    async issueRequest(options, postData) {
        const request = this;
        return new Promise((resolve, reject) => {
            try {
                function confirmRequest(e) {
                    const headersText = xhr.getAllResponseHeaders();
                    const headers = { 'content-type': '' };
                    headersText.split('\r\n').map(h => {
                        const kv = h.split(':').map(p => p.trim());
                        if (kv[0].length) {
                            headers[kv[0]] = kv[1];
                        }
                    });
                    const contentType = this.responseType;
                    const txt = request.isTextualContent(contentType);
                    const data = this.response;
                    const response = {
                        data: data,
                        response: {
                            txt: txt,
                            headers: headers,
                            method: options.method,
                            status: this.status,
                            statusCode: this.status,
                            statusMessage: `${this.status} ${this.statusText}`,
                            url: this.responseURL,
                        }
                    };
                    resolve(response);
                }
                const xhr = new XMLHttpRequest();
                const txt = request.isTextualRequest(options.pathname);
                this.log.debug(() => `requesting ${options.method} ${this.log.inspect(options, { depth: 4 })}`);
                xhr.open(options.method, options.url, true);
                Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
                xhr.responseType = txt ? 'text' : 'arraybuffer';
                xhr.onload = confirmRequest;
                xhr.send(postData ? JSON.stringify(postData) : undefined);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    isTextualContent(contentType) {
        let txt = false;
        if (contentType === undefined) {
            contentType = 'text/html';
        }
        else {
            contentType = contentType.split(';')[0];
        }
        const subTypes = contentType.split('/');
        switch (subTypes[0]) {
            case '':
            case 'text':
                txt = true;
                break;
            case 'image':
            case 'audio':
            case 'font': break;
            case 'application':
                switch (subTypes[1]) {
                    case 'json':
                        txt = true;
                        break;
                    case 'pdf': break;
                    case 'vnd.openxmlformats-officedocument.presentationml.presentation': break;
                    case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': break;
                    case 'vnd.ms-powerpoint': break;
                    case 'vnd.ms-excel': break;
                    case 'octet-stream': break;
                    case 'vnd.ms-excel.sheet.macroenabled.12': break;
                    default: this.log.info(`caching ${contentType} as binary`);
                }
                break;
            default: this.log.warn(`caching '${contentType}' as binary`);
        }
        return txt;
    }
    isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBT2MsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQXVCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxTQUFTLEVBQUMsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFHLFNBQVMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLElBQUksRUFB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js ***!
  \************************************************************************************/
/*! exports provided: timeout, delay, Pace, Request, shortCheckSum, date, ms, Log, uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["Pace"]; });

/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _Request__WEBPACK_IMPORTED_MODULE_1__["Request"]; });

/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return _Checksum__WEBPACK_IMPORTED_MODULE_2__["shortCheckSum"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "date", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["ms"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log__WEBPACK_IMPORTED_MODULE_4__["Log"]; });

/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return _Array__WEBPACK_IMPORTED_MODULE_5__["uniquefy"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js":
/*!**********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js ***!
  \**********************************************************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");

const COLOR = {
    clear: 'color:#000; background-color:inherit; font-weight:normal;',
    bold: 'font-weight:bold;',
    dim: '',
    underscore: '',
    blink: '',
    reverse: '',
    hidden: '',
    black: 'color:#000;',
    red: 'color:#f00;',
    green: 'color:#0f0;',
    yellow: 'color:#ff0;',
    blue: 'color:#00f;',
    magenta: 'color:#f0f;',
    cyan: 'color:#0ff;',
    white: 'color:#fff;',
    darkred: 'color:#800;',
    darkgreen: 'color:#080;',
    darkyellow: 'color:#880;',
    darkblue: 'color:#008;',
    darkmagenta: 'color:#808;',
    darkcyan: 'color:#088;',
    gray: 'color:#888;',
    bgBlack: 'background-color:#000;',
    bgRed: 'background-color:#f00;',
    bgGreen: 'background-color:#0f0;',
    bgYellow: 'background-color:#ff0;',
    bgBlue: 'background-color:#00f;',
    bgMagenta: 'background-color:#f0f;',
    bgCyan: 'background-color:#0ff;',
    bgWhite: 'background-color:#fff;'
};
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.maxLength = -1;
        this.colors = true;
        this.reportPrefix = prefix;
    }
    set messageLength(max) { this.maxLength = max; }
    get messageLength() { return this.maxLength; }
    level(newLevelSym, setGlobalLevel) {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;
        let oldLevel = this.reportLevel || Log.globalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            this.reportLevel = undefined;
        }
        else if (Log.levels[newLevelSym]) {
            if (setGlobalLevel) {
                Log.globalLevel = newLevel;
            }
            else {
                this.reportLevel = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            (newLevel.sym === oldLevel.sym) ? this.debug(msg) : this.info(msg);
        }
        else {
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg) { return this.out(Log.DEBUG, msg, { color: ['gray'] }); }
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r' }); }
    progress(msg) { return this.out(Log.INFO, msg, { color: ['darkblue'] }); }
    info(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'] }); }
    warn(msg) { return this.out(Log.WARN, msg, { color: ['darkyellow', 'bold'] }); }
    error(msg) {
        const color = ['darkred', 'bold'];
        if (msg.message) {
            this.out(Log.ERROR, msg.message, { color: color });
            this.out(Log.ERROR, msg.stack, { color: color });
            return msg.message;
        }
        else {
            return this.out(Log.ERROR, msg, { color: color });
        }
    }
    out(lvl, msg, options) {
        let desc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object':
                default: line = this.inspect(msg);
            }
            const dateStr = Object(_Date__WEBPACK_IMPORTED_MODULE_0__["date"])(Log.dateFormat);
            if (line.length > this.maxLength && this.maxLength > 0) {
                line = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`;
            }
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(options.color, header, line);
            return line + (options.lf || '');
        }
        return undefined;
    }
    output(color, header, line) {
        console.log(`%c${header}%c ${line}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
    }
    format(fmtStr) {
        if (fmtStr === null) {
            Log.dateFormat = Log.defDateFormat;
        }
        else if (fmtStr) {
            Log.dateFormat = fmtStr;
        }
        return Log.dateFormat;
    }
    prefix(prf) {
        if (prf) {
            this.reportPrefix = prf;
        }
        return this.reportPrefix;
    }
    config(cfg) {
        if (cfg.format !== undefined) {
            this.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
        if (cfg.colors !== undefined) {
            this.colors = cfg.colors;
        }
    }
    inspect(msg, { depth = -1, indent = '   ', colors = Log.INDENT_COLORS } = { depth: 0, indent: '   ', colors: Log.INDENT_COLORS }) {
        function _inspect(msg, depth, level, currIndent) {
            if (msg === null) {
                return 'null';
            }
            if (msg === undefined) {
                return 'undefined';
            }
            if (typeof msg === 'function') {
                return 'function';
            }
            if (typeof msg === 'string') {
                return `'${msg}'`;
            }
            if (typeof msg === 'object') {
                if (depth < 0) {
                    return (msg.length === undefined) ? '{...}' : '[...]';
                }
                if (msg.map !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, (depth !== undefined && depth !== null && depth >= 0) ? depth : 999, 0, '');
    }
    getPrePostfix(indent, level, currIndent, colors) {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart = `<b><span style='${color}'>`;
            cstop = `</span></b>`;
            lf = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors ? '<br>' : '\n', currIndent];
    }
}
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.dateFormat = Log.defDateFormat;
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.log = new Log('');
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFlRixNQUFNLE9BQU8sR0FBRztJQXFDWixZQUFZLE1BQWE7UUFMZixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxFQUFF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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/html2json */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js");


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Simple HTML Parser.
 * 
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function () {

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
		attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	// Empty Elements - HTML 5
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

	// Block Elements - HTML 5
	var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

	// Inline Elements - HTML 5
	var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");

	var HTMLParser = this.HTMLParser = function (html, handler) {
		var index, chars, match, stack = [], last = html;
		stack.last = function () {
			return this[this.length - 1];
		};

		while (html) {
			chars = true;

			// Make sure we're not in a script or style element
			if (!stack.last() || !special[stack.last()]) {

				// Comment
				if (html.indexOf("<!--") == 0) {
					index = html.indexOf("-->");

					if (index >= 0) {
						if (handler.comment)
							handler.comment(html.substring(4, index));
						html = html.substring(index + 3);
						chars = false;
					}

					// end tag
				} else if (html.indexOf("</") == 0) {
					match = html.match(endTag);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(endTag, parseEndTag);
						chars = false;
					}

					// start tag
				} else if (html.indexOf("<") == 0) {
					match = html.match(startTag);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(startTag, parseStartTag);
						chars = false;
					}
				}

				if (chars) {
					index = html.indexOf("<");

					var text = index < 0 ? html : html.substring(0, index);
					html = index < 0 ? "" : html.substring(index);

					if (handler.chars)
						handler.chars(text);
				}

			} else {
				html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
					text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
					if (handler.chars)
						handler.chars(text);

					return "";
				});

				parseEndTag("", stack.last());
			}

			if (html == last)
				throw "Parse Error: " + html;
			last = html;
		}

		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag(tag, tagName, rest, unary) {
			tagName = tagName.toLowerCase();

			if (block[tagName]) {
				while (stack.last() && inline[stack.last()]) {
					parseEndTag("", stack.last());
				}
			}

			if (closeSelf[tagName] && stack.last() == tagName) {
				parseEndTag("", tagName);
			}

			unary = empty[tagName] || !!unary;

			if (!unary)
				stack.push(tagName);

			if (handler.start) {
				var attrs = [];

				rest.replace(attr, function (match, name) {
					var value = arguments[2] ? arguments[2] :
						arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
						fillAttrs[name] ? name : "";

					attrs.push({
						name: name,
						value: value,
						escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
					});
				});

				if (handler.start)
					handler.start(tagName, attrs, unary);
			}
		}

		function parseEndTag(tag, tagName) {
			// If no tag name is provided, clean shop
			if (!tagName)
				var pos = 0;

				// Find the closest opened tag of the same type
			else
				for (var pos = stack.length - 1; pos >= 0; pos--)
					if (stack[pos] == tagName)
						break;

			if (pos >= 0) {
				// Close all the open elements, up the stack
				for (var i = stack.length - 1; i >= pos; i--)
					if (handler.end)
						handler.end(stack[i]);

				// Remove the open elements from the stack
				stack.length = pos;
			}
		}
	};

	this.HTMLtoXML = function (html) {
		var results = "";

		HTMLParser(html, {
			start: function (tag, attrs, unary) {
				results += "<" + tag;

				for (var i = 0; i < attrs.length; i++)
					results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
				results += ">";
			},
			end: function (tag) {
				results += "</" + tag + ">";
			},
			chars: function (text) {
				results += text;
			},
			comment: function (text) {
				results += "<!--" + text + "-->";
			}
		});

		return results;
	};

	this.HTMLtoDOM = function (html, doc) {
		// There can be only one of these elements
		var one = makeMap("html,head,body,title");

		// Enforce a structure for the document
		var structure = {
			link: "head",
			base: "head"
		};

		if (!doc) {
			if (typeof DOMDocument != "undefined")
				doc = new DOMDocument();
			else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument)
				doc = document.implementation.createDocument("", "", null);
			else if (typeof ActiveX != "undefined")
				doc = new ActiveXObject("Msxml.DOMDocument");

		} else
			doc = doc.ownerDocument ||
				doc.getOwnerDocument && doc.getOwnerDocument() ||
				doc;

		var elems = [],
			documentElement = doc.documentElement ||
				doc.getDocumentElement && doc.getDocumentElement();

		// If we're dealing with an empty document then we
		// need to pre-populate it with the HTML document structure
		if (!documentElement && doc.createElement) (function () {
			var html = doc.createElement("html");
			var head = doc.createElement("head");
			head.appendChild(doc.createElement("title"));
			html.appendChild(head);
			html.appendChild(doc.createElement("body"));
			doc.appendChild(html);
		})();

		// Find all the unique elements
		if (doc.getElementsByTagName)
			for (var i in one)
				one[i] = doc.getElementsByTagName(i)[0];

		// If we're working with a document, inject contents into
		// the body element
		var curParentNode = one.body;

		HTMLParser(html, {
			start: function (tagName, attrs, unary) {
				// If it's a pre-built element, then we can ignore
				// its construction
				if (one[tagName]) {
					curParentNode = one[tagName];
					if (!unary) {
						elems.push(curParentNode);
					}
					return;
				}

				var elem = doc.createElement(tagName);

				for (var attr in attrs)
					elem.setAttribute(attrs[attr].name, attrs[attr].value);

				if (structure[tagName] && typeof one[structure[tagName]] != "boolean")
					one[structure[tagName]].appendChild(elem);

				else if (curParentNode && curParentNode.appendChild)
					curParentNode.appendChild(elem);

				if (!unary) {
					elems.push(elem);
					curParentNode = elem;
				}
			},
			end: function (tag) {
				elems.length -= 1;

				// Init the new parentNode
				curParentNode = elems[elems.length - 1];
			},
			chars: function (text) {
				curParentNode.appendChild(doc.createTextNode(text));
			},
			comment: function (text) {
				// create comment node
			}
		});

		return doc;
	};

	function makeMap(str) {
		var obj = {}, items = str.split(",");
		for (var i = 0; i < items.length; i++)
			obj[items[i]] = true;
		return obj;
	}
})();


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global) {
  DEBUG = false;
  var debug = DEBUG ? console.log.bind(console) : function(){};

  if ( true && typeof module.exports === 'object') {
    __webpack_require__(/*! ../lib/Pure-JavaScript-HTML5-Parser/htmlparser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js");
  }

  function q(v) {
    return '"' + v + '"';
  }

  function removeDOCTYPE(html) {
    return html
      .replace(/<\?xml.*\?>\n/, '')
      .replace(/<!doctype.*\>\n/, '')
      .replace(/<!DOCTYPE.*\>\n/, '');
  }

  global.html2json = function html2json(html) {
    html = removeDOCTYPE(html);
    var bufArray = [];
    var results = {
      node: 'root',
      child: [],
    };
    HTMLParser(html, {
      start: function(tag, attrs, unary) {
        debug(tag, attrs, unary);
        // node for this element
        var node = {
          node: 'element',
          tag: tag,
        };
        if (attrs.length !== 0) {
          node.attr = attrs.reduce(function(pre, attr) {
            var name = attr.name;
            var value = attr.value;

            // has multi attibutes
            // make it array of attribute
            if (value.match(/ /)) {
              value = value.split(' ');
            }

            // if attr already exists
            // merge it
            if (pre[name]) {
              if (Array.isArray(pre[name])) {
                // already array, push to last
                pre[name].push(value);
              } else {
                // single value, make it array
                pre[name] = [pre[name], value];
              }
            } else {
              // not exist, put it
              pre[name] = value;
            }

            return pre;
          }, {});
        }
        if (unary) {
          // if this tag dosen't have end tag
          // like <img src="hoge.png"/>
          // add to parents
          var parent = bufArray[0] || results;
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        } else {
          bufArray.unshift(node);
        }
      },
      end: function(tag) {
        debug(tag);
        // merge into parent tag
        var node = bufArray.shift();
        if (node.tag !== tag) console.error('invalid state: mismatch end tag');

        if (bufArray.length === 0) {
          results.child.push(node);
        } else {
          var parent = bufArray[0];
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        }
      },
      chars: function(text) {
        debug(text);
        var node = {
          node: 'text',
          text: text,
        };
        if (bufArray.length === 0) {
          results.child.push(node);
        } else {
          var parent = bufArray[0];
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        }
      },
      comment: function(text) {
        debug(text);
        var node = {
          node: 'comment',
          text: text,
        };
        var parent = bufArray[0];
        if (parent.child === undefined) {
          parent.child = [];
        }
        parent.child.push(node);
      },
    });
    return results;
  };

  global.json2html = function json2html(json) {
    // Empty Elements - HTML 4.01
    var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

    var child = '';
    if (json.child) {
      child = json.child.map(function(c) {
        return json2html(c);
      }).join('');
    }

    var attr = '';
    if (json.attr) {
      attr = Object.keys(json.attr).map(function(key) {
        var value = json.attr[key];
        if (Array.isArray(value)) value = value.join(' ');
        return key + '=' + q(value);
      }).join(' ');
      if (attr !== '') attr = ' ' + attr;
    }

    if (json.node === 'element') {
      var tag = json.tag;
      if (empty.indexOf(tag) > -1) {
        // empty element
        return '<' + json.tag + attr + '/>';
      }

      // non empty element
      var open = '<' + json.tag + attr + '>';
      var close = '</' + json.tag + '>';
      return open + child + close;
    }

    if (json.node === 'text') {
      return json.text;
    }

    if (json.node === 'comment') {
      return '<!--' + json.text + '-->';
    }

    if (json.node === 'root') {
      return child;
    }
  };
})(this);


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/base64-js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js":
/*!**********************************************!*\
  !*** (webpack)/node_modules/buffer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/https-browserify/index.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/https-browserify/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(/*! http */ "http")
var url = __webpack_require__(/*! url */ "url")

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/ieee754/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/isarray/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! exports provided: osaJS, osaCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _osaLib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./osaLib */ "./bin/esm/osaLib.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "osaJS", function() { return _osaLib__WEBPACK_IMPORTED_MODULE_0__["osaJS"]; });

/* harmony import */ var _osaCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./osaCommands */ "./bin/esm/osaCommands.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "osaCommands", function() { return _osaCommands__WEBPACK_IMPORTED_MODULE_1__["osaCommands"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFhLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8sZUFBZSxDQUFDIn0=

/***/ }),

/***/ "./bin/esm/osaCalls.js":
/*!*****************************!*\
  !*** ./bin/esm/osaCalls.js ***!
  \*****************************/
/*! exports provided: OSXcommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSXcommands", function() { return OSXcommands; });
const OSXcommands = {
    osaGetMessage: function (updatedSince) {
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
    },
    osaSendMessage: function (appleIDs, message, attachments) {
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
        const buddies = appleIDs.map((a) => Messages.buddies.whose({ handle: a })[0]);
        Messages.send(message, { to: buddies[0] });
        if (attachments && attachments.length > 0) {
            attachments.forEach((a) => Messages.send(Path(a), { to: buddies[0] }));
        }
    },
    osaSendEmail: function (subject, address, content, attachments) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        const message = Mail.OutgoingMessage().make();
        message.subject = subject;
        message.content = content;
        message.visible = true;
        message.toRecipients.push(Mail.Recipient({ address: address }));
        if (attachments) {
            for (let i = 0; i < attachments.length; i++) {
                message.attachments.push(Mail.Attachment({ fileName: attachments[i] }));
            }
        }
        delay(5);
        message.send();
    },
    osaGetEmail: function (date) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        Mail.checkForNewMail();
        const result = [];
        Mail.accounts().forEach((acc) => {
            const inbox = acc.mailboxes().filter((mb) => mb.name().toLowerCase() === "inbox")[0];
            const newMsgs = inbox.messages().filter((m) => Date.parse(m.dateReceived()) >= Date.parse(date));
            result.push({
                mailboxes: acc.mailboxes().length,
                account: acc.name(),
                inbox: inbox.name(),
                numMsgTotal: inbox.messages().length,
                numMsgNew: newMsgs.length,
                dateSince: date,
                msgSinceDate: newMsgs.map((m) => { return { from: m.sender(), subject: m.subject(), received: m.dateReceived(), id: m.id() }; })
            });
        });
        const Term = Application("Terminal");
        Term.activate();
        return result;
    },
    osaSay: function (text) {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(3);
        app.say(text, { using: "Allison" });
        app.setVolume(0);
        return true;
    },
    osaLaunch: function (name) {
        const app = Application(name);
        app.includeStandardAdditions = true;
        app.activate();
        return true;
    },
    osaLaunchScript: (name) => {
        const app = Application(name);
        app.launch();
        app.run();
        return true;
    },
    osaQuit: (name) => {
        const app = Application(name);
        app.quit();
        return true;
    },
    osaCallFacetime: () => {
        const app = Application("System Events");
        const prc = app.applicationProcesses.whose({ name: "FaceTime" })[0];
        const win = prc.windows[0];
        const btn = win.buttons.whose({ name: "Call" })[0];
        btn.click();
        return true;
    },
    osaBrightness: (value) => {
        const Prefs = Application("System Preferences");
        Prefs.includeStandardAdditions = true;
        Prefs.activate();
        const pane = Prefs.panes.whose({ id: "com.apple.preference.displays" })[0];
        const anchor = pane.anchors.whose({ name: "displaysDisplayTab" })[0];
        Prefs.reveal(anchor);
        delay(1);
        const System = Application("System Events");
        const process = System.processes.whose({ name: "System Preferences" })[0];
        const window = process.windows[0];
        const tabgroup = window.tabGroups[0];
        const group = tabgroup.groups[0];
        const slider = group.sliders[0];
        slider.value = value;
        delay(1);
        Prefs.quit();
        return true;
    },
    osaVolume: (value) => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(parseInt(value));
        return true;
    },
    osaVolumeSettings: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        const settings = app.getVolumeSettings();
        return settings;
    },
    osaRestart: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.restart();
        return true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhQ2FsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3NhQ2FsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUN2QixhQUFhLEVBQUUsVUFBUyxZQUFpQjtRQUNyQyxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBSUQsY0FBYyxFQUFFLFVBQVMsUUFBaUIsRUFBRSxPQUFjLEVBQUUsV0FBb0I7UUFDNUUsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7UUFDekMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJGLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUU7WUFDckMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQztJQUlELFlBQVksRUFBRSxVQUFTLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBYyxFQUFFLFdB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

/***/ }),

/***/ "./bin/esm/osaCommands.js":
/*!********************************!*\
  !*** ./bin/esm/osaCommands.js ***!
  \********************************/
/*! exports provided: osaCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "osaCommands", function() { return osaCommands; });
/* harmony import */ var hsnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hsnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/index.js");
/* harmony import */ var _osaCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./osaCalls */ "./bin/esm/osaCalls.js");
/* harmony import */ var _osaLib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./osaLib */ "./bin/esm/osaLib.js");


const log = new hsnode__WEBPACK_IMPORTED_MODULE_0__["Log"]('osaCommands');


const exec = hsnode__WEBPACK_IMPORTED_MODULE_0__["cp"].exec;
const responseHandler = (cmd) => {
    return (result) => {
        if (result.logResult) {
            log.debug(() => `messages from executing ${cmd}: ${result.logResult}`);
        }
        if (result.stdout) {
            log.debug(() => `call ${cmd} returned with result ${result.stdout}, ${typeof result.stdout}`);
            return JSON.parse(result.stdout);
        }
        else {
            log.debug(() => `call ${cmd} returned without stdout`);
            return;
        }
    };
};
const errorHandler = (cmd) => {
    return (result) => {
        log.error(result.errLine);
        return result.errLine;
    };
};
const osaCommands = {
    sendMessage: (appleIDs, message, attachments) => {
        log.debug(() => `sending Message to ${appleIDs.join(', ')}, content '${message}', ${attachments ? attachments.length : 0} attachments`);
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaSendMessage, appleIDs, message, attachments)
            .then(responseHandler('osaSendMessage'))
            .catch(errorHandler('osaSendMessage ' + message));
    },
    sendEmail: (subject, to, content = '', attachments) => {
        log.debug(() => `sending email to '${to.join(', ')}' with subject '${subject}', content '${content}', ${attachments ? attachments.length : 0} attachments`);
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaSendEmail, subject, to[0], content, attachments)
            .then(responseHandler('osaSendEmail'))
            .catch(errorHandler('osaSendEmail ' + subject));
    },
    getEmail: (date) => {
        log.debug(() => `getting emails`);
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaGetEmail, date)
            .then(responseHandler('osaGetEmail'))
            .catch(errorHandler('osaGetEmail'));
    },
    facetime: (appleID) => {
        log.debug(() => 'starting facetime call with ' + appleID);
        return exec('open facetime://' + appleID)
            .catch(errorHandler('facetime ' + appleID));
    },
    say: (text) => {
        log.debug(() => 'saying \'' + text + '\'');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaSay, text)
            .then(responseHandler('osaSay'))
            .then(() => `I said '${text}'`)
            .catch(errorHandler('osaSay ' + text));
    },
    launch: (name) => {
        log.debug(() => 'launching \'' + name + '\'');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaLaunch, name)
            .then(responseHandler('osaLaunch'))
            .then(result => {
            log.debug(name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunch ' + name));
    },
    launchScript: (name) => {
        log.debug(() => 'launching \'' + name + '\'');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaLaunchScript, name)
            .then(responseHandler('osaLaunchScript'))
            .then(result => {
            log.debug(() => name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunchScript ' + name));
    },
    quit: (name) => {
        let i = name.lastIndexOf('/');
        if (i > 0) {
            name = name.substr(i + 1);
        }
        log.debug(() => 'quitting \'' + name + '\'');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaQuit, name)
            .then(responseHandler('osaQuit'))
            .then(result => {
            log.debug(() => name + ' running: ' + result);
            return result ? false : true;
        })
            .catch(errorHandler('osaQuit ' + name));
    },
    isRunning: (name) => {
        const slash = name.lastIndexOf('/');
        if (slash >= 0) {
            name = name.substring(slash + 1, name.lastIndexOf('.'));
        }
        log.debug(() => `checking if '${name}' is running`);
        return exec('ps -cx')
            .then(result => {
            log.debug(() => `isRunning result: ${result.stdout.indexOf(name)} ${result.stdout}`);
            return (result.stdout.indexOf(name) > 0);
        })
            .catch(errorHandler('isRunning ' + name));
    },
    setBrightness: (value) => {
        log.debug(() => 'setting brightness to ' + value);
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaBrightness, value)
            .then(responseHandler('osaBrightness'))
            .then(() => osaCommands.quit("System Preferences"))
            .catch(errorHandler('osaBrightness ' + value));
    },
    setVolume: (value) => {
        log.debug(() => 'setting volume to ' + value);
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaVolume, value)
            .then(responseHandler('osaVolume'))
            .catch(errorHandler('osaVolume ' + value));
    },
    getVolume: () => {
        log.debug(() => 'getting volume');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaVolumeSettings)
            .then(responseHandler('osaVolumeSettings'))
            .catch(errorHandler('osaVolumeSettings'));
    },
    restart: () => {
        log.debug(() => 'restarting...');
        return Object(_osaLib__WEBPACK_IMPORTED_MODULE_2__["osaJS"])(_osaCalls__WEBPACK_IMPORTED_MODULE_1__["OSXcommands"].osaRestart)
            .then(responseHandler('osaRestart'))
            .catch(errorHandler('osaRestart '));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhQ29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3NhQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFnQixRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFlLFFBQVEsQ0FBQztBQUFFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBUSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFhLFVBQVUsQ0FBQztBQUV4QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBT3JCLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7SUFDbkMsT0FBTyxDQUFDLE1BQXdDLEVBQVMsRUFBRTtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLDJCQUEyQixHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUMvRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDZixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLFFBQVEsR0FBRyx5QkFBeUIsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsUUFBUSxHQUFHLDBCQUEwQixDQUFDLENBQUM7WUFDckQsT0FBTztTQUNWO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBTUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsTUFBcUMsRUFBUyxFQUFFO1FBQ3BELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFTRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFPdkIsV0FBVyxFQUFFLENBQUMsUUFBaUIsRUFBRSxPQUFjLEVBQUUsV0FBcUIsRUFBZSxFQUFFO1FBQ25GLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsc0JBQXNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsT0FBTyxNQUFNLFdBQVcsQ0FBQSxDQUFDLENBQUEsV0FBVyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsSSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN2QyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVVELFNBQVMsRUFBRSxDQUFDLE9BQWMsRUFBRSxFQUFXLEVBQUUsT0FBTyxHQUFDLEVBQUUsRUFBRSxXQUFxQixFQUFlLEVBQUU7UUFDdkYsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE9BQU8sZUFBZSxPQUFPLE1BQU0sV0FBVyxDQUFBLENBQUMsQ0FBQSxXQUFXLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RKLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ3ZFLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDckMsS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBVUQsUUFBUSxFQUFFLENBQUMsSUFBUyxFQUFlLEVBQUU7UUFDakMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFPRCxRQUFRLEVBQUUsQ0FBQyxPQUFjLEVBQWUsRUFBRTtRQUN0QyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLDhCQUE4QixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQzthQUNwQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFPRCxHQUFHLEVBQUUsQ0FBQyxJQUFXLEVBQWUsRUFBRTtRQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7YUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQzthQUM5QixLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFPRCxNQUFNLEVBQUUsQ0FBQyxJQUFXLEVBQWUsRUFBRTtRQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLGNBQWMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7YUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDeEMsT0FBTyxNQUFNLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9ELFlBQVksRUFBRSxDQUFDLElBQVcsRUFBZSxFQUFFO1FBQ3ZDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsY0FBYyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzthQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLEdBQUcsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE9BQU8sTUFBTSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVFELElBQUksRUFBRSxDQUFDLElBQVcsRUFBZSxFQUFFO1FBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLEdBQUcsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE9BQU8sTUFBTSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFPRCxTQUFTLEVBQUUsQ0FBQyxJQUFXLEVBQWUsRUFBRTtRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDMUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxnQkFBZ0IsSUFBSSxjQUFjLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxxQkFBcUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDbkYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQzthQUNMLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9ELGFBQWEsRUFBRSxDQUFDLEtBQVksRUFBZSxFQUFFO1FBQ3pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEQsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7YUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ2xELEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBT0QsU0FBUyxFQUFFLENBQUMsS0FBWSxFQUFlLEVBQUU7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQzthQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQU9ELFNBQVMsRUFBRSxHQUFnQixFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7YUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFNRCxPQUFPLEVBQUUsR0FBZ0IsRUFBRTtRQUN2QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7YUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUMifQ==

/***/ }),

/***/ "./bin/esm/osaLib.js":
/*!***************************!*\
  !*** ./bin/esm/osaLib.js ***!
  \***************************/
/*! exports provided: extractLogs, osaJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractLogs", function() { return extractLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "osaJS", function() { return osaJS; });
/* harmony import */ var hsnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hsnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsnode/bin/esm/index.js");

const log = new hsnode__WEBPACK_IMPORTED_MODULE_0__["Log"]('osalib');
const exec = hsnode__WEBPACK_IMPORTED_MODULE_0__["cp"].exec;
const consoleLogPrefix = '<node-osa>';
const consoleLogSuffix = '</node-osa>';
function extractLogs(stderr) {
    const reg = new RegExp(consoleLogPrefix + ' ([\\s\\S]*?) ' + consoleLogSuffix, 'gm');
    const matches = stderr.match(reg);
    return matches ? matches.slice(1).join('\n') : null;
}
function osaJS(osaFunction, ...args) {
    const jsonArgs = args.map(a => `${JSON.stringify(a)}`).join(',');
    log.debug(() => `arguments to call: ${jsonArgs}`);
    const consoleLogPatch = `
    var old = console.log; 
    console.log = function () {
        Array.prototype.unshift.call(arguments, "${consoleLogPrefix}"); 
        Array.prototype.push.call(arguments, "${consoleLogSuffix}"); 
        old.apply(console, arguments); 
    }; 
    `.replace(/\n/g, '');
    log.debug(() => osaFunction.toString());
    const functionCallString = consoleLogPatch + 'JSON.stringify((' + osaFunction.toString() + ')(' + jsonArgs + '));';
    const escapedCall = functionCallString
        .replace(/ +/g, ' ')
        .replace(/'/g, "'\''")
        .split('\n')
        .map(l => l.trim());
    let executeString = "osascript -l JavaScript " + escapedCall.map(l => " -e '" + l + "'").join('');
    log.debug(executeString);
    return exec(executeString)
        .then((result) => {
        const logResult = extractLogs(result.stderr);
        return { stdout: result.stdout, logResult: logResult };
    })
        .catch((err) => {
        const match = err.toString().match(/(Error on line (\d+)): ([\s\S]*)/i);
        const errLine = !match ? '*?*' : `${match[3].trim()} on line ${match[2]}: '${escapedCall[parseInt(match[2]) - 1]}'`;
        throw { err, errLine };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29zYUxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFPLFFBQVEsQ0FBQztBQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBT3JCLE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO0FBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO0FBRXZDLE1BQU0sVUFBVSxXQUFXLENBQUUsTUFBYTtJQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sT0FBTyxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZELENBQUM7QUFNRCxNQUFNLFVBQVUsS0FBSyxDQUFFLFdBQWUsRUFBRSxHQUFHLElBQVc7SUFNbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEsc0JBQXNCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFHaEQsTUFBTSxlQUFlLEdBQUc7OzttREFHdUIsZ0JBQWdCO2dEQUNuQixnQkFBZ0I7OztLQUczRCxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFJcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0QyxNQUFNLGtCQUFrQixHQUFHLGVBQWUsR0FBRyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbkgsTUFBTSxXQUFXLEdBQUcsa0JBQWtCO1NBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBRXJCLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLGFBQWEsR0FBRywwQkFBMEIsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFbEcsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV6QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDckIsSUFBSSxDQUFDLENBQUMsTUFBcUMsRUFBRSxFQUFFO1FBQzVDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxTQUFTLEVBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtRQUNmLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUN4RSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pILE1BQU0sRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDIn0=

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["child_process"]; }());

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["crypto"]; }());

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["fs"]; }());

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["http"]; }());

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["path"]; }());

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["url"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc09zYWVzNi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzbm9kZS9iaW4vZXNtL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc25vZGUvYmluL2VzbS9jcFV0aWwuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc25vZGUvYmluL2VzbS9mc1V0aWwuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc25vZGUvYmluL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzbm9kZS9iaW4vZXNtL2xvZy5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzT3NhZXM2Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0F1dGhEaWdlc3QuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9DaGVja3N1bS5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0RhdGUuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9QYWNpbmcuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzT3NhZXM2Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9odG1sMmpzb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9odG1sMmpzb24vbGliL1B1cmUtSmF2YVNjcmlwdC1IVE1MNS1QYXJzZXIvaHRtbHBhcnNlci5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2h0bWwyanNvbi9zcmMvaHRtbDJqc29uLmpzIiwid2VicGFjazovL2hzT3NhZXM2Lyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8od2VicGFjaykvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8od2VicGFjaykvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8od2VicGFjaykvbm9kZV9tb2R1bGVzL2h0dHBzLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL2hzT3NhZXM2Lyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8od2VicGFjaykvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvLi9iaW4vZXNtL29zYUNhbGxzLmpzIiwid2VicGFjazovL2hzT3NhZXM2Ly4vYmluL2VzbS9vc2FDb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9oc09zYWVzNi8uL2Jpbi9lc20vb3NhTGliLmpzIiwid2VicGFjazovL2hzT3NhZXM2L2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovL2hzT3NhZXM2L2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vaHNPc2FlczYvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2hzT3NhZXM2L2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL2hzT3NhZXM2L2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2hzT3NhZXM2L2V4dGVybmFs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzFLRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsc0lBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGtJQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyxrSUFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNXZEQSxXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsVUFBVSxtQkFBTyxDQUFDLGdCQUFLOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtB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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vZXNtL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJztcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ05vZGVSZXF1ZXN0Jyk7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiLi9mc1V0aWxcIjtcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB7IFJlcXVlc3QgYXMgUmVxdWVzdFV0aWwgfSBmcm9tICdoc3V0aWwnO1xuY29uc3QgaHRtbDJqc29uID0gcmVxdWlyZSgnaHRtbDJqc29uJykuaHRtbDJqc29uO1xubG9nLm1lc3NhZ2VMZW5ndGggPSAxMjA7XG5jb25zdCBwcm90b2NvbCA9IHsgXCJodHRwOlwiOiBodHRwLCBcImh0dHBzOlwiOiBodHRwcyB9O1xuZXhwb3J0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0VXRpbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubG9nID0gbG9nO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwpIDogdXJsO1xuICAgIH1cbiAgICBhc3luYyByZWFkQ2FjaGVkKGZuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhID0gSlNPTi5wYXJzZShhd2FpdCBmcy5yZWFkVGV4dEZpbGUoYCR7Zm5hbWV9LW1ldGEuanNvbmApKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmbmFtZSArICcuYmluJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSBmb3VuZCBjYWNoZSBmb3IgJHtmbmFtZX0gYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy50cmFuc2llbnQoYGZvdW5kIGNhY2hlIGZvciAke2ZuYW1lfSBgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHJlc3BvbnNlOiBtZXRhLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgd3JpdGVDYWNoZWQoZm5hbWUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiByZXNwb25zZS5yZXNwb25zZS5zdGF0dXNNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR4dDogcmVzcG9uc2UucmVzcG9uc2UudHh0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVUZXh0RmlsZShgJHtmbmFtZX0tbWV0YS5qc29uYCwgSlNPTi5zdHJpbmdpZnkobWV0YSkpO1xuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGAke2ZuYW1lfS5iaW5gLCByZXNwb25zZS5kYXRhLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLndhcm4oYGVycm9yIHdyaXRpbmcgY2FjaGUgZm9yIGNvbnRlbnQgJHtyZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdfSBhbmQgZmlsZSAke2ZuYW1lfTogJHtlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGlzc3VlUmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgcHJvdCA9IHByb3RvY29sW29wdGlvbnMucHJvdG9jb2xdO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGByZXF1ZXN0aW5nICR7dGhpcy5sb2cuaW5zcGVjdChvcHRpb25zLCB7IGRlcHRoOiA0IH0pfWApO1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcHJvdC5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmNvZGluZyA9IHJlcXVlc3QuaXNUZXh0dWFsQ29udGVudChyZXMuaGVhZGVyc1snY29udGVudC10eXBlJ10pID8gJ3V0ZjgnIDogJ2JpbmFyeSc7XG4gICAgICAgICAgICAgICAgcmVzLnNldEVuY29kaW5nKGVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICByZXMudHh0ID0gZW5jb2RpbmcgPT09ICd1dGY4JztcbiAgICAgICAgICAgICAgICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IGRhdGEgKz0gY2h1bmspO1xuICAgICAgICAgICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZGF0YSwgcmVzcG9uc2U6IHJlcyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKCdlcnJvcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZGF0YTogJycsIGVycm9yOiBlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocG9zdERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcS53cml0ZShwb3N0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXEuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblJlcXVlc3QuZGVjb2RlcnMgPSB7XG4gICAgc3RyMmpzb246IChkYXRhKSA9PiB7IHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSB9LFxuICAgIGh0bWwyanNvbjogKGRhdGEpID0+IHsgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGh0bWwyanNvbihkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhORVFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1MwRkJTeXhEUVVGRE8wRkJRMjVETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJaU3hQUVVGUExFTkJRVU03UVVGQlJ5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEJRVU16UlN4UFFVRlBMRXRCUVVzc1JVRkJSU3hOUVVGbExGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRWxCUVVrc1RVRkJhMElzVFVGQlRTeERRVUZETzBGQlEzQkRMRTlCUVU4c1MwRkJTeXhOUVVGcFFpeFBRVUZQTEVOQlFVTTdRVUZEY2tNc1QwRkJUeXhGUVVGRkxFOUJRVThzU1VGQlNTeFhRVUZYTEVWQlFVVXNUVUZCVVN4UlFVRlJMRU5CUVVNN1FVRkxiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEJRVVZxUkN4SFFVRkhMRU5CUVVNc1lVRkJZU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVVY0UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhGUVVGRExFOUJRVThzUlVGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRE8wRkJSMmhFTEUxQlFVMHNUMEZCVHl4UFFVRlJMRk5CUVZFc1YwRkJWenRKUVVGNFF6czdVVUZQWXl4UlFVRkhMRWRCUVZFc1IwRkJSeXhEUVVGRE8wbEJiMFUzUWl4RFFVRkRPMGxCYkVWaExFMUJRVTBzUTBGQlF5eEhRVUZqTzFGQlF6TkNMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlZWTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGWk8xRkJRMjVETEVsQlFVazdXVUZEUVN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSU3hOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTndSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVYzdaMEpCUTFvc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxIRkNRVUZ4UWl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM2hITzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRzFDUVVGdFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTI1RU8xbEJRMFFzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlF5eERRVUZETzFOQlEzUkRPMUZCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3V1VGRFVDeFBRVUZQTEZOQlFWTXNRMEZCUXp0VFFVTndRanRKUVVOTUxFTkJRVU03U1VGRlV5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVZrc1JVRkJSU3hSUVVGcFFqdFJRVU4yUkN4SlFVRkpPMWxCUlVFc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03V1VGRGRrUXNUVUZCVFN4SlFVRkpMRWRCUVVjN1owSkJRMVFzVDBGQlR5eEZRVUZGTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVOeVJDeFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVk8yZENRVU40UXl4aFFVRmhMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTzJkQ1FVTTVReXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhPMkZCUXpkQ0xFTkJRVUU3V1VGRFJDeE5RVUZOTEVWQlFVVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhMUVVGTExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUzBGQlN5eE5RVUZOTEVWQlFWVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVRkRMRTlCUVUwc1EwRkJReXhGUVVGRk8xbEJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVTkJRVzFETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eGhRVUZoTEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRGVFa3NRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlpTeEZRVUZGTEZGQlFXRTdVVUZEZGtRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzSkNMRTFCUVUwc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRlRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVRSQ0xFVkJRVVVzVFVGQmVVTXNSVUZCUlN4RlFVRkZPMWxCUXpOR0xFbEJRVWtzU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTmtMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMR05CUVdNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVNc1MwRkJTeXhGUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNwRkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUXpGRExFMUJRVTBzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRE8yZENRVU14Uml4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTXhRaXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEZGQlFWRXNTMEZCU3l4TlFVRk5MRU5CUVVNN1owSkJRemxDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlEyaEVMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlR0dlFrRkRaaXhQUVVGUExFTkJRVU1zUlVGQlF5eEpRVUZKTEVWQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJReXhIUVVGSExFVkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5RTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkxMRVZCUVVVc1JVRkJSVHRuUWtGRGRFSXNUVUZCVFN4RFFVRkRMRVZCUVVNc1NVRkJTU3hGUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVZElMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZCUlN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJGQlFVVTdXVUZEY0VRc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE96dEJRWHBGWVN4blFrRkJVU3hIUVVGSE8wbEJRM0pDTEZGQlFWRXNSVUZCUnl4RFFVRkRMRWxCUVZjc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNUdFJRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdExRVUZETzBsQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1VVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlFUdExRVUZETEVOQlFVRXNRMEZCUXp0SlFVTnNSaXhUUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZYTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrN1VVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVRkZPMGxCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3VVVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0TFFVRkZMRU5CUVVFc1EwRkJRenREUVVONlJpeERRVUZESW4wPSIsImltcG9ydCAqIGFzIGNwIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuZXhwb3J0IGNvbnN0IGNoaWxkX3Byb2Nlc3MgPSB7XG4gICAgZXhlYzogKGNvbW1hbmQsIG9wdGlvbnMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGNwLmV4ZWMoY29tbWFuZCwgb3B0aW9ucywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKHsgc3Rkb3V0OiBzdGRvdXQsIHN0ZGVycjogc3RkZXJyIH0pO1xuICAgIH0pKVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzQlZkR2xzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMk53VlhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZuUWtFc1QwRkJUeXhMUVVGTExFVkJRVVVzVFVGQlR5eGxRVUZsTEVOQlFVTTdRVUZGY2tNc1RVRkJUU3hEUVVGRExFMUJRVTBzWVVGQllTeEhRVUZITzBsQllYcENMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRV01zUlVGQlJTeFBRVUZaTEVWQlFXOURMRVZCUVVVc1EwRkRja1VzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnhSQ3hGUVVGRkxFMUJRWFZDTEVWQlFVVXNSVUZCUlN4RFFVTXpSaXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGVExFVkJRVVVzVFVGQllTeEZRVUZGTEUxQlFXRXNSVUZCUlN4RlFVRkZPMUZCUTJ4RkxFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUXl4TlFVRk5MRVZCUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlF5eE5RVUZOTEVWQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTI1RkxFTkJRVU1zUTBGQlF5eERRVU5NTzBOQlExSXNRMEZCUXlKOSIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5hc3luYyBmdW5jdGlvbiBzdGF0KHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gYXdhaXQgcmVhbFBhdGgodGhlUGF0aCk7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMuc3RhdChwLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIHN0YXRzIGZvciAke3RoZVBhdGh9OiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGxzdGF0KHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gcGF0aC5ub3JtYWxpemUodGhlUGF0aCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGZzLmxzdGF0KHAsIChlcnIsIHN0YXRzKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoc3RhdHMpKSk7XG59XG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICBjb25zdCBtc2cgPSBgKioqIGVycm9yIGluIGZzVXRpbDogJHtlcnJ9LCBzdGFjazpcXG4ke2Vyci5zdGFja31gO1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlYWxQYXRoKHRoZVBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFscGF0aCh0aGVQYXRoLCAoZXJyLCByZXNvbHZlZFBhdGgpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXNvbHZlZFBhdGgpKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGhFeGlzdHModGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHN0YXQodGhlUGF0aCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVTaXplKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLnNpemU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNGaWxlKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLmlzRmlsZSgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzRGlyZWN0b3J5KHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLmlzRGlyZWN0b3J5KCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNMaW5rKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGxzdGF0KHRoZVBhdGgpKS5pc1N5bWJvbGljTGluaygpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1rZGlycyh0aGVQYXRoKSB7XG4gICAgY29uc3QgcCA9IHBhdGgubm9ybWFsaXplKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB0aGVQYXRoKSk7XG4gICAgbGV0IGRpcnMgPSBwLnNwbGl0KCcvJyk7XG4gICAgZGlycyA9IGRpcnMubWFwKChkaXIsIGkpID0+IGRpcnMuc2xpY2UoMCwgaSArIDEpLmpvaW4oJy8nKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IGRpcnNbaV07XG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGlzRGlyZWN0b3J5KGRpcik7XG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKGRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgIT09ICdFRVhJU1QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGVycm9yIGluIG1rZGlyczogJHtlLmNvZGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGBta2RpciBmYWlsZWQgZm9yICR7ZGlyfTogJHtwfVxcbiR7ZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcDtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkRGlyKHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gYXdhaXQgcmVhbFBhdGgodGhlUGF0aCk7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMucmVhZGRpcihwLCAoZXJyLCBmaWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsZXMucGF0aCA9IHA7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVhZEZpbGUodGhlUGF0aCwgaXNUZXh0ID0gdHJ1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWRGaWxlKHRoZVBhdGgsIGlzVGV4dCA/ICd1dGY4JyA6ICdiaW5hcnknLCAoZXJyLCBkYXRhKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoZGF0YSkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZFRleHRGaWxlKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVhZEZpbGUodGhlUGF0aCwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEpzb25GaWxlKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVhZEZpbGUodGhlUGF0aCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCBpc1RleHQgPSB0cnVlKSB7XG4gICAgdmFyIGVuY29kaW5nID0gaXNUZXh0ID8gJ3V0ZjgnIDogJ2JpbmFyeSc7XG4gICAgYXdhaXQgbWtkaXJzKHBhdGguZGlybmFtZSh0aGVQYXRoKSk7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMud3JpdGVGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIGVuY29kaW5nLCAoZXJyKSA9PiBlcnIgPyByZWplY3QoYG1rZGlycyBmYWlsZWQgaW4gd3JpdGVGaWxlIGZvciAnJHt0aGVQYXRofSc6ICR7ZXJyfWApIDogcmVzb2x2ZSh0aGVQYXRoKSk7XG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVTdHJlYW0odGhlUGF0aCwgY29udGVudCkge1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSh0aGVQYXRoLCB7IGZsYWdzOiAndycsIG1vZGU6IDBvNjY2IH0pO1xuICAgICAgICBzLm9uKCdlcnJvcicsIChzcmMpID0+IHJlamVjdChgd3JpdGVTdHJlYW0gZXJyb3IgJyR7c3JjfScgZm9yIHBhdGggJyR7dGhlUGF0aH0nYCkpO1xuICAgICAgICBzLndyaXRlKGNvbnRlbnQsICdiaW5hcnknLCAoKSA9PiByZXNvbHZlKHRoZVBhdGgpKTtcbiAgICAgICAgcy5lbmQoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZVRleHRGaWxlKHRoZVBhdGgsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gYXdhaXQgd3JpdGVGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIHRydWUpXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVKc29uRmlsZSh0aGVQYXRoLCBvYmopIHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG9iailcbiAgICAgICAgLnRoZW4oSlNPTi5zdHJpbmdpZnkpXG4gICAgICAgIC50aGVuKGFzeW5jIChkYXRhKSA9PiBhd2FpdCB3cml0ZVRleHRGaWxlKHRoZVBhdGgsIGRhdGEpKVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGVuZEZpbGUodGhlUGF0aCwgY29udGVudCwgaXNUZXh0ID0gdHJ1ZSkge1xuICAgIHZhciBlbmNvZGluZyA9IGlzVGV4dCA/ICd1dGY4JyA6IHsgZW5jb2Rpbmc6IG51bGwgfTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZnMuYXBwZW5kRmlsZSh0aGVQYXRoLCBjb250ZW50LCBlbmNvZGluZywgKGVycikgPT4gZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHRoZVBhdGgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yKGUpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kRmlsZVN5bmModGhlUGF0aCwgY29udGVudCwgaXNUZXh0ID0gdHJ1ZSkge1xuICAgIHZhciBlbmNvZGluZyA9IGlzVGV4dCA/ICd1dGY4JyA6IHsgZW5jb2Rpbmc6IG51bGwgfTtcbiAgICB0cnkge1xuICAgICAgICBmcy5hcHBlbmRGaWxlU3luYyh0aGVQYXRoLCBjb250ZW50LCBlbmNvZGluZyk7XG4gICAgICAgIHJldHVybiB0aGVQYXRoO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvcihlKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZSh0aGVQYXRoKSB7XG4gICAgY29uc3QgZGlyID0gYXdhaXQgaXNEaXJlY3RvcnkodGhlUGF0aCk7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZGlyID8gZnMucm1kaXIodGhlUGF0aCwgKGUpID0+IChlID8gcmVqZWN0KGUpIDogcmVzb2x2ZSh0aGVQYXRoKSkpXG4gICAgICAgICAgICA6IGZzLnVubGluayh0aGVQYXRoLCAoZSkgPT4gKGUgPyByZWplY3QoZSkgOiByZXNvbHZlKHRoZVBhdGgpKSk7XG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQWxsKHRoZVBhdGgpIHtcbiAgICBjb25zdCByZW1vdmVkID0gW107XG4gICAgY29uc3QgZGlyID0gYXdhaXQgaXNEaXJlY3RvcnkodGhlUGF0aCk7XG4gICAgaWYgKGRpcikge1xuICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgcmVhZERpcih0aGVQYXRoKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwobGlzdC5tYXAoYXN5bmMgKGkpID0+IHJlbW92ZWQucHVzaCguLi5hd2FpdCByZW1vdmVBbGwoYCR7dGhlUGF0aH0vJHtpfWApKSkpO1xuICAgIH1cbiAgICByZW1vdmVkLnB1c2goYXdhaXQgcmVtb3ZlKHRoZVBhdGgpKTtcbiAgICByZXR1cm4gcmVtb3ZlZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuTlZkR2xzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlp6VlhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZuUWtFc1QwRkJUeXhMUVVGTExFVkJRVVVzVFVGQlpTeEpRVUZKTEVOQlFVTTdRVUZEYkVNc1QwRkJUeXhMUVVGTExFbEJRVWtzVFVGQllTeE5RVUZOTEVOQlFVTTdRVUU0UW5CRExFdEJRVXNzVlVGQlZTeEpRVUZKTEVOQlFVTXNUMEZCWXp0SlFVTTVRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOc1F5eFBRVUZQTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1MwRkJZeXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNTVUZCUnl4SFFVRkhMRVZCUVVVN1owSkJRMG9zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl3eVFrRkJNa0lzVDBGQlR5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRekZFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVObU8ybENRVU5KTzJkQ1FVRkZMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVUZGTzFGQlF6VkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEVUN4RFFVRkRPMEZCVDBRc1MwRkJTeXhWUVVGVkxFdEJRVXNzUTBGQlF5eFBRVUZqTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRja01zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeERRVU5vUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4TFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkROVVVzUTBGQlF6dEJRVU5JTEVOQlFVTTdRVUZGUkN4VFFVRlRMRXRCUVVzc1EwRkJReXhIUVVGUE8wbEJRMnhDTEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEdGQlFXRXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMmhGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVrSXNRMEZCUXp0QlFWVkVMRTFCUVUwc1ZVRkJWU3hSUVVGUkxFTkJRVU1zVDBGQll6dEpRVU4wUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQk1rSXNSVUZCUlN4TlFVRnpRaXhGUVVGRkxFVkJRVVU3VVVGRE1VVXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNXVUZCYlVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJSU3hEUVVGRE8wbEJRMmhITEVOQlFVTXNRMEZCUXp0VFFVTkVMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU5zUWl4RFFVRkRPMEZCVDBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeFZRVUZWTEVOQlFVTXNUMEZCWXp0SlFVTXpReXhKUVVGSk8xRkJRMEVzVFVGQlRTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmp0SlFVRkRMRTlCUVUwc1EwRkJReXhGUVVGRk8xRkJRMUFzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1FVRkRUQ3hEUVVGRE8wRkJUMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4UlFVRlJMRU5CUVVNc1QwRkJZenRKUVVONlF5eEpRVUZKTzFGQlEwRXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMHRCUTNKRE8wbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdVVUZEVUN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMkk3UVVGRFRDeERRVUZETzBGQlQwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hOUVVGTkxFTkJRVU1zVDBGQll6dEpRVU4yUXl4SlFVRkpPMUZCUTBFc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UzBGRGVrTTdTVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRSUVVOUUxFOUJRVThzUzBGQlN5eERRVUZETzB0QlEyaENPMEZCUTB3c1EwRkJRenRCUVU5RUxFMUJRVTBzUTBGQlF5eExRVUZMTEZWQlFWVXNWMEZCVnl4RFFVRkRMRTlCUVdNN1NVRkROVU1zU1VGQlNUdFJRVU5CTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMHRCUXpsRE8wbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdVVUZEVUN4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FqdEJRVU5NTEVOQlFVTTdRVUZQUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhWUVVGVkxFMUJRVTBzUTBGQlF5eFBRVUZqTzBsQlEzWkRMRWxCUVVrN1VVRkRRU3hQUVVGUExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dExRVU5zUkR0SlFVRkRMRTlCUVUwc1EwRkJReXhGUVVGRk8xRkJRMUFzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1FVRkRUQ3hEUVVGRE8wRkJWVVFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4TlFVRk5MRU5CUVVNc1QwRkJZenRKUVVOMlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGT1VRc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVWNFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTTVRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVGRkxFbEJRVWs3WjBKQlEyWXNUVUZCVFN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTm9RenRaUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVTdiMEpCUTNKQ0xFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVNMVF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5xUWl4TlFVRk5MRzlDUVVGdlFpeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8ybENRVU12UXp0aFFVTktPMU5CUVVNN1MwRkRURHRKUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEySXNRMEZCUXp0QlFVOUVMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzVDBGQlR5eERRVUZETEU5QlFXTTdTVUZEZUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzVFVGQlRTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRiRU1zVDBGQlR5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJlVUlzUlVGQlJTeE5RVUZ6UWl4RlFVRkZMRVZCUVVVN1VVRkRNMFVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGUExFVkJRVVVzUzBGQlV5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1NVRkJSeXhIUVVGSExFVkJRVVU3WjBKQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRVVU3YVVKQlEyNUNPMmRDUVVORUxFdEJRVXNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVObUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0aFFVTnNRanRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMU5CUTBRc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeENMRU5CUVVNN1FVRlRSQ3hOUVVGTkxGVkJRVlVzVVVGQlVTeERRVUZETEU5QlFXTXNSVUZCUlN4TlFVRk5MRWRCUVVNc1NVRkJTVHRKUVVOdVJDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJkMElzUlVGQlJTeE5RVUZ6UWl4RlFVRkZMRVZCUVVVN1VVRkRka1VzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVThzUlVGQlJTeEpRVUZSTEVWQlFVVXNSVUZCUlN4RFFVTTFSQ3hIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROME1zUTBGQlF5eERRVUZETzFOQlEwVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMnhDTEVOQlFVTTdRVUZQUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhWUVVGVkxGbEJRVmtzUTBGQlF5eFBRVUZqTzBsQlEyaEVMRWxCUVVrN1VVRkJSU3hQUVVGUExFMUJRVTBzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVGRk8wbEJRekZETEU5QlFVMHNSMEZCUnl4RlFVRkZPMUZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVVTdRVUZET1VJc1EwRkJRenRCUVU5RUxFMUJRVTBzUTBGQlF5eExRVUZMTEZWQlFWVXNXVUZCV1N4RFFVRkRMRTlCUVdNN1NVRkROME1zU1VGQlNUdFJRVU5CTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTXpReXhQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dExRVU01UkR0SlFVTkVMRTlCUVUwc1IwRkJSeXhGUVVGRk8xRkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVVN1FVRkRPVUlzUTBGQlF6dEJRVk5FTEUxQlFVMHNRMEZCUXl4TFFVRkxMRlZCUVZVc1UwRkJVeXhEUVVGRExFOUJRV01zUlVGQlJTeFBRVUZqTEVWQlFVVXNVMEZCWlN4SlFVRkpPMGxCUXk5RkxFbEJRVWtzVVVGQlVTeEhRVUZQTEUxQlFVMHNRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZETjBNc1RVRkJUU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0JETEU5QlFVOHNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTjZReXhGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUjBGQlR5eEZRVUZGTEVWQlFVVXNRMEZEYWtRc1IwRkJSeXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNiVU5CUVcxRExFOUJRVThzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXZSaXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5RTEVOQlFVTTdRVUZSUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhWUVVGVkxGZEJRVmNzUTBGQlF5eFBRVUZqTEVWQlFVVXNUMEZCWXp0SlFVTTFSQ3hQUVVGUExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVU3VVVGRGVrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRExFdEJRVXNzUlVGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRExFTkJRVU03VVVGRGFrVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4bFFVRmxMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4yUml4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYmtRc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRVQ3hEUVVGRE8wRkJUMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4aFFVRmhMRU5CUVVNc1QwRkJZeXhGUVVGRkxFOUJRV003U1VGRGFrVXNUMEZCVHl4TlFVRk5MRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXp0VFFVTXhReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVZGRUxFMUJRVTBzUTBGQlF5eExRVUZMTEZWQlFWVXNZVUZCWVN4RFFVRkRMRTlCUVdNc1JVRkJSU3hIUVVGUE8wbEJRM1pFTEU5QlFVOHNUVUZCVFN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFRRVU51UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU53UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRExFbEJRVWtzUlVGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4aFFVRmhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEyNUVMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU5zUWl4RFFVRkRPMEZCVTBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeFZRVUZWTEVOQlFVTXNUMEZCWXl4RlFVRkZMRTlCUVdNc1JVRkJSU3hUUVVGbExFbEJRVWs3U1VGRGFFWXNTVUZCU1N4UlFVRlJMRWRCUVU4c1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlF5eERRVUZETzBsQlEzSkVMRWxCUVVrN1VVRkJSU3hQUVVGUExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVU3V1VGREwwTXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RFFVRkRMRWRCUVU4c1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhITEVOQlFVTXNRMEZCUXl4RFFVRkJPMHRCUVVNN1NVRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdFJRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGRk8wbEJRVUVzUTBGQlF6dEJRVU12UWl4RFFVRkRPMEZCVTBRc1RVRkJUU3hWUVVGVkxHTkJRV01zUTBGQlF5eFBRVUZqTEVWQlFVVXNUMEZCWXl4RlFVRkZMRk5CUVdVc1NVRkJTVHRKUVVNNVJTeEpRVUZKTEZGQlFWRXNSMEZCVHl4TlFVRk5MRU5CUVVFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRExFTkJRVU03U1VGRGNrUXNTVUZCU1R0UlFVTkJMRVZCUVVVc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNNVF5eFBRVUZQTEU5QlFVOHNRMEZCUXp0TFFVTnNRanRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRVVU3U1VGQlFTeERRVUZETzBGQlF6ZENMRU5CUVVNN1FVRlBSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eFZRVUZWTEUxQlFVMHNRMEZCUXl4UFFVRmpPMGxCUTNaRExFMUJRVTBzUjBGQlJ5eEhRVUZYTEUxQlFVMHNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRMnhFTEU5QlFVOHNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0UlFVTjBReXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETjBVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNpeERRVUZETzBGQlQwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hUUVVGVExFTkJRVU1zVDBGQll6dEpRVU14UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGJrSXNUVUZCVFN4SFFVRkhMRWRCUVZjc1RVRkJUU3hYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETDBNc1NVRkJTU3hIUVVGSExFVkJRVVU3VVVGRFRDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU53UXl4TlFVRk5MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVNc1EwRkJReXhGUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hUUVVGVExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU12Ump0SlFVTkVMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1F5eFBRVUZQTEU5QlFVOHNRMEZCUXp0QlFVTnVRaXhEUVVGREluMD0iLCJleHBvcnQgeyBjaGlsZF9wcm9jZXNzIGFzIGNwIH0gZnJvbSBcIi4vY3BVdGlsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2cuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1JlcXVlc3QuanNcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCIuL2ZzVXRpbC5qc1wiO1xuZXhwb3J0IHsgZnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eEZRVUZGTEdGQlFXRXNTVUZCU1N4RlFVRkZMRVZCUVVVc1RVRkJUeXhoUVVGaExFTkJRVU03UVVGRGJrUXNZMEZCY1VNc1ZVRkJWU3hEUVVGRE8wRkJRMmhFTEdOQlFYRkRMR05CUVdNc1EwRkJRenRCUVVWd1JDeFBRVUZQTEV0QlFVc3NSVUZCUlN4TlFVRjFRaXhoUVVGaExFTkJRVU03UVVGRGJrUXNUMEZCVHl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGREluMD0iLCJpbXBvcnQgeyBMb2cgYXMgTG9nVXRpbCB9IGZyb20gJ2hzdXRpbCc7XG5pbXBvcnQgeyBkYXRlIH0gZnJvbSAnaHN1dGlsJztcbmltcG9ydCB7IHBhdGhFeGlzdHMgfSBmcm9tICcuL2ZzVXRpbCc7XG5pbXBvcnQgeyBhcHBlbmRGaWxlU3luYyB9IGZyb20gJy4vZnNVdGlsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuY29uc3QgQ09MT1IgPSB7XG4gICAgY2xlYXI6ICdcXHgxYlswbScsXG4gICAgYm9sZDogJ1xceDFiWzFtJyxcbiAgICBkaW06ICdcXHgxYlsybScsXG4gICAgdW5kZXJzY29yZTogJ1xceDFiWzRtJyxcbiAgICBibGluazogJ1xceDFiWzVtJyxcbiAgICByZXZlcnNlOiAnXFx4MWJbN20nLFxuICAgIGhpZGRlbjogJ1xceDFiWzhtJyxcbiAgICBibGFjazogJ1xceDFiWzMwbScsXG4gICAgcmVkOiAnXFx4MWJbMzFtJyxcbiAgICBncmVlbjogJ1xceDFiWzMybScsXG4gICAgeWVsbG93OiAnXFx4MWJbMzNtJyxcbiAgICBibHVlOiAnXFx4MWJbMzRtJyxcbiAgICBtYWdlbnRhOiAnXFx4MWJbMzVtJyxcbiAgICBjeWFuOiAnXFx4MWJbMzZtJyxcbiAgICB3aGl0ZTogJ1xceDFiWzM3bScsXG4gICAgZGFya3JlZDogJ1xceDFiWzMxbScsXG4gICAgZGFya2dyZWVuOiAnXFx4MWJbMzJtJyxcbiAgICBkYXJreWVsbG93OiAnXFx4MWJbMzNtJyxcbiAgICBkYXJrYmx1ZTogJ1xceDFiWzM0bScsXG4gICAgZGFya21hZ2VudGE6ICdcXHgxYlszNW0nLFxuICAgIGRhcmtjeWFuOiAnXFx4MWJbMzZtJyxcbiAgICBncmF5OiAnXFx4MWJbMzdtJyxcbiAgICBiZ0JsYWNrOiAnXFx4MWJbNDBtJyxcbiAgICBiZ1JlZDogJ1xceDFiWzQxbScsXG4gICAgYmdHcmVlbjogJ1xceDFiWzQybScsXG4gICAgYmdZZWxsb3c6ICdcXHgxYls0M20nLFxuICAgIGJnQmx1ZTogJ1xceDFiWzQ0bScsXG4gICAgYmdNYWdlbnRhOiAnXFx4MWJbNDVtJyxcbiAgICBiZ0N5YW46ICdcXHgxYls0Nm0nLFxuICAgIGJnV2hpdGU6ICdcXHgxYls0N20nXG59O1xuZXhwb3J0IGNsYXNzIExvZyBleHRlbmRzIExvZ1V0aWwge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCkgeyBzdXBlcihwcmVmaXgpOyB9XG4gICAgdHJhbnNpZW50KG1zZykge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXQoTG9nVXRpbC5JTkZPLCBtc2cucGFkRW5kKHRoaXMubWVzc2FnZUxlbmd0aCB8fCA4MCwgJyAnKSArICcgXFxyJywgeyBjb2xvcjogWydncmVlbiddIH0pO1xuICAgIH1cbiAgICBvdXRwdXQoY29sb3IsIGhlYWRlciwgbGluZSkge1xuICAgICAgICBjb25zdCBjID0gY29sb3IubWFwKGMgPT4gQ09MT1JbY10pLmpvaW4oJycpO1xuICAgICAgICBjb25zdCBtc2cgPSBgJHtjfSR7aGVhZGVyfSR7Q09MT1JbJ2NsZWFyJ119ICR7bGluZX1gO1xuICAgICAgICBpZiAodGhpcy5Mb2dGaWxlKSB7XG4gICAgICAgICAgICBhcHBlbmRGaWxlU3luYyhkYXRlKHRoaXMuTG9nRmlsZSksIGAke2hlYWRlcn0gJHtsaW5lfVxcbmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLnNsaWNlKC0xKSA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGxvZ0ZpbGUoZmlsZVBhdHRlcm4pIHtcbiAgICAgICAgaWYgKGZpbGVQYXR0ZXJuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmluZm8oXCJkaXNhYmxpbmcgbG9nZmlsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9nRmlsZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZGF0ZSh0aGlzLkxvZ0ZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpbGVQYXR0ZXJuLmluZGV4T2YoJy8nKSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHBhdGgucGFyc2UoZmlsZVBhdHRlcm4pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCBwYXRoRXhpc3RzKHBhcnRzLmRpcik7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm4oYHBhdGggJyR7cGFydHMuZGlyfScgZG9lc24ndCBleGlzdHM7IGxvZ2ZpbGUgZGlzYWJsZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IGZpbGVQYXR0ZXJuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm8oXCJub3cgbG9nZ2luZyB0byBmaWxlIFwiICsgZGF0ZShmaWxlUGF0dGVybikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2dGaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgY2hlY2tpbmcgcGF0aCAke3BhcnRzLmRpcn07IGxvZ2ZpbGUgZGlzYWJsZWRgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2dGaWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpbGVQYXR0ZXJuID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5Mb2dGaWxlID0gJ2xvZy0lWVlZWS0lTU0tJURELnR4dCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSBmaWxlUGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZm8odGhpcy5Mb2dGaWxlID8gYG5vdyBsb2dnaW5nIHRvIGZpbGUgJHtkYXRlKHRoaXMuTG9nRmlsZSl9YCA6ICdsb2dmaWxlIGRpc2JhbGVkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzID8gQ09MT1JbY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF1dIDogJyc7XG4gICAgICAgIHJldHVybiBbYCR7Y3VyckluZGVudH0ke2luZGVudH0ke2NvbG9yfWAsIGNvbG9ycyA/IENPTE9SLmNsZWFyIDogJycsICdcXG4nLCBjdXJySW5kZW50XTtcbiAgICB9XG59XG5Mb2cubG9nID0gbmV3IExvZygnJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMnh2Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRlRRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEU5QlFVOHNSVUZCUlN4TlFVRlJMRkZCUVZFc1EwRkJRenRCUVVNeFF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVd0Q0xGRkJRVkVzUTBGQlF6dEJRVU14UXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVmtzVlVGQlZTeERRVUZETzBGQlF6VkRMRTlCUVU4c1JVRkJSU3hqUVVGakxFVkJRVVVzVFVGQlVTeFZRVUZWTEVOQlFVTTdRVUZETlVNc1QwRkJVU3hKUVVGSkxFMUJRWEZDTEUxQlFVMHNRMEZCUXp0QlFVdDRReXhOUVVGTkxFdEJRVXNzUjBGQlJ6dEpRVU5XTEV0QlFVc3NSVUZCVHl4VFFVRlRPMGxCUlhKQ0xFbEJRVWtzUlVGQlVTeFRRVUZUTzBsQlEzSkNMRWRCUVVjc1JVRkJVeXhUUVVGVE8wbEJRM0pDTEZWQlFWVXNSVUZCUlN4VFFVRlRPMGxCUTNKQ0xFdEJRVXNzUlVGQlR5eFRRVUZUTzBsQlEzSkNMRTlCUVU4c1JVRkJTeXhUUVVGVE8wbEJRM0pDTEUxQlFVMHNSVUZCVFN4VFFVRlRPMGxCUlhKQ0xFdEJRVXNzUlVGQlR5eFZRVUZWTzBsQlEzUkNMRWRCUVVjc1JVRkJVeXhWUVVGVk8wbEJRM1JDTEV0QlFVc3NSVUZCVHl4VlFVRlZPMGxCUTNSQ0xFMUJRVTBzUlVGQlRTeFZRVUZWTzBsQlEzUkNMRWxCUVVrc1JVRkJVU3hWUVVGVk8wbEJRM1JDTEU5QlFVOHNSVUZCU3l4VlFVRlZPMGxCUTNSQ0xFbEJRVWtzUlVGQlVTeFZRVUZWTzBsQlEzUkNMRXRCUVVzc1JVRkJUeXhWUVVGVk8wbEJSWFJDTEU5QlFVOHNSVUZCU3l4VlFVRlZPMGxCUTNSQ0xGTkJRVk1zUlVGQlJ5eFZRVUZWTzBsQlEzUkNMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRM1JDTEZGQlFWRXNSVUZCU1N4VlFVRlZPMGxCUTNSQ0xGZEJRVmNzUlVGQlF5eFZRVUZWTzBsQlEzUkNMRkZCUVZFc1JVRkJTU3hWUVVGVk8wbEJRM1JDTEVsQlFVa3NSVUZCVVN4VlFVRlZPMGxCUlhSQ0xFOUJRVThzUlVGQlN5eFZRVUZWTzBsQlEzUkNMRXRCUVVzc1JVRkJUeXhWUVVGVk8wbEJRM1JDTEU5QlFVOHNSVUZCU3l4VlFVRlZPMGxCUTNSQ0xGRkJRVkVzUlVGQlNTeFZRVUZWTzBsQlEzUkNMRTFCUVUwc1JVRkJUU3hWUVVGVk8wbEJRM1JDTEZOQlFWTXNSVUZCUnl4VlFVRlZPMGxCUTNSQ0xFMUJRVTBzUlVGQlRTeFZRVUZWTzBsQlEzUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wTkJRM3BDTEVOQlFVTTdRVUZSUml4TlFVRk5MRTlCUVU4c1IwRkJTU3hUUVVGUkxFOUJRVTg3U1VGTk5VSXNXVUZCV1N4TlFVRmhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWVjBReXhUUVVGVExFTkJRVU1zUjBGQlR6dFJRVU53UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVsQlFVa3NSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40Unl4RFFVRkRPMGxCUzFNc1RVRkJUU3hEUVVGRExFdEJRV01zUlVGQlJTeE5RVUZoTEVWQlFVVXNTVUZCVnp0UlFVTjJSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlFVVXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEyaEdMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRWxCUVVrc1JVRkJSVHRaUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRVVU3WVVGRGNFUTdXVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlFVVTdTVUZET1VJc1EwRkJRenRKUVdOTkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCYlVJN1VVRkRjRU1zU1VGQlNTeFhRVUZYTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUTNSQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFpRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03VTBGRGRrSTdZVUZCVFN4SlFVRkpMRmRCUVZjc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGJFTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGSExGTkJRVk1zUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8yRkJRVTBzU1VGQlNTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU53UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUTNSRExFbEJRVWs3WjBKQlEwRXNUVUZCVFN4TlFVRk5MRWRCUVZjc1RVRkJUU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOdVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMjlDUVVOVUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMjlDUVVONlFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1MwRkJTeXhEUVVGRExFZEJRVWNzYjBOQlFXOURMRU5CUVVNc1EwRkJRenRwUWtGRGNrVTdjVUpCUVUwN2IwSkJRMGdzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4WFFVRlhMRU5CUVVNN2IwSkJRek5DTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzcEVPMmRDUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0aFFVTjJRanRaUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzJkQ1FVTjZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8yZENRVU16UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03WVVGRGRrSTdVMEZEU2p0aFFVRk5MRWxCUVVrc1YwRkJWeXhMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU16UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMU5CUXpGRE8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkRMRmRCUVZjc1EwRkJRenRUUVVNMVFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlFTeERRVUZETEVOQlFVTXNkVUpCUVhWQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRSUVVNeFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZUTEdGQlFXRXNRMEZCUXl4TlFVRmhMRVZCUVVVc1MwRkJXU3hGUVVGRkxGVkJRV2xDTEVWQlFVVXNUVUZCWlR0UlFVTnVSaXhOUVVGTkxFdEJRVXNzUjBGQlNTeE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEYWtVc1QwRkJUeXhEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRNVVlzUTBGQlF6czdRVUU1UldFc1QwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRJbjA9IiwiZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZWZ5KGFycmF5LCBrZXkpIHtcbiAgICBjb25zdCB1bmlxdWUgPSB7fTtcbiAgICByZXR1cm4ga2V5ID8gYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlW3RbJycgKyBrZXldXSA/IGZhbHNlIDogKHVuaXF1ZVt0WycnICsga2V5XV0gPSB0cnVlKSlcbiAgICAgICAgOiBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbJycgKyB0XSA/IGZhbHNlIDogKHVuaXF1ZVsnJyArIHRdID0gdHJ1ZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhKeVlYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlFYSnlZWGt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlowTkJMRTFCUVUwc1ZVRkJWU3hSUVVGUkxFTkJRVWtzUzBGQlV5eEZRVUZGTEVkQlFXdENPMGxCUTNKRUxFMUJRVTBzVFVGQlRTeEhRVUUwUWl4RlFVRkZMRU5CUVVNN1NVRkRNME1zVDBGQlR5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wVXNRMEZCUXlKOSIsImV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5QmRYUm9MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVkQkxFMUJRVTBzVDBGQlowSXNTVUZCU1R0SlFVbDBRaXhaUVVGWkxGRkJRV1VzUlVGQlJTeFJRVUZsTzFGQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1EwRkhTaUo5IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdEJhc2ljJyk7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9BdXRoJztcbmV4cG9ydCBjbGFzcyBBdXRoQmFzaWMgZXh0ZW5kcyBBdXRoIHtcbiAgICB0ZXN0QXV0aChvcHRpb25zLCBkYXRhLCByZXNwb25zZSkge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkIHd3dy1hdXRoZW50aWNhdGUgcmVxdWVzdCBmb3IgJHtvcHRpb25zLmhvc3R9YCk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBfYnRvYShgJHt0aGlzLnVzZXJuYW1lfToke3RoaXMucGFzc3dvcmR9YCk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9idG9hKHN0cikge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHN0ciBpbnN0YW5jZW9mIEJ1ZmZlciA/IHN0ciA6IEJ1ZmZlci5mcm9tKHN0ci50b1N0cmluZygpLCAnYmluYXJ5Jyk7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG59XG5mdW5jdGlvbiBfYXRvYihzdHIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFSmhjMmxqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMEYxZEdoQ1lYTnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVcxQ0xFOUJRVThzUTBGQlF6dEJRVUZITEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBGQlIyaEdMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQmEwSXNVVUZCVVN4RFFVRkRPMEZCUnpGRExFMUJRVTBzVDBGQlR5eFRRVUZWTEZOQlFWRXNTVUZCU1R0SlFVTXZRaXhSUVVGUkxFTkJRVU1zVDBGQlpTeEZRVUZGTEVsQlFWY3NSVUZCUlN4UlFVRjNRanRSUVVNelJDeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxIbERRVUY1UXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4yUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUjBGQlJ5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFJpeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wTkJRMG83UVVGRlJDeFRRVUZUTEV0QlFVc3NRMEZCUXl4SFFVRnBRanRKUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRmxCUVZrc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8wbEJRMnhHTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU55UXl4RFFVRkRPMEZCUlVRc1UwRkJVeXhMUVVGTExFTkJRVU1zUjBGQlZUdEpRVU55UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU42UkN4RFFVRkRJbjA9IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdERpZ2VzdCcpO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9BdXRoJztcbmV4cG9ydCBjbGFzcyBBdXRoRGlnZXN0IGV4dGVuZHMgQXV0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmMgPSAwO1xuICAgIH1cbiAgICB1cGRhdGVOQygpIHtcbiAgICAgICAgbGV0IG1heCA9IDk5OTk5OTk5O1xuICAgICAgICBsZXQgcGFkZGluZyA9IG5ldyBBcnJheSg4KS5qb2luKCcwJykgKyAnJztcbiAgICAgICAgdGhpcy5uYyA9ICh0aGlzLm5jID4gbWF4ID8gMSA6IHRoaXMubmMgKyAxKTtcbiAgICAgICAgbGV0IG5jID0gdGhpcy5uYyArICcnO1xuICAgICAgICByZXR1cm4gcGFkZGluZy5zdWJzdHIoMCwgOCAtIG5jLmxlbmd0aCkgKyBuYztcbiAgICB9XG4gICAgZ2VuZXJhdGVDTk9OQ0UocW9wKSB7XG4gICAgICAgIGxldCBjbm9uY2U7XG4gICAgICAgIGxldCBuYztcbiAgICAgICAgaWYgKHR5cGVvZiBxb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgY25vbmNlSGFzaCA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICAgICAgY25vbmNlSGFzaC51cGRhdGUoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikpO1xuICAgICAgICAgICAgY25vbmNlID0gY25vbmNlSGFzaC5kaWdlc3QoJ2hleCcpLnN1YnN0cigwLCAxNik7XG4gICAgICAgICAgICBuYyA9IHRoaXMudXBkYXRlTkMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjbm9uY2U6IGNub25jZSwgbmM6IG5jIH07XG4gICAgfVxuICAgIHRlc3RBdXRoKG9wdGlvbnMsIGRhdGEsIHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVjZWl2ZWQgd3d3LWF1dGhlbnRpY2F0ZSByZXF1ZXN0IGZvciAke29wdGlvbnMuaG9zdH1gKTtcbiAgICAgICAgbGV0IGNoYWxsZW5nZSA9IHBhcnNlRGlnZXN0UmVzcG9uc2UocmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddKTtcbiAgICAgICAgbGV0IGhhMSA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBsZXQgX3N0ciA9IGAke3RoaXMudXNlcm5hbWV9OiR7Y2hhbGxlbmdlLnJlYWxtfToke3RoaXMucGFzc3dvcmR9YDtcbiAgICAgICAgaGExLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IGhhMiA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBfc3RyID0gYCR7b3B0aW9ucy5tZXRob2R9OiR7b3B0aW9ucy5wYXRofWA7XG4gICAgICAgIGhhMi51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCB7IG5jLCBjbm9uY2UgfSA9IHRoaXMuZ2VuZXJhdGVDTk9OQ0UoY2hhbGxlbmdlLnFvcCk7XG4gICAgICAgIGxldCBoYXNoID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIF9zdHIgPSBgJHtoYTEuZGlnZXN0KCdoZXgnKX06JHtjaGFsbGVuZ2Uubm9uY2V9OiR7bmN9OiR7Y25vbmNlfToke2NoYWxsZW5nZS5xb3B9OiR7aGEyLmRpZ2VzdCgnaGV4Jyl9YDtcbiAgICAgICAgaGFzaC51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCBhdXRoUGFyYW1zID0ge1xuICAgICAgICAgICAgcmVhbG06IGNoYWxsZW5nZS5yZWFsbSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgdXJpOiBvcHRpb25zLnBhdGgsXG4gICAgICAgICAgICBxb3A6IGNoYWxsZW5nZS5xb3AsXG4gICAgICAgICAgICBub25jZTogY2hhbGxlbmdlLm5vbmNlLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiBcIk1ENVwiLFxuICAgICAgICAgICAgcmVzcG9uc2U6IGhhc2guZGlnZXN0KCdoZXgnKVxuICAgICAgICB9O1xuICAgICAgICBhdXRoUGFyYW1zID0gb21pdE51bGwoYXV0aFBhcmFtcyk7XG4gICAgICAgIGlmIChjbm9uY2UpIHtcbiAgICAgICAgICAgIGF1dGhQYXJhbXMubmMgPSBuYztcbiAgICAgICAgICAgIGF1dGhQYXJhbXMuY25vbmNlID0gY25vbmNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gY29tcGlsZVBhcmFtcyhhdXRoUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZnVuY3Rpb24gb21pdE51bGwoZGF0YSkge1xuICAgIGxldCBuZXdPYmplY3QgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmIChkYXRhW2tdICE9PSBudWxsICYmIGRhdGFba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3T2JqZWN0W2tdID0gZGF0YVtrXTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPYmplY3Q7XG59XG5mdW5jdGlvbiBjb21waWxlUGFyYW1zKHBhcmFtcykge1xuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gcGFyYW1zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2ldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW0gPSBpICsgJz0nICsgKHB1dERvdWJsZVF1b3RlcyhpKSA/IGBcIiR7cGFyYW1zW2ldfVwiYCA6IHBhcmFtc1tpXSk7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ0RpZ2VzdCAnICsgcGFydHMuam9pbignLCcpO1xufVxuZnVuY3Rpb24gcHV0RG91YmxlUXVvdGVzKGVudHJ5KSB7XG4gICAgcmV0dXJuIFsncW9wJywgJ25jJ10uaW5kZXhPZihlbnRyeSkgPCAwO1xufVxuZnVuY3Rpb24gcGFyc2VEaWdlc3RSZXNwb25zZShkaWdlc3RIZWFkZXIpIHtcbiAgICBkaWdlc3RIZWFkZXIgPSBkaWdlc3RIZWFkZXIuc3BsaXQoJ0RpZ2VzdCAnKVsxXTtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBkaWdlc3RIZWFkZXIucmVwbGFjZSgvKChbXlwiXXxcIlteXCJdKlwiKSo/KSgsKS9nLCAoLi4ucmVzdCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcmVzdFsxXTtcbiAgICAgICAgY29uc3Qga3YgPSBwYXJ0LnNwbGl0KCc9JykubWFwKCh2KSA9PiB2LnRyaW0oKSk7XG4gICAgICAgIHBhcmFtc1trdlswXV0gPSBrdlsxXS5yZXBsYWNlKC9cXFwiL2csICcnKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUVScFoyVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUJkWFJvUkdsblpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCYlVJc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRGFrWXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGWkxGRkJRVkVzUTBGQlF6dEJRVWN4UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRV3RDTEZGQlFWRXNRMEZCUXp0QlFVMHhReXhOUVVGTkxFOUJRVThzVlVGQlZ5eFRRVUZSTEVsQlFVazdTVUZCY0VNN08xRkJRMGtzVDBGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFYbEZXQ3hEUVVGRE8wbEJjRVZITEZGQlFWRTdVVUZEU2l4SlFVRkpMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGTlJDeGpRVUZqTEVOQlFVTXNSMEZCVlR0UlFVTnlRaXhKUVVGSkxFMUJRVlVzUTBGQlF6dFJRVU5tTEVsQlFVa3NSVUZCVXl4RFFVRkRPMUZCUldRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTI1RExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRhRVFzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVONFFqdFJRVU5FTEU5QlFVOHNSVUZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wbEJVVVFzVVVGQlVTeERRVUZETEU5QlFXVXNSVUZCUlN4SlFVRlhMRVZCUVVVc1VVRkJkMEk3VVVGRE0wUXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeDVRMEZCZVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGZGtVc1NVRkJTU3hUUVVGVExFZEJRVThzYlVKQlFXMUNMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTnNSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTXpReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUldwQ0xFbEJRVWtzUlVGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeEpRVUZKTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRemRDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRkxFbEJRVWtzVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNaSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkhiRUlzU1VGQlNTeFZRVUZWTEVkQlFVODdXVUZEYWtJc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTzFsQlEzUkNMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVUdFpRVU4yUWl4SFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWs3V1VGRGFrSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1EwRkJReXhIUVVGSE8xbEJRMnhDTEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1MwRkJTenRaUVVOMFFpeFRRVUZUTEVWQlFVVXNTMEZCU3p0WlFVTm9RaXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRMMElzUTBGQlF6dFJRVVZHTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmJFTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRVaXhWUVVGVkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTnVRaXhWUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVTTVRanRSUVVWRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU14UkN4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBOQlEwbzdRVUZGUkN4VFFVRlRMRkZCUVZFc1EwRkJReXhKUVVGUk8wbEJRM1JDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOdVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFWRXNSVUZCUlN4RlFVRkZPMUZCUTI1RExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVGRk8wbEJRemxGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03UVVGRGNrSXNRMEZCUXp0QlFVMUVMRk5CUVZNc1lVRkJZU3hEUVVGRExFMUJRVlU3U1VGRE4wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMllzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1VVRkRiRUlzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3V1VGRGFrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVVVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOeVFqdExRVU5LTzBsQlEwUXNUMEZCVHl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJReXhEUVVGRE8wRkJUVVFzVTBGQlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0SlFVTnFReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTTdRVUZETVVNc1EwRkJRenRCUVVWRUxGTkJRVk1zYlVKQlFXMUNMRU5CUVVNc1dVRkJiVUk3U1VGRE5VTXNXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJ4Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFXRXNSVUZCUlN4RlFVRkZPMUZCUTJoRkxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRka1FzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcERMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOc1FpeERRVUZESW4wPSIsImV4cG9ydCBmdW5jdGlvbiBzaG9ydENoZWNrU3VtKHMpIHtcbiAgICBsZXQgY2hrID0gMHgxMjM0NTY3ODtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJVVU1zVFVGQlRTeFZRVUZWTEdGQlFXRXNRMEZCUXl4RFFVRlJPMGxCUTI1RExFbEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXp0SlFVTnlRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTXpRaXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRkRU03U1VGRFJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTXhReXhEUVVGREluMD0iLCJjb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgbGV0IHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydCBjb25zdCBtcyA9IHtcbiAgICBmcm9tTWludXRlczogKG1pbikgPT4gMTAwMCAqIDYwICogbWluLFxuICAgIGZyb21Ib3VyczogKGgpID0+IDEwMDAgKiA2MCAqIDYwICogaCxcbiAgICBmcm9tRGF5czogKGQpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiBkLFxuICAgIGZyb21XZWVrczogKHcpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogdyxcbiAgICB0b01pbnV0ZXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwKSxcbiAgICB0b0hvdXJzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwKSxcbiAgICB0b0RheXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCksXG4gICAgdG9XZWVrczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogNylcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRV1ZCTEUxQlFVMHNVVUZCVVN4SFFVRkhPMGxCUTJJc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRPMGxCUXpWSExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE5VZ3NUVUZCVFN4TlFVRk5MRWRCUVVjN1NVRkRXQ3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFhRVUZYTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTTdRMEZCUXl4RFFVRkRPMEZCUnpOSkxGTkJRVk1zV1VGQldTeERRVUZETEUxQlFXRXNSVUZCUlN4TlFVRmhPMGxCUXpsRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1JVRkJSVHRSUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVVN1NVRkRNVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZEWWl4RFFVRkRPMEZCWTBRc1RVRkJUU3hWUVVGVkxFbEJRVWtzUTBGQlF5eFpRVUZ0UWl4RlFVRkZMRWxCUVVrc1IwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJUdEpRVU55UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1UwRkJVeXhEUVVGQkxFTkJRVU03VVVGRFZpeFpRVUZaTzJGQlExQXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMkZCUTNoRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUXpsRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRlRU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJwRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVa3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSeXhGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTI1RExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZKTEVWQlFVVXNSMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03WVVGRGRFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVTXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSMEZCUXl4SFFVRkhMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRPMEZCUjBRc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITzBsQlEyUXNWMEZCVnl4RlFVRkxMRU5CUVVNc1IwRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRWRCUVVjN1NVRkRNME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXpWRExGRkJRVkVzUlVGQlVTeERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNN1NVRkRMME1zVTBGQlV5eEZRVUZQTEVOQlFVTXNRMEZCVVN4RlFVRkpMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhIUVVGRExFTkJRVU03U1VGRGFrUXNVMEZCVXl4RlFVRlBMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJRelZETEU5QlFVOHNSVUZCVXl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGREwwTXNUVUZCVFN4RlFVRlZMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVOQlFVTTdTVUZEYkVRc1QwRkJUeXhGUVVGVExFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRE8wTkJRM1pFTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUGFjaW5nJyk7XG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcywgLi4ucmVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcywgLi4ucmVzdCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydCBjbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHBhY2UgPSAxMDAsIG1heENvbmN1cnJlbnQgPSAtMSwgY29sbGVjdGlvblBlcmlvZCA9IDAgfSkge1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSAtMTtcbiAgICAgICAgdGhpcy5wYWNlID0gMDtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgPSAwO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAwO1xuICAgICAgICB0aGlzLnF1ZXVlID0ge307XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IDA7XG4gICAgICAgIHRoaXMucGFjZSA9IHBhY2U7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvblBlcmlvZCA9IGNvbGxlY3Rpb25QZXJpb2Q7XG4gICAgfVxuICAgIGlzQWxsb3dlZCgpIHsgcmV0dXJuIHRoaXMubWF4Q29uY3VycmVudCA8IDAgfHwgdGhpcy5zdGFydGVkIDwgdGhpcy5tYXhDb25jdXJyZW50OyB9XG4gICAgc2V0UGFjZShtcykgeyB0aGlzLnBhY2UgPSBtczsgfVxuICAgIHNldE1heENvbmN1cnJlbnQobWF4Q29uY3VycmVudCkgeyB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50OyB9XG4gICAgaW5RdWV1ZSgpIHsgcmV0dXJuIHRoaXMud2FpdGluZzsgfVxuICAgIGluUHJvZ3Jlc3MoKSB7IHJldHVybiB0aGlzLnN0YXJ0ZWQ7IH1cbiAgICBhc3luYyBhZGQoZm4sIGtleSkge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgY2FsbFRpbWUgPSBub3cgKyBNYXRoLm1heCh0aGlzLmNvbGxlY3Rpb25QZXJpb2QsIHRoaXMud2FpdFVudGlsKTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgKz0gdGhpcy5wYWNlO1xuICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgaWYgKGtleSAmJiB0aGlzLnF1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnF1ZXVlW2tleV07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbS50aW1lcik7XG4gICAgICAgICAgICBpdGVtLmZuID0gZm47XG4gICAgICAgICAgICBpdGVtLmFkZGVkID0gbm93O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0ga2V5IHx8IGAke25vd30tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWA7XG4gICAgICAgICAgICBpdGVtID0geyBmbjogZm4sIGFkZGVkOiBub3csIHBhY2U6IHRoaXMsIGtleToga2V5IH07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlW2tleV0gPSBpdGVtO1xuICAgICAgICAgICAgdGhpcy53YWl0aW5nKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZUl0ZW0oaXRlbSwgY2FsbFRpbWUgLSBub3cpO1xuICAgIH1cbiAgICByZXNvbHZlSXRlbShpdGVtLCB3YWl0VGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jIChfaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IF9pdGVtLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9pdGVtLnBhY2UucXVldWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS53YWl0aW5nLS07XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJlbG93Q29uY3VycmVudExpbWl0KF9pdGVtLnBhY2UpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsRGVsYXkgPSBEYXRlLm5vdygpIC0gX2l0ZW0uYWRkZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IF9pdGVtLmZuKGFjdHVhbERlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaXRlbS50aW1lciA9IHNldFRpbWVvdXQoZXhlY3V0ZSwgd2FpdFRpbWUsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBiZWxvd0NvbmN1cnJlbnRMaW1pdChwYWNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlbGVhc2UgPT4ge1xuICAgICAgICBjb25zdCB3YWl0TG9vcCA9ICgpID0+IHBhY2UuaXNBbGxvd2VkKCkgPyByZWxlYXNlKCkgOiBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgIHdhaXRMb29wKCk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVR0ZqYVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDFCaFkybHVaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGSlFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVU4c1QwRkJUeXhEUVVGRE8wRkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGVE5VUXNUVUZCVFN4VlFVRlZMRTlCUVU4c1EwRkJReXhGUVVGVExFVkJRVVVzUjBGQlJ5eEpRVUZWTzBsQlF6VkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVZc1EwRkJRenRCUVdkRFJDeE5RVUZOTEZWQlFWVXNTMEZCU3l4RFFVRkRMRVZCUVZNN1NVRkRNMElzVDBGQlR5eERRVUZKTEVsQlFVOHNSVUZCWVN4RlFVRkZPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnpRaXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZ0UWtRc1RVRkJUU3hQUVVGUExFbEJRVWs3U1VGcFEySXNXVUZCV1N4RlFVRkRMRWxCUVVrc1IwRkJReXhIUVVGSExFVkJRVVVzWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMR2RDUVVGblFpeEhRVUZETEVOQlFVTXNSVUZCUXp0UlFTOUNjRVFzYTBKQlFXRXNSMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWeVFpeFRRVUZKTEVkQlFXTXNRMEZCUXl4RFFVRkRPMUZCUlhCQ0xHTkJRVk1zUjBGQlV5eERRVUZETEVOQlFVTTdVVUZGY0VJc1dVRkJUeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ3UWl4WlFVRlBMRWRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEZWQlFVc3NSMEZCZDBJc1JVRkJSU3hEUVVGRE8xRkJZMnBETEhGQ1FVRm5RaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVkY0UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF6dFJRVU51UXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFXNUNUU3hUUVVGVExFdEJRV0VzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJjMEl6Uml4UFFVRlBMRU5CUVVNc1JVRkJVeXhKUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVelF5eG5Ra0ZCWjBJc1EwRkJReXhoUVVGdlFpeEpRVUZUTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZ1Uml4UFFVRlBMRXRCUVdVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVTFReXhWUVVGVkxFdEJRVmtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZGdVJDeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVdkQ0xFVkJRVVVzUjBGQlZ6dFJRVU51UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTJwRExFMUJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzU1VGQlV5eERRVUZETzFGQlEyUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOMlFpeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXp0WlFVTXhSQ3hKUVVGSkxFZEJRVWNzUlVGQlF5eEZRVUZGTEVWQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU03V1VGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZGtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlEyeENPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3U1VGRGFrUXNRMEZCUXp0SlFVVlBMRmRCUVZjc1EwRkJReXhKUVVGVExFVkJRVVVzVVVGQlpUdFJRVU14UXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUTI1RExFMUJRVTBzVDBGQlR5eEhRVUZITEV0QlFVc3NSVUZCUlN4TFFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGQlJ5eEpRVUZKTzI5Q1FVTjRReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPMjlDUVVOMFFpeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOeVFpeE5RVUZOTEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRka01zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkRlRU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU5vUWp0blFrRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZEVUN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTJJN1dVRkJRU3hEUVVGRExFTkJRVUU3V1VGSFJpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNKRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0RFFVTktPMEZCUjBRc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4SlFVRlRPMGxCUTI1RExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRla0lzVFVGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVJTeFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMUFzUTBGQlF5SjkiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0Jyk7XG5pbXBvcnQgeyBQYWNlIH0gZnJvbSAnLi9QYWNpbmcnO1xuaW1wb3J0IHsgQXV0aERpZ2VzdCB9IGZyb20gJy4vQXV0aERpZ2VzdCc7XG5pbXBvcnQgeyBBdXRoQmFzaWMgfSBmcm9tICcuL0F1dGhCYXNpYyc7XG5sb2cubWVzc2FnZUxlbmd0aCA9IDEyMDtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICAgIHRoaXMuc2V0Q3JlZGVudGlhbHMgPSAodXNlciwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB1c2VyID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7IHVzZXI6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF1dGhUb2tlbiA9ICh0b2tlbikgPT4gdGhpcy5hdXRoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5zZXRQYWNlID0gKHsgcGFjZSA9IDUwLCBtYXggPSAxMCwgY29sbGVjdGlvblBlcmlvZCA9IDEwMCB9ID0geyBwYWNlOiB1bmRlZmluZWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWNlID0gcGFjZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbmV3IFBhY2UoeyBwYWNlOiBwYWNlLCBtYXhDb25jdXJyZW50OiBtYXgsIGNvbGxlY3Rpb25QZXJpb2Q6IGNvbGxlY3Rpb25QZXJpb2QgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGVjb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNhY2hlTmFtZSA9IChvcHRpb25zKSA9PiB0aGlzLmNhY2hlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOlxuICAgICAgICAgICAgYCR7dGhpcy5jYWNoZX0vJHtvcHRpb25zLnBhdGgucmVwbGFjZSgvcT0oLio/KVxcLy9nLCAncT0kMS0nKS5yZXBsYWNlKC9cXD8vZywgJycpfWA7XG4gICAgfVxuICAgIGFzeW5jIGdldCh1cmwsIHsgdXNlQ2FjaGVkID0gdHJ1ZSwgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ0dFVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMpO1xuICAgIH1cbiAgICBhc3luYyBwdXQodXJsLCBwb3N0RGF0YSwgeyB1c2VDYWNoZWQgPSBmYWxzZSwgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BVVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKTtcbiAgICB9XG4gICAgYXN5bmMgcG9zdCh1cmwsIHBvc3REYXRhLCB7IHVzZUNhY2hlZCA9IGZhbHNlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUE9TVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKTtcbiAgICB9XG4gICAgZ2V0VVJMKHVybCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IG5ldyBVUkwodXJsLCBkb2N1bWVudC5VUkwpIDogdXJsO1xuICAgIH1cbiAgICBnZXRPcHRpb25zKHVybCwgbWV0aG9kKSB7XG4gICAgICAgIHVybCA9IHRoaXMuZ2V0VVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgICAgIGhvc3Q6IHVybC5ob3N0LFxuICAgICAgICAgICAgaG9zdG5hbWU6IHVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHVybC5wb3J0LFxuICAgICAgICAgICAgcGF0aG5hbWU6IHByZWZpeCArIHVybC5wYXRobmFtZSxcbiAgICAgICAgICAgIHBhdGg6IHByZWZpeCArIHVybC5wYXRobmFtZSArICh1cmwuc2VhcmNoIHx8ICcnKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgdXJsOiBgJHt1cmwucHJvdG9jb2x9Ly8ke3VybC5ob3N0fSR7dXJsLnBvcnQgPyAnOicgKyB1cmwucG9ydCA6ICcnfSR7cHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpfWAsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmF1dGhUb2tlbikge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhUb2tlbiA9IHRoaXMuYXV0aFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBhc3luYyBkZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmRlY29kZSAmJiByZXN1bHQucmVzcG9uc2UudHh0ICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB0aGlzLmRlY29kZShyZXN1bHQuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgcmVhZENhY2hlZChmbmFtZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyB3cml0ZUNhY2hlZChmbmFtZSwgcmVzcG9uc2UpIHtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSkge1xuICAgICAgICBjb25zdCBmbmFtZSA9IHRoaXMuY2FjaGUgPyB0aGlzLmNhY2hlTmFtZShvcHRpb25zKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGZuYW1lICYmIHVzZUNhY2hlZCAmJiBvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVhZENhY2hlZChmbmFtZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXF1ZXN0O1xuICAgICAgICBpZiAodGhpcy5wYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5pbmZvKGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pICR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucGFjZS5hZGQoKCkgPT4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSwgYCR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZy5kZWJ1ZygoKSA9PiBgJHtvcHRpb25zLm1ldGhvZH0taW5nICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pIHJlY2VpdmVkICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9IGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke3Jlc3BvbnNlLnJlc3BvbnNlLnN0YXR1c01lc3NhZ2V9ICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSByZXNwb25zZS5yZXNwb25zZS5zdGF0dXNDb2RlIHx8IHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgaWYgKGNvZGUgPj0gMjAwICYmIGNvZGUgPCAzMDApIHtcbiAgICAgICAgICAgIGlmIChmbmFtZSAmJiBvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlQ2FjaGVkKGZuYW1lLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgICAgIGxldCBhdXRoZW50aWNhdGUgPSByZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzWyd3d3ctYXV0aGVudGljYXRlJ107XG4gICAgICAgICAgICBpZiAoIWF1dGhlbnRpY2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGUudHJpbSgpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRoO1xuICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGUuaW5kZXhPZignRGlnZXN0JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IG5ldyBBdXRoRGlnZXN0KHRoaXMuY3JlZGVudGlhbHMudXNlciwgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdCYXNpYycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGggPSBuZXcgQXV0aEJhc2ljKHRoaXMuY3JlZGVudGlhbHMudXNlciwgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgdW5pbXBsZW1lbnRlZCBhdXRoZW50aWNhdGlvbiByZXF1ZXN0ICR7YXV0aGVudGljYXRlfSBmb3IgJyR7b3B0aW9ucy51cmx9J2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1dGgudGVzdEF1dGgob3B0aW9ucywgcmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgYXV0aGVudGljYXRpb24gbWlzc2luZzsgY2FsbCAnc2V0Q3JlZGVudGlhbHMnIGJlZm9yZSBjYWxsaW5nICdnZXQnYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgYGVycm9yIHJlcXVlc3RpbmcgJHtvcHRpb25zLnVybH06ICR7ZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGlzc3VlUmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29uZmlybVJlcXVlc3QoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzVGV4dCA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ2NvbnRlbnQtdHlwZSc6ICcnIH07XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNUZXh0LnNwbGl0KCdcXHJcXG4nKS5tYXAoaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrdiA9IGguc3BsaXQoJzonKS5tYXAocCA9PiBwLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa3ZbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1trdlswXV0gPSBrdlsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gdGhpcy5yZXNwb25zZVR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IHJlcXVlc3QuaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDogdHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IGAke3RoaXMuc3RhdHVzfSAke3RoaXMuc3RhdHVzVGV4dH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5yZXNwb25zZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IHJlcXVlc3QuaXNUZXh0dWFsUmVxdWVzdChvcHRpb25zLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZygoKSA9PiBgcmVxdWVzdGluZyAke29wdGlvbnMubWV0aG9kfSAke3RoaXMubG9nLmluc3BlY3Qob3B0aW9ucywgeyBkZXB0aDogNCB9KX1gKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChoID0+IHhoci5zZXRSZXF1ZXN0SGVhZGVyKGgsIG9wdGlvbnMuaGVhZGVyc1toXSkpO1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSB0eHQgPyAndGV4dCcgOiAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBjb25maXJtUmVxdWVzdDtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChwb3N0RGF0YSA/IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVGV4dHVhbENvbnRlbnQoY29udGVudFR5cGUpIHtcbiAgICAgICAgbGV0IHR4dCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29udGVudFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGVudFR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJUeXBlcyA9IGNvbnRlbnRUeXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIHN3aXRjaCAoc3ViVHlwZXNbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICB0eHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgY2FzZSAnZm9udCc6IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24nOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ViVHlwZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BkZic6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5tcy1wb3dlcnBvaW50JzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5tcy1leGNlbCc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvY3RldC1zdHJlYW0nOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm1zLWV4Y2VsLnNoZWV0Lm1hY3JvZW5hYmxlZC4xMic6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aGlzLmxvZy5pbmZvKGBjYWNoaW5nICR7Y29udGVudFR5cGV9IGFzIGJpbmFyeWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMubG9nLndhcm4oYGNhY2hpbmcgJyR7Y29udGVudFR5cGV9JyBhcyBiaW5hcnlgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHh0O1xuICAgIH1cbiAgICBpc1RleHR1YWxSZXF1ZXN0KHBhdGhOYW1lKSB7XG4gICAgICAgIHJldHVybiBbJ2pzb24nLCAndHh0JywgJ2h0bWwnXS5zb21lKGV4dCA9PiBwYXRoTmFtZS5pbmRleE9mKGV4dCkgPj0gMCk7XG4gICAgfVxufVxuUmVxdWVzdC5kZWNvZGVycyA9IHtcbiAgICBzdHIyanNvbjogKGRhdGEpID0+IHsgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IH0sXG4gICAgaHRtbDJqc29uOiB1bmRlZmluZWRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbVZ4ZFdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5U1pYRjFaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYZERRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFXVXNUMEZCVHl4RFFVRkRPMEZCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1FVRkRka1VzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRmpMRlZCUVZVc1EwRkJRenRCUVVONFF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVZFc1kwRkJZeXhEUVVGRE8wRkJRelZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJVeXhoUVVGaExFTkJRVU03UVVGSE0wTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhIUVVGSExFTkJRVU03UVVGM1JIaENMRTFCUVUwc1QwRkJUeXhQUVVGUE8wbEJRWEJDTzFGQlQyTXNVVUZCUnl4SFFVRlJMRWRCUVVjc1EwRkJRenRSUVhWQ2JFSXNiVUpCUVdNc1IwRkJSeXhEUVVGRExFbEJRVmtzUlVGQlJTeFJRVUZuUWl4RlFVRkZMRVZCUVVVN1dVRkRka1FzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRXRCUVVjc1UwRkJVeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRlRVlzUTBGQlF5eERRVUZCTzFGQlIwMHNhVUpCUVZrc1IwRkJSeXhEUVVGRExFdEJRV0VzUlVGQlJTeEZRVUZGTEVOQlEzQkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzFGQlVXNUNMRmxCUVU4c1IwRkJSeXhEUVVGRExFVkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVNc1JVRkJSU3hGUVVGRkxHZENRVUZuUWl4SFFVRkRMRWRCUVVjc1MwRkJSU3hGUVVGRExFbEJRVWtzUlVGQlRTeFRRVUZUTEVWQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXk5RkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkhMRk5CUVZNc1EwRkJRU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVWQlFVVXNZVUZCWVN4RlFVRkRMRWRCUVVjc1JVRkJSU3huUWtGQlowSXNSVUZCUXl4blFrRkJaMElzUlVGQlF5eERRVUZETEVOQlFVTTdVVUZETVVnc1EwRkJReXhEUVVGQk8xRkJVVTBzVjBGQlRTeEhRVUZaTEZOQlFWTXNRMEZCUXp0UlFWTTFRaXhqUVVGVExFZEJRVWNzUTBGQlF5eFBRVUZsTEVWQlFWTXNSVUZCUlN4RFFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eExRVUZITEZOQlFWTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGREwwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1JVRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVUU3U1VFclRqTkdMRU5CUVVNN1NVRnlUbFVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRmpMRVZCUVVVc1JVRkJReXhUUVVGVExFZEJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSMEZCUXl4RlFVRkZMRVZCUVVNc1IwRkJReXhGUVVGRk8xRkJRelZFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRlRUU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFXTXNSVUZCUlN4UlFVRlpMRVZCUVVVc1JVRkJReXhUUVVGVExFZEJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSMEZCUXl4RlFVRkZMRVZCUVVNc1IwRkJReXhGUVVGRk8xRkJRek5GTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjBSU3hEUVVGRE8wbEJVMDBzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRmpMRVZCUVVVc1VVRkJXU3hGUVVGRkxFVkJRVU1zVTBGQlV5eEhRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRWRCUVVNc1JVRkJSU3hGUVVGRExFZEJRVU1zUlVGQlJUdFJRVU0xUlN4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRkRVVzUTBGQlF6dEpRVVZUTEUxQlFVMHNRMEZCUXl4SFFVRmpPMUZCUXpOQ0xFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTNaRkxFTkJRVU03U1VGRlV5eFZRVUZWTEVOQlFVTXNSMEZCWXl4RlFVRkZMRTFCUVdFN1VVRkRPVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRrSXNUVUZCVFN4TlFVRk5MRWRCUVRSRExFVkJRVVVzUTBGQlF6dFJRVU16UkN4TlFVRk5MRTlCUVU4c1IwRkJSenRaUVVOYUxHdENRVUZyUWl4RlFVRkZMRXRCUVVzN1dVRkRla0lzVFVGQlRTeEZRVUZOTEUxQlFVMDdXVUZEYkVJc1VVRkJVU3hGUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTzFsQlEzaENMRWxCUVVrc1JVRkJVU3hIUVVGSExFTkJRVU1zU1VGQlNUdFpRVU53UWl4UlFVRlJMRVZCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkU3V1VGRGVFSXNTVUZCU1N4RlFVRlJMRWRCUVVjc1EwRkJReXhKUVVGSk8xbEJRM0JDTEZGQlFWRXNSVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkU3V1VGRGFrTXNTVUZCU1N4RlFVRlJMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGRFUXNUMEZCVHl4RlFVRlZMRVZCUVVVN1dVRkRia0lzUjBGQlJ5eEZRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1MwRkJTeXhIUVVGSExFTkJRVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVFc1EwRkJReXhEUVVGQkxFZEJRVWNzUjBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZPMU5CUTNaSUxFTkJRVU03VVVGRFJpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRVVU3VVVGRGJrVXNUMEZCVHl4UFFVRlBMRU5CUVVNN1NVRkRia0lzUTBGQlF6dEpRV0ZUTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJaU3hGUVVGRkxGTkJRV2xDTEVWQlFVVXNUMEZCVnl4RlFVRkZMRkZCUVdFN1VVRkRla1lzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVjc1MwRkJTeXhGUVVGRk8xbEJRemxFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlV5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRek5FTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVlZUTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJXVHRSUVVOdVF5eFBRVUZQTEZOQlFWTXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVk1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRlpMRVZCUVVVc1VVRkJhVUk3U1VGRE0wUXNRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlpTeEZRVUZGTEZOQlFXbENMRVZCUVVVc1VVRkJZVHRSUVVNMVJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZET1VRc1NVRkJTU3hMUVVGTExFbEJRVWtzVTBGQlV5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVzc1MwRkJTeXhGUVVGRk8xbEJRMmhFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTTFReXhKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU03WVVGQlJUdFRRVU12UXp0UlFVVkVMRWxCUVVrc1QwRkJNRUlzUTBGQlF6dFJRVU12UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRFdDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hSUVVGUkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpOSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVjN1lVRkJUVHRaUVVOSUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzVVVGQlVTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4TlFVRk5MRTlCUVU4c1EwRkJRenRSUVVNdlFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzWTBGQll5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEZWtrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc1dVRkJXU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmNrZ3NUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVsQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGNFVXNTVUZCUnl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVTdXVUZETVVJc1NVRkJTU3hMUVVGTExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4TFFVRkxMRVZCUVVVN1owSkJRMjVETEUxQlFVMHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdZVUZETTBNN1UwRkRTanRSUVVORUxFOUJRVThzVVVGQlVTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZVeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFXVXNSVUZCUlN4UlFVRmhPMUZCUTJ4RUxFbEJRVWs3V1VGRFFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFbEJRVWtzV1VGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkRha1VzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlR0blFrRkRaaXhQUVVGUExGRkJRVkVzUTBGQlF6dGhRVU51UWp0cFFrRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUTNKQ0xGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRMjVETEVsQlFVa3NTVUZCVlN4RFFVRkRPMmRDUVVObUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3YjBKQlEzUkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVNelJUdHhRa0ZCVFN4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVNMVF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVVN2NVSkJRVTA3YjBKQlEwZ3NUVUZCVFN4M1EwRkJkME1zV1VGQldTeFRRVUZUTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRwUWtGRGNrWTdaMEpCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTNwRUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVOd1F6dHBRa0ZCVFR0blFrRkRTQ3hOUVVGTkxHOUZRVUZ2UlN4RFFVRkRPMkZCUXpsRk8xTkJRMG83VVVGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTlFMRTFCUVUwc2IwSkJRVzlDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU03VTBGRGFrUTdTVUZEVEN4RFFVRkRPMGxCUlZNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZsTEVWQlFVVXNVVUZCWVR0UlFVTjJSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY2tJc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFUUkNMRVZCUVVVc1RVRkJlVUlzUlVGQlJTeEZRVUZGTzFsQlFVY3NTVUZCU1R0blFrRkRiRVlzVTBGQlV5eGpRVUZqTEVOQlFVTXNRMEZCU3p0dlFrRkRla0lzVFVGQlRTeFhRVUZYTEVkQlFVY3NSMEZCUnl4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdiMEpCUTJoRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVWQlFVTXNZMEZCWXl4RlFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRE8yOUNRVU53UXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHQzUWtGRE9VSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenQzUWtGRE0wTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGT3pSQ1FVRkZMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlFVVTdiMEpCUTJwRUxFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVTkdMRTFCUVUwc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdiMEpCUTNSRExFMUJRVTBzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0dlFrRkhiRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenR2UWtGRE0wSXNUVUZCVFN4UlFVRlJMRWRCUVZrN2QwSkJRM1JDTEVsQlFVa3NSVUZCWjBJc1NVRkJTVHQzUWtGRGVFSXNVVUZCVVN4RlFVRkZPelJDUVVOT0xFZEJRVWNzUlVGQllTeEhRVUZIT3pSQ1FVTnVRaXhQUVVGUExFVkJRVk1zVDBGQlR6czBRa0ZEZGtJc1RVRkJUU3hGUVVGVkxFOUJRVThzUTBGQlF5eE5RVUZOT3pSQ1FVTTVRaXhOUVVGTkxFVkJRVlVzU1VGQlNTeERRVUZETEUxQlFVMDdORUpCUXpOQ0xGVkJRVlVzUlVGQlRTeEpRVUZKTEVOQlFVTXNUVUZCVFRzMFFrRkRNMElzWVVGQllTeEZRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGT3pSQ1FVTnVSQ3hIUVVGSExFVkJRV0VzU1VGQlNTeERRVUZETEZkQlFWYzdlVUpCUTI1RE8zRkNRVU5LTEVOQlFVTTdiMEpCUTBZc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhEUVVGRE8yZENRVU5FTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1kwRkJZeXhGUVVGRkxFTkJRVU03WjBKQlEycERMRTFCUVUwc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUTNaRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxHTkJRV01zVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUXl4TFFVRkxMRVZCUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUXpOR0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVNMVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUml4SFFVRkhMRU5CUVVNc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU03WjBKQlF5OURMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzWTBGQll5eERRVUZETzJkQ1FVTTFRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUVN4RFFVRkRMRU5CUVVFc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1UwRkJVeXhEUVVGRExFTkJRVU03WVVGRGVrUTdXVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRFVDeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRZanRSUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlExQXNRMEZCUXp0SlFVVlRMR2RDUVVGblFpeERRVUZETEZkQlFXdENPMUZCUTNwRExFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTm9RaXhKUVVGSkxGZEJRVmNzUzBGQlJ5eFRRVUZUTEVWQlFVVTdXVUZCUlN4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRE8xTkJRVVU3WVVGRGRFUTdXVUZCUlN4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVGRk8xRkJRMnBFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1VVRkJVU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEYWtJc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRFVpeExRVUZMTEUxQlFVMDdaMEpCUVZNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNSRExFdEJRVXNzVDBGQlR5eERRVUZETzFsQlEySXNTMEZCU3l4UFFVRlBMRU5CUVVNN1dVRkRZaXhMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZSTEUxQlFVMDdXVUZETVVJc1MwRkJTeXhoUVVGaE8yZENRVUZGTEZGQlFVOHNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU53UXl4TFFVRkxMRTFCUVUwN2QwSkJRVXNzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXp0M1FrRkJReXhOUVVGTk8yOUNRVU5zUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGTExFMUJRVTA3YjBKQlEzUkNMRXRCUVVzc0swUkJRU3RFTEVOQlFVTXNRMEZCUXl4TlFVRk5PMjlDUVVNMVJTeExRVUZMTEhWRVFVRjFSQ3hEUVVGRExFTkJRVU1zVFVGQlRUdHZRa0ZEY0VVc1MwRkJTeXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRTFCUVUwN2IwSkJRMmhETEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNc1RVRkJUVHR2UWtGRE0wSXNTMEZCU3l4alFVRmpMRU5CUVVNc1EwRkJReXhOUVVGTk8yOUNRVU16UWl4TFFVRkxMRzlEUVVGdlF5eERRVUZETEVOQlFVTXNUVUZCVFR0dlFrRkRha1FzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eFhRVUZYTEZsQlFWa3NRMEZCUXl4RFFVRkRPMmxDUVVNNVJEdG5Ra0ZEUkN4TlFVRk5PMWxCUTA0c1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hYUVVGWExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBsQlJWTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlpUdFJRVU4wUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkZMRU5CUVVNN08wRkJPVkpoTEdkQ1FVRlJMRWRCUVVjN1NVRkRja0lzVVVGQlVTeEZRVUZITEVOQlFVTXNTVUZCVnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhKUVVGSk8xRkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8wdEJRVU03U1VGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0UlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGQk8wdEJRVU1zUTBGQlFTeERRVUZETzBsQlEyeEdMRk5CUVZNc1JVRkJkMElzVTBGQlV6dERRVU0zUXl4RFFVRkRJbjA9IiwiZXhwb3J0ICogZnJvbSAnLi9QYWNpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9SZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vQ2hlY2tzdW0nO1xuZXhwb3J0ICogZnJvbSAnLi9EYXRlJztcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vQXJyYXlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzWTBGQmFVSXNWVUZCVlN4RFFVRkRPMEZCUXpWQ0xHTkJRV2xDTEZkQlFWY3NRMEZCUXp0QlFVTTNRaXhqUVVGcFFpeFpRVUZaTEVOQlFVTTdRVUZET1VJc1kwRkJhVUlzVVVGQlVTeERRVUZETzBGQlF6RkNMR05CUVdsQ0xFOUJRVThzUTBGQlF6dEJRVU42UWl4alFVRnBRaXhUUVVGVExFTkJRVU1pZlE9PSIsImltcG9ydCB7IGRhdGUgfSBmcm9tICcuL0RhdGUnO1xuY29uc3QgQ09MT1IgPSB7XG4gICAgY2xlYXI6ICdjb2xvcjojMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7IGZvbnQtd2VpZ2h0Om5vcm1hbDsnLFxuICAgIGJvbGQ6ICdmb250LXdlaWdodDpib2xkOycsXG4gICAgZGltOiAnJyxcbiAgICB1bmRlcnNjb3JlOiAnJyxcbiAgICBibGluazogJycsXG4gICAgcmV2ZXJzZTogJycsXG4gICAgaGlkZGVuOiAnJyxcbiAgICBibGFjazogJ2NvbG9yOiMwMDA7JyxcbiAgICByZWQ6ICdjb2xvcjojZjAwOycsXG4gICAgZ3JlZW46ICdjb2xvcjojMGYwOycsXG4gICAgeWVsbG93OiAnY29sb3I6I2ZmMDsnLFxuICAgIGJsdWU6ICdjb2xvcjojMDBmOycsXG4gICAgbWFnZW50YTogJ2NvbG9yOiNmMGY7JyxcbiAgICBjeWFuOiAnY29sb3I6IzBmZjsnLFxuICAgIHdoaXRlOiAnY29sb3I6I2ZmZjsnLFxuICAgIGRhcmtyZWQ6ICdjb2xvcjojODAwOycsXG4gICAgZGFya2dyZWVuOiAnY29sb3I6IzA4MDsnLFxuICAgIGRhcmt5ZWxsb3c6ICdjb2xvcjojODgwOycsXG4gICAgZGFya2JsdWU6ICdjb2xvcjojMDA4OycsXG4gICAgZGFya21hZ2VudGE6ICdjb2xvcjojODA4OycsXG4gICAgZGFya2N5YW46ICdjb2xvcjojMDg4OycsXG4gICAgZ3JheTogJ2NvbG9yOiM4ODg7JyxcbiAgICBiZ0JsYWNrOiAnYmFja2dyb3VuZC1jb2xvcjojMDAwOycsXG4gICAgYmdSZWQ6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMDA7JyxcbiAgICBiZ0dyZWVuOiAnYmFja2dyb3VuZC1jb2xvcjojMGYwOycsXG4gICAgYmdZZWxsb3c6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7JyxcbiAgICBiZ0JsdWU6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMGY7JyxcbiAgICBiZ01hZ2VudGE6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmMGY7JyxcbiAgICBiZ0N5YW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZmY7JyxcbiAgICBiZ1doaXRlOiAnYmFja2dyb3VuZC1jb2xvcjojZmZmOydcbn07XG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSAnJztcbiAgICAgICAgdGhpcy5tYXhMZW5ndGggPSAtMTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgc2V0IG1lc3NhZ2VMZW5ndGgobWF4KSB7IHRoaXMubWF4TGVuZ3RoID0gbWF4OyB9XG4gICAgZ2V0IG1lc3NhZ2VMZW5ndGgoKSB7IHJldHVybiB0aGlzLm1heExlbmd0aDsgfVxuICAgIGxldmVsKG5ld0xldmVsU3ltLCBzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBMb2cubGV2ZWxzW25ld0xldmVsU3ltXSB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChMb2cubGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmdsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IHRoaXMucmVwb3J0UHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICAobmV3TGV2ZWwuc3ltID09PSBvbGRMZXZlbC5zeW0pID8gdGhpcy5kZWJ1Zyhtc2cpIDogdGhpcy5pbmZvKG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bX07IGxvZyBsZXZlbCByZW1haW5zICR7b2xkTGV2ZWwuc3ltfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGRlYnVnKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLkRFQlVHLCBtc2csIHsgY29sb3I6IFsnZ3JheSddIH0pOyB9XG4gICAgdHJhbnNpZW50KG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrZ3JlZW4nXSwgbGY6ICdcXHInIH0pOyB9XG4gICAgcHJvZ3Jlc3MobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtibHVlJ10gfSk7IH1cbiAgICBpbmZvKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrZ3JlZW4nXSB9KTsgfVxuICAgIHdhcm4obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuV0FSTiwgbXNnLCB7IGNvbG9yOiBbJ2Rhcmt5ZWxsb3cnLCAnYm9sZCddIH0pOyB9XG4gICAgZXJyb3IobXNnKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gWydkYXJrcmVkJywgJ2JvbGQnXTtcbiAgICAgICAgaWYgKG1zZy5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIG1zZy5tZXNzYWdlLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLnN0YWNrLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgICAgIHJldHVybiBtc2cubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dChMb2cuRVJST1IsIG1zZywgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3V0KGx2bCwgbXNnLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBkZXNjID0gTG9nLmxldmVsc1tsdmxdO1xuICAgICAgICBjb25zdCBmaWx0ZXJMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAoZGVzYy5pbXBvcnRhbmNlID49IGZpbHRlckxldmVsLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgIGxldCBsaW5lO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgbXNnKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbXNnKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbGluZSA9IHRoaXMuaW5zcGVjdChtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUoTG9nLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGggJiYgdGhpcy5tYXhMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGAke2xpbmUuc2xpY2UoMCwgdGhpcy5tYXhMZW5ndGggLyAyIC0gMil9Li4uJHtsaW5lLnNsaWNlKC10aGlzLm1heExlbmd0aCAvIDIgKyAyKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBgJHtsaW5lfVxcbiR7bXNnLnN0YWNrfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBgJHtkYXRlU3RyfSAke3RoaXMucmVwb3J0UHJlZml4fSAke2Rlc2MuZGVzY31gO1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQob3B0aW9ucy5jb2xvciwgaGVhZGVyLCBsaW5lKTtcbiAgICAgICAgICAgIHJldHVybiBsaW5lICsgKG9wdGlvbnMubGYgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG91dHB1dChjb2xvciwgaGVhZGVyLCBsaW5lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aGVhZGVyfSVjICR7bGluZX1gLCBjb2xvci5tYXAoYyA9PiBDT0xPUltjXSkuam9pbignICcpLCBDT0xPUlsnY2xlYXInXSk7XG4gICAgfVxuICAgIGZvcm1hdChmbXRTdHIpIHtcbiAgICAgICAgaWYgKGZtdFN0ciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMb2cuZGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRQcmVmaXg7XG4gICAgfVxuICAgIGNvbmZpZyhjZmcpIHtcbiAgICAgICAgaWYgKGNmZy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvcnMgPSBjZmcuY29sb3JzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3BlY3QobXNnLCB7IGRlcHRoID0gLTEsIGluZGVudCA9ICcgICAnLCBjb2xvcnMgPSBMb2cuSU5ERU5UX0NPTE9SUyB9ID0geyBkZXB0aDogMCwgaW5kZW50OiAnICAgJywgY29sb3JzOiBMb2cuSU5ERU5UX0NPTE9SUyB9KSB7XG4gICAgICAgIGZ1bmN0aW9uIF9pbnNwZWN0KG1zZywgZGVwdGgsIGxldmVsLCBjdXJySW5kZW50KSB7XG4gICAgICAgICAgICBpZiAobXNnID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdmdW5jdGlvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCcke21zZ30nYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChtc2cubGVuZ3RoID09PSB1bmRlZmluZWQpID8gJ3suLi59JyA6ICdbLi4uXSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtc2cubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBbJHttc2cubWFwKChlKSA9PiAoZSA9PT0gdW5kZWZpbmVkKSA/ICcnIDogX2luc3BlY3QoZSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQpKS5qb2luKCcsICcpfV1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBbcHJlZml4LCBwb3N0Zml4LCBsZiwgcG9zdEluZGVudF0gPSBsb2cuZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgeyR7bGZ9YCArIE9iamVjdC5rZXlzKG1zZykubWFwKGsgPT4gYCR7cHJlZml4fSR7a30ke3Bvc3RmaXh9OiAke19pbnNwZWN0KG1zZ1trXSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQgKyBpbmRlbnQpfWApLmpvaW4oYCwke2xmfWApICsgYCR7bGZ9JHtwb3N0SW5kZW50fX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfaW5zcGVjdChtc2csIChkZXB0aCAhPT0gdW5kZWZpbmVkICYmIGRlcHRoICE9PSBudWxsICYmIGRlcHRoID49IDApID8gZGVwdGggOiA5OTksIDAsICcnKTtcbiAgICB9XG4gICAgZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpIHtcbiAgICAgICAgbGV0IGNzdGFydCA9ICcnLCBjc3RvcCA9ICcnLCBsZiA9ICdcXG4nO1xuICAgICAgICBpZiAoY29sb3JzKSB7XG4gICAgICAgICAgICBpbmRlbnQgPSBpbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjdXJySW5kZW50ID0gY3VyckluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1JbY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF1dIHx8IGNvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdO1xuICAgICAgICAgICAgY3N0YXJ0ID0gYDxiPjxzcGFuIHN0eWxlPScke2NvbG9yfSc+YDtcbiAgICAgICAgICAgIGNzdG9wID0gYDwvc3Bhbj48L2I+YDtcbiAgICAgICAgICAgIGxmID0gJzxicj4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbYCR7Y3VyckluZGVudH0ke2luZGVudH0ke2NzdGFydH1gLCBgJHtjc3RvcH1gLCBjb2xvcnMgPyAnPGJyPicgOiAnXFxuJywgY3VyckluZGVudF07XG4gICAgfVxufVxuTG9nLklOREVOVF9DT0xPUlMgPSBbJ2RhcmtibHVlJywgJ2RhcmtncmVlbicsICdkYXJrcmVkJywgJ2RhcmtjeWFuJywgJ2Rhcmt5ZWxsb3cnLCAnZGFya21hZ2VudGEnXTtcbkxvZy5kZWZEYXRlRm9ybWF0ID0gJyVZWVlZJU1NJUREICVoaDolbW06JXNzLiVqamonO1xuTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbkxvZy5ERUJVRyA9ICdERUJVRyc7XG5Mb2cuSU5GTyA9ICdJTkZPJztcbkxvZy5XQVJOID0gJ1dBUk4nO1xuTG9nLkVSUk9SID0gJ0VSUk9SJztcbkxvZy5sZXZlbHMgPSB7XG4gICAgW0xvZy5ERUJVR106IHsgaW1wb3J0YW5jZTogMCwgc3ltOiBMb2cuREVCVUcsIGRlc2M6ICdERUJVRycgfSxcbiAgICBbTG9nLklORk9dOiB7IGltcG9ydGFuY2U6IDEsIHN5bTogTG9nLklORk8sIGRlc2M6ICdJTkZPJyB9LFxuICAgIFtMb2cuV0FSTl06IHsgaW1wb3J0YW5jZTogMiwgc3ltOiBMb2cuV0FSTiwgZGVzYzogJ1dBUk4nIH0sXG4gICAgW0xvZy5FUlJPUl06IHsgaW1wb3J0YW5jZTogMywgc3ltOiBMb2cuRVJST1IsIGRlc2M6ICdFUlJPUicgfVxufTtcbkxvZy5sb2cgPSBuZXcgTG9nKCcnKTtcbkxvZy5nbG9iYWxMZXZlbCA9IExvZy5sZXZlbHNbTG9nLklORk9dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkc5bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZ2UmtFc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEZGQlFWRXNRMEZCUXp0QlFVazVRaXhOUVVGTkxFdEJRVXNzUjBGQlJ6dEpRVU5XTEV0QlFVc3NSVUZCVHl3eVJFRkJNa1E3U1VGRmRrVXNTVUZCU1N4RlFVRlJMRzFDUVVGdFFqdEpRVU12UWl4SFFVRkhMRVZCUVZNc1JVRkJSVHRKUVVOa0xGVkJRVlVzUlVGQlJTeEZRVUZGTzBsQlEyUXNTMEZCU3l4RlFVRlBMRVZCUVVVN1NVRkRaQ3hQUVVGUExFVkJRVXNzUlVGQlJUdEpRVU5rTEUxQlFVMHNSVUZCVFN4RlFVRkZPMGxCUldRc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNSMEZCUnl4RlFVRlRMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZEZWtJc1RVRkJUU3hGUVVGTkxHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzVDBGQlR5eEZRVUZMTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRGVrSXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkZla0lzVDBGQlR5eEZRVUZMTEdGQlFXRTdTVUZEZWtJc1UwRkJVeXhGUVVGSExHRkJRV0U3U1VGRGVrSXNWVUZCVlN4RlFVRkZMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1YwRkJWeXhGUVVGRExHRkJRV0U3U1VGRGVrSXNVVUZCVVN4RlFVRkpMR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExIZENRVUYzUWp0SlFVTndReXhMUVVGTExFVkJRVThzZDBKQlFYZENPMGxCUTNCRExFOUJRVThzUlVGQlN5eDNRa0ZCZDBJN1NVRkRjRU1zVVVGQlVTeEZRVUZKTEhkQ1FVRjNRanRKUVVOd1F5eE5RVUZOTEVWQlFVMHNkMEpCUVhkQ08wbEJRM0JETEZOQlFWTXNSVUZCUnl4M1FrRkJkMEk3U1VGRGNFTXNUVUZCVFN4RlFVRk5MSGRDUVVGM1FqdEpRVU53UXl4UFFVRlBMRVZCUVVzc2QwSkJRWGRDTzBOQlEzWkRMRU5CUVVNN1FVRmxSaXhOUVVGTkxFOUJRVThzUjBGQlJ6dEpRWEZEV2l4WlFVRlpMRTFCUVdFN1VVRk1aaXhuUWtGQlZ5eEhRVUZuUWl4VFFVRlRMRU5CUVVNN1VVRkRja01zYVVKQlFWa3NSMEZCU1N4RlFVRkZMRU5CUVVNN1VVRkRia0lzWTBGQlV5eEhRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1Q0xGZEJRVTBzUjBGQlZTeEpRVUZKTEVOQlFVTTdVVUZGUml4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVUZETEVOQlFVTTdTVUZSTVVRc1NVRkJWeXhoUVVGaExFTkJRVU1zUjBGQlZTeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVWM1UkN4SlFVRlhMR0ZCUVdFc1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCYlVJNVF5eExRVUZMTEVOQlFVTXNWMEZCYlVJc1JVRkJSU3hqUVVGMVFqdFJRVU55UkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE1VUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVjBGQlZ5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTXpRaXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFOQlEzWkNPMkZCUVUwc1NVRkJTU3hYUVVGWExFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlF6ZENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVTBGQlV5eERRVUZETzFOQlEyaERPMkZCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUTJoRExFbEJRVWtzWTBGQll5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdhVUpCUXk5Q08yZENRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3V1VGRGNFUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhqUVVGakxFTkJRVUVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzWTBGQll5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJRenRaUVVOb1NpeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkZPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhYUVVGWExIVkNRVUYxUWl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVTkVMRTlCUVU4c1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCVTAwc1MwRkJTeXhEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCVXk5RkxGTkJRVk1zUTBGQlF5eEhRVUZQTEVsQlFWY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlUyaEhMRkZCUVZFc1EwRkJReXhIUVVGUExFbEJRVmNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFXRnlSaXhKUVVGSkxFTkJRVU1zUjBGQlR5eEpRVUZYTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlRiRVlzU1VGQlNTeERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVlV6Uml4TFFVRkxMRU5CUVVNc1IwRkJUenRSUVVOb1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU5zUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyNUVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRPMU5CUTNSQ08yRkJRVTA3V1VGRFNDeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU55UkR0SlFVTk1MRU5CUVVNN1NVRmhVeXhIUVVGSExFTkJRVU1zUjBGQlZTeEZRVUZGTEVkQlFVOHNSVUZCUlN4UFFVRlhPMUZCUXpGRExFbEJRVWtzU1VGQlNTeEhRVUZoTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNoRUxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNTVUZCU1N4WFFVRlhMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRek5ETEVsQlFVa3NTVUZCU1N4RFFVRkRPMWxCUTFRc1VVRkJUeXhQUVVGUExFZEJRVWNzUlVGQlJUdG5Ra0ZEWml4TFFVRkxMRlZCUVZVN2IwSkJRVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEzSkRMRXRCUVVzc1VVRkJVVHR2UWtGQlNTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEyNURMRXRCUVVzc1VVRkJVU3hEUVVGRE8yZENRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNKRE8xbEJRMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZEYkVRc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVRTdZVUZEY2tZN1dVRkRSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUVVVc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRoUVVGRk8xbEJRMnhFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRemxFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRla01zVDBGQlR5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hKUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyeERPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVbFRMRTFCUVUwc1EwRkJReXhMUVVGakxFVkJRVVVzVFVGQllTeEZRVUZGTEVsQlFWYzdVVUZEZGtRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEUxQlFVMHNUVUZCVFN4SlFVRkpMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVFc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpWR0xFTkJRVU03U1VGWlRTeE5RVUZOTEVOQlFVTXNUVUZCWXp0UlFVTjRRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTTdVMEZCUlR0aFFVTjJSQ3hKUVVGSkxFMUJRVTBzUlVGQlRUdFpRVUZGTEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJRVVU3VVVGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZQVFN4TlFVRk5MRU5CUVVNc1IwRkJWenRSUVVOeVFpeEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETzFOQlFVVTdVVUZEY2tNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hOUVVGTkxFTkJRVU1zUjBGQmNVUTdVVUZETDBRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRlRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1JVRkJSenRaUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRGRFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dFRRVUZGTzBsQlF6ZEVMRU5CUVVNN1NVRnBRazBzVDBGQlR5eERRVUZETEVkQlFVOHNSVUZCUlN4RlFVRkRMRXRCUVVzc1IwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeE5RVUZOTEVkQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1IwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEZRVUZETEVkQlFVTXNSVUZCUXl4TFFVRkxMRVZCUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFVkJRVU03VVVGRGVFZ3NVMEZCVXl4UlFVRlJMRU5CUVVNc1IwRkJUeXhGUVVGRkxFdEJRVmtzUlVGQlJTeExRVUZaTEVWQlFVVXNWVUZCYVVJN1dVRkRjRVVzU1VGQlNTeEhRVUZITEV0QlFVc3NTVUZCU1N4RlFVRm5RanRuUWtGQlJTeFBRVUZQTEUxQlFVMHNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFbEJRVWtzUjBGQlJ5eExRVUZMTEZOQlFWTXNSVUZCVnp0blFrRkJSU3hQUVVGUExGZEJRVmNzUTBGQlF6dGhRVUZGTzFsQlEzWkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVlVGQlZTeEZRVUZITzJkQ1FVRkZMRTlCUVU4c1ZVRkJWU3hEUVVGRE8yRkJRVVU3V1VGRGRFUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVXM3WjBKQlFVVXNUMEZCVHl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRVVU3V1VGRGRFUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVXM3WjBKQlF6VkNMRWxCUVVrc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEVkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTTdhVUpCUTNSRU8yZENRVU5FTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzWkNMRTlCUVU4c1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkRMRVZCUVVVc1EwRkJRU3hEUVVGRExFTkJRVU1zUzBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlFTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMmxDUVVNelJ6dG5Ra0ZEUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFOUJRVThzUlVGQlJTeEZRVUZGTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZETDBZc1QwRkJUeXhKUVVGSkxFVkJRVVVzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEU5QlFVOHNTMEZETDBRc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRWRCUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNWVUZCVlN4SFFVRkRMRTFCUVUwc1EwRkRlRVFzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4VlFVRlZMRWRCUVVjc1EwRkJRenRoUVVNNVF6dFpRVU5FTEU5QlFVOHNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVOQlFVTTdVVUZEUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRmFrSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUzBGQlN5eExRVUZITEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVjc1NVRkJTU3hKUVVGSkxFdEJRVXNzU1VGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJReTlHTEVOQlFVTTdTVUZGVXl4aFFVRmhMRU5CUVVNc1RVRkJZU3hGUVVGRkxFdEJRVmtzUlVGQlJTeFZRVUZwUWl4RlFVRkZMRTFCUVdVN1VVRkRia1lzU1VGQlNTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RlFVRkZMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTjJReXhKUVVGSkxFMUJRVTBzUlVGQlJUdFpRVU5TTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTjRReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRmFFUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGNFWXNUVUZCVFN4SFFVRkpMRzFDUVVGdFFpeExRVUZMTEVsQlFVa3NRMEZCUXp0WlFVTjJReXhMUVVGTExFZEJRVXNzWVVGQllTeERRVUZETzFsQlEzaENMRVZCUVVVc1IwRkJVU3hOUVVGTkxFTkJRVU03VTBGRGNFSTdVVUZEUkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhWUVVGVkxFZEJRVWNzVFVGQlRTeEhRVUZITEUxQlFVMHNSVUZCUlN4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVTTVSaXhEUVVGRE96dEJRVFZTWjBJc2FVSkJRV0VzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1UwRkJVeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFpRVUZaTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkZPVVlzYVVKQlFXRXNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dEJRVU12UXl4alFVRlZMRWRCUVUwc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF6dEJRVWR5UXl4VFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJSMmhDTEZGQlFVa3NSMEZCU3l4TlFVRk5MRU5CUVVNN1FVRkhhRUlzVVVGQlNTeEhRVUZMTEUxQlFVMHNRMEZCUXp0QlFVZG9RaXhUUVVGTExFZEJRVWtzVDBGQlR5eERRVUZETzBGQlIyUXNWVUZCVFN4SFFVRkhPMGxCUTNSQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBsQlF6bEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZOTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUnl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRE8wbEJRemRFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUXpkRUxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBOQlEycEZMRU5CUVVNN1FVRkhXU3hQUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkhaaXhsUVVGWExFZEJRV0VzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvaHRtbDJqc29uJyk7XG4iLCIvKlxyXG4gKiBIVE1MNSBQYXJzZXIgQnkgU2FtIEJsb3dlc1xyXG4gKlxyXG4gKiBEZXNpZ25lZCBmb3IgSFRNTDUgZG9jdW1lbnRzXHJcbiAqXHJcbiAqIE9yaWdpbmFsIGNvZGUgYnkgSm9obiBSZXNpZyAoZWpvaG4ub3JnKVxyXG4gKiBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvcHVyZS1qYXZhc2NyaXB0LWh0bWwtcGFyc2VyL1xyXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEVyaWsgQXJ2aWRzc29uLCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGh0dHA6Ly9lcmlrLmVhZS5uZXQvc2ltcGxlaHRtbHBhcnNlci9zaW1wbGVodG1scGFyc2VyLmpzXHJcbiAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTGljZW5zZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqXHJcbiAqIFRoaXMgY29kZSBpcyB0cmlwbGUgbGljZW5zZWQgdXNpbmcgQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wLFxyXG4gKiBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIG9yIEdOVSBQdWJsaWMgTGljZW5zZVxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcclxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5XHJcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBWZXJzaW9uIDEuMSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW5cclxuICogY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICogaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9NUEwvXHJcbiAqIFxyXG4gKiBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCJcclxuICogYmFzaXMsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcclxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zXHJcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKiBcclxuICogVGhlIE9yaWdpbmFsIENvZGUgaXMgU2ltcGxlIEhUTUwgUGFyc2VyLlxyXG4gKiBcclxuICogVGhlIEluaXRpYWwgRGV2ZWxvcGVyIG9mIHRoZSBPcmlnaW5hbCBDb2RlIGlzIEVyaWsgQXJ2aWRzc29uLlxyXG4gKiBQb3J0aW9ucyBjcmVhdGVkIGJ5IEVyaWsgQXJ2aWRzc3NvbiBhcmUgQ29weXJpZ2h0IChDKSAyMDA0LiBBbGwgUmlnaHRzXHJcbiAqIFJlc2VydmVkLlxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxyXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMlxyXG4gKiBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICogXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqIFxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxyXG4gKiBGb3VuZGF0aW9uLCBJbmMuLCA1MSBGcmFua2xpbiBTdHJlZXQsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxLCBVU0EuXHJcbiAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogVXNhZ2VcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKlxyXG4gKiAvLyBVc2UgbGlrZSBzbzpcclxuICogSFRNTFBhcnNlcihodG1sU3RyaW5nLCB7XHJcbiAqICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHt9LFxyXG4gKiAgICAgZW5kOiBmdW5jdGlvbih0YWcpIHt9LFxyXG4gKiAgICAgY2hhcnM6IGZ1bmN0aW9uKHRleHQpIHt9LFxyXG4gKiAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge31cclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgc3RyaW5nOlxyXG4gKiBIVE1MdG9YTUwoaHRtbFN0cmluZyk7XHJcbiAqXHJcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgRE9NIERvY3VtZW50XHJcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nKTtcclxuICpcclxuICogLy8gb3IgdG8gaW5qZWN0IGludG8gYW4gZXhpc3RpbmcgZG9jdW1lbnQvRE9NIG5vZGVcclxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcsIGRvY3VtZW50KTtcclxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcsIGRvY3VtZW50LmJvZHkpO1xyXG4gKlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xyXG5cdHZhciBzdGFydFRhZyA9IC9ePChbLUEtWmEtejAtOV9dKykoKD86XFxzK1thLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKD86XFxzKj1cXHMqKD86KD86XCJbXlwiXSpcIil8KD86J1teJ10qJyl8W14+XFxzXSspKT8pKilcXHMqKFxcLz8pPi8sXHJcblx0XHRlbmRUYWcgPSAvXjxcXC8oWy1BLVphLXowLTlfXSspW14+XSo+LyxcclxuXHRcdGF0dHIgPSAvKFthLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKSg/Olxccyo9XFxzKig/Oig/OlwiKCg/OlxcXFwufFteXCJdKSopXCIpfCg/OicoKD86XFxcXC58W14nXSkqKScpfChbXj5cXHNdKykpKT8vZztcclxuXHJcblx0Ly8gRW1wdHkgRWxlbWVudHMgLSBIVE1MIDVcclxuXHR2YXIgZW1wdHkgPSBtYWtlTWFwKFwiYXJlYSxiYXNlLGJhc2Vmb250LGJyLGNvbCxmcmFtZSxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLGVtYmVkLGNvbW1hbmQsa2V5Z2VuLHNvdXJjZSx0cmFjayx3YnJcIik7XHJcblxyXG5cdC8vIEJsb2NrIEVsZW1lbnRzIC0gSFRNTCA1XHJcblx0dmFyIGJsb2NrID0gbWFrZU1hcChcImEsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlucyxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW9cIik7XHJcblxyXG5cdC8vIElubGluZSBFbGVtZW50cyAtIEhUTUwgNVxyXG5cdHZhciBpbmxpbmUgPSBtYWtlTWFwKFwiYWJicixhY3JvbnltLGFwcGxldCxiLGJhc2Vmb250LGJkbyxiaWcsYnIsYnV0dG9uLGNpdGUsY29kZSxkZWwsZGZuLGVtLGZvbnQsaSxpZnJhbWUsaW1nLGlucHV0LGlucyxrYmQsbGFiZWwsbWFwLG9iamVjdCxxLHMsc2FtcCxzY3JpcHQsc2VsZWN0LHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRleHRhcmVhLHR0LHUsdmFyXCIpO1xyXG5cclxuXHQvLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cclxuXHQvLyAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXHJcblx0dmFyIGNsb3NlU2VsZiA9IG1ha2VNYXAoXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHJcIik7XHJcblxyXG5cdC8vIEF0dHJpYnV0ZXMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlcyBmaWxsZWQgaW4gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0dmFyIGZpbGxBdHRycyA9IG1ha2VNYXAoXCJjaGVja2VkLGNvbXBhY3QsZGVjbGFyZSxkZWZlcixkaXNhYmxlZCxpc21hcCxtdWx0aXBsZSxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3dyYXAscmVhZG9ubHksc2VsZWN0ZWRcIik7XHJcblxyXG5cdC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxyXG5cdHZhciBzcGVjaWFsID0gbWFrZU1hcChcInNjcmlwdCxzdHlsZVwiKTtcclxuXHJcblx0dmFyIEhUTUxQYXJzZXIgPSB0aGlzLkhUTUxQYXJzZXIgPSBmdW5jdGlvbiAoaHRtbCwgaGFuZGxlcikge1xyXG5cdFx0dmFyIGluZGV4LCBjaGFycywgbWF0Y2gsIHN0YWNrID0gW10sIGxhc3QgPSBodG1sO1xyXG5cdFx0c3RhY2subGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHRcdH07XHJcblxyXG5cdFx0d2hpbGUgKGh0bWwpIHtcclxuXHRcdFx0Y2hhcnMgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBpbiBhIHNjcmlwdCBvciBzdHlsZSBlbGVtZW50XHJcblx0XHRcdGlmICghc3RhY2subGFzdCgpIHx8ICFzcGVjaWFsW3N0YWNrLmxhc3QoKV0pIHtcclxuXHJcblx0XHRcdFx0Ly8gQ29tbWVudFxyXG5cdFx0XHRcdGlmIChodG1sLmluZGV4T2YoXCI8IS0tXCIpID09IDApIHtcclxuXHRcdFx0XHRcdGluZGV4ID0gaHRtbC5pbmRleE9mKFwiLS0+XCIpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChoYW5kbGVyLmNvbW1lbnQpXHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlci5jb21tZW50KGh0bWwuc3Vic3RyaW5nKDQsIGluZGV4KSk7XHJcblx0XHRcdFx0XHRcdGh0bWwgPSBodG1sLnN1YnN0cmluZyhpbmRleCArIDMpO1xyXG5cdFx0XHRcdFx0XHRjaGFycyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIGVuZCB0YWdcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZihcIjwvXCIpID09IDApIHtcclxuXHRcdFx0XHRcdG1hdGNoID0gaHRtbC5tYXRjaChlbmRUYWcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChtYXRjaCkge1xyXG5cdFx0XHRcdFx0XHRodG1sID0gaHRtbC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcclxuXHRcdFx0XHRcdFx0bWF0Y2hbMF0ucmVwbGFjZShlbmRUYWcsIHBhcnNlRW5kVGFnKTtcclxuXHRcdFx0XHRcdFx0Y2hhcnMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBzdGFydCB0YWdcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZihcIjxcIikgPT0gMCkge1xyXG5cdFx0XHRcdFx0bWF0Y2ggPSBodG1sLm1hdGNoKHN0YXJ0VGFnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0aHRtbCA9IGh0bWwuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRcdG1hdGNoWzBdLnJlcGxhY2Uoc3RhcnRUYWcsIHBhcnNlU3RhcnRUYWcpO1xyXG5cdFx0XHRcdFx0XHRjaGFycyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGNoYXJzKSB7XHJcblx0XHRcdFx0XHRpbmRleCA9IGh0bWwuaW5kZXhPZihcIjxcIik7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRleHQgPSBpbmRleCA8IDAgPyBodG1sIDogaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGluZGV4IDwgMCA/IFwiXCIgOiBodG1sLnN1YnN0cmluZyhpbmRleCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXIuY2hhcnMpXHJcblx0XHRcdFx0XHRcdGhhbmRsZXIuY2hhcnModGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pPFxcL1wiICsgc3RhY2subGFzdCgpICsgXCJbXj5dKj5cIiksIGZ1bmN0aW9uIChhbGwsIHRleHQpIHtcclxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT58PCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCBcIiQxJDJcIik7XHJcblx0XHRcdFx0XHRpZiAoaGFuZGxlci5jaGFycylcclxuXHRcdFx0XHRcdFx0aGFuZGxlci5jaGFycyh0ZXh0KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cGFyc2VFbmRUYWcoXCJcIiwgc3RhY2subGFzdCgpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGh0bWwgPT0gbGFzdClcclxuXHRcdFx0XHR0aHJvdyBcIlBhcnNlIEVycm9yOiBcIiArIGh0bWw7XHJcblx0XHRcdGxhc3QgPSBodG1sO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENsZWFuIHVwIGFueSByZW1haW5pbmcgdGFnc1xyXG5cdFx0cGFyc2VFbmRUYWcoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBwYXJzZVN0YXJ0VGFnKHRhZywgdGFnTmFtZSwgcmVzdCwgdW5hcnkpIHtcclxuXHRcdFx0dGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmIChibG9ja1t0YWdOYW1lXSkge1xyXG5cdFx0XHRcdHdoaWxlIChzdGFjay5sYXN0KCkgJiYgaW5saW5lW3N0YWNrLmxhc3QoKV0pIHtcclxuXHRcdFx0XHRcdHBhcnNlRW5kVGFnKFwiXCIsIHN0YWNrLmxhc3QoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2xvc2VTZWxmW3RhZ05hbWVdICYmIHN0YWNrLmxhc3QoKSA9PSB0YWdOYW1lKSB7XHJcblx0XHRcdFx0cGFyc2VFbmRUYWcoXCJcIiwgdGFnTmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVuYXJ5ID0gZW1wdHlbdGFnTmFtZV0gfHwgISF1bmFyeTtcclxuXHJcblx0XHRcdGlmICghdW5hcnkpXHJcblx0XHRcdFx0c3RhY2sucHVzaCh0YWdOYW1lKTtcclxuXHJcblx0XHRcdGlmIChoYW5kbGVyLnN0YXJ0KSB7XHJcblx0XHRcdFx0dmFyIGF0dHJzID0gW107XHJcblxyXG5cdFx0XHRcdHJlc3QucmVwbGFjZShhdHRyLCBmdW5jdGlvbiAobWF0Y2gsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6XHJcblx0XHRcdFx0XHRcdGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6XHJcblx0XHRcdFx0XHRcdGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6XHJcblx0XHRcdFx0XHRcdGZpbGxBdHRyc1tuYW1lXSA/IG5hbWUgOiBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdGF0dHJzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXHJcblx0XHRcdFx0XHRcdGVzY2FwZWQ6IHZhbHVlLnJlcGxhY2UoLyhefFteXFxcXF0pXCIvZywgJyQxXFxcXFxcXCInKSAvL1wiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKGhhbmRsZXIuc3RhcnQpXHJcblx0XHRcdFx0XHRoYW5kbGVyLnN0YXJ0KHRhZ05hbWUsIGF0dHJzLCB1bmFyeSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwYXJzZUVuZFRhZyh0YWcsIHRhZ05hbWUpIHtcclxuXHRcdFx0Ly8gSWYgbm8gdGFnIG5hbWUgaXMgcHJvdmlkZWQsIGNsZWFuIHNob3BcclxuXHRcdFx0aWYgKCF0YWdOYW1lKVxyXG5cdFx0XHRcdHZhciBwb3MgPSAwO1xyXG5cclxuXHRcdFx0XHQvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Zm9yICh2YXIgcG9zID0gc3RhY2subGVuZ3RoIC0gMTsgcG9zID49IDA7IHBvcy0tKVxyXG5cdFx0XHRcdFx0aWYgKHN0YWNrW3Bvc10gPT0gdGFnTmFtZSlcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRpZiAocG9zID49IDApIHtcclxuXHRcdFx0XHQvLyBDbG9zZSBhbGwgdGhlIG9wZW4gZWxlbWVudHMsIHVwIHRoZSBzdGFja1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IHBvczsgaS0tKVxyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXIuZW5kKVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVyLmVuZChzdGFja1tpXSk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xyXG5cdFx0XHRcdHN0YWNrLmxlbmd0aCA9IHBvcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuSFRNTHRvWE1MID0gZnVuY3Rpb24gKGh0bWwpIHtcclxuXHRcdHZhciByZXN1bHRzID0gXCJcIjtcclxuXHJcblx0XHRIVE1MUGFyc2VyKGh0bWwsIHtcclxuXHRcdFx0c3RhcnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCB1bmFyeSkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI8XCIgKyB0YWc7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRyZXN1bHRzICs9IFwiIFwiICsgYXR0cnNbaV0ubmFtZSArICc9XCInICsgYXR0cnNbaV0uZXNjYXBlZCArICdcIic7XHJcblx0XHRcdFx0cmVzdWx0cyArPSBcIj5cIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW5kOiBmdW5jdGlvbiAodGFnKSB7XHJcblx0XHRcdFx0cmVzdWx0cyArPSBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhcnM6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcblx0XHRcdFx0cmVzdWx0cyArPSB0ZXh0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21tZW50OiBmdW5jdGlvbiAodGV4dCkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI8IS0tXCIgKyB0ZXh0ICsgXCItLT5cIjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0fTtcclxuXHJcblx0dGhpcy5IVE1MdG9ET00gPSBmdW5jdGlvbiAoaHRtbCwgZG9jKSB7XHJcblx0XHQvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgb2YgdGhlc2UgZWxlbWVudHNcclxuXHRcdHZhciBvbmUgPSBtYWtlTWFwKFwiaHRtbCxoZWFkLGJvZHksdGl0bGVcIik7XHJcblxyXG5cdFx0Ly8gRW5mb3JjZSBhIHN0cnVjdHVyZSBmb3IgdGhlIGRvY3VtZW50XHJcblx0XHR2YXIgc3RydWN0dXJlID0ge1xyXG5cdFx0XHRsaW5rOiBcImhlYWRcIixcclxuXHRcdFx0YmFzZTogXCJoZWFkXCJcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCFkb2MpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBET01Eb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdGRvYyA9IG5ldyBET01Eb2N1bWVudCgpO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbiAmJiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudClcclxuXHRcdFx0XHRkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChcIlwiLCBcIlwiLCBudWxsKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIEFjdGl2ZVggIT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRkb2MgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sLkRPTURvY3VtZW50XCIpO1xyXG5cclxuXHRcdH0gZWxzZVxyXG5cdFx0XHRkb2MgPSBkb2Mub3duZXJEb2N1bWVudCB8fFxyXG5cdFx0XHRcdGRvYy5nZXRPd25lckRvY3VtZW50ICYmIGRvYy5nZXRPd25lckRvY3VtZW50KCkgfHxcclxuXHRcdFx0XHRkb2M7XHJcblxyXG5cdFx0dmFyIGVsZW1zID0gW10sXHJcblx0XHRcdGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHxcclxuXHRcdFx0XHRkb2MuZ2V0RG9jdW1lbnRFbGVtZW50ICYmIGRvYy5nZXREb2N1bWVudEVsZW1lbnQoKTtcclxuXHJcblx0XHQvLyBJZiB3ZSdyZSBkZWFsaW5nIHdpdGggYW4gZW1wdHkgZG9jdW1lbnQgdGhlbiB3ZVxyXG5cdFx0Ly8gbmVlZCB0byBwcmUtcG9wdWxhdGUgaXQgd2l0aCB0aGUgSFRNTCBkb2N1bWVudCBzdHJ1Y3R1cmVcclxuXHRcdGlmICghZG9jdW1lbnRFbGVtZW50ICYmIGRvYy5jcmVhdGVFbGVtZW50KSAoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaHRtbCA9IGRvYy5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKTtcclxuXHRcdFx0dmFyIGhlYWQgPSBkb2MuY3JlYXRlRWxlbWVudChcImhlYWRcIik7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiKSk7XHJcblx0XHRcdGh0bWwuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcblx0XHRcdGh0bWwuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpKTtcclxuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKGh0bWwpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHQvLyBGaW5kIGFsbCB0aGUgdW5pcXVlIGVsZW1lbnRzXHJcblx0XHRpZiAoZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKVxyXG5cdFx0XHRmb3IgKHZhciBpIGluIG9uZSlcclxuXHRcdFx0XHRvbmVbaV0gPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoaSlbMF07XHJcblxyXG5cdFx0Ly8gSWYgd2UncmUgd29ya2luZyB3aXRoIGEgZG9jdW1lbnQsIGluamVjdCBjb250ZW50cyBpbnRvXHJcblx0XHQvLyB0aGUgYm9keSBlbGVtZW50XHJcblx0XHR2YXIgY3VyUGFyZW50Tm9kZSA9IG9uZS5ib2R5O1xyXG5cclxuXHRcdEhUTUxQYXJzZXIoaHRtbCwge1xyXG5cdFx0XHRzdGFydDogZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJzLCB1bmFyeSkge1xyXG5cdFx0XHRcdC8vIElmIGl0J3MgYSBwcmUtYnVpbHQgZWxlbWVudCwgdGhlbiB3ZSBjYW4gaWdub3JlXHJcblx0XHRcdFx0Ly8gaXRzIGNvbnN0cnVjdGlvblxyXG5cdFx0XHRcdGlmIChvbmVbdGFnTmFtZV0pIHtcclxuXHRcdFx0XHRcdGN1clBhcmVudE5vZGUgPSBvbmVbdGFnTmFtZV07XHJcblx0XHRcdFx0XHRpZiAoIXVuYXJ5KSB7XHJcblx0XHRcdFx0XHRcdGVsZW1zLnB1c2goY3VyUGFyZW50Tm9kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZWxlbSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBhdHRyIGluIGF0dHJzKVxyXG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoYXR0cnNbYXR0cl0ubmFtZSwgYXR0cnNbYXR0cl0udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRpZiAoc3RydWN0dXJlW3RhZ05hbWVdICYmIHR5cGVvZiBvbmVbc3RydWN0dXJlW3RhZ05hbWVdXSAhPSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdG9uZVtzdHJ1Y3R1cmVbdGFnTmFtZV1dLmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuXHRcdFx0XHRlbHNlIGlmIChjdXJQYXJlbnROb2RlICYmIGN1clBhcmVudE5vZGUuYXBwZW5kQ2hpbGQpXHJcblx0XHRcdFx0XHRjdXJQYXJlbnROb2RlLmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXVuYXJ5KSB7XHJcblx0XHRcdFx0XHRlbGVtcy5wdXNoKGVsZW0pO1xyXG5cdFx0XHRcdFx0Y3VyUGFyZW50Tm9kZSA9IGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmQ6IGZ1bmN0aW9uICh0YWcpIHtcclxuXHRcdFx0XHRlbGVtcy5sZW5ndGggLT0gMTtcclxuXHJcblx0XHRcdFx0Ly8gSW5pdCB0aGUgbmV3IHBhcmVudE5vZGVcclxuXHRcdFx0XHRjdXJQYXJlbnROb2RlID0gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV07XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYXJzOiBmdW5jdGlvbiAodGV4dCkge1xyXG5cdFx0XHRcdGN1clBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tbWVudDogZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0XHQvLyBjcmVhdGUgY29tbWVudCBub2RlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkb2M7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcclxuXHRcdHZhciBvYmogPSB7fSwgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0b2JqW2l0ZW1zW2ldXSA9IHRydWU7XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBERUJVRyA9IGZhbHNlO1xuICB2YXIgZGVidWcgPSBERUJVRyA/IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbigpe307XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICByZXF1aXJlKCcuLi9saWIvUHVyZS1KYXZhU2NyaXB0LUhUTUw1LVBhcnNlci9odG1scGFyc2VyLmpzJyk7XG4gIH1cblxuICBmdW5jdGlvbiBxKHYpIHtcbiAgICByZXR1cm4gJ1wiJyArIHYgKyAnXCInO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRE9DVFlQRShodG1sKSB7XG4gICAgcmV0dXJuIGh0bWxcbiAgICAgIC5yZXBsYWNlKC88XFw/eG1sLipcXD8+XFxuLywgJycpXG4gICAgICAucmVwbGFjZSgvPCFkb2N0eXBlLipcXD5cXG4vLCAnJylcbiAgICAgIC5yZXBsYWNlKC88IURPQ1RZUEUuKlxcPlxcbi8sICcnKTtcbiAgfVxuXG4gIGdsb2JhbC5odG1sMmpzb24gPSBmdW5jdGlvbiBodG1sMmpzb24oaHRtbCkge1xuICAgIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xuICAgIHZhciBidWZBcnJheSA9IFtdO1xuICAgIHZhciByZXN1bHRzID0ge1xuICAgICAgbm9kZTogJ3Jvb3QnLFxuICAgICAgY2hpbGQ6IFtdLFxuICAgIH07XG4gICAgSFRNTFBhcnNlcihodG1sLCB7XG4gICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHtcbiAgICAgICAgZGVidWcodGFnLCBhdHRycywgdW5hcnkpO1xuICAgICAgICAvLyBub2RlIGZvciB0aGlzIGVsZW1lbnRcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ2VsZW1lbnQnLFxuICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgbm9kZS5hdHRyID0gYXR0cnMucmVkdWNlKGZ1bmN0aW9uKHByZSwgYXR0cikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBoYXMgbXVsdGkgYXR0aWJ1dGVzXG4gICAgICAgICAgICAvLyBtYWtlIGl0IGFycmF5IG9mIGF0dHJpYnV0ZVxuICAgICAgICAgICAgaWYgKHZhbHVlLm1hdGNoKC8gLykpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBhdHRyIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAvLyBtZXJnZSBpdFxuICAgICAgICAgICAgaWYgKHByZVtuYW1lXSkge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBhcnJheSwgcHVzaCB0byBsYXN0XG4gICAgICAgICAgICAgICAgcHJlW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSB2YWx1ZSwgbWFrZSBpdCBhcnJheVxuICAgICAgICAgICAgICAgIHByZVtuYW1lXSA9IFtwcmVbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbm90IGV4aXN0LCBwdXQgaXRcbiAgICAgICAgICAgICAgcHJlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcmU7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmFyeSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgdGFnIGRvc2VuJ3QgaGF2ZSBlbmQgdGFnXG4gICAgICAgICAgLy8gbGlrZSA8aW1nIHNyYz1cImhvZ2UucG5nXCIvPlxuICAgICAgICAgIC8vIGFkZCB0byBwYXJlbnRzXG4gICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdIHx8IHJlc3VsdHM7XG4gICAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGQgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmQXJyYXkudW5zaGlmdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZDogZnVuY3Rpb24odGFnKSB7XG4gICAgICAgIGRlYnVnKHRhZyk7XG4gICAgICAgIC8vIG1lcmdlIGludG8gcGFyZW50IHRhZ1xuICAgICAgICB2YXIgbm9kZSA9IGJ1ZkFycmF5LnNoaWZ0KCk7XG4gICAgICAgIGlmIChub2RlLnRhZyAhPT0gdGFnKSBjb25zb2xlLmVycm9yKCdpbnZhbGlkIHN0YXRlOiBtaXNtYXRjaCBlbmQgdGFnJyk7XG5cbiAgICAgICAgaWYgKGJ1ZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlc3VsdHMuY2hpbGQucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gYnVmQXJyYXlbMF07XG4gICAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGQgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaGFyczogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICBkZWJ1Zyh0ZXh0KTtcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChidWZBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXN1bHRzLmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudC5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICBkZWJ1Zyh0ZXh0KTtcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIGdsb2JhbC5qc29uMmh0bWwgPSBmdW5jdGlvbiBqc29uMmh0bWwoanNvbikge1xuICAgIC8vIEVtcHR5IEVsZW1lbnRzIC0gSFRNTCA0LjAxXG4gICAgdmFyIGVtcHR5ID0gWydhcmVhJywgJ2Jhc2UnLCAnYmFzZWZvbnQnLCAnYnInLCAnY29sJywgJ2ZyYW1lJywgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdpc2luZGV4JywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbScsICdlbWJlZCddO1xuXG4gICAgdmFyIGNoaWxkID0gJyc7XG4gICAgaWYgKGpzb24uY2hpbGQpIHtcbiAgICAgIGNoaWxkID0ganNvbi5jaGlsZC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4ganNvbjJodG1sKGMpO1xuICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgdmFyIGF0dHIgPSAnJztcbiAgICBpZiAoanNvbi5hdHRyKSB7XG4gICAgICBhdHRyID0gT2JqZWN0LmtleXMoanNvbi5hdHRyKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGpzb24uYXR0cltrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignICcpO1xuICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcSh2YWx1ZSk7XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgICBpZiAoYXR0ciAhPT0gJycpIGF0dHIgPSAnICcgKyBhdHRyO1xuICAgIH1cblxuICAgIGlmIChqc29uLm5vZGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIHRhZyA9IGpzb24udGFnO1xuICAgICAgaWYgKGVtcHR5LmluZGV4T2YodGFnKSA+IC0xKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuICc8JyArIGpzb24udGFnICsgYXR0ciArICcvPic7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vbiBlbXB0eSBlbGVtZW50XG4gICAgICB2YXIgb3BlbiA9ICc8JyArIGpzb24udGFnICsgYXR0ciArICc+JztcbiAgICAgIHZhciBjbG9zZSA9ICc8LycgKyBqc29uLnRhZyArICc+JztcbiAgICAgIHJldHVybiBvcGVuICsgY2hpbGQgKyBjbG9zZTtcbiAgICB9XG5cbiAgICBpZiAoanNvbi5ub2RlID09PSAndGV4dCcpIHtcbiAgICAgIHJldHVybiBqc29uLnRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ubm9kZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICByZXR1cm4gJzwhLS0nICsganNvbi50ZXh0ICsgJy0tPic7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ubm9kZSA9PT0gJ3Jvb3QnKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9O1xufSkodGhpcyk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG52YXIgdXJsID0gcmVxdWlyZSgndXJsJylcblxudmFyIGh0dHBzID0gbW9kdWxlLmV4cG9ydHNcblxuZm9yICh2YXIga2V5IGluIGh0dHApIHtcbiAgaWYgKGh0dHAuaGFzT3duUHJvcGVydHkoa2V5KSkgaHR0cHNba2V5XSA9IGh0dHBba2V5XVxufVxuXG5odHRwcy5yZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcywgY2IpIHtcbiAgcGFyYW1zID0gdmFsaWRhdGVQYXJhbXMocGFyYW1zKVxuICByZXR1cm4gaHR0cC5yZXF1ZXN0LmNhbGwodGhpcywgcGFyYW1zLCBjYilcbn1cblxuaHR0cHMuZ2V0ID0gZnVuY3Rpb24gKHBhcmFtcywgY2IpIHtcbiAgcGFyYW1zID0gdmFsaWRhdGVQYXJhbXMocGFyYW1zKVxuICByZXR1cm4gaHR0cC5nZXQuY2FsbCh0aGlzLCBwYXJhbXMsIGNiKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhcmFtcyAocGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xuICAgIHBhcmFtcyA9IHVybC5wYXJzZShwYXJhbXMpXG4gIH1cbiAgaWYgKCFwYXJhbXMucHJvdG9jb2wpIHtcbiAgICBwYXJhbXMucHJvdG9jb2wgPSAnaHR0cHM6J1xuICB9XG4gIGlmIChwYXJhbXMucHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcm90b2NvbCBcIicgKyBwYXJhbXMucHJvdG9jb2wgKyAnXCIgbm90IHN1cHBvcnRlZC4gRXhwZWN0ZWQgXCJodHRwczpcIicpXG4gIH1cbiAgcmV0dXJuIHBhcmFtc1xufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiZXhwb3J0IHsgb3NhSlMgfSBmcm9tICcuL29zYUxpYic7XG5leHBvcnQgeyBvc2FDb21tYW5kcyB9IGZyb20gJy4vb3NhQ29tbWFuZHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hOUVVGaExGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVThzWlVGQlpTeERRVUZESW4wPSIsImV4cG9ydCBjb25zdCBPU1hjb21tYW5kcyA9IHtcbiAgICBvc2FHZXRNZXNzYWdlOiBmdW5jdGlvbiAodXBkYXRlZFNpbmNlKSB7XG4gICAgICAgIGNvbnN0IE1lc3NhZ2VzID0gQXBwbGljYXRpb24oXCJNZXNzYWdlc1wiKTtcbiAgICAgICAgTWVzc2FnZXMuaW5jbHVkZVN0YW5kYXJkQWRkaXRpb25zID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9zYVNlbmRNZXNzYWdlOiBmdW5jdGlvbiAoYXBwbGVJRHMsIG1lc3NhZ2UsIGF0dGFjaG1lbnRzKSB7XG4gICAgICAgIGNvbnN0IE1lc3NhZ2VzID0gQXBwbGljYXRpb24oXCJNZXNzYWdlc1wiKTtcbiAgICAgICAgTWVzc2FnZXMuaW5jbHVkZVN0YW5kYXJkQWRkaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYnVkZGllcyA9IGFwcGxlSURzLm1hcCgoYSkgPT4gTWVzc2FnZXMuYnVkZGllcy53aG9zZSh7IGhhbmRsZTogYSB9KVswXSk7XG4gICAgICAgIE1lc3NhZ2VzLnNlbmQobWVzc2FnZSwgeyB0bzogYnVkZGllc1swXSB9KTtcbiAgICAgICAgaWYgKGF0dGFjaG1lbnRzICYmIGF0dGFjaG1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzLmZvckVhY2goKGEpID0+IE1lc3NhZ2VzLnNlbmQoUGF0aChhKSwgeyB0bzogYnVkZGllc1swXSB9KSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9zYVNlbmRFbWFpbDogZnVuY3Rpb24gKHN1YmplY3QsIGFkZHJlc3MsIGNvbnRlbnQsIGF0dGFjaG1lbnRzKSB7XG4gICAgICAgIGNvbnN0IE1haWwgPSBBcHBsaWNhdGlvbihcIk1haWxcIik7XG4gICAgICAgIE1haWwuYWN0aXZhdGUoKTtcbiAgICAgICAgTWFpbC5pbmNsdWRlU3RhbmRhcmRBZGRpdGlvbnMgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gTWFpbC5PdXRnb2luZ01lc3NhZ2UoKS5tYWtlKCk7XG4gICAgICAgIG1lc3NhZ2Uuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIG1lc3NhZ2UuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIG1lc3NhZ2UudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIG1lc3NhZ2UudG9SZWNpcGllbnRzLnB1c2goTWFpbC5SZWNpcGllbnQoeyBhZGRyZXNzOiBhZGRyZXNzIH0pKTtcbiAgICAgICAgaWYgKGF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFjaG1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5hdHRhY2htZW50cy5wdXNoKE1haWwuQXR0YWNobWVudCh7IGZpbGVOYW1lOiBhdHRhY2htZW50c1tpXSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsYXkoNSk7XG4gICAgICAgIG1lc3NhZ2Uuc2VuZCgpO1xuICAgIH0sXG4gICAgb3NhR2V0RW1haWw6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIGNvbnN0IE1haWwgPSBBcHBsaWNhdGlvbihcIk1haWxcIik7XG4gICAgICAgIE1haWwuYWN0aXZhdGUoKTtcbiAgICAgICAgTWFpbC5pbmNsdWRlU3RhbmRhcmRBZGRpdGlvbnMgPSB0cnVlO1xuICAgICAgICBNYWlsLmNoZWNrRm9yTmV3TWFpbCgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgTWFpbC5hY2NvdW50cygpLmZvckVhY2goKGFjYykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5ib3ggPSBhY2MubWFpbGJveGVzKCkuZmlsdGVyKChtYikgPT4gbWIubmFtZSgpLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5ib3hcIilbMF07XG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gaW5ib3gubWVzc2FnZXMoKS5maWx0ZXIoKG0pID0+IERhdGUucGFyc2UobS5kYXRlUmVjZWl2ZWQoKSkgPj0gRGF0ZS5wYXJzZShkYXRlKSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbWFpbGJveGVzOiBhY2MubWFpbGJveGVzKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjYy5uYW1lKCksXG4gICAgICAgICAgICAgICAgaW5ib3g6IGluYm94Lm5hbWUoKSxcbiAgICAgICAgICAgICAgICBudW1Nc2dUb3RhbDogaW5ib3gubWVzc2FnZXMoKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbnVtTXNnTmV3OiBuZXdNc2dzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBkYXRlU2luY2U6IGRhdGUsXG4gICAgICAgICAgICAgICAgbXNnU2luY2VEYXRlOiBuZXdNc2dzLm1hcCgobSkgPT4geyByZXR1cm4geyBmcm9tOiBtLnNlbmRlcigpLCBzdWJqZWN0OiBtLnN1YmplY3QoKSwgcmVjZWl2ZWQ6IG0uZGF0ZVJlY2VpdmVkKCksIGlkOiBtLmlkKCkgfTsgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgVGVybSA9IEFwcGxpY2F0aW9uKFwiVGVybWluYWxcIik7XG4gICAgICAgIFRlcm0uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIG9zYVNheTogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24uY3VycmVudEFwcGxpY2F0aW9uKCk7XG4gICAgICAgIGFwcC5pbmNsdWRlU3RhbmRhcmRBZGRpdGlvbnMgPSB0cnVlO1xuICAgICAgICBhcHAuc2V0Vm9sdW1lKDMpO1xuICAgICAgICBhcHAuc2F5KHRleHQsIHsgdXNpbmc6IFwiQWxsaXNvblwiIH0pO1xuICAgICAgICBhcHAuc2V0Vm9sdW1lKDApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIG9zYUxhdW5jaDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24obmFtZSk7XG4gICAgICAgIGFwcC5pbmNsdWRlU3RhbmRhcmRBZGRpdGlvbnMgPSB0cnVlO1xuICAgICAgICBhcHAuYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FMYXVuY2hTY3JpcHQ6IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcCA9IEFwcGxpY2F0aW9uKG5hbWUpO1xuICAgICAgICBhcHAubGF1bmNoKCk7XG4gICAgICAgIGFwcC5ydW4oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FRdWl0OiAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBhcHAgPSBBcHBsaWNhdGlvbihuYW1lKTtcbiAgICAgICAgYXBwLnF1aXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FDYWxsRmFjZXRpbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24oXCJTeXN0ZW0gRXZlbnRzXCIpO1xuICAgICAgICBjb25zdCBwcmMgPSBhcHAuYXBwbGljYXRpb25Qcm9jZXNzZXMud2hvc2UoeyBuYW1lOiBcIkZhY2VUaW1lXCIgfSlbMF07XG4gICAgICAgIGNvbnN0IHdpbiA9IHByYy53aW5kb3dzWzBdO1xuICAgICAgICBjb25zdCBidG4gPSB3aW4uYnV0dG9ucy53aG9zZSh7IG5hbWU6IFwiQ2FsbFwiIH0pWzBdO1xuICAgICAgICBidG4uY2xpY2soKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FCcmlnaHRuZXNzOiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgUHJlZnMgPSBBcHBsaWNhdGlvbihcIlN5c3RlbSBQcmVmZXJlbmNlc1wiKTtcbiAgICAgICAgUHJlZnMuaW5jbHVkZVN0YW5kYXJkQWRkaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgUHJlZnMuYWN0aXZhdGUoKTtcbiAgICAgICAgY29uc3QgcGFuZSA9IFByZWZzLnBhbmVzLndob3NlKHsgaWQ6IFwiY29tLmFwcGxlLnByZWZlcmVuY2UuZGlzcGxheXNcIiB9KVswXTtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gcGFuZS5hbmNob3JzLndob3NlKHsgbmFtZTogXCJkaXNwbGF5c0Rpc3BsYXlUYWJcIiB9KVswXTtcbiAgICAgICAgUHJlZnMucmV2ZWFsKGFuY2hvcik7XG4gICAgICAgIGRlbGF5KDEpO1xuICAgICAgICBjb25zdCBTeXN0ZW0gPSBBcHBsaWNhdGlvbihcIlN5c3RlbSBFdmVudHNcIik7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBTeXN0ZW0ucHJvY2Vzc2VzLndob3NlKHsgbmFtZTogXCJTeXN0ZW0gUHJlZmVyZW5jZXNcIiB9KVswXTtcbiAgICAgICAgY29uc3Qgd2luZG93ID0gcHJvY2Vzcy53aW5kb3dzWzBdO1xuICAgICAgICBjb25zdCB0YWJncm91cCA9IHdpbmRvdy50YWJHcm91cHNbMF07XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGFiZ3JvdXAuZ3JvdXBzWzBdO1xuICAgICAgICBjb25zdCBzbGlkZXIgPSBncm91cC5zbGlkZXJzWzBdO1xuICAgICAgICBzbGlkZXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZGVsYXkoMSk7XG4gICAgICAgIFByZWZzLnF1aXQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FWb2x1bWU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBhcHAgPSBBcHBsaWNhdGlvbi5jdXJyZW50QXBwbGljYXRpb24oKTtcbiAgICAgICAgYXBwLmluY2x1ZGVTdGFuZGFyZEFkZGl0aW9ucyA9IHRydWU7XG4gICAgICAgIGFwcC5zZXRWb2x1bWUocGFyc2VJbnQodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBvc2FWb2x1bWVTZXR0aW5nczogKCkgPT4ge1xuICAgICAgICBjb25zdCBhcHAgPSBBcHBsaWNhdGlvbi5jdXJyZW50QXBwbGljYXRpb24oKTtcbiAgICAgICAgYXBwLmluY2x1ZGVTdGFuZGFyZEFkZGl0aW9ucyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gYXBwLmdldFZvbHVtZVNldHRpbmdzKCk7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9LFxuICAgIG9zYVJlc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBwID0gQXBwbGljYXRpb24uY3VycmVudEFwcGxpY2F0aW9uKCk7XG4gICAgICAgIGFwcC5pbmNsdWRlU3RhbmRhcmRBZGRpdGlvbnMgPSB0cnVlO1xuICAgICAgICBhcHAucmVzdGFydCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjNOaFEyRnNiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiM05oUTJGc2JITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCSzBKQkxFMUJRVTBzUTBGQlF5eE5RVUZOTEZkQlFWY3NSMEZCUnp0SlFVTjJRaXhoUVVGaExFVkJRVVVzVlVGQlV5eFpRVUZwUWp0UlFVTnlReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRla01zVVVGQlVTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCU1VRc1kwRkJZeXhGUVVGRkxGVkJRVk1zVVVGQmFVSXNSVUZCUlN4UFFVRmpMRVZCUVVVc1YwRkJiMEk3VVVGRE5VVXNUVUZCVFN4UlFVRlJMRWRCUVVjc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlEzcERMRkZCUVZFc1EwRkJReXgzUWtGQmQwSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJYSkdMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBNc1NVRkJTU3hYUVVGWExFbEJRVWtzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRja01zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEdPMGxCUTB3c1EwRkJRenRKUVVsRUxGbEJRVmtzUlVGQlJTeFZRVUZUTEU5QlFXTXNSVUZCUlN4UFFVRmpMRVZCUVVVc1QwRkJZeXhGUVVGRkxGZEJRVzlDTzFGQlEzWkdMRTFCUVUwc1NVRkJTU3hIUVVGSExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZET1VNc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZETVVJc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZETVVJc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZGYmtJc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZjRVVzU1VGQlNTeFhRVUZYTEVWQlFVVTdXVUZEWWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEY2tNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRExGRkJRVkVzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVrVTdVMEZEU2p0UlFVVkVMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5VTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlNVUXNWMEZCVnl4RlFVRkZMRlZCUVZNc1NVRkJWenRSUVVNM1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGFrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY2tNc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETzFGQlJYWkNMRTFCUVUwc1RVRkJUU3hIUVVGVExFVkJRVVVzUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEZkQlFWY3NSVUZCUlN4TFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkdMRTFCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlExSXNVMEZCVXl4RlFVRkxMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eE5RVUZOTzJkQ1FVTndReXhQUVVGUExFVkJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlR0blFrRkRlRUlzUzBGQlN5eEZRVUZUTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVN1owSkJRekZDTEZkQlFWY3NSVUZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRUdG5Ra0ZEY2tNc1UwRkJVeXhGUVVGTExFOUJRVThzUTBGQlF5eE5RVUZOTzJkQ1FVTTFRaXhUUVVGVExFVkJRVXNzU1VGQlNUdG5Ra0ZEYkVJc1dVRkJXU3hGUVVGRkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkxMRVZCUVVVc1JVRkJSU3hIUVVGSExFOUJRVThzUlVGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNN1lVRkRjRWtzUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFhRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRja01zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJoQ0xFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkpSQ3hOUVVGTkxFVkJRVVVzVlVGQlV5eEpRVUZYTzFGQlEzaENMRTFCUVUwc1IwRkJSeXhIUVVGSExGZEJRVmNzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRE8xRkJRemRETEVkQlFVY3NRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY0VNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkRMRXRCUVVzc1JVRkJReXhUUVVGVExFVkJRVU1zUTBGQlF5eERRVUZETzFGQlEycERMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVbEVMRk5CUVZNc1JVRkJSU3hWUVVGVExFbEJRVmM3VVVGRE0wSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6bENMRWRCUVVjc1EwRkJReXgzUWtGQmQwSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRjRU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVbEVMR1ZCUVdVc1JVRkJSU3hEUVVGRExFbEJRVmNzUlVGQlJTeEZRVUZGTzFGQlF6ZENMRTFCUVUwc1IwRkJSeXhIUVVGSExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZEWWl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJTVVFzVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCVnl4RlFVRkZMRVZCUVVVN1VVRkRja0lzVFVGQlRTeEhRVUZITEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemxDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkpSQ3hsUVVGbExFVkJRVVVzUjBGQlJ5eEZRVUZGTzFGQlEyeENMRTFCUVUwc1IwRkJSeXhIUVVGSExGZEJRVmNzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVTjZReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVTXNTVUZCU1N4RlFVRkRMRlZCUVZVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZETEVsQlFVa3NSVUZCUXl4TlFVRk5MRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEVMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5hTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGSlJDeGhRVUZoTEVWQlFVVXNRMEZCUXl4TFFVRlpMRVZCUVVVc1JVRkJSVHRSUVVNMVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4WFFVRlhMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0UlFVTm9SQ3hMUVVGTExFTkJRVU1zZDBKQlFYZENMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZETEVWQlFVVXNSVUZCUXl3clFrRkJLMElzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRVVzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlF5eEpRVUZKTEVWQlFVVXNiMEpCUVc5Q0xFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1RkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja0lzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVjBGQlZ5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUXpWRExFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVU1zU1VGQlNTeEZRVUZETEc5Q1FVRnZRaXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhETEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaERMRTFCUVUwc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlEzSkNMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5VTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOaUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkpSQ3hUUVVGVExFVkJRVVVzUTBGQlF5eExRVUZaTEVWQlFVVXNSVUZCUlR0UlFVTjRRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVU0zUXl4SFFVRkhMRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNCRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGREwwSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVWxFTEdsQ1FVRnBRaXhGUVVGRkxFZEJRVWNzUlVGQlJUdFJRVU53UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRSUVVNM1F5eEhRVUZITEVOQlFVTXNkMEpCUVhkQ0xFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzQkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM3BETEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGSlJDeFZRVUZWTEVWQlFVVXNSMEZCUnl4RlFVRkZPMUZCUTJJc1RVRkJUU3hIUVVGSExFZEJRVWNzVjBGQlZ5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU03VVVGRE4wTXNSMEZCUnl4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTndReXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEWkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBOQlEwb3NRMEZCUXlKOSIsImltcG9ydCB7IGNwIH0gZnJvbSAnaHNub2RlJztcbmltcG9ydCB7IExvZyB9IGZyb20gJ2hzbm9kZSc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdvc2FDb21tYW5kcycpO1xuaW1wb3J0IHsgT1NYY29tbWFuZHMgfSBmcm9tICcuL29zYUNhbGxzJztcbmltcG9ydCB7IG9zYUpTIH0gZnJvbSAnLi9vc2FMaWInO1xuY29uc3QgZXhlYyA9IGNwLmV4ZWM7XG5jb25zdCByZXNwb25zZUhhbmRsZXIgPSAoY21kKSA9PiB7XG4gICAgcmV0dXJuIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5sb2dSZXN1bHQpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgbWVzc2FnZXMgZnJvbSBleGVjdXRpbmcgJHtjbWR9OiAke3Jlc3VsdC5sb2dSZXN1bHR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5zdGRvdXQpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgY2FsbCAke2NtZH0gcmV0dXJuZWQgd2l0aCByZXN1bHQgJHtyZXN1bHQuc3Rkb3V0fSwgJHt0eXBlb2YgcmVzdWx0LnN0ZG91dH1gKTtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3VsdC5zdGRvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nLmRlYnVnKCgpID0+IGBjYWxsICR7Y21kfSByZXR1cm5lZCB3aXRob3V0IHN0ZG91dGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5jb25zdCBlcnJvckhhbmRsZXIgPSAoY21kKSA9PiB7XG4gICAgcmV0dXJuIChyZXN1bHQpID0+IHtcbiAgICAgICAgbG9nLmVycm9yKHJlc3VsdC5lcnJMaW5lKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5lcnJMaW5lO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IG9zYUNvbW1hbmRzID0ge1xuICAgIHNlbmRNZXNzYWdlOiAoYXBwbGVJRHMsIG1lc3NhZ2UsIGF0dGFjaG1lbnRzKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgc2VuZGluZyBNZXNzYWdlIHRvICR7YXBwbGVJRHMuam9pbignLCAnKX0sIGNvbnRlbnQgJyR7bWVzc2FnZX0nLCAke2F0dGFjaG1lbnRzID8gYXR0YWNobWVudHMubGVuZ3RoIDogMH0gYXR0YWNobWVudHNgKTtcbiAgICAgICAgcmV0dXJuIG9zYUpTKE9TWGNvbW1hbmRzLm9zYVNlbmRNZXNzYWdlLCBhcHBsZUlEcywgbWVzc2FnZSwgYXR0YWNobWVudHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUhhbmRsZXIoJ29zYVNlbmRNZXNzYWdlJykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FTZW5kTWVzc2FnZSAnICsgbWVzc2FnZSkpO1xuICAgIH0sXG4gICAgc2VuZEVtYWlsOiAoc3ViamVjdCwgdG8sIGNvbnRlbnQgPSAnJywgYXR0YWNobWVudHMpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+IGBzZW5kaW5nIGVtYWlsIHRvICcke3RvLmpvaW4oJywgJyl9JyB3aXRoIHN1YmplY3QgJyR7c3ViamVjdH0nLCBjb250ZW50ICcke2NvbnRlbnR9JywgJHthdHRhY2htZW50cyA/IGF0dGFjaG1lbnRzLmxlbmd0aCA6IDB9IGF0dGFjaG1lbnRzYCk7XG4gICAgICAgIHJldHVybiBvc2FKUyhPU1hjb21tYW5kcy5vc2FTZW5kRW1haWwsIHN1YmplY3QsIHRvWzBdLCBjb250ZW50LCBhdHRhY2htZW50cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhU2VuZEVtYWlsJykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FTZW5kRW1haWwgJyArIHN1YmplY3QpKTtcbiAgICB9LFxuICAgIGdldEVtYWlsOiAoZGF0ZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYGdldHRpbmcgZW1haWxzYCk7XG4gICAgICAgIHJldHVybiBvc2FKUyhPU1hjb21tYW5kcy5vc2FHZXRFbWFpbCwgZGF0ZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhR2V0RW1haWwnKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIoJ29zYUdldEVtYWlsJykpO1xuICAgIH0sXG4gICAgZmFjZXRpbWU6IChhcHBsZUlEKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiAnc3RhcnRpbmcgZmFjZXRpbWUgY2FsbCB3aXRoICcgKyBhcHBsZUlEKTtcbiAgICAgICAgcmV0dXJuIGV4ZWMoJ29wZW4gZmFjZXRpbWU6Ly8nICsgYXBwbGVJRClcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIoJ2ZhY2V0aW1lICcgKyBhcHBsZUlEKSk7XG4gICAgfSxcbiAgICBzYXk6ICh0ZXh0KSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiAnc2F5aW5nIFxcJycgKyB0ZXh0ICsgJ1xcJycpO1xuICAgICAgICByZXR1cm4gb3NhSlMoT1NYY29tbWFuZHMub3NhU2F5LCB0ZXh0KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VIYW5kbGVyKCdvc2FTYXknKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGBJIHNhaWQgJyR7dGV4dH0nYClcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIoJ29zYVNheSAnICsgdGV4dCkpO1xuICAgIH0sXG4gICAgbGF1bmNoOiAobmFtZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gJ2xhdW5jaGluZyBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgICAgcmV0dXJuIG9zYUpTKE9TWGNvbW1hbmRzLm9zYUxhdW5jaCwgbmFtZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhTGF1bmNoJykpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbG9nLmRlYnVnKG5hbWUgKyAnIHJ1bm5pbmc6ICcgKyByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIoJ29zYUxhdW5jaCAnICsgbmFtZSkpO1xuICAgIH0sXG4gICAgbGF1bmNoU2NyaXB0OiAobmFtZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gJ2xhdW5jaGluZyBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgICAgcmV0dXJuIG9zYUpTKE9TWGNvbW1hbmRzLm9zYUxhdW5jaFNjcmlwdCwgbmFtZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhTGF1bmNoU2NyaXB0JykpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbG9nLmRlYnVnKCgpID0+IG5hbWUgKyAnIHJ1bm5pbmc6ICcgKyByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIoJ29zYUxhdW5jaFNjcmlwdCAnICsgbmFtZSkpO1xuICAgIH0sXG4gICAgcXVpdDogKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IGkgPSBuYW1lLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKGkgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBsb2cuZGVidWcoKCkgPT4gJ3F1aXR0aW5nIFxcJycgKyBuYW1lICsgJ1xcJycpO1xuICAgICAgICByZXR1cm4gb3NhSlMoT1NYY29tbWFuZHMub3NhUXVpdCwgbmFtZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhUXVpdCcpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBuYW1lICsgJyBydW5uaW5nOiAnICsgcmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FRdWl0ICcgKyBuYW1lKSk7XG4gICAgfSxcbiAgICBpc1J1bm5pbmc6IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsYXNoID0gbmFtZS5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICBpZiAoc2xhc2ggPj0gMCkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKHNsYXNoICsgMSwgbmFtZS5sYXN0SW5kZXhPZignLicpKTtcbiAgICAgICAgfVxuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYGNoZWNraW5nIGlmICcke25hbWV9JyBpcyBydW5uaW5nYCk7XG4gICAgICAgIHJldHVybiBleGVjKCdwcyAtY3gnKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgaXNSdW5uaW5nIHJlc3VsdDogJHtyZXN1bHQuc3Rkb3V0LmluZGV4T2YobmFtZSl9ICR7cmVzdWx0LnN0ZG91dH1gKTtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0LnN0ZG91dC5pbmRleE9mKG5hbWUpID4gMCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdpc1J1bm5pbmcgJyArIG5hbWUpKTtcbiAgICB9LFxuICAgIHNldEJyaWdodG5lc3M6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gJ3NldHRpbmcgYnJpZ2h0bmVzcyB0byAnICsgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb3NhSlMoT1NYY29tbWFuZHMub3NhQnJpZ2h0bmVzcywgdmFsdWUpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUhhbmRsZXIoJ29zYUJyaWdodG5lc3MnKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG9zYUNvbW1hbmRzLnF1aXQoXCJTeXN0ZW0gUHJlZmVyZW5jZXNcIikpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FCcmlnaHRuZXNzICcgKyB2YWx1ZSkpO1xuICAgIH0sXG4gICAgc2V0Vm9sdW1lOiAodmFsdWUpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+ICdzZXR0aW5nIHZvbHVtZSB0byAnICsgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb3NhSlMoT1NYY29tbWFuZHMub3NhVm9sdW1lLCB2YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlSGFuZGxlcignb3NhVm9sdW1lJykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FWb2x1bWUgJyArIHZhbHVlKSk7XG4gICAgfSxcbiAgICBnZXRWb2x1bWU6ICgpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+ICdnZXR0aW5nIHZvbHVtZScpO1xuICAgICAgICByZXR1cm4gb3NhSlMoT1NYY29tbWFuZHMub3NhVm9sdW1lU2V0dGluZ3MpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZUhhbmRsZXIoJ29zYVZvbHVtZVNldHRpbmdzJykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FWb2x1bWVTZXR0aW5ncycpKTtcbiAgICB9LFxuICAgIHJlc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+ICdyZXN0YXJ0aW5nLi4uJyk7XG4gICAgICAgIHJldHVybiBvc2FKUyhPU1hjb21tYW5kcy5vc2FSZXN0YXJ0KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VIYW5kbGVyKCdvc2FSZXN0YXJ0JykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKCdvc2FSZXN0YXJ0ICcpKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjNOaFEyOXRiV0Z1WkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YjNOaFEyOXRiV0Z1WkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJUVUVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4TlFVRm5RaXhSUVVGUkxFTkJRVU03UVVGRGRFTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSU3hOUVVGbExGRkJRVkVzUTBGQlF6dEJRVUZGTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBGQlF6TkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFVkJRVU1zVFVGQlVTeFpRVUZaTEVOQlFVTTdRVUZETVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZoTEZWQlFWVXNRMEZCUXp0QlFVVjRReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCVDNKQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVN1NVRkRia01zVDBGQlR5eERRVUZETEUxQlFYZERMRVZCUVZNc1JVRkJSVHRSUVVOMlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMREpDUVVFeVFpeEhRVUZITEV0QlFVc3NUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGQlJUdFJRVU12Uml4SlFVRkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRFppeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxGRkJRVkVzUjBGQlJ5eDVRa0ZCZVVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUzBGQlN5eFBRVUZQTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRelZHTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEY0VNN1lVRkJUVHRaUVVOSUxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc1VVRkJVU3hIUVVGSExEQkNRVUV3UWl4RFFVRkRMRU5CUVVNN1dVRkRja1FzVDBGQlR6dFRRVU5XTzBsQlEwd3NRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJReXhEUVVGRE8wRkJUVVlzVFVGQlRTeFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRlZMRVZCUVVVc1JVRkJSVHRKUVVOb1F5eFBRVUZQTEVOQlFVTXNUVUZCY1VNc1JVRkJVeXhGUVVGRk8xRkJRM0JFTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6RkNMRTlCUVU4c1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNN1FVRkRUaXhEUVVGRExFTkJRVU03UVVGVFJpeE5RVUZOTEVOQlFVTXNUVUZCVFN4WFFVRlhMRWRCUVVjN1NVRlBka0lzVjBGQlZ5eEZRVUZGTEVOQlFVTXNVVUZCYVVJc1JVRkJSU3hQUVVGakxFVkJRVVVzVjBGQmNVSXNSVUZCWlN4RlFVRkZPMUZCUTI1R0xFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc2MwSkJRWE5DTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zVDBGQlR5eE5RVUZOTEZkQlFWY3NRMEZCUVN4RFFVRkRMRU5CUVVFc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlFTeERRVUZETEVOQlFVRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOc1NTeFBRVUZQTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1kwRkJZeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVXNWMEZCVnl4RFFVRkRPMkZCUTI1RkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dGhRVU4yUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VUXNRMEZCUXp0SlFWVkVMRk5CUVZNc1JVRkJSU3hEUVVGRExFOUJRV01zUlVGQlJTeEZRVUZYTEVWQlFVVXNUMEZCVHl4SFFVRkRMRVZCUVVVc1JVRkJSU3hYUVVGeFFpeEZRVUZsTEVWQlFVVTdVVUZEZGtZc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4eFFrRkJjVUlzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEU5QlFVOHNaVUZCWlN4UFFVRlBMRTFCUVUwc1YwRkJWeXhEUVVGQkxFTkJRVU1zUTBGQlFTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJRU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlEzUktMRTlCUVU4c1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVWQlFVVXNWMEZCVnl4RFFVRkRPMkZCUTNaRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1lVRkRja01zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCVlVRc1VVRkJVU3hGUVVGRkxFTkJRVU1zU1VGQlV5eEZRVUZsTEVWQlFVVTdVVUZEYWtNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4blFrRkJaMElzUTBGQlF5eERRVUZETzFGQlEyaERMRTlCUVU4c1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRPMkZCUTNSRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1lVRkRjRU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZQUkN4UlFVRlJMRVZCUVVVc1EwRkJReXhQUVVGakxFVkJRV1VzUlVGQlJUdFJRVU4wUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeERRVUZCTERoQ1FVRTRRaXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzaEVMRTlCUVU4c1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRTlCUVU4c1EwRkJRenRoUVVOd1F5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkVMRU5CUVVNN1NVRlBSQ3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZYTEVWQlFXVXNSVUZCUlR0UlFVTTVRaXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMRmRCUVZjc1IwRkJSeXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZWtNc1QwRkJUeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNN1lVRkRha01zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVNdlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1YwRkJWeXhKUVVGSkxFZEJRVWNzUTBGQlF6dGhRVU01UWl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGUFJDeE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRlhMRVZCUVdVc1JVRkJSVHRSUVVOcVF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkROVU1zVDBGQlR5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU03WVVGRGNFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dGhRVU5zUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGRFdDeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1IwRkJSeXhaUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEZUVNc1QwRkJUeXhOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRMmhETEVOQlFVTXNRMEZCUXp0aFFVTkVMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVTlFTEZsQlFWa3NSVUZCUlN4RFFVRkRMRWxCUVZjc1JVRkJaU3hGUVVGRk8xRkJRM1pETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSU3hGUVVGRkxFTkJRVUVzWTBGQll5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNMVF5eFBRVUZQTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1pVRkJaU3hGUVVGRkxFbEJRVWtzUTBGQlF6dGhRVU14UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1lVRkRlRU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTFnc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4SlFVRkpMRWRCUVVjc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlF6VkRMRTlCUVU4c1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOb1F5eERRVUZETEVOQlFVTTdZVUZEUkN4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFUXNRMEZCUXp0SlFWRkVMRWxCUVVrc1JVRkJSU3hEUVVGRExFbEJRVmNzUlVGQlpTeEZRVUZGTzFGQlF5OUNMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEVkQlFVTXNRMEZCUXl4RlFVRkZPMWxCUVVVc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRGNrTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeGhRVUZoTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRek5ETEU5QlFVOHNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETzJGQlEyeERMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdZVUZEYUVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlExZ3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeEpRVUZKTEVkQlFVY3NXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRelZETEU5QlFVOHNUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTm9ReXhEUVVGRExFTkJRVU03WVVGRFJDeExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRlBSQ3hUUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZYTEVWQlFXVXNSVUZCUlR0UlFVTndReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JETEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVGRkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRE1VVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeG5Ra0ZCWjBJc1NVRkJTU3hqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03WVVGRGFFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRMWdzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3h4UWtGQmNVSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJrWXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BETEVOQlFVTXNRMEZCUXp0aFFVTk1MRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVTlFTEdGQlFXRXNSVUZCUlN4RFFVRkRMRXRCUVZrc1JVRkJaU3hGUVVGRk8xRkJRM3BETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSU3hGUVVGRkxFTkJRVUVzZDBKQlFYZENMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGFFUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUlVGQlJTeExRVUZMTEVOQlFVTTdZVUZEZWtNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0aFFVTjBReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJSQ3hEUVVGRE8wbEJUMFFzVTBGQlV5eEZRVUZGTEVOQlFVTXNTMEZCV1N4RlFVRmxMRVZCUVVVN1VVRkRja01zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3h2UWtGQmIwSXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNMVF5eFBRVUZQTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF6dGhRVU55UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJGQlEyeERMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRia1FzUTBGQlF6dEpRVTlFTEZOQlFWTXNSVUZCUlN4SFFVRm5RaXhGUVVGRk8xRkJRM3BDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSU3hGUVVGRkxFTkJRVUVzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRSUVVOb1F5eFBRVUZQTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTTdZVUZEZEVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8yRkJRekZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGTlJDeFBRVUZQTEVWQlFVVXNSMEZCWjBJc1JVRkJSVHRSUVVOMlFpeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlF5OUNMRTlCUVU4c1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTTdZVUZETDBJc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTnVReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dERRVU5LTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgTG9nLCBjcCB9IGZyb20gJ2hzbm9kZSc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdvc2FsaWInKTtcbmNvbnN0IGV4ZWMgPSBjcC5leGVjO1xuY29uc3QgY29uc29sZUxvZ1ByZWZpeCA9ICc8bm9kZS1vc2E+JztcbmNvbnN0IGNvbnNvbGVMb2dTdWZmaXggPSAnPC9ub2RlLW9zYT4nO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RMb2dzKHN0ZGVycikge1xuICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoY29uc29sZUxvZ1ByZWZpeCArICcgKFtcXFxcc1xcXFxTXSo/KSAnICsgY29uc29sZUxvZ1N1ZmZpeCwgJ2dtJyk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0ZGVyci5tYXRjaChyZWcpO1xuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlcy5zbGljZSgxKS5qb2luKCdcXG4nKSA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gb3NhSlMob3NhRnVuY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBqc29uQXJncyA9IGFyZ3MubWFwKGEgPT4gYCR7SlNPTi5zdHJpbmdpZnkoYSl9YCkuam9pbignLCcpO1xuICAgIGxvZy5kZWJ1ZygoKSA9PiBgYXJndW1lbnRzIHRvIGNhbGw6ICR7anNvbkFyZ3N9YCk7XG4gICAgY29uc3QgY29uc29sZUxvZ1BhdGNoID0gYFxuICAgIHZhciBvbGQgPSBjb25zb2xlLmxvZzsgXG4gICAgY29uc29sZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBcIiR7Y29uc29sZUxvZ1ByZWZpeH1cIik7IFxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFyZ3VtZW50cywgXCIke2NvbnNvbGVMb2dTdWZmaXh9XCIpOyBcbiAgICAgICAgb2xkLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7IFxuICAgIH07IFxuICAgIGAucmVwbGFjZSgvXFxuL2csICcnKTtcbiAgICBsb2cuZGVidWcoKCkgPT4gb3NhRnVuY3Rpb24udG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZnVuY3Rpb25DYWxsU3RyaW5nID0gY29uc29sZUxvZ1BhdGNoICsgJ0pTT04uc3RyaW5naWZ5KCgnICsgb3NhRnVuY3Rpb24udG9TdHJpbmcoKSArICcpKCcgKyBqc29uQXJncyArICcpKTsnO1xuICAgIGNvbnN0IGVzY2FwZWRDYWxsID0gZnVuY3Rpb25DYWxsU3RyaW5nXG4gICAgICAgIC5yZXBsYWNlKC8gKy9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJ1xcJydcIilcbiAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAubWFwKGwgPT4gbC50cmltKCkpO1xuICAgIGxldCBleGVjdXRlU3RyaW5nID0gXCJvc2FzY3JpcHQgLWwgSmF2YVNjcmlwdCBcIiArIGVzY2FwZWRDYWxsLm1hcChsID0+IFwiIC1lICdcIiArIGwgKyBcIidcIikuam9pbignJyk7XG4gICAgbG9nLmRlYnVnKGV4ZWN1dGVTdHJpbmcpO1xuICAgIHJldHVybiBleGVjKGV4ZWN1dGVTdHJpbmcpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgbG9nUmVzdWx0ID0gZXh0cmFjdExvZ3MocmVzdWx0LnN0ZGVycik7XG4gICAgICAgIHJldHVybiB7IHN0ZG91dDogcmVzdWx0LnN0ZG91dCwgbG9nUmVzdWx0OiBsb2dSZXN1bHQgfTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGVyci50b1N0cmluZygpLm1hdGNoKC8oRXJyb3Igb24gbGluZSAoXFxkKykpOiAoW1xcc1xcU10qKS9pKTtcbiAgICAgICAgY29uc3QgZXJyTGluZSA9ICFtYXRjaCA/ICcqPyonIDogYCR7bWF0Y2hbM10udHJpbSgpfSBvbiBsaW5lICR7bWF0Y2hbMl19OiAnJHtlc2NhcGVkQ2FsbFtwYXJzZUludChtYXRjaFsyXSkgLSAxXX0nYDtcbiAgICAgICAgdGhyb3cgeyBlcnIsIGVyckxpbmUgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIzTmhUR2xpTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMjl6WVV4cFlpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeE5RVUZQTEZGQlFWRXNRMEZCUXp0QlFVTnNReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNNVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJUM0pDTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzV1VGQldTeERRVUZETzBGQlEzUkRMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZVUZCWVN4RFFVRkRPMEZCUlhaRExFMUJRVTBzVlVGQlZTeFhRVUZYTEVOQlFVVXNUVUZCWVR0SlFVTjBReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOeVJpeE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyeERMRTlCUVU4c1QwRkJUeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRM1pFTEVOQlFVTTdRVUZOUkN4TlFVRk5MRlZCUVZVc1MwRkJTeXhEUVVGRkxGZEJRV1VzUlVGQlJTeEhRVUZITEVsQlFWYzdTVUZOYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJwRkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc2MwSkJRWE5DTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkhhRVFzVFVGQlRTeGxRVUZsTEVkQlFVYzdPenR0UkVGSGRVSXNaMEpCUVdkQ08yZEVRVU51UWl4blFrRkJaMEk3T3p0TFFVY3pSQ3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkpjRUlzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3hYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhOUVVGTkxHdENRVUZyUWl4SFFVRkhMR1ZCUVdVc1IwRkJSeXhyUWtGQmEwSXNSMEZCUnl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzU1VGQlNTeEhRVUZITEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRia2dzVFVGQlRTeFhRVUZYTEVkQlFVY3NhMEpCUVd0Q08xTkJRMnBETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRE8xTkJRMjVDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRE8xTkJSWEpDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkRXQ3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMR0ZCUVdFc1IwRkJSeXd3UWtGQk1FSXNSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZiRWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRKUVVWNlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNN1UwRkRja0lzU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCY1VNc1JVRkJSU3hGUVVGRk8xRkJRelZETEUxQlFVMHNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETjBNc1QwRkJUeXhGUVVGRExFMUJRVTBzUlVGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJReXhUUVVGVExFVkJRVU1zUTBGQlF6dEpRVU4yUkN4RFFVRkRMRU5CUVVNN1UwRkRSQ3hMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZQTEVWQlFVVXNSVUZCUlR0UlFVTm1MRTFCUVUwc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUVN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzV1VGQldTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEycElMRTFCUVUwc1JVRkJReXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFdDeERRVUZESW4wPSIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiY2hpbGRfcHJvY2Vzc1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImNyeXB0b1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImZzXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaHR0cFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBhdGhcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ1cmxcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==