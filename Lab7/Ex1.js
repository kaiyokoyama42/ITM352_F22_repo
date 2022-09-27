require("./products_data.js");
var num_products = 5;
var prod_num = 0
for (prod_num = 0; prod_num <= num_products; prod_num++) {
    if (prod_num >= num_products/2) {
        console.log("Don't ask for anything else!")
        process.exit();
    } else if ( (prod_num > 0.25*num_products) && (prod_num < 0.75*num_products) ) {
        console.log(`${eval("typeof name" + i) != 'undefined'} is sold out!`);
        continue;
    }
    console.log(`${prod_num}. ${eval("typeof name" + i) != 'undefined'}`);
}
console.log(`That's all we have!`);
// while (++prod_num <= num_products) 
// for (prod_num = 0; prod_num <= num_products; prod_num++)
// ${eval("typeof name" + i) != 'undefined'}
// ${eval('name' + prod_num )}