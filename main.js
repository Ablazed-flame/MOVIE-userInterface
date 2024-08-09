          var swiper = new Swiper('.swiper-container', {
              slidesPerView: 4, // Set number of slides per view
              spaceBetween: 20, // Space between slides in pixels
              centeredSlides: false,
              autoplay: {
                  delay: 5000,
                  disableOnInteraction: false,
              },
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              breakpoints: {
                  280: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                  },
                  320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                  },
                  510: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                  },
                  758: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                  },
                  900: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                  },
              },
          });
        //Show video
        let playButton = document.querySelector('.play-movie');
        let videoContainer = document.querySelector('.video-container');
        let myvideo = document.querySelector('#myvideo');
        let closeButton = document.querySelector('.video-container .fa-times');
        
        playButton.addEventListener('click', () => {
            videoContainer.classList.add('show-video');
            myvideo.play();
        });
        
        // Close video
        closeButton.addEventListener('click', () => {
            videoContainer.classList.remove('show-video');
            myvideo.pause();
            myvideo.currentTime = 0;
        });