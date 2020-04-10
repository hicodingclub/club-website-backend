const schema = require('./tutor');

const brief = "name introduction photo specificSubjects[Tutoring Subjects]";
const detail = "name | grade | email | phoneNumber[Phone Number] | introduction | photo | acceptGrade[Open to Grade] | availableTime[Available Time] | specificSubjects[Tutoring Subjects] ";
const create = "name introduction email phoneNumber photo";
const edit = "name introduction email phoneNumber photo";
const textSearch = "name email phoneNumber";
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "LR",
    name: "Tutors",
    mraUI: {
        listType: 'grid', // table, list, or grid
        listTitle: 'Tutors',
        detailTitle: 'Tutors',
        detailActions: [
            ["I'm Interested in This Tutor", "/teach4life/enroll"]
        ],
    },
};