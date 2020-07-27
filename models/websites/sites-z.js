
// Z-interfaces (customization interfaces) for sites model

// generate: request go generate size
function generate(req, res, next, restController) {
    console.log('generate called');
    return res.send(['good']);
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