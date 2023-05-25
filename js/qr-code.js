$(document).ready(function () {
    // Get the query parameters from the URL
    var studentName = getParameterByName('id');
    var lessonName = getParameterByName('stuId');
    var date = getParameterByName('date');

    // Generate the QR code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: 'https://webartisans-4a3a2.web.app/certificate.html?name=' + studentName + '&lesson=' + lessonName + '&date=' + date,
        width: 240,
        height: 240
    });

    // Add click event listener to the download button
    $('#downloadButton').on('click', function () {
        // Open a new window with the URL to download the PDF
        var pdfUrl = 'https://webartisans-4a3a2.web.app/certificate.html?name=' + studentName + '&lesson=' + lessonName + '&date=' + date;
        window.open(pdfUrl, '_blank');
    });

    console.log(studentName, lessonName, date);
    // Call the PHP script to store the QR details in the database
    $.ajax({
        url: '../php/qr-code.php',
        type: 'POST',
        data: {
            studentName: studentName,
            lessonName: lessonName,
            date: date
        },
        success: function (response) {
            console.log(response); // Print the response from the PHP script
        },
        error: function (xhr, status, error) {
            console.error(error); // Print any errors that occur during the AJAX request
        }
    });
});

// Function to get the value of a query parameter from the URL
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
