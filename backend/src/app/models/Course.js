const { default: mongoose } = require('mongoose');
const mongooseDelete = require('mongoose-delete')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255},
    description: { type: String},
    image: { type: String},
    videoID: { type: String},
    level: { type: String},
    slug: { type: String, slug: 'name'}

}, {
    timestamps: true
});

mongoose.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Course', Course);