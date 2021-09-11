console.log("Testing link")

const calc = {
    operand_1: 0,
    operand_2: 0,
    operator: 0,
};

$ (() => {
    // console.log("doc ready")
    const $statement = $('#Statement');
    const $button = $('.button').on('click', (e) => {
        calc.operand_1 =  $(e.target).text();
        console.log(calc.operand_1);
    })
    $statement.append($button);
    const $button2 = $('.button').on('click', (e) => {
        calc.operand_2 =  $(e.target).text();
        console.log(calc.operand_2);
    })
    
  
})