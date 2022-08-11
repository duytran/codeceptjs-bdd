module.exports = function () {
    if (process.env.profile && process.env.profile.match('device:[a-zA-Z]')) {
        process.env.DRIVER = 'Playwright';
    } else if (process.env.profile && process.env.profile.match('webdriver:[a-zA-Z]')) {
        process.env.DRIVER = 'Webdriver';
    } else if (process.env.profile && process.env.profile.match('playwright:[a-zA-Z]')) {
        process.env.DRIVER = 'Playwright';
    }
};
