Do you wanna have some toasts ?
===============================
jquery-toastmessage-plugin is a JQuery plugin which provides android-like notification messages. so, the toasted messages arrived on the screen in a seamless and natural way. They may or may not disrupt the user and they are still informative. It's a quite nice way to report info or error to the user.

The plugin is entirely customizable. So you can change the positioning, the required user action, the style and so on.

Getting the plugin
==================
The plugin is packaged inside a Jar file (Java Archive). So just download the jar file and unzip it:

    jquery.toastmessage.js        <-- the plugin
	css/jquery.toastmessage.css   <-- the css file
	images/error.png              <-- image
	images/close.gif              <-- image
	images/notice.png             <-- image
	images/success.png            <-- image
	images/warning.png            <-- image
	META-INF/MANIFEST.MF    
	META-INF/LICENSE        
	META-INF/NOTICE
	
You can also directly grab the files from the latest TAG from github [https://github.com/akquinet/jquery-toastmessage-plugin/tree/jquery-toastmessage-plugin-0.1.0](https://github.com/akquinet/jquery-toastmessage-plugin/tree/jquery-toastmessage-plugin-0.1.0]).

To get the plugin to work, you need the plugin javascript file, the css file and a couple of images.
	
Types of toast messages
=======================

You have 4 different toast types you can use. Each type comes with its own icon and colored border. The types are:

* notice
* success
* warning
* error

The following methods will display a toast message:

    $().toastmessage('showNoticeToast', 'some message here');
    $().toastmessage('showSuccessToast', "some message here");
    $().toastmessage('showWarningToast', "some message here");
    $().toastmessage('showErrorToast', "some message here");

These toast messages are shown on the upper right side of your browser and will stay for some time before they will fade out automatically.

To remove a special toast you can do that with

    $().toastmessage('removeToast', toastObject);

Example:

    // reconfiguring the toasts as sticky
    $().toastmessage({sticky : true});

    // saving the newly created toast into a variable
    var myToast =  $().toastmessage('showNoticeToast', 'some message here');

    // removing the toast
    $().toastmessage('removeToast', myToast);

Configuration of your toasts
============================
Sometime the predefined settings are not the good ones. You can alter the configuration to your special use case.

    // user configuration of all toastmessages to come:
    $().toastmessage({
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

Besides global configuration for all of your toasts. There is also a more general toast method provided where you can
modify the special toast on your hand.

    $().toastmessage('showToast', {
        text     : 'Some information for you ...',
        sticky   : true,
        type     : 'notice'
    });

This will show a toastmessage of type 'success' which is sticky and will not fade away by itself. All other already showed

To see some more examples please have a look into the Tests in src/test/javascript/ToastmessageTest.js

For further style configuration please see corresponding css file: src/main/resources/css/jquery-toastmessage.css


Disclaimer
==========
This plugin is based on the jquery-notice (http://sandbox.timbenniks.com/projects/jquery-notice/)
but is enhanced in several ways:

* configurable positioning
* convenience methods for different message types
* callback functionality when closing the toast
* included some nice free icons


License
=======
jquery-toastmessage-plugin is licensed under the Apache License 2.0. The project is founded by [akquinet A.G.](http://www.akquinet.de/en)