
function winners (goodRace, goodarmyNumber, evilRace, evilArmyNumber){
    const goodRaces = {
        'Pelosos' : 1,
        'Surenos' : 2,
        'Enanos' : 3,
        'Numeroneanos' : 4,
        'Elfos':5
    }
    const evilRaces = {
        'SurenosMalos' : 2,
        'Orcos' : 2,
        'Goblins' : 2,
        'Huargos' : 3,
        'Trolls' : 5
    }

    let goodTotalValue;
    let goodChosen;
    for(let key in goodRaces){
        if (key === goodRace){
           goodTotalValue = goodRaces[key] * goodarmyNumber
            goodChosen = key;
        }
    }
    let evilTotalValue;
    let evilChosen;
    for(let key in evilRaces){
        if (key === evilRace){
            evilTotalValue = evilRaces[key] * evilArmyNumber
            evilChosen = key;
        }
    }

    //Deciding the winners in a battle.

    if(goodTotalValue === evilTotalValue) {
        console.log(evilChosen + ' EMPATAN CONTRA ' + goodChosen)
    } else if (goodTotalValue < evilTotalValue) {
        console.log(evilChosen + ' GANA EN CONTRA ' + goodChosen)
    } else if (goodTotalValue > evilTotalValue) {
        console.log(goodChosen + ' GANA EN CONTRA ' + evilChosen)
    } else {
        console.log('El bando es incorrecto')
    }
}
  //Modeling the army
winners('Pelosos', 20, 'SurenosMalos', 10)
