/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
    let shippingNameEl = document.getElementById("shippingName");
    let shippingZipEl = document.getElementById("shippingZip");

    let billingNameEl = document.getElementById("billingName");
    let billingZipEl = document.getElementById("billingZip");

    if (document.getElementById('same').checked) {
        billingNameEl.value = shippingNameEl.value;
        billingZipEl.value = shippingZipEl.value;
    } else {
        billingNameEl.value = '';
        billingZipEl.value = '';
    }
}
