import multiply from "./multiply";

test("testing the multiplication function", ()=>{
    let a=5;
    let b=6;
    let output=30;

    expect(multiply(a,b)).toBe(output) 

})

test("testing the multiplication function", ()=>{
    let a=100;
    let b=600;
    let output=60000;

    expect(multiply(a,b)).toBe(output) 

})