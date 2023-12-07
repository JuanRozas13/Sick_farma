// ABRIR O CARRINHO DE COMPRA

function Aparecer()
{
    let sobrepor = document.getElementsByClassName("sobrepor")[0];
    sobrepor.classList.remove("sumir");
}

//  FECHAR CARRINHO DE COMPRA
function Fechar ()
{
    let desaparecer = document.getElementsByClassName("sobrepor")[0];
    desaparecer.classList.add("sumir")
}



var qtd_produtos = 0;

// ACESSAR O TEXTO DO SOBREPÕE
var amount = document.getElementById("amount");

// ACESSAR O VALOR DO CARRINHO 
var cash = document.getElementById("cash");


var txt_dipirona = document.getElementById("dipirona");
var qtd_dipirona = 0;
var vlr_dipirona = 35; 
var total_dipirona =0;


var txt_inalador = document.getElementById("inalador");
var qtd_inalador = 0;
var vlr_inalador = 70; 
var total_inalador = 0;


var txt_massageador = document.getElementById("massageador");
var qtd_massageador = 0;
var vlr_massageador = 135.5; 
var total_massageador = 0;


var txt_domperidona = document.getElementById("domperidona");
var qtd_domperidona = 0;
var vlr_domperidona = 23; 
var total_domperidona = 0;



var resultado = document.getElementById("total");

// SOMAR TODOS AS QUANTIDADES DE CADA PRODUTO

function Carrinho_Produtos()
{
    qtd_produtos = qtd_dipirona + qtd_domperidona + qtd_inalador + qtd_massageador;

    cash.textContent = qtd_produtos;
    amount.textContent = "Produtos: " + qtd_produtos + " Und";
    
    let total_produto = document.getElementById("total"); 

    total_produto.textContent = total_dipirona + total_domperidona + total_inalador + total_massageador;
    
}


// ADICIONAR PRODUTO E VALOR DO CARRINHO

function Adicionar_Dipirona()
{
   
    qtd_dipirona = qtd_dipirona + 1;
    txt_dipirona.textContent =  qtd_dipirona + " Dipirona = " + qtd_dipirona * 35 + " Reais";
    total_dipirona = qtd_dipirona * vlr_dipirona;

    Carrinho_Produtos();
}

function Adicionar_Inalador()
{
    qtd_inalador = qtd_inalador + 1;
    txt_inalador.textContent = qtd_inalador + " Inalador = " + qtd_inalador * 70 + " Reais";
    total_inalador = qtd_inalador * vlr_inalador;

    Carrinho_Produtos();
}

function Adicionar_Massageador()
{
    qtd_massageador = qtd_massageador + 1;
    txt_massageador.textContent = qtd_massageador + " Massageador = " + qtd_massageador * 135.50 + " Reais";
    total_massageador = qtd_massageador * vlr_massageador;

    Carrinho_Produtos();
}


function Adicionar_Domperidona()
{
    qtd_domperidona = qtd_domperidona + 1;
    txt_domperidona.textContent = qtd_domperidona + " Domperidona = " + qtd_domperidona * 23 + " Reais";
    total_domperidona = qtd_domperidona * vlr_domperidona;

    Carrinho_Produtos();
}



// REMOVER PRODUTO E VALOR DO CARRINHO

function Remover_Carrinho_Dipirona()
{

    if (qtd_dipirona > 0)
    {
    
        qtd_dipirona = qtd_dipirona - 1;
        txt_dipirona.textContent = qtd_dipirona + " Dipirona = " + qtd_dipirona * 35 + " Reais";
        total_dipirona = qtd_dipirona * vlr_dipirona;
        
        Carrinho_Produtos(); 
    }   

    if (qtd_dipirona == 0)
    {
        txt_dipirona.textContent = "";
        
        Carrinho_Produtos(); 
    }
}

function Remover_Carrinho_Inalador()
{

    if (qtd_inalador > 0) 
    {
        qtd_inalador = qtd_inalador - 1;
        txt_inalador.textContent = qtd_inalador + " Inalador = " + qtd_inalador * 70 + " Reais";   
        total_inalador = qtd_inalador * vlr_inalador;

        Carrinho_Produtos();
    }

    if (qtd_inalador == 0)
    {
        txt_inalador.textContent = "";
        
        Carrinho_Produtos(); 
    }
}

function Remover_Carrinho_Massageador()
{
    if (qtd_massageador > 0 )
    {
        qtd_massageador = qtd_massageador - 1;
        txt_massageador.textContent = qtd_massageador + " Massageador = " + qtd_massageador * 135.50 + " Reais";    
        total_massageador = qtd_massageador * vlr_massageador;

        Carrinho_Produtos();
    }

    if (qtd_massageador == 0)
    {
        txt_massageador.textContent = "";
        
        Carrinho_Produtos(); 
    }
}

function Remover_Carrinho_Domperidona()
{
    if( qtd_domperidona > 0 )
    {
        qtd_domperidona = qtd_domperidona - 1;
        txt_domperidona.textContent = qtd_domperidona + " Domperidona = " + qtd_domperidona * 23 + " Reais";
        total_domperidona = qtd_domperidona * vlr_domperidona;

        Carrinho_Produtos();
    }
    
    if (qtd_domperidona == 0)
    {
        txt_domperidona.textContent = "";
        
        Carrinho_Produtos(); 
    }

}


