
// 定位跟随城市选择
let oCity = $('.city-choose .city-select');
let oCityItem = $('.content > ul > .nav-item');
oCity.html($('.nav-item.selected').text());
oCityItem.on('click', function () {
   oCity.html($(this).get(0).innerHTML);
   oCityItem.removeClass('selected');
   $(this).addClass('selected')
});

// 页面滚动导航固定顶部
window.onscroll = function () {
    $('.city-nav').addClass('scroll');
    $('.city-nav-more').addClass('scroll');
    if($(window).scrollTop() == 0){
        $('.city-nav').removeClass('scroll');
        $('.city-nav-more').removeClass('scroll');
    }
};

// 更多城市
$('.city-nav-more').hide();
let state = 1;
$('.more-city').on('click', function () {
    if(state){
       $('.city-nav-more').show();
       $('.more-city .more-tri').css({animation: 'more 200ms linear',animationIterationCount:1, animationFillMode: 'forwards'});
       state = 0;
    }
    else{
        $('.city-nav-more').hide();
       $('.more-city .more-tri').css({animation: 'less 200ms linear',animationIterationCount:1, animationFillMode: 'forwards'});
       state = 1;
    }
});

// 创建li鼠标悬浮效果
let oHotLi = $('.hot .content li');
let oSaleLi = $('.onSale .content li');
// 大卖热销鼠标悬浮
liHover(oHotLi);
// 立减专区鼠标悬浮
liHover(oSaleLi);
function liHover(wrapper) {
    wrapper.on('mouseenter', function () {
        let self = $(this);
        self.find('.top').find('p').addClass('hover');
        self.on('mouseleave', function () {
            self.find('.top').find('p').removeClass('hover');
        })
    });
}
/*.normal-box{*/
/*width: 100px;*/
/*height: 100px;*/
/*background-color: orange;*/
/*}*/
/*.normal-box2{*/
/*width: 200px;*/
/*height: 40px;*/
/*background-color: #428bca;*/
/*}*/