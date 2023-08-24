const Project = require('../models/project');

module.exports.home = async function (req, res) {
  try {
    let data = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects:data,
    });
  } catch(err) {
    console.log('Error', err);
    return;
  }
};