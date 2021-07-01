
// Z-interfaces (customization interfaces) for sites model

const fs = require('fs');
const createError = require('http-errors');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// generate: request go generate size
async function generate(req, res, next, restController) {
    /*
    if (!req.muser) {
        return next(createError(400, 'Bad request: user unknown.'));
    }
    const site = await restController.ModelExecute2(
        "Site",
        [
            ['findOne', [{muser_id: req.muser._id}]]
        ]
    );

    const packageDir = "build/node_modules";
    const buildDir = `build/${Date.now()}`;
    const arr = site.projectFile.split('/');
    const zipFile = `storage/uploads/users/${site.muser_id}/${arr[arr.length-1]}`;
    let duration = 0;
    try {
        let result;
        result = await exec('pwd');
        const pwd = result.stdout;
        const startTime = Date.now();
        await exec(`mkdir -p ${buildDir}`);
        await exec(`unzip ${zipFile} -d ${buildDir}`);
        await exec(`cp -r ${packageDir} ${buildDir}`);
        handleBuildOutput(`${buildDir}/angular.json`);

        result = await exec(`cd ${buildDir}; npm install`)
        console.log("stdout: ", result.stdout)
        console.log("stderr: ", result.stderr)
        duration = Date.now() - startTime;
        // await exec(`rm -rf ${buildDir}`);
    } catch (err) {
        // console.log('error code: ', err.code);
        // console.log('error cmd: ', err.cmd);
        // console.log('error output: ', err.stderr);
        // console.log('std output: ', err.stdout);
        
        // await exec(`rm -rf ${buildDir}`);
        if (err.cmd) {
            return next(createError(500, `${err.cmd}; exit code: ${err.code}; ${err.stderr}`));
        }
        return next(createError(400, err.message));
    }
    console.log("build duration: ", duration);
    */
    return res.send(['good']);
}

function handleBuildOutput(filePath) {
    var obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!obj.projects) {
        throw new Error("no projects found");
    }
    let keys = Object.keys(obj.projects);
    if (keys.length != 1) {
        throw new Error("no projects found");
    }
    project = obj.projects[keys[0]];
    if (!project.architect) {
        throw new Error("no architect found");
    }
    if (!project.architect.build) {
        throw new Error("no architect build found");
    }
    if (!project.architect.build.options) {
        throw new Error("no build options found");
    }
    project.architect.build.options.outputPath = "dist/build"
    let data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(filePath, data);
}

module.exports = {
    create: [{
        name: 'generate',
        fn: generate,
    }],
    update: [],
    read: [],
    delete: [],
}