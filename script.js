function szamitas() {
    /**összeadás esetén mivel a konkatenálásra vagyis az összefűzésre nincs külön jel, előforudhat, hogy nem fogja össze adni az inputból kivett számokat, hanem összefűzi. Ezért először ki kell őket parsolni. 
     * A deklarált változó név nem lehet ugyanaz mint az id.
     * Consolal ellenőrizhetjük sikerült e megcsípni, de csak akkor írja ki a konzolra, ha kattintunk a fő váltásra*/

    //Róma
    let roma = parseInt(rom.value);
    console.log(roma);
    let romarep = parseInt(romrep.value);
    console.log(romarep);
    let romabizt = parseInt(rombizt.checked ? "12000" : "0");
    console.log(romabizt);
    let bruttoroma = ((roma + romarep + romabizt) * romfo.value);

    //Jordánia
    let jordan = parseInt(jord.value);
    let jordanrep = parseInt(jordrep.value);
    let jordanbizt = parseInt(jordbizt.checked ? "12000" : "0");

    let bruttojordan = ((jordan + jordanrep + jordanbizt) * jordfo.value);

    //Törökország 

    let torokor = parseInt(torok.value);
    let torokorep = parseInt(torokrep.value);
    let torokorbizt = parseInt(torokbizt.checked ? "12000" : "0");

    let bruttotorok = ((torokor + torokorep + torokorbizt) * torokfo.value);

    //Marokkó

    let marokko = parseInt(mar.value);
    let marokkorep = parseInt(marrep.value);
    let marokkobizt = parseInt(marbizt.checked ? "12000" : "0");

    let bruttomarok = ((marokko + marokkorep + marokkobizt) * jordfo.value);

    //Összesítésék a sorok végén
    document.getElementById('romb').value = bruttoroma;
    document.getElementById('jordb').value = bruttojordan;
    document.getElementById('torokb').value = bruttotorok;
    document.getElementById('marb').value = bruttomarok;

    //Mindösszesen
    document.getElementById('bsum').value = bruttoroma + bruttojordan + bruttotorok + bruttomarok;

}