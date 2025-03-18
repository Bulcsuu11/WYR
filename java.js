const valaszthatokerdesek = [
    { 
        a: "Nyernél 1M Ftot",
        b: "A legjobb barátod nyerne 10M Ftot",
        kepA: "1mpenz.jpg",
        kepB: "sokpenz.jpg",
        stats: { a: 65, b: 35 }
    },
    { 
        a: "Tudnád irányítani az időt",
        b: "Tudnád irányítani az időjárást",
        kepA: "ido.jpg",
        kepB: "weather.jpg",
        stats: { a: 45, b: 55 }
    },
    { 
        a: "Ne legyél soha fáradt",
        b: "Ne legyél soha beteg",
        kepA: "faradt.jpg",
        kepB: "beteg.jpg",
        stats: { a: 40, b: 60 }
    },
    { 
        a: "KFC",
        b: "McDonalds",
        kepA: "kfc.jpg",
        kepB: "mc.jpg",
        stats: { a: 38, b: 62 }
    },
    { 
        a: "Megenni egy denevér levest",
        b: "Megenni egy BALUT-A félig kifejlődött kacsatojást",
        kepA: "denever.jpg",
        kepB: "kacsa.jpg",
        stats: { a: 50, b: 50 }
    },
    { 
        a: "Tudj repülni de csak 1 méter magasan",
        b: "Tudj teleportálni de mindig meztelenül érkezel meg",
        stats: { a: 75, b: 25 }
    },
    { 
        a: "Nem látnád a családodat 1 évig",
        b: "nem látnád a barátaidat 1 évig",
        kepA: "csalad.jpg",
        kepB: "barat.jpg",
        stats: { a: 60, b: 40 }
    },
    { 
        a: "Nem használhatnád a telefonod 2 hétig",
        b: "Nem zuhanyozhatnál 2 hétig",
        kepA: "telefon.jpg",
        kepB: "zuhany.jpg",
        stats: { a: 70, b: 30 }
    },
    { 
        a: "Egy éjszakás kaland a pároddal",
        b: "Egy éjszakás kaland a celebrity Crushoddal",
        stats: { a: 80, b: 20 }
    },
    { 
        a: "Egy évig börtönbe lenni",
        b: "5 évig kómában lenni",
        kepA: "borton.jpg",
        kepB: "koma.jpg",
        stats: { a: 70, b: 30 }
    },
    { 
        a: "Nem hallgathatnál többé zenét",
        b: "Ugyan azt a zenét kellene hallgatnod életed végéig",
        stats: { a: 45, b: 55 }
    }
];

const milennehakerdesek = [
    {
        kerdes: "Mi lenne ha nagyon sok pénzed lenne, de mások utasításait kellene követned?",
        stats: { igen: 40, nem: 60 }
    },
    {
        kerdes: "Mi lenne ha szupererőd lenne, de magányosan kellene élned életed végéig?",
        stats: { igen: 25, nem: 75 }
    },
    {
        kerdes: "Mi lenne ha mindent megkaphatnál, amit csak akarsz, de minden kívánságod után egy horror filmben lennél 5 óráig?",
        stats: { igen: 36, nem: 64 }
    },
    {
        kerdes: "Mi lenne ha kapnál egy olyan munkát, amitől havonta kapsz 2 milliót, de utálnád azt a munkát nagyon?",
        stats: { igen: 55, nem: 45 }
    },
    {
        kerdes: "Mi lenne ha találnál a földön egy pénztárcát, amiben nagyon sok pénz van és iratok, felvennéd a kapcsolatot a tulajdonosával?",
        stats: { igen: 35, nem: 65 }
    },
    {
        kerdes: "Mi lenne ha kapnál minden pislogás után 1000 Ft-ot, de minden levegővételkor elbuknál 3000 Ft-ot?",
        stats: { igen: 60, nem: 40 }
    },
    {
        kerdes: "Mi lenne ha kapnál 1 millió Ft-ot, de az ellenségednek kéne adnod a felét?",
        stats: { igen: 60, nem: 40 }
    },
    {
        kerdes: "Mi lenne ha minden nap egy új szuperképességed lenne, de soha nem tudnád, melyik lesz az?",
        stats: { igen: 68, nem: 32 }
    },
    {
        kerdes: "Mi lenne ha minden titkot megtudhatnál, de soha nem oszthatnád meg senkivel?",
        stats: { igen: 54, nem: 46 }
    },
    {
        kerdes: "Mi lenne ha minden nap egy új kalandban lenne részed, de soha nem tudnád, mi vár rád?",
        stats: { igen: 72, nem: 28 }
    },
    {
        kerdes: "Mi lenne ha minden nap egy új álmod valóra válna, de soha nem tudnád, melyik lesz az?",
        stats: { igen: 61, nem: 39 }
    }
];

