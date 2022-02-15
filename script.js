const text = document.getElementById("content-html");

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
        text.innerHTML = getError();
    }else{
        text.innerHTML = "<div class='card'><h2>"+data.reference+"</h2><span id='text' class='text'>"+data.text+"</span></div>";
    }
    
}

function getError(){
    return "<div class='card'><div style='margin-top: 2.5em;'><svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-file-x' viewBox='0 0 16 16'><path d='M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z'/><path d='M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z'/></svg></div><h1>Não encontrado</h1></div>"
}

function getInputCard(){
    text.innerHTML = "<div class='card'>"+
    "<h1>Pesquise um versículo </h1>"+
    "<div class='input-box'>"+
    "<label for='book'>Livro</label>"+
    "<input type='text' name='book' id='book' class='input-txt'>"+
    "</div>"+
    "<div class='input-box'>"+
    "<label for='chapter'>Capitulo</label>"+
    "<input type='text' name='chapter' id='chapter' class='input-txt'>"+
    "</div>"+
    "<div class='input-box'>"+
    "<label for='verse'>Versículo</label>"+
    "<input type='text' name='verse' id='verse' class='input-txt'>"+
    "</div>"+
    "<button onclick='getVerse();'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'>"+
    "<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/>"+
    "</svg></button>"+
    "</div>"
}

