(function (window) {
    function changePicture (){
        var height = window.innerHeight;
        var width = window.innerWidth;
        var picture = $("#picture").css("background-image");
        var namePicture = picture.substring(picture.lastIndexOf('/')+1, picture.length - 6);
        var image1 = ["logo1","logo1_1000px"];
        var image2 = "logo11";
        if (height > width && image1.includes(namePicture)){
            $("#picture").css("background-image","url('img/img-small/logo11.jpg')");
        }else if(height < width && namePicture === image2){
            $("#picture").css("background-image","url('img/img-small/logo1_1000px.jpg')");
        }
        if (width > 1000){
            $("#picture").css("background-image","url('img/logo1.jpg')");
        }
    }
    changePicture();
    window.addEventListener('resize',changePicture);

    $("#bars").click(function (event) {
        $("header").toggleClass('open');
    });

    $(document).mouseup(function (e) {
        var bars = $("#bars");
        if(!bars.is(e.target) && bars.has(e.target).length === 0 && window.innerWidth < 590){
            $("header").removeClass('open');
        }
    });

    function addImages(path, selector, season) {
        var imgPath = path;
        var imagesDiv = $(selector);
        var finalHtml = "";
        for (var i = 0; i < 6; i++) {
            let number = i+1;
            finalHtml += "<img src='" + imgPath + number + ".jpg' alt='season" + season + "_" + number + "' style='z-index: " + i + ";'>";
        }
        imagesDiv.html(finalHtml);
    }
    addImages("img/img-small/season1/s1_", "#first-season div", 1);
    addImages("img/img-small/season2/s2_", "#second-season div", 2);
    addImages("img/img-small/season3/s3_", "#third-season div", 3);
})(window);

