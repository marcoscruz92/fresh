var total = 0;


// Sum 1 when "+" button is clicked and add it to label
$(".plus").on("click", function(){
    total += 1;
    $('.item-total').text(total);
})
// Substract 1 when "-" button is clicked and add it to label
$(".minus").on("click", function(){
    // When total = 0; "-" is disabled
    if(total > 0){
        total -= 1;
        $('.item-total').text(total);
    }
})

