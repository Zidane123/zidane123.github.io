$(document).ready(function() {

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function keydown(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }

    function wheel(e) {
        preventDefault(e);
    }

    function disable_scroll() {
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = wheel;
        document.onkeydown = keydown;
    }

    function enable_scroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    }

    $('.pagination.vertical > div').click(function() {
        var num = $(this).index();

        if(num == 0) {

            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;

                $('.wrapper:eq(1),.wrapper:eq(4)').animate({'bottom':-actualHeight},1000);
                $('.wrapper:eq(2),.wrapper:eq(3)').animate({'right':-width},1000);

                slide = 0;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(0)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }

        }
        if(num == 1) {

            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;

                $('.wrapper:eq(1)').animate({'bottom':0},1000);
                $('.wrapper:eq(4)').animate({'bottom':-actualHeight},1000);
                $('.wrapper:eq(2),.wrapper:eq(3)').animate({'right':-width},1000);

                slide = 1;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(1)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }

        }
        if(num == 2) {

            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;


                $('.wrapper:eq(2),.wrapper:eq(3)').animate({'right':0},1000);
                $('.wrapper:eq(4),.wrapper:eq(1)').animate({'bottom':0},1000);

                slide = 4;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(4)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }

        }
    });

    $('.pagination.horizontal > div').click(function() {

        var num = $(this).index();

        if(num == 0) {
            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;

                $('.wrapper:eq(1)').animate({'bottom':0},1000);
                $('.wrapper:eq(4)').animate({'bottom':-actualHeight},1000);
                $('.wrapper:eq(2),.wrapper:eq(3)').animate({'right':-width},1000);

                slide = 1;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(1)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }
        }
        if(num == 1) {
            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;

                $('.wrapper:eq(2)').animate({'right':0},1000);
                $('.wrapper:eq(4)').animate({'bottom':-actualHeight},1000);
                $('.wrapper:eq(3)').animate({'right':-width},1000);

                slide = 2;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(2)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }
        }
        if(num == 2) {
            $(window).scrollTo(2+'px',{duration:500});
            if(flag) {
                flag = false;

                $('.wrapper:eq(3),.wrapper:eq(2)').animate({'right':0},1000);
                $('.wrapper:eq(4)').animate({'bottom':-actualHeight},1000);

                slide = 3;

                setTimeout(function() {
                    $('.wrapper').removeClass('active');
                    $('.wrapper:eq(3)').addClass('active');
                    changeColor();
                    changePagination();
                    flag = true;

                },1000);
            }
        }

    });
    function changeColor() {

        if($('.wrapper.active').hasClass('horslide')) {
            $('.pagination').addClass('secon');
        }
        else {
            $('.pagination').removeClass('secon');
        }

    }

    function changePagination() {

        $('.pagination.horizontal').hide();
        $('.pagination > div').removeClass('active_pagination');

        if($('.wrapper.active').hasClass('horslide')) {
            $('.pagination.horizontal').show();
            $('.pagination.vertical > div:eq(1)').addClass('active_pagination');
            $('.pagination.horizontal > div:eq('+(slide-1)+')').addClass('active_pagination');
        }
        else {
            if($('.wrapper.active').hasClass('last')) {
                $('.pagination.vertical > div:eq(2)').addClass('active_pagination');
            }
            else {
                $('.pagination.vertical > div:eq(0)').addClass('active_pagination');
            }


        }


    }

    setTimeout(function() {

        $('.wrapper:eq(0)').addClass('active');

    },1000);
    //$(window).scrollTo(2+'px',{duration:500});
    var width;
    var winHeight;
    var flag = true;
    var slide = 0;
    var actualHeight;

    function resize() {



        $('.second,.first').css({'paddingTop':0,'paddingBottom':0});

        winHeight = $(window).height();

        var paddingHeight = winHeight - 1024;

        if(paddingHeight > 0) {

            $('.second,.first').css({'paddingTop':paddingHeight/2,'paddingBottom':paddingHeight/2})
            $('wr').css('height',$('.wrapper').height());
            if(!$('.firstw').hasClass('active') && $('.firstw').css('bottom') != 0+'px') {
                $('.firstw').css('bottom',-winHeight + 'px');
            }
            if(!$('.last').hasClass('active') && $('.last').css('bottom') != 0+'px') {
                $('.last').css('bottom',-winHeight + 'px');
            }

        }
        else {
            $('wr').css('height',1024+ 'px');
            if(!$('.firstw').hasClass('active') && $('.firstw').css('bottom') != 0+'px') {
                $('.firstw').css('bottom',-1024+'px');
            }
            if(!$('.last').hasClass('active') && $('.last').css('bottom') != 0+'px') {
                $('.last').css('bottom',-1024+'px');
            }
        }

        if(winHeight > 1024) {
            actualHeight = winHeight;
        }
        else {
            actualHeight = 1024;
        }


        $('.wrapper').css('height',actualHeight);


        width = $(window).width() > 960 ? $(window).width() : 960;
        /*$('.horslide').css({'width':width+'px'});

        var height = $(window).height();
        $('.wrapper, .wrapper > div').height(parseInt(height)+'px');


        if($('body').css('top') != 0+'px') {
            $('body').css('top',-(height*slide)+'px');
            zeroHeight =  -(height*slide);
        }


        $('.horslide').css({'top':height+'px','width':width+'px'});
        */

        if(!$('.secw').hasClass('active') && $('.secw').css('right') != 0+'px') {
            $('.secw').css('right',-width);
        }
        if(!$('.thirdw').hasClass('active') && $('.thirdw').css('right') != 0+'px') {
            $('.thirdw').css('right',-width);
        }



    }



    $(document).mousewheel(function(event, delta) {


            if(actualHeight == winHeight) {

                if(delta < 0) {


                    if(!$('.last').hasClass('active')) {
                        if($('.firstw').hasClass('active') || $('.secw').hasClass('active')) {


                            if(flag) {
                                flag = false;

                                slide += 1;
                                $('.wrapper:eq('+slide+')').animate({'right':0},1000);



                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },1000);
                            }

                        }
                        else {
                            if(flag) {
                                flag = false;
                                slide += 1;

                                if($('.wrapper:eq(0)').hasClass('active')) {
                                    $('.wrapper:eq(0)').addClass('movie');
                                    setTimeout(function() {
                                        $('.wrapper:eq('+slide+')').animate({'bottom':0 },1000);

                                    },1000);
                                }
                                else {
                                    $('.wrapper:eq('+slide+')').animate({'bottom':0 },1000);
                                }



                                setTimeout(function() {
                                    flag = true;
                                    $('.wrapper').removeClass('active');

                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                },2000);

                                setTimeout(function() {
                                    $('.wrapper:eq(0)').removeClass('movie');
                                },2000);

                            }
                        }
                    }



                }

                else {



                    if(!$('.wrapper:eq(0)').hasClass('active')) {

                        if($('.wrapper:eq(1)').hasClass('active')) {

                            //$(window).scrollTo(2+'px',{duration:500});

                            if(flag) {


                                $('.wrapper:eq(1)').animate({'bottom':-actualHeight},1000);

                                setTimeout(function() {
                                    slide = 0;
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq(0)').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },1000);

                            }

                        }
                        else if($('.thirdw').hasClass('active') || $('.secw').hasClass('active')) {

                            //$(window).scrollTo(2+'px',{duration:500});
                            if(flag) {
                                flag = false;

                                $('.wrapper:eq('+slide+')').animate({'right':-width},1000);

                                slide -= 1;

                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },1000);
                            }

                        }

                        else {
                            //$(window).scrollTo(2+'px',{duration:500});
                            if(flag) {
                                flag = false;

                                $('.wrapper:eq('+slide+')').animate({'bottom':-actualHeight},1000);

                                slide -= 1;

                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },1000);
                            }
                        }
                    }


                }


            }
            else {

                if($(window).scrollTop() + $(window).height() == $(document).height()) {
                    if(!$('.last').hasClass('active')) {
                        disable_scroll();
                        if($('.horslide.firstw').hasClass('active') || $('.secw').hasClass('active')) {
                            $(window).scrollTo(2,500);
                            if(flag) {
                                flag = false;

                                slide += 1;
                                $('.wrapper:eq('+slide+')').animate({'right':0},1500);



                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },2000);
                            }

                        }
                        else {

                            if(flag) {

                                flag = false;
                                slide += 1;

                                if($('.raz').hasClass('active')) {
                                        $('.raz').addClass('movie');
                                        $('.horslide.firstw').clearQueue();
                                        $('.horslide.firstw').animate({'bottom':0+'px' },2000);
                                        slide = 1;
                                        $(window).scrollTo(2,500);
                                }
                                else {

                                    $(window).scrollTo(2,500);
                                    $('.wrapper:eq('+slide+')').animate({'bottom':0 },1500);

                                }



                                setTimeout(function() {
                                    flag = true;
                                    $('.wrapper').removeClass('active');

                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                },2000);

                                setTimeout(function() {
                                    $('.wrapper:eq(0)').removeClass('movie');
                                },2000);

                            }
                        }

                        setTimeout(function() {
                            enable_scroll();

                        },3000);
                    }





                }
                else if($(window).scrollTop() == 0) {



                    if(!$('.wrapper:eq(0)').hasClass('active')) {
                        disable_scroll();

                        $('body',document,window).scrollTo(2);


                        if($('.wrapper:eq(1)').hasClass('active')) {



                            if(flag) {


                                $('.wrapper:eq(1)').animate({'bottom':-actualHeight},1500);

                                setTimeout(function() {
                                    slide = 0;
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq(0)').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },2000);

                            }

                        }
                        else if($('.thirdw').hasClass('active') || $('.secw').hasClass('active')) {


                            if(flag) {
                                flag = false;

                                $('.wrapper:eq('+slide+')').animate({'right':-width},1500);

                                slide -= 1;

                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },2000);
                            }

                        }

                        else {

                            if(flag) {
                                flag = false;

                                $('.wrapper:eq('+slide+')').animate({'bottom':-actualHeight},1500);

                                slide -= 1;

                                setTimeout(function() {
                                    $('.wrapper').removeClass('active');
                                    $('.wrapper:eq('+slide+')').addClass('active');
                                    changeColor();
                                    changePagination();
                                    flag = true;

                                },2000);
                            }
                        }
                    }
                    else {

                        return;

                    }
                    setTimeout(function() {
                        enable_scroll();

                    },3000);

                }
                else {
                    return;
                }


            }
    });

    resize();

    $(window).resize(function() {

        resize();

    });



    /*setTimeout(function() {
        $('.img1').animate({right:'50px'},500);
        setTimeout(function() {
            $('.img2').animate({right:'230px'},500);
            setTimeout(function() {
                $('.animatediv').animate({
                    left: '0px',
                    opacity: "show",
                    height: "show"
                },300);
            },200);
        },500);
    },300);*/




});
