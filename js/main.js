function showInformationSection() {

    document.getElementById("customer-info").style.visibility = "visible";
    document.getElementById("payment-section").style.visibility = "hidden";
    document.getElementById("confirm-section").style.visibility = "hidden";


}

function showPaymentSection() {
    document.getElementById("payment-section").style.visibility = "visible";
    document.getElementById("customer-info").style.visibility = "hidden";
    document.getElementById("confirm-section").style.visibility = "hidden";
}

function showConfirmSection() {
    document.getElementById("confirm-section").style.visibility = "visible";
    document.getElementById("customer-info").style.visibility = "hidden";
    document.getElementById("payment-section").style.visibility = "hidden";
}