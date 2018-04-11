var lista = new Array();
var id = 1;

function getTarefa(){
	var tarefa  = new Tarefa(id, document.getElementById("novaTarefa").value, false);
	carregaTarefa(tarefa);
	console.log("enviando tarefa");
	setLista(tarefa);
	localSave(tarefa);
	wsSave(tarefa);
	id++;
}

function carregaTarefa(tarefa){
	var elemento_pai = document.getElementById("todoList");
	var paragrafo = document.createElement('p');
	var texto  = document.createTextNode(tarefa.descricao);
	console.log(tarefa.descricao);
	paragrafo.appendChild(texto);
	elemento_pai.appendChild(paragrafo);
}

function localSave(tarefa){
	
	localStorage.setItem(tarefa.id, tarefa.descricao);
		
}

function wsSave(tarefa){    						
	this.domain = "https://todolistcomslimphp-felipefrechiani.c9users.io/slim/slim-skeleton/public/";
	//this.domain = "https://todolistcomslimphp-felipefrechiani.c9users.io:8081/";
    $.post( this.domain + "salvartarefa",  {"status": tarefa.getEstado(), "descricao": tarefa.getDescricao(), "id": tarefa.getId(), "userid": tarefa.getId() })
	.done(function(msg){ 
    	    console.log(msg)}
	  	    )
    .fail(function(xhr, status, error) {
            alert("alguma falha");
            alert(xhr.responseText);
	        }
        )
}

class Tarefa {
  constructor(id, nome, estado){
	this.id = id;
    this.descricao = nome;
    this.estado = estado;
  }
  getDescricao() {
     return this.descricao;
  }
  geteEstado() {
     return this.estado;
  }
  geteId() {
     return this.id;
  }
}

function setLista(novaTarefa){
    lista.push(novaTarefa);
	console.log(lista[0].descricao);
}
function getLista(){
    return lista;
}
