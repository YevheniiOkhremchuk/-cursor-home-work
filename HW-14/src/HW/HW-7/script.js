const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

let salary = 1000;
function getMyTaxes(salary){
    return Math.round(salary * this.tax)
}

export function getMyTaxesExp(){
  console.log("HW-7:", getMyTaxes.call(ukraine, salary));
}
