
//   $(document).ready(function() {
//      let $container = $('.gallery-content-photo');
//      let $button = $('.button-load');
//      let loadCount = 9;
//      let totalItems = $('.gallery-photo-item').length;

//     $container.masonry({
//         itemSelector: '.gallery-photo-item',
//         columnWidth: '.gallery-content-photo-size'
//     });

//     $container.imagesLoaded(function() {
//         $container.masonry();
//     });

//     $button.on('click', function() {
//          let $hiddenItems = $('.gallery-photo-item-noctive').slice(0, loadCount).removeClass('gallery-photo-item-noctive');
//         if ($hiddenItems.length === totalItems) {
//             $button.hide();
//         }
//         $container.masonry('appended', $hiddenItems);
//     });
// });

const loadMoreButton = document.querySelector('.button-load');

loadMoreButton.addEventListener('click', function() {
  const galleryContent = document.querySelector('.gallery-content-photo');
  
  for (let i = 0; i < 3; i++) {
    const newPhoto = document.createElement('img');
    const imgSrc = `./img/masonry/3${i < 10 ? '0' + i : i}.jpg`;
    newPhoto.setAttribute('src', imgSrc);
    newPhoto.classList.add('gallery-photo-item-one');
    newPhoto.style.position = 'absolute';
    newPhoto.style.left = '50%';
    newPhoto.style.top = (800 + i * 200) + 'px';
    galleryContent.appendChild(newPhoto);
  }
});

