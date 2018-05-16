$(document).ready(function(){
    $('#header').load(
        'header.html',
        function(){
            //导航栏样式
            $(".container a").each(function(){
                var $this = $(this);
                // console.log($this[0].href);
                // console.log(String(window.location));
                // console.log($this[0].href == String(window.location));
                if($this[0].href == String(window.location) ){
                    $this.addClass('active');
                }else{
                    $this.removeClass('active');
                }
            });
        }
    )

})