$(document).ready(function () {
  // Smooth scrolling for nav links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      const target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  // Tooltip activation
  $('[data-toggle="tooltip"]').tooltip();

  // Scroll-triggered animations
  $(window).on('scroll', function () {
    $('.desc').each(function () {
      const bottom_of_element = $(this).offset().top + $(this).outerHeight();
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element - 50) {
        $(this).addClass('animated fadeInUp');
      }
    });
  });

  // Optional: Populate portfolio items dynamically
  const projects = [
    { title: "Tribute Page", url: "https://codepen.io/MutantSpore/full/zrPpQz", img: "https://via.placeholder.com/300x200" },
    { title: "Survey Form", url: "#", img: "https://via.placeholder.com/300x200" }
  ];

  projects.forEach(project => {
    $('#theProjects').append(`
      <div class="col-sm-6 text-center">
        <div class="desc">
          <a href="${project.url}" target="_blank">
            <img src="${project.img}" alt="${project.title}" class="img-responsive center-block" style="margin-bottom:15px;">
            <h4>${project.title}</h4>
          </a>
        </div>
      </div>
    `);
  });
});
