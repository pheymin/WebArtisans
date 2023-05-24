$(document).ready(function () {
    // Make an AJAX request to retrieve QR details
    $.ajax({
        url: '../php/view-qr.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response.error) {
                // Display the error message if no completed lessons
                $('#qrcodesContainer').html(response.error);
            } else {
                // Loop through the QR details and append them to the HTML
                $.each(response, function (index, qrData) {
                    // Generate the QR code URL
                    var qrUrl = 'https://webartisans-4a3a2.web.app/certificate.html?name=' + qrData.studentName + '&lesson=' + qrData.lessonName + '&date=' + qrData.date;

                    // Create the qrcard HTML
                    var qrcard = `
                        <div class="card w-full glass mb-7">
                            <div class="card-body border-l-8 border-primary rounded-[1rem] flex flex-col items-center md:flex-row md:relative">
                                <div class="w-28 h-28" id="qrcode${index}"></div>
                                <div class="flex my-3 md:ml-5">
                                    <div>
                                        <h6 class="text-xs opacity-80 mt-1">Course:</h6>
                                        <h6 class="text-xs opacity-80 mt-4">Lesson:</h6>
                                        <h6 class="text-xs opacity-80 mt-4">Date:</h6>
                                    </div>
                                    <div class="ml-5">
                                        <h5 class="mb-2">${qrData.studentName}</h5>
                                        <h5 class="mb-2">${qrData.lessonName}</h5>
                                        <h5>${qrData.date}</h5>
                                    </div>
                                </div>
                                <button class="btn btn-primary w-full md:w-fit md:absolute md:bottom-0 md:right-0 md:mb-5 md:mr-5">Download</button>
                            </div>
                        </div>`;

                    // Append the qrcard HTML to the container
                    $('#qrcodesContainer').append(qrcard);

                    // Generate the QR code using the QRCode library
                    var qrcode = new QRCode(document.getElementById(`qrcode${index}`), {
                        text: qrUrl,
                        width: 240,
                        height: 240
                    });
                });
            }
        },
        error: function (xhr, status, error) {
            console.error(error); // Print any errors that occur during the AJAX request
        }
    });
});
