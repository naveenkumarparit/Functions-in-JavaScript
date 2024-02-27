function calculateTax(income) {
    // Define tax rates based on income range using closure
    function getTaxRate() {
        if (income <= 100000) {
            return 0.1  // 10% tax rate for income up to 100k rupee
        } else if (income <= 500000) {
            return 0.2  // 20% tax rate for income up to 500k rupee
        } else {
            return 0.3  // 30% tax rate for income above 500k rupee
        }
    }

    const taxRate = getTaxRate()
    const taxAmount = income * taxRate

    return taxAmount
}

const income1 = 534565;
const income2 = 344999;
const income3 = 94696;

console.log(`Tax for income ${income1}: ${calculateTax(income1)}`);
console.log(`Tax for income ${income2}: ${calculateTax(income2)}`);
console.log(`Tax for income ${income3}: ${calculateTax(income3)}`);