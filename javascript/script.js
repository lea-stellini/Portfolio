const toggle = document.getElementById('toggle');



toggle.addEventListener('click', () => {
   inEnglish();
   inFrench();
    })


const inEnglish = (sentence) => {
    const french = document.querySelectorAll(".french");
    for(let i=0; i < french.length; i++){
        french[i].classList.toggle("done");
    }

    localStorageUpdate();
}

const inFrench = (sentence) => {
    const english = document.querySelectorAll(".english");
    for(let i=0; i < english.length; i++){
        english[i].classList.toggle("done");
    }

    localStorageUpdate();
}

const localStorageUpdate = () => {
    const savesFrench = document.querySelectorAll('.french');
    const savesEnglish = document.querySelectorAll('.english');

    const langue = [];

    savesFrench.forEach((save) => {
        langue.push({
            done: save.classList.contains('done'),
        });
    });

    savesEnglish.forEach((save) => {
        langue.push({
            done: save.classList.contains('done'),
        });
    });

    localStorage.setItem("langue", JSON.stringify(langue));
}

let langue = localStorage.getItem("langue");
let langueJson = JSON.parse(langue);


if(langueJson){
    langueJson.forEach(sentence => {
        sentence = langue.done;
    })
        
    }
