var total = 0;
var iguanaTotal = 0;
var torito = 0;
var flan = 0;
var misanto = 0;
var panawest = 0;
var puertopan = 0;
var viande = 0;
var viandeSopas = 0;
var yemi = 0;

// Sum 1 when "+" button is clicked and add it to label
$(".plus").on("click", function(){
    total += 1;
    $('.item-total').text(total);
})

// Items sum
$("#iguana .plus").on("click", function(){
    iguanaTotal += 1;
    $("#iguana .item-quantity").text(iguanaTotal);
})

$("#torito .plus").on("click", function(){
    torito += 1;
    $("#torito .item-quantity").text(torito);
})

$("#flan .plus").on("click", function(){
    flan += 1;
    $("#flan .item-quantity").text(flan);
})

$("#misanto .plus").on("click", function(){
    misanto += 1;
    $("#misanto .item-quantity").text(misanto);
})

$("#panawest .plus").on("click", function(){
    panawest += 1;
    $("#panawest .item-quantity").text(panawest);
})

$("#puertopan .plus").on("click", function(){
    puertopan += 1;
    $("#puertopan .item-quantity").text(puertopan);
})

$("#viande .plus").on("click", function(){
    viande += 1;
    $("#viande .item-quantity").text(viande);
})

$("#vianda-sopas .plus").on("click", function(){
    viandeSopas += 1;
    $("#vianda-sopas .item-quantity").text(viandeSopas);
})

$("#yemi .plus").on("click", function(){
    yemi += 1;
    $("#yemi .item-quantity").text(yemi);
})


// Substract 1 when "-" button is clicked and add it to label
// $(".minus").on("click", function(){
//     // When total = 0; "-" is disabled
//     if(total > 0){
//         total -= 1;
//         $('.item-total').text(total);
//     }
// })

// Items sum
$("#iguana .minus").on("click", function(){
    if(iguanaTotal > 0 && total > 0){
        iguanaTotal -= 1;
        total -= 1;
        $("#iguana .item-quantity").text(iguanaTotal);
        $('.item-total').text(total);
    } 
})

$("#torito .minus").on("click", function(){
    if(torito > 0 && total > 0){
        torito -= 1;
        total -= 1;
        $("#torito .item-quantity").text(torito);
        $('.item-total').text(total);
    } 
})

$("#flan .minus").on("click", function(){
    if(flan > 0 && total > 0){
        flan -= 1;
        total -= 1;
        $("#flan .item-quantity").text(flan);
        $('.item-total').text(total);
    }
})

$("#misanto .minus").on("click", function(){
    if(misanto > 0 && total > 0){
        misanto -= 1;
        total -= 1;
        $("#misanto .item-quantity").text(misanto);
        $('.item-total').text(total);
    }
})

$("#panawest .minus").on("click", function(){
    if(panawest > 0 && total > 0){
        panawest -= 1;
        total -= 1;
        $("#panawest .item-quantity").text(panawest);
        $('.item-total').text(total);
    }
})

$("#puertopan .minus").on("click", function(){
    if(puertopan > 0 && total > 0){
        puertopan -= 1;
        total -= 1;
        $("#puertopan .item-quantity").text(puertopan);
        $('.item-total').text(total);
    }
})

$("#viande .minus").on("click", function(){
    if(viande > 0 && total > 0){
        viande -= 1;
        total -= 1;
        $("#viande .item-quantity").text(viande);
        $('.item-total').text(total);
    }
})

$("#vianda-sopas .minus").on("click", function(){
    if(viandeSopas > 0 && total > 0){
        viandeSopas -= 1;
        total -= 1;
        $("#vianda-sopas .item-quantity").text(viandeSopas);
        $('.item-total').text(total);
    }
})

$("#yemi .minus").on("click", function(){
    if(yemi > 0 && total > 0){
        yemi -= 1;
        total -= 1;
        $("#yemi .item-quantity").text(yemi);
        $('.item-total').text(total);
    }
})

