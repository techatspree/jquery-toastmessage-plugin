describe('the Toastmessage jQuery Plugin',function(){
	
	var rootId = 'testContainer';
	
	// Remove any exisiting toastmessage container
	beforeEach(function() {
        $('.toast-container').remove();
    });
	
	//Clean it up after each spec
	afterEach(function() {
        $('.toast-container').remove();
	});
		
	//Specs
	describe('showing toastmessages',function() {
		it('shows a success toastmessage',function(){

            // call to our jquery plugin under test
            $().toastmessage('showSuccessToast', "SUCCESS");

			expect($('.toast-container').length > 0).toBeTruthy();
			expect($('.toast-item.toast-type-success').length > 0).toBeTruthy();
		});
		it('shows a notice toastmessage',function(){
            // call to our jquery plugin under test
            $().toastmessage('showNoticeToast', "NOTICE");

			expect($('.toast-container').length > 0).toBeTruthy();
			expect($('.toast-item.toast-type-notice').length > 0).toBeTruthy();
		});
		it('shows a warning toastmessage',function(){
            // call to our jquery plugin under test
            $().toastmessage('showWarningToast', "WARNING");

			expect($('.toast-container').length > 0).toBeTruthy();
			expect($('.toast-item.toast-type-warning').length > 0).toBeTruthy();
		});
		it('shows a error toastmessage',function(){
            // call to our jquery plugin under test
            $().toastmessage('showErrorToast', "ERROR");

			expect($('.toast-container').length > 0).toBeTruthy();
			expect($('.toast-item.toast-type-error').length > 0).toBeTruthy();
		});
		it('shows a user configured toastmessage',function(){
            // call to our jquery plugin under test
            $().toastmessage({
                sticky   : true,
                position : 'top-right',
                closeText: ''
            });
            $().toastmessage('showToast', {
                text     : 'Success Dialog',
                type     : 'success'
            });

			expect($('.toast-container').length > 0).toBeTruthy();
			expect($('.toast-item.toast-type-success').length > 0).toBeTruthy();
		});
	});


    describe('removing toastmessages',function() {
        it('remove the toast with a mouseclick',function(){

            var callback = jasmine.createSpy('Close-Callback');

            // call to our jquery plugin under test
            $().toastmessage('showToast', {
                text     : 'Success Dialog',
                sticky   : true,
                position : 'top-right',
                type     : 'success',
                closeText: '',
                close    : callback
            });

            expect(callback).not.toHaveBeenCalled();

            // closing the dialog manually
            $('.toast-item-close').click();

            expect(callback).toHaveBeenCalled();
        });
        it('remove the toast via api call',function(){

            var callback = jasmine.createSpy('Close-Callback');

            // call to our jquery plugin under test
            var toast = $().toastmessage('showToast', {
                text     : 'Success Dialog',
                sticky   : true,
                position : 'top-right',
                type     : 'success',
                closeText: '',
                close    : callback
            });

            expect(callback).not.toHaveBeenCalled();

            // closing the dialog manually
            $().toastmessage('removeToast', toast, { close : callback});

            expect(callback).toHaveBeenCalled();
        });
    });

});