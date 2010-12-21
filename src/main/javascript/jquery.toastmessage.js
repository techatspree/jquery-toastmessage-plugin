/*
 * Copyright 2010 akquinet
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  This JQuery Plugin will help you in showing some nice Toast-Message like notification messages. The behavior is
 *  similar to the android Toast class.
 *  You have 4 different toast types you can show. Each type comes with its own icon and colored border. The types are:
 *  - notice
 *  - success
 *  - warning
 *  - error
 *
 *	$.show[type]Toast() and $.removeToast()
 *	These functions create and remove toast messages like in android
 *
 *   Example:
 *   // simple ErrorToast which is not sticky
 *   $.showErrorToast('Houston we have a probl ....');
 *
 *   // user configured toastmessage:
 *   $.showToast({
 *      text     : 'Hello World',
 *      sticky   : true,
 *      position : 'top-right',
 *      type     : 'success',
 *      close    : function () {console.log("toast is closed ...");}
 *   });
 *
 *   To see some more examples please have a look into the Tests in src/test/javascript/ToastmessageTest.js
 *
 *   For further style configuration please see corresponding css file: jquery-toastmessage.css
 *
 *   This plugin is based on the jquery-notice (http://sandbox.timbenniks.com/projects/jquery-notice/)
 *   but is enhanced in several ways
 *   - configurable positioning
 *   - convenience methods for different message types
 *   - callback functionality when closing the toast
 *
 *   Author: Daniel Bremer-Tonn
**/
(function($)
{
	$.extend({			
        showToast: function(_options)
		{	
			var defaults = {
				inEffect: 			{opacity: 'show'},	// in effect
				inEffectDuration: 	600,				// in effect duration in miliseconds
				stayTime: 			3000,				// time in miliseconds before the item has to disappear
				text: 				'',					// content of the item
				sticky: 			false,				// should the toast item sticky or not?
				type: 				'notice', 			// notice, warning, error, success
                position:           'center',           // top-right, center, middle-bottom ... Position of the toast container holding different toast. Position can be set only once at the very first call, changing the position after the first call does nothing
                closeText:          '',                 // text which will be shown as close button, set to '' when you want to introduce an image via css
                close:              null                // callback function when the toastmessage is closed
            };
			
			// declare variables
            var toastWrapAll, toastItemOuter, toastItemInner, toastItemClose, toastItemImage;
								
			var options 	= $.extend({}, defaults, _options);
			toastWrapAll	= (!$('.toast-container').length) ? $('<div></div>').addClass('toast-container').addClass('toast-position-' + options.position).appendTo('body') : $('.toast-container');
			toastItemOuter	= $('<div></div>').addClass('toast-item-wrapper');
			toastItemInner	= $('<div></div>').hide().addClass('toast-item toast-type-' + options.type).appendTo(toastWrapAll).html('<p>'+options.text+'</p>').animate(options.inEffect, options.inEffectDuration).wrap(toastItemOuter);
			toastItemClose	= $('<div></div>').addClass('toast-item-close').prependTo(toastItemInner).html(options.closeText).click(function() { $.removeToast(toastItemInner, options) });
			toastItemImage  = $('<div></div>').addClass('toast-item-image').addClass('toast-item-image-' + options.type).prependTo(toastItemInner);           

            if(navigator.userAgent.match(/MSIE 6/i))
			{
		    	toastWrapAll.css({top: document.documentElement.scrollTop});
		    }
			            
			if(!options.sticky)
			{
				setTimeout(function()
				{
					$.removeToast(toastItemInner, options);
				},
				options.stayTime);
			}
		},
		
        showNoticeToast : function (message)
        {
            var options = {text : message, type : 'notice'};
            $.showToast(options);
        },

        showSuccessToast : function (message)
        {
            var options = {text : message, type : 'success'};
            $.showToast(options);
        },

        showErrorToast : function (message)
        {
            var options = {text : message, type : 'error'};
            $.showToast(options);
        },

        showWarningToast : function (message)
        {
            var options = {text : message, type : 'warning'};
            $.showToast(options);
        },
        
        
		removeToast: function(obj, options)
		{
			obj.animate({opacity: '0'}, 600, function()
			{
				obj.parent().animate({height: '0px'}, 300, function()
				{
					obj.parent().remove();
				});
			});
            // callback
            if (options.close !== null)
            {
                options.close();
            }
		}
	});
})(jQuery);