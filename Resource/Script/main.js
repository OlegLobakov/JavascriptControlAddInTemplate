let navControlContainer;


function InitializeControlAddIn() {

    //controlAddIn is built-in element
    navControlContainer = $("#controlAddIn"); 

    //demo code
    let html = '<p align="center">I am Javascript Control Add-In</p>';
    navControlContainer.append(html);

    //Notify NAV
    RaiseCALEvent('ControlAddIsReady', []);
}

//Update Data from NAV
function Update() {
    try {

        RaiseCALEvent('OnUpdate', ['OK']);
    } catch (err) {
        RaiseCALEvent('OnError', [err]);
    }
}

function RaiseCALEvent(eventName, args) {
    /// <summary>Raises an event trigger in C/AL` code.</summary>
    /// <param name="eventName">Name of the C/AL event trigger. The event must belong to the control and be declared in the IAdvancedExtensibilityControl interface.</param>
    /// <param name="args">Any event trigger parameters to pass to C/AL. This parameter is always of the array type, so you must enclose it in [].</param>
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(eventName, args);
}

window.__controlAddInError__NAV = window.__controlAddInError;
window.__controlAddInError = function (e) {
    console.log("Unhandled error has occurred: '" + e.message + "' - Stack: " + e.stack);
    window.__controlAddInError__NAV(e);
};