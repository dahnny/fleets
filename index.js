
$(document).ready(function () {
    $('#bologna-list a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });


    /* About me slider */
    $('.car-description').slick(
        {
            slidesToShow: 3,
            prevArrow: '<span class="span-arrow slick-prev"><strong><</strong></span>',
            nextArrow: '<span class="span-arrow slick-next"><strong>></strong></span>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
    );

    $('.car-services-container').slick({
        autoplay:true,
        slidesToShow: 3,
        prevArrow: ' <span class="carousel-control-prev-icon slick-prev" aria-hidden="true"></span>',
        nextArrow: ' <span class="carousel-control-next-icon slick-next" aria-hidden="true"></span>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });



});