let jelenlegikerdesek = [];
let jelenlegikerdes = 0;
let kivalasztottvalasz = null;
let jelenlegijatek = '';

function jatekinditasa(jatektipus) {
    jelenlegijatek = jatektipus;
    jelenlegikerdesek = jatektipus === 'wyr' ? valaszthatokerdesek : milennehakerdesek;
    jelenlegikerdes = 0;
    kivalasztottvalasz = null;
    
    document.getElementById('menuTartalom').classList.add('rejtett');
    document.getElementById('jatekTartalom').classList.remove('rejtett');
    
    kerdesmutatasa();
    haladasfrissitese();
}

function menumegjelenitese() {
    document.getElementById('jatekTartalom').classList.add('rejtett');
    document.getElementById('menuTartalom').classList.remove('rejtett');
}

function valaszkivalasztasa(valasz) {
    if (kivalasztottvalasz) return;
    
    kivalasztottvalasz = valasz;
    document.getElementById(`valasz${valasz}`).classList.add('kivalasztott');
    
    const statisztikak = jelenlegijatek === 'wyr' 
        ? jelenlegikerdesek[jelenlegikerdes].stats
        : { A: jelenlegikerdesek[jelenlegikerdes].stats.igen, B: jelenlegikerdesek[jelenlegikerdes].stats.nem };
    
    document.getElementById('statisztikaA').textContent = `${statisztikak.a || statisztikak.A}%`;
    document.getElementById('statisztikaB').textContent = `${statisztikak.b || statisztikak.B}%`;
}

function kovetkezokerdes() {
    if (!kivalasztottvalasz && jelenlegikerdes !== 0) return;
    const regiKepek = document.querySelectorAll('.valasz-kep');
    regiKepek.forEach(kep => kep.remove());

    document.getElementById('valaszA').classList.remove('kivalasztott');
    document.getElementById('valaszB').classList.remove('kivalasztott');
    document.getElementById('statisztikaA').textContent = '';
    document.getElementById('statisztikaB').textContent = '';
    
    kivalasztottvalasz = null;
    jelenlegikerdes = (jelenlegikerdes + 1) % jelenlegikerdesek.length;
    
    kerdesmutatasa();
    haladasfrissitese();
}

function haladasfrissitese() {
    const haladas = ((jelenlegikerdes + 1) / jelenlegikerdesek.length) * 100;
    document.getElementById('haladasSav').style.width = `${haladas}%`;
}

function kerdesmutatasa() {
    if (jelenlegijatek === 'wyr') {
        document.getElementById('kerdes').textContent = "Melyiket választanád inkább?";
        document.getElementById('valaszASzoveg').textContent = jelenlegikerdesek[jelenlegikerdes].a;
        document.getElementById('valaszBSzoveg').textContent = jelenlegikerdesek[jelenlegikerdes].b;
        if (jelenlegikerdesek[jelenlegikerdes].kepA) {
            const kepA = document.createElement('img');
            kepA.src = jelenlegikerdesek[jelenlegikerdes].kepA;
            kepA.className = 'valasz-kep';
            document.getElementById('valaszA').insertBefore(kepA, document.getElementById('valaszASzoveg'));
        }
        
        if (jelenlegikerdesek[jelenlegikerdes].kepB) {
            const kepB = document.createElement('img');
            kepB.src = jelenlegikerdesek[jelenlegikerdes].kepB;
            kepB.className = 'valasz-kep';
            document.getElementById('valaszB').insertBefore(kepB, document.getElementById('valaszBSzoveg'));
        }
    } else {
        document.getElementById('kerdes').textContent = jelenlegikerdesek[jelenlegikerdes].kerdes;
        document.getElementById('valaszASzoveg').textContent = 'IGEN';
        document.getElementById('valaszBSzoveg').textContent = 'NEM';
    }
}