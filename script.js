const text = document.getElementById("text");

async function get(book, chapter, verse) {

    let response = await fetch("https://bible-api.com/"+book+chapter+":"+verse+"?translation=almeida");
    let data = await response.json();
    myDisplay(data);
}

function getVerse(){
    var chapter = document.getElementById("chapter").value;
    var verse = document.getElementById("verse").value;
    var book = document.getElementById("book").value;
    get(book, chapter,verse);
}

function myDisplay(data){
    if(data.error){
        text.innerHTML = "Nao encontrado"
    }else{
        text.innerHTML = data.text;
    }
    
}