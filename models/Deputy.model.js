const { Schema, model } = require("mongoose");

const DeputySchema = new Schema(
  {
    shortname: String,
    slug: String,
    name: String,
    gender: String,
    party: String,
    active: Boolean,
    birthdate: String,
    occupation: String,
    occupation2: String,
    url_parlamento: String,
    image_url: String,
    mandates: [{
        legislature: Number,
        party: String,
        constituency: String,
        start_date: String,
        end_date: String,
        party: String,
        activity_url: String,
      }],
  }
);

module.exports = model("Deputy", DeputySchema);