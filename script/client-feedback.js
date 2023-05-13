$(document).ready(function() {
    let slides = $(".feedback-window-items li");
    let activeIndex = 0;
    function showSlide(index) {
    slides.eq(activeIndex).removeClass("active");
    slides.eq(index).addClass("active");
    activeIndex = index;
    }
    $(".next-btn").click(function() {
    let nextIndex = (activeIndex + 1) % slides.length;
    showSlide(nextIndex);
    });
    $(".prev-btn").click(function() {
    let prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
    });
    $(".feedback-window-icons img").click(function() {
    let index = $(this).index();
    showSlide(index);
    let text = $(this).attr("data-text");
    let image = $(this).attr("src");
    $(".feedback-window-text").text(text);
    $(".feedback-window-image img").attr("src", image);
    });
    });
