const burger = document.getElementById("burger");
const navbarLinks = document.querySelector(".navbar-links");
const calculateBtn = document.querySelector("#calculate-btn");
const nav = document.querySelector("nav");
const calculationResult = document.getElementById("calculation-result");

burger.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    nav.classList.toggle("active");
});

calculateBtn.addEventListener("click", () => {
    const salarySelection = document.getElementById("salary-selection").value;
    let salary = document.getElementById("amount").value;
    salary = Number(salary);

    let taxSlab = "";
    let deductionMonthTax = 0;
    let deductionYearTax = 0;
    let salaryAfterMonthTax = 0;
    let salaryAfterYearTax = 0;
    let salaryMonth = 0;
    let salaryYear = 0;
    let exceededMonthTax = 0;
    let exceededYearTax = 0;

    if (salarySelection === "Monthly" && salary <= 50000) {
        taxSlab =
            "Where the taxable salary income does not exceed Rs. 600,000 the rate of income tax is 0%.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        salaryAfterMonthTax = salaryMonth;
        salaryAfterYearTax = salaryYear;
    }

    if (salarySelection === "Monthly" && salary > 50000 && salary <= 100000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs.600,000 but does not exceed Rs. 1,200,000 the rate of income tax is 2.5% of the amount exceeding Rs. 1,200,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 600000;
        deductionYearTax = (2.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Monthly" && salary > 100000 && salary <= 200000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs. 2,400,000 the rate of income tax is PKR.15,000 + 12.5% of the amount exceeding Rs. 1,200,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 1200000;
        deductionYearTax = 15000 + (12.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Monthly" && salary > 200000 && salary <= 300000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 2,400,000 but does not exceed Rs. 3,600,000 the rate of income tax is Rs. 165,000 + 20% of the amount exceeding Rs. 2,400,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 2400000;
        deductionYearTax = 165000 + (20 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Monthly" && salary > 300000 && salary <= 500000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 3,600,000 but does not exceed Rs. 6,000,000 the rate of income tax is Rs. 405,000 + 25% of the amount exceeding Rs. 3,600,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 3600000;
        deductionYearTax = 405000 + (25 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Monthly" && salary > 500000 && salary <= 1000000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 6,000,000 but does not exceed Rs. 12,000,000 the rate of income tax is Rs. 1,005000 + 32.5% of the amount exceeding Rs. 6,000,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 6000000;
        deductionYearTax = 1005000 + (32.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Monthly" && salary >= 1000000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 12,000,000 the rate of income tax is Rs. 2,955,000 + 35% of the amount exceeding Rs. 12,000,000.";
        salaryMonth = salary;
        salaryYear = salary * 12;
        exceededYearTax = salaryYear - 12000000;
        deductionYearTax = 2955000 + (35 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Anually" && salary <= 600000) {
        taxSlab =
            "Where the taxable salary income does not exceed Rs. 600,000 the rate of income tax is 0%.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        salaryAfterMonthTax = salaryMonth;
        salaryAfterYearTax = salaryYear;
    }

    if (salarySelection === "Anually" && salary > 600000 && salary <= 1200000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs.600,000 but does not exceed Rs. 1,200,000 the rate of income tax is 2.5% of the amount exceeding Rs. 1,200,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 600000;
        deductionYearTax = (2.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (
        salarySelection === "Anually" &&
        salary > 1200000 &&
        salary <= 2400000
    ) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs. 2,400,000 the rate of income tax is PKR.15,000 + 12.5% of the amount exceeding Rs. 1,200,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 1200000;
        deductionYearTax = 15000 + (12.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (
        salarySelection === "Anually" &&
        salary > 2400000 &&
        salary <= 3600000
    ) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 2,400,000 but does not exceed Rs. 3,600,000 the rate of income tax is Rs. 165,000 + 20% of the amount exceeding Rs. 2,400,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 2400000;
        deductionYearTax = 165000 + (20 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (
        salarySelection === "Anually" &&
        salary > 3600000 &&
        salary <= 6000000
    ) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 3,600,000 but does not exceed Rs. 6,000,000 the rate of income tax is Rs. 405,000 + 25% of the amount exceeding Rs. 3,600,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 3600000;
        deductionYearTax = 405000 + (25 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (
        salarySelection === "Anually" &&
        salary > 6000000 &&
        salary <= 12000000
    ) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 6,000,000 but does not exceed Rs. 12,000,000 the rate of income tax is Rs. 1,005000 + 32.5% of the amount exceeding Rs. 6,000,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 6000000;
        deductionYearTax = 1005000 + (32.5 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    if (salarySelection === "Anually" && salary >= 12000000) {
        taxSlab =
            "Where the taxable salary income exceeds Rs. 12,000,000 the rate of income tax is Rs. 2,955,000 + 35% of the amount exceeding Rs. 12,000,000.";
        salaryYear = salary;
        salaryMonth = Math.floor(salary / 12);
        exceededYearTax = salaryYear - 12000000;
        deductionYearTax = 2955000 + (35 / 100) * exceededYearTax;
        deductionMonthTax = Math.floor(deductionYearTax / 12);
        exceededMonthTax = salaryMonth - deductionMonthTax;
        salaryAfterMonthTax = exceededMonthTax;
        salaryAfterYearTax = salaryYear - deductionYearTax;
    }

    const resultHtml = `
    <div class="calculation-result">
        <div class="calculation-result-container">
            <h1>Calculation Result With Tax Slab</h1>
            <p>${taxSlab}</p>
            <div class="calculation-result-content">
                <div class="calculation-result-box">
                    <h1>By Month</h1>
                    <hr/>
                    <div class="calculation-result-box-container">
                        <div>
                            <p>Salary including tax</p>
                            <p>${salaryMonth}</p>
                        </div>
                        <div>
                            <p>Tax deduction</p>
                            <p class="red-deduction">-${deductionMonthTax}</p>
                        </div>
                        <div>
                            <p>Salary after tax</p>
                            <p class="green-after-salary">${salaryAfterMonthTax}</p>
                        </div>
                    </div>
                </div>
                <div class="calculation-result-box">
                    <h1>By Year</h1>
                    <hr/>
                    <div class="calculation-result-box-container">
                        <div>
                            <p>Salary including tax</p>
                            <p>${salaryYear}</p>
                        </div>
                        <div>
                            <p>Tax deduction</p>
                            <p class="red-deduction">-${deductionYearTax}</p>
                        </div>
                        <div>
                            <p>Salary after tax</p>
                            <p class="green-after-salary">${salaryAfterYearTax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    calculationResult.innerHTML = resultHtml;
});
