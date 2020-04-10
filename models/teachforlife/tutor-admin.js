const schema = require('./tutor');

const brief = "name introduction photo specificSubjects[Tutoring Subjects]";
const detail = "name | grade | email | phoneNumber[Phone Number] | introduction | photo | acceptGrade[Open to Grade] | availableTime[Available Time] | specificSubjects[Tutoring Subjects] ";
const create = "name | grade | email | phoneNumber[Phone Number] | introduction | photo | acceptGrade[Open to Grade] | availableTime[Available Time] | specificSubjects[Tutoring Subjects] ";
const edit = "name | grade | email | phoneNumber[Phone Number] | introduction | photo | acceptGrade[Open to Grade] | availableTime[Available Time] | specificSubjects[Tutoring Subjects] ";
const textSearch = "name email phoneNumber";
const index = "name";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    name: "Tutors",
    api: 'LCRUDMA', //E - export, M - eMail, A - Archive
    mraUI: {
        listType: 'grid', // table, list, or grid
    },
};