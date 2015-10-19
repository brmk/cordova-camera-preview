
// This section sets up some basic app metadata,
// the entire section is optional.


App.info({
    id: 'canvas.camera.test',
    name: 'Canvas camera test',
    version: '0',
    description: 'canvas camera test',
    author: 'brmk',
    email: 'paulbrmk@gmail.com'
});



// Set PhoneGap/Cordova preferences
// color is alpha,RGB
App.setPreference('BackgroundColor', '0xffDDffFF');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Fullscreen', true);

App.accessRule("*");


