$(document).ready(function() {
    $('#registerBtn').click(function() {
        $('#eventCard').fadeIn();
        generateSeats(10);

        setTimeout(function() {
            $('#eventCard').fadeOut();
        }, 4000);
    });

    function generateSeats(count) {
        $('#seatContainer').empty();
        for (let i = 1; i <= count; i++) {
            let seat = $('<div class="seat">' + i + '</div>');
            seat.click(function() {
                if (!$(this).hasClass('booked')) {
                    $(this).addClass('booked').text('X');
                }
            });
            $('#seatContainer').append(seat);
        }
    }
});
