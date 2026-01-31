$(document).ready(function() {
    
    // 1. 애니메이션 라이브러리 (AOS) 시작
    AOS.init({
        duration: 1000, // 애니메이션 속도 (1초)
        once: true      // 한 번만 실행되게 설정
    });

    // 2. 갤러리 슬라이드 기능 (Swiper)
    var swiper = new Swiper('.swiper-container', {
        loop: true,             // 무한 반복
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,        // 3초마다 자동 넘김
            disableOnInteraction: false,
        },
    });

    // 3. 디데이(D-Day) 카운트다운 기능
    function startDday() {
        // HTML에 숨겨둔 결혼식 날짜를 가져옵니다.
        var weddingDateStr = $('#weddingDateTime').val(); 
        var weddingDate = new Date(weddingDateStr).getTime();

        // 1초마다 남은 시간을 계산합니다.
        setInterval(function() {
            var now = new Date().getTime();
            var distance = weddingDate - now;

            // 날짜가 지났으면 '결혼했습니다' 표시
            if (distance < 0) {
                $('#dday_count').text("행복하게 잘 살겠습니다!");
                return;
            }

            // 시간 계산
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 화면에 표시 (예: 10일 5시간 30분 20초)
            // HTML 구조에 따라 텍스트 형식을 바꿀 수 있습니다.
            $('#dday_count').html(
                "<span style='color:#ff6b6b; font-size:1.5em;'>" + days + "</span>일 " +
                "<span>" + hours + "</span>시간 " +
                "<span>" + minutes + "</span>분 " +
                "<span>" + seconds + "</span>초 남음"
            );
        }, 1000);
    }
    
    // 디데이 기능 실행
    startDday();

    // 4. 더보기 버튼 기능 (갤러리 더보기)
    $('#btnMoreGallery').on('click', function() {
        alert('사진을 더 준비중입니다!');
        // 나중에 사진이 더 많아지면 숨겨진 사진을 보여주는 코드를 여기에 넣으면 됩니다.
    });

    // 5. 지도 버튼 (이미지니까 클릭하면 알림이나 링크 이동)
    $('#btnOpenTMap').on('click', function() {
        alert('티맵 앱으로 연결하시겠습니까? (지금은 기능 꺼둠)');
    });

    $('#btnOpenNaverMap').on('click', function() {
        alert('네이버 지도 앱으로 연결하시겠습니까? (지금은 기능 꺼둠)');
    });

    console.log("모바일 청첩장 스크립트가 정상적으로 로드되었습니다.");
});