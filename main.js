$(document).ready(function() {

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var list = [];

    var app = new Vue({
        el: "#app",
        data: {
            list: list
        },
        methods: {
            remove: function(id) {
                this.list.splice(id, 1);
            }
        }
    })

    var btnswitch = false;
    var lotter
    $("#btn_Start").click(function() {
        if ($("#min").val() === "" || $("#max").val() === "" ) {
            $(".meesage-box").css("display", "block");
            $("#meesage").text("數字沒有打歐!");
            $("#min").addClass("shadow");
            $("#max").addClass("shadow");
        } else {
            $(".meesage-box").css("display", "none");
            $("#meesage").text("");
            $("#min").removeClass("shadow");
            $("#max").removeClass("shadow");
            if (!btnswitch) {
                lotter = setInterval(function() {
                    var numans = getRandom(parseInt($('#min').val()), parseInt($('#max').val()));
                    $("#num").text(numans);
                }, 10);
                btnswitch = true;
                $("#btn_Start").text("就決定是你了!");
            } else {
                clearInterval(lotter);
                list.push($("#num").text());

                btnswitch = false;
                $("#btn_Start").text("開抽");
            }
        }


    });

});