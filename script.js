function play(mp3_file) {               //Função que recebe um arquivo mp3 para executá-lo
    var audio = new Audio(mp3_file);
    audio.play();
}
/*Função que executa o som*/
function toque(som, elem, cls) {      //som: diretório com o som
    $(elem).click(function(){           //elem: classe ou id que será clicado
        $(elem).addClass(cls);          //cls: nova classe que será adicionada
        play(som);
    });
}
//Função para executar o exemplo, com tempo calculado, colorindo as respectivas cordas
function exemplo (som, tempo, elem1, cls1, elem2, cls2) {   //som: diretório com o som
    setTimeout(function (){                                     //tempo: delay na execução em ms
        $(elem1).addClass(cls1);                                //elem1: classe ou id que será add a nova classe
        play(som);                                              //cls1: nova classe que será adicionada
        $(elem2).removeClass(cls2);                             //elem2: classe ou id que será removida a nova classe
    }, tempo);                                                  //cls2: nova classe que será removida
}

$(document).ready(function(){

    //Ativar ou desativa neon do título (ativado por padrão)
    $("#lights").click(function(){
        if ($("#lights").is(":checked")){
            $("#lights").removeAttr("checked");
            $("#top").addClass("bright");
        }
        else {
            $("#lights").attr("checked");
            $("#top").removeClass("bright");
        }
    });

    /*Evento de cor e som ao clicar nas cordas*/
    /*Notas padrão*/
    toque("sounds/1ft.mp3", ".e", "chords");
    toque("sounds/2ft.mp3", ".b", "chords");
    toque("sounds/3ft.mp3", ".g", "chords");
    toque("sounds/4ft.mp3", ".d", "chords");
    toque("sounds/5ft.mp3", ".a", "chords");
    toque("sounds/6ft.mp3", ".em", "chords");

    /*Demais notas cheias da escala*/ 
    toque("sounds/c.mp3", ".c", "less");
    toque("sounds/f.mp3", ".f", "less");

    /*Acidentes na escala*/
    toque("sounds/cs.mp3", ".cs", "sharp");
    toque("sounds/ds.mp3", ".ds", "sharp");
    toque("sounds/fs.mp3", ".fs", "sharp");
    toque("sounds/gs.mp3", ".gs", "sharp");
    toque("sounds/as.mp3", ".as", "sharp");

    /*Remove classe que adiciona efeito de cor*/ 
    $("#guitar").mouseout(function(){
        $(".e").removeClass("chords");
        $(".b").removeClass("chords");
        $(".g").removeClass("chords");
        $(".d").removeClass("chords");
        $(".a").removeClass("chords");
        $(".em").removeClass("chords");

        $(".c").removeClass("less");
        $(".f").removeClass("less");
        
        $(".cs").removeClass("sharp");
        $(".ds").removeClass("sharp");
        $(".fs").removeClass("sharp");
        $(".gs").removeClass("sharp");
        $(".as").removeClass("sharp");
    });
    /*=================================================================================*/

    /*Tocar música de exemplo*/
    $("#nirvana").click(function(){
        $("#nirvana").addClass("songs");

        exemplo("sounds/6ft.mp3", 0, ".em", "chords", "","");
        exemplo("sounds/6ft.mp3", 500, ".em", "chords", ".em","chords");
        exemplo("sounds/f.mp3", 700, ".f", "less", ".em","chords");
        exemplo("sounds/fs.mp3", 1200, ".fs", "sharp", ".f","less");
        exemplo("sounds/5ft.mp3", 1700, ".a", "chords", ".fs","sharp");
        exemplo("sounds/fs.mp3", 2100, ".fs", "sharp", ".a","chords");
        exemplo("sounds/5ft.mp3", 2500, ".a", "chords", ".fs","sharp");
        exemplo("sounds/fs.mp3", 2800, ".fs", "sharp", ".a","chords");
        exemplo("sounds/fs.mp3", 3200, ".fs", "sharp", "","");
        exemplo("sounds/f.mp3", 3700, ".f", "less", ".fs","sharp");
        exemplo("sounds/6ft.mp3", 4100, ".em", "chords", ".f","less");
        exemplo("sounds/5ft.mp3", 4500, ".a", "chords", ".em","chords");
        exemplo("sounds/6ft.mp3", 5000, ".em", "chords", ".a","chords");
        exemplo("sounds/6ft.mp3", 5500, ".em", "chords", ".em","chords");
        setTimeout(function(){
            $("#nirvana").removeClass("songs");
        }, 5600);
    });
});