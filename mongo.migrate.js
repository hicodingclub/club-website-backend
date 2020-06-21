
var mode="do"; // only "do" will do
var appName = 'hcc';
var modules = {
    'auth': [
        'musers',
        'musergroups',
        'maccounts',
        'mroles',
        'maccountRoles',
        'mmodules',
        'mpubmodules',
        'mpermissions',
        'mpubaccesses',
    ],
    'file': [
        'mfiles',
        'mfilegroups',
    ],
    'email': [
        'emailsettings',
        'emailtemplates'
    ],
    'publicinfo': [
        'Events',
        "Articles",
        'Faqs',
        'GeneralInfos',
        'KeyNotes',
        'Alerts',
        'Pages',
    ],
    'summerProgram': [
        'SPEnrollments',
    ],
    'teachforlife': [
        'Tutors',
        'Enrollments',
    ],
};

var pluralizeWords = {
    'mpubaccesses': 'mpubaccess',
    'emailsettings': 'emailsettings',
}

var ignoreSchema = ['system.indexes'];

var formattedModules = {}
for (var i in modules) {
    var schemas = modules[i];
    formattedModules[i] = [];
    for (var j = 0; j < schemas.length; j++) {
        formattedModules[i].push(schemas[j].toLowerCase());
    }
}
var findModuleName = function(schemaName) {
    var sn = schemaName;

    for (var i in formattedModules) {
        var schemas = formattedModules[i];
        for (var j = 0; j < schemas.length; j++) {
            if (schemas[j] === sn) {
                return i;
            }
        }
    }
    return null;
}

var collections = db.getCollectionNames();

for (var i = 0; i < collections.length; i+=1) {
    collection = collections[i];
    if (ignoreSchema.includes(collection)) {
        print('collection ignored --- ' + collection);
    } else if (collection.startsWith(appName)) {
        print('started with app name!!! ' + collection);
    } else {
        let mname = findModuleName(collection);
        if (mname) {
            let newCollection = collection.slice(0, -1);
            if (pluralizeWords[collection]) {
                newCollection = pluralizeWords[collection];
            }
            var newName = `${appName}_${mname}_${newCollection}`;
            if (collections.includes(newName)) {
                print(`need to migrate data ++++> ${collection} to ${newName}`);
                if (mode === 'do') {
                    db[newName].drop();
                    db[collection].renameCollection(newName, false);
                }
            } else {
                print(`need to change name ===> ${collection} to ${newName}`);
                if (mode === 'do') {
                    db[collection].renameCollection(newName, false);
                }
            }
        } else {
            print(`need to delete collection <--- ${collection}`);
            if (mode === 'do') {
                db[collection].drop();
            }
        }
    }
}
