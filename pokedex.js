$(document).ready(function () {
    for (var i = 1; i < 152; i++) {
        var container = $(".container")
        var url = "http://pokeapi.co/media/img/" + i + ".png";
        container.append("<img" + " id=" + i + " src=" + url + ">");
    }
    
    $(document).on("click", "img", function() {
        var id = $(this).attr("id");
        var link = "http://pokeapi.co/api/v1/pokemon/" + id;
        $.get(link, function(res) {
            var name = "<h2>Name: " + res.name + "</h2>";
            $(".name").html(name);
            var image = "<img src=" + "http://pokeapi.co/media/img/" + id + ".png>"
            $(".pokeimg").html(image);
            var hei = "<h2>Height: " + res.height + "</h2>";
            $(".height").html(hei);
            var wei = "<h2>Weight: " + res.weight + "</h2>"
            $(".weight").html(wei);
            var leixing = "";
            leixing += "<h2>Types: </h2>"
            leixing += "<ul>";
            for(var i = 0; i < res.types.length; i++) {
                leixing += "<li>" + res.types[i].name + "</li>";
            }
            leixing += "</ul>"
            $(".type").html(leixing);
        })
    })
        
    
})
