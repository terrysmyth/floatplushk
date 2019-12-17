$(document).ready(function() {

    // CLASSES FILTER

    $(".badgeCard").hide();
    $(".badgeCard.hongKongFootballClub").show();




    // RESPONSIVE SLICK GALLERY

    if (window.innerWidth > 700) {
        $('.slickGalley').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            dots: true
        });

    } else {
        $('.slickGalley').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            dots: true
        });

    }

    $(window).resize(function() {

        if (window.innerWidth > 700) {
            $('.slickGalley').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                infinite: true,
                dots: true
            });

        } else {
            $('.slickGalley').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                infinite: true,
                dots: true
            });

        }


    });



});

function getClasses(c) {

    $(".badgeCard").hide();

    $(".venueFilter").removeClass("active");
    $(this).addClass("active");

    if (c == 'hkfc') {
        $(".badgeCard.hongKongFootballClub").show();
        $("#venueTitle").html("The Hong Kong Football Club")

    } else if (c == 'ryc') {
        $(".badgeCard.theRoyalHkYachtClub").show();
        $("#venueTitle").html("The Royal Yacht Club")

    } else if (c == 'jcc') {
        $(".badgeCard.theJewishCommunityCentre").show();
        $("#venueTitle").html("The Jewish Community Centre")

    } else if (c == 'rbc') {
        $(".badgeCard.repulseBayClub").show();
        $("#venueTitle").html("Repulse Bay Club")

    }

}

// MEMBER AND NON MEMBER TABS

$(".membersOnly").hide();

function changeFilter(i, n) {


    if (n == 'a') {
        $("#nonMemberBtn" + i).addClass("active")
        $("#memberBtn" + i).removeClass("active");

        $(".embed" + i).show();
        $(".mOnly" + i).hide();

    } else {
        $("#memberBtn" + i).addClass("active");
        $("#nonMemberBtn" + i).removeClass("active");

        $(".embed" + i).hide();
        $(".mOnly" + i).show();

    }






}