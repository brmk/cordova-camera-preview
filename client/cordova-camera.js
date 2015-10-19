// Meteor.startup(function(){
//     var context = document.getElementById('camera').getContext("2d");
//     var camImage = new Image();
//     camImage.onload = function() {
//       context.drawImage(camImage, 0, 0);
//     };
//     CanvasCamera.capture = function(data) {
//       camImage.src = data;
//     };
// })
Meteor.startup( function() {
    // canvasMain = document.getElementById("camera");
    // // for(plugin in cordova){
    // //   console.log(plugin,cordova.plugins[plugin]);
    // // }
    // CanvasCamera.initialize(canvasMain);
    // define options

});

Template.hello.helpers({
    'status': function(){
        return Session.get('status');
    }
})
Template.hello.events({
  "click #initialize":function(){
    canvasMain = document.getElementById("camera");
    CanvasCamera.initialize(canvasMain);
  },
  "click #start":function(){
    var opt = {
        quality: 75,
        destinationType: CanvasCamera.DestinationType.DATA_URL,
        encodingType: CanvasCamera.EncodingType.JPEG,
        saveToPhotoAlbum:true,
        correctOrientation:true,
        width:640,
        height:480
    };
    CanvasCamera.start(opt);
  },
  "click .deviceposition": function () {

    var newDevicePosition = CanvasCamera.CameraPosition.BACK;
    if (document.getElementById("deviceposition_back").checked)
    {
        newDevicePosition = CanvasCamera.CameraPosition.BACK;
    }
    else if (document.getElementById("deviceposition_front").checked)
    {
        newDevicePosition = CanvasCamera.CameraPosition.FRONT;
    }
    //
    CanvasCamera.setCameraPosition(newDevicePosition);
  },
  "click .flashmode": function() {
    console.log('flashmode change')
    var newFlashMode = CanvasCamera.FlashMode.OFF;
    if (document.getElementById("flashmode_off").checked)
    {
        newFlashMode = CanvasCamera.FlashMode.OFF;
    }
    else if (document.getElementById("flashmode_on").checked)
    {
        newFlashMode = CanvasCamera.FlashMode.ON;
    }
    else if (document.getElementById("flashmode_auto").checked)
    {
        newFlashMode = CanvasCamera.FlashMode.AUTO;
    }

    CanvasCamera.setFlashMode(newFlashMode);
  },
  "click #capture" : function() {
    Session.set('status','capture');
    CanvasCamera.takePicture(onTakeSuccess);
    function onTakeSuccess(data) {
        console.log(data); 
        Session.set('status', data)
    }
  }


})

