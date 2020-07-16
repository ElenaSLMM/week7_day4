module.exports = app => {

    // Base URLS
    app.use('/coasters', require('./coaster.routes.js'))
}