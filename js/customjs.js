// Tabs
$('#btn-nav-previous').click(function() {
    $(".menu-inner-box").animate({ scrollLeft: "-=100px" });
});

$('#btn-nav-next').click(function() {
    $(".menu-inner-box").animate({ scrollLeft: "+=100px" });
});

//scroll Smooth
function SmoothScroll() {
    window.scrollTo({ end: 0, behavior: 'smooth' })
}