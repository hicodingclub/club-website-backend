var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schm = new Schema(
  {
    category: {type: String, required: true, maxlength: 100},
  },
  {
    timestamps: true
  }
);

var brief = "category createdAt muser_id";
var detail = "category createdAt updatedAt muser_id";
var create = "category";
var edit = "category";
var textSearch = "category";
var index = "category muser_id";

var views = [brief, detail, create, edit, textSearch, index]

//Export model
//module.exports = mongoose.model('Student', StudentSchema);


module.exports = {
  schema: schm,
  views: views,
  patch: ['muser_id'], //extra fields to patch to schema
  owner: {enable: true, type: 'user'},
};
