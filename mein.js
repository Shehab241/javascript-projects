
var ProductNameInp=document.getElementById("ProductName");
var ProductPirceInp=document.getElementById("ProductPirce");
var ProductCompanyInp=document.getElementById("ProductCompany");
var ProductDescInp=document.getElementById("ProductDescription");
var addBtn=document.getElementById("AtBtn");
var productConteiner=[];
addBtn.onclick=function()
{
    addProduct()
    displayData()
    clearForm()
    
}
function addProduct()
{
    var Product = {
        name:ProductNameInp.value,
        price:ProductPirceInp.value,
        company:ProductCompanyInp.value,
        desc:ProductDescInp.value


    }
    productConteiner.push(Product)
}
    function displayData()
    {
        var cols ="";
        for (var i=0 ; i<productConteiner.length ; i++)
            {
                cols+='<div class="col-md-4"> <div class="product"><h3>'+productConteiner[i].name+'</h3><p>'+productConteiner
                [i].desc+'</p><p class="text-danger" >'+productConteiner[i].price+'</p><p class="text-info">'+productConteiner[i].company+'</p> <button class="btn btn-danger" onclick="deleteProdcut('+i+')" >delete</button></div></div>'
            }
        
        document.getElementById("rowDate").innerHTML= cols;
    }

    function deleteProdcut(id)
    {
      productConteiner.splice(id,1)
      displayData()
    }
    function clearForm(){
        var inPuts =document.getElementsByClassName("form-control");
        for (i=0;i<inPuts.length;i++)
        {
            inPuts[i].value="";
        }
}