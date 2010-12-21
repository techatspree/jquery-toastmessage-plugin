/**
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
*   for further style configuration please see corresponding css file: jquery-toastmessage.css
*   
*   This plugin is based on the jquery-notice (http://sandbox.timbenniks.com/projects/jquery-notice/)
*   but is enhanced in several ways 
*   - configurable positioning
*   - convinience methods for different message types
*   - callback functionality when closing the toast
*   
*   Author: Daniel Bremer-Tonn
**/
(function($)
{
	$.extend({			
        showToast: function(options)
		{	
			var defaults = {
				inEffect: 			{opacity: 'show'},	// in effect
				inEffectDuration: 	600,				// in effect duration in miliseconds
				stayTime: 			3000,				// time in miliseconds before the item has to disappear
				text: 				'',					// content of the item
				sticky: 			false,				// should the toast item sticky or not?
				type: 				'notice', 			// notice, warning, error, success
                position:           'center',           // top-right, center, middle-bottom ... Position of the toast container holding different toast. Position can be set only once at the very first call, changing the position after the first call does nothing
                closeText:          '',                // text which will be shown as close button, set to '' when you want to introduce an image via css
                close:              null                // callback function when the toastmessage is closed
            };
			
			// declare variables
			var options, toastWrapAll, toastItemOuter, toastItemInner, toastItemClose, toastItemImage;
								
			options 		= $.extend({}, defaults, options);
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
            if (options.close != null)
            {
                options.close();
            }
		}
	});
})(jQuery);