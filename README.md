Do you wanna have some toasts ?
===============================
jquery-toastmessage-plugin is a JQuery plugin which provides android-like notification messages.



Types of toast messages
=======================

You have 4 different toast types you can show. Each type comes with its own icon and colored border. The types are:
* notice
* success
* warning
* error

The following methods will show a toast message:

    $.showNoticeToast("some message here");
    $.showSuccessToast("some message here");
    $.showWarningToast("some message here");
    $.showErrorToast("some message here");

These toast messages are show on the upper right side of your browser and will stay for some time before they will fade out automatically.

Configuration of your toasts
============================
Sometime the predefined settings are not the good ones. You can use the more generell toast method to configure your
toast as you want.

    // user configured toastmessage:
    $.showToast({
        text     : 'Hello World',
        sticky   : true,
        position : 'top-right',
        type     : 'success',
        close    : function () {console.log("toast is closed ...");}
    });


These are the provided configuration properties with its default values:

    inEffectDuration: 	600,				// in effect duration in miliseconds
    stayTime: 			3000,				// time in miliseconds before the item has to disappear
    text: 				'',					// content of the item
    sticky: 			false,				// should the toast item sticky or not?
    type: 				'notice', 			// notice, warning, error, success
    position:           'center',           // top-right, center, middle-bottom ... Position of the toast container holding different toast. Position can be set only once at the very first call, changing the position after the first call does nothing
    closeText:          '',                 // text which will be shown as close button, set to '' when you want to introduce an image via css
    close:              null                // callback function when the toastmessage is closed

To see some more examples please have a look into the Tests in src/test/javascript/ToastmessageTest.js

For further style configuration please see corresponding css file: src/main/resources/css/jquery-toastmessage.css


Disclaimer
==========
This plugin is based on the jquery-notice (http://sandbox.timbenniks.com/projects/jquery-notice/)
but is enhanced in several ways
 - configurable positioning
 - convenience methods for different message types
 - callback functionality when closing the toast


License
=======
jquery-toastmessage-plugin is licensed under the Apache License 2.0. The project is founded by [akquinet A.G.](http://www.akquinet.de/en)