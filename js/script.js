function async(your_function, callback) {
    setTimeout(function() {
        your_function();
        if (callback) {callback();}
    }, 0);
}

$(function(){

    $("#btn-generate").click(function(){

        var h = parseInt($("#input-h").val());
        var m = parseInt($("#input-m").val());
        var t = parseFloat($("#input-t").val());
        var d = 1.0 / h;

    	$("#input-output").text("");

        async(function(){
            new WeightVectorsGenerator(m, h, d, t).generate();
        },null);

        return false;
    });
})
