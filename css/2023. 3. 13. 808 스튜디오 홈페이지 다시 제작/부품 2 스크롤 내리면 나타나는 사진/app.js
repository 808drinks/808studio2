window.onload = function() {
    // 모든 이미지와 설명을 가져옴
    var photos = document.querySelectorAll('.photo');
    var descriptions = document.querySelectorAll('.description');
    // 현재 보여지는 이미지와 설명의 인덱스를 저장할 변수
    var currentPhotoIndex = 0;
    var currentDescriptionIndex = 0;
  
    // 스크롤이 움직일 때마다 실행되는 함수
    window.addEventListener('scroll', function() {
      // 현재 스크롤 위치를 가져옴
      var scrollPosition = window.scrollY;
  
      // 다음 이미지와 설명이 보여지도록 currentPhotoIndex와 currentDescriptionIndex 값을 증가시킴
      if (scrollPosition > photos[currentPhotoIndex+1].getBoundingClientRect().top + window.pageYOffset) {
        currentPhotoIndex++;
        currentDescriptionIndex++;
      }
  
      // 이전 이미지와 설명이 보여지도록 currentPhotoIndex와 currentDescriptionIndex 값을 감소시킴
      if (currentPhotoIndex > 0 && scrollPosition < photos[currentPhotoIndex].getBoundingClientRect().top + window.pageYOffset) {
        currentPhotoIndex--;
        currentDescriptionIndex--;
      }
  
      // 모든 이미지와 설명을 돌며 현재 보여져야 할 이미지와 설명은 보여주고, 그 외에는 숨김
      for (var i = 0; i < photos.length; i++) {
        if (i === currentPhotoIndex) {
          photos[i].classList.add('active');
        } else {
          photos[i].classList.remove('active');
        }
      }
  
      for (var i = 0; i < descriptions.length; i++) {
        if (i === currentDescriptionIndex) {
          descriptions[i].classList.add('active');
        } else {
          descriptions[i].classList.remove('active');
        }
      }
    });
  };
  