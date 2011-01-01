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

load(basePath + "jquery.toastmessage.js");

function testShowSuccessToast() {

    $().toastmessage('showSuccessToast', "SUCCESS");

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Success Toastmessage", '.toast-item.toast-type-success');
}

function testShowNoticeToast() {

    $().toastmessage('showNoticeToast', "NOTICE");

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Notice Toastmessage", '.toast-item.toast-type-notice');
}

function testWarningToast() {

    $().toastmessage('showWarningToast', "WARNING");

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Notice Toastmessage", '.toast-item.toast-type-warning');
}

function testErrorToast() {

    $().toastmessage('showErrorToast', "ERROR");

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Notice Toastmessage", '.toast-item.toast-type-error');
}


function testShowConfiguredToast() {
    $().toastmessage({
        sticky   : true,
        position : 'top-right',
        closeText: ''
    });
    $().toastmessage('showToast', {
        text     : 'Success Dialog',
        type     : 'success'
    });

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Success Toastmessage", '.toast-item.toast-type-success');
}

function testCloseToastItem() {
    var closeCalled = false;
    var toast = $().toastmessage('showToast', {
        text     : 'Success Dialog',
        sticky   : true,
        position : 'top-right',
        type     : 'success'
    });

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Success Toastmessage", '.toast-item.toast-type-success');
    assertFalse("CloseCallback should not called yet!", closeCalled);

    // closing the toast via API call
    $().toastmessage('removeToast', toast, { close : function () { closeCalled = true; }});
    assertTrue("CloseCallback was not called!", closeCalled);
}

function testShowConfiguredToastWithCloseFunction() {
    var closeCalled = false;
    $().toastmessage('showToast', {
        text     : 'Success Dialog',
        sticky   : true,
        position : 'top-right',
        type     : 'success',
        closeText: '',
        close    : function () {closeCalled = true; }
    });

    assertCreatedAndVisible("Toastmessage Container", '.toast-container');
    assertCreatedAndVisible("Success Toastmessage", '.toast-item.toast-type-success');
    assertFalse("CloseCallback should not called yet!", closeCalled);

    // closing the dialog manually
    $('.toast-item-close').click();
    assertTrue("CloseCallback was not called!", closeCalled);
}


function assertCreatedAndVisible(elementDescription, cssSelector) {
    assertTrue(elementDescription + " not created!", $(cssSelector).length > 0);
    assertTrue(elementDescription + " not shown!", $(cssSelector).is(':visible'));

}
