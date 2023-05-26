$(document).ready(function () {
    // Get the query parameters from the URL
    const lessonName = getParameterByName('lessonName');
    let name = getParameterByName('name');
    const date = getParameterByName('date');

    // Cache jQuery selectors
    const qrcodeElement = document.getElementById("qrcode");
    const downloadButton = $('#downloadButton');

    // Generate the QR code
    const qrcode = new QRCode(qrcodeElement, {
        text: `https://webartisans-4a3a2.web.app/certificate.html?name=${name}&lesson=${lessonName}&date=${date}`,
        width: 240,
        height: 240
    });

    // Add click event listener to the download button
    downloadButton.on('click', () => {
        // Open a new window with the URL to download the PDF
        const pdfUrl = `https://webartisans-4a3a2.web.app/certificate.html?name=${name}&lesson=${lessonName}&date=${date}`;
        window.open(pdfUrl, '_blank');
    });

    // Call the PHP script to store the QR details in the database
    $.ajax({
        url: '../php/qr-code.php',
        type: 'POST',
        data: {
            name: name,
            lessonName: lessonName,
            date: date
        },
        success: (response) => {
            console.log(response); // Print the response from the PHP script
        },
        error: (xhr, status, error) => {
            console.error(error); // Print any errors that occur during the AJAX request
        }
    });

    // Function to get the value of a query parameter from the URL
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        const results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
});