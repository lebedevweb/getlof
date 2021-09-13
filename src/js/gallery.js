(() => {
  let images = document.querySelectorAll('.gallery_images');
  const lightbox = document.querySelector('.gallery_lightbox'),
    lightboxImage = document.querySelector('.gallery_lightbox_image');
  let imgIndex;

  if (lightbox) {
    for (const image of images) {
      setListener(image, 'click', function () {
        addClass(lightbox, 'active');
        lightboxImage.setAttribute('src', this.dataset.big)
        imgIndex = parseInt(this.dataset.id);
      });
    }
    const close = document.querySelector('.gallery_lightbox_header_close');

    setListener(close, 'click', closeLightbox);

    function closeLightbox() {
      removeClass(lightbox, 'active');
    }

    const back = document.querySelector('.gallery_lightbox_btnback'),
      next = document.querySelector('.gallery_lightbox_btnnext');
    setListener(back, 'click', () => {
      imgIndex--
      if (imgIndex < 0) {
        imgIndex = images.length - 1
        printSrc(imgIndex)
      }
      printSrc(imgIndex)
    })

    setListener(next, 'click', () => {
      imgIndex++
      if (imgIndex >= images.length) {
        imgIndex = 0
        printSrc(imgIndex)
      }
      printSrc(imgIndex)
    })

    function printSrc(val) {
      lightboxImage.setAttribute('src', images[val].dataset.big)
    }
  }
})();
