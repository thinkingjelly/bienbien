$(document).ready(function(){
    //tab
    $('.tabBtn>li, .sliderTabBtn>li').click(function(e){
        e.preventDefault();
    })
    
    var tabBtn = $(".tabBtn>li");//각각의 버튼을 변수에 저장
    var tabCon = $(".tabCon>div");//각각의 콘텐츠를 변수에 저장

    tabCon.hide().eq(0).show();

    tabBtn.click(function(){
        var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
        var index = target.index();   //버튼의 순서를 변수에 저장
        //alert(index);
        tabBtn.removeClass("active");    //버튼의 클래스를 삭제
        target.addClass("active");    //타겟의 클래스를 추가
        tabCon.hide(300);
        tabCon.eq(index).show();
    });
    
    //brand slider
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1',
        swipe:false,
    });
    $('.slider-nav1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        focusOnSelect: true,
        vertical: true,
        swipe:false,
    });
    
    //best slider
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2',
        swipe:false,
    });
    $('.slider-nav2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        focusOnSelect: true,
        vertical: true,
        swipe:false,
    });
    //한 개 이상의 슬릭슬라이더 사용시 클래스 중복사용하면 오류가 발생할 수 있다(클래스따로적용!)
    
    //brand tab
    
    //When page loads...
    $(".brandTab").hide(); //Hide all content
    $(".brandTabBtn li:first").addClass("active").show(); //Activate first tab
    $(".brandTab:first-child").show(); //Show first tab content

    //On Click Event
    $(".brandTabBtn li").click(function() {

        $(".brandTabBtn li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".brandTab").hide(); //Hide all tab content
        
        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('.slider-for1, .slider-nav1').slick('setPosition');
    });
    
    
    //best tab
    
    //When page loads...
    $(".bestTab").hide(); //Hide all content
    $(".bestTabBtn li:first").addClass("active").show(); //Activate first tab
    $(".bestTab:first-child").show(); //Show first tab content

    //On Click Event
    $(".bestTabBtn li").click(function() {

        $(".bestTabBtn li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".bestTab").hide(); //Hide all tab content
        
        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        $('.slider-for2, .slider-nav2').slick('setPosition');
    });

    
})