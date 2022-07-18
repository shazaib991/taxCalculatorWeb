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

    if (!salary) {
        alert("please enter salary");
        return;
    }

    let taxSlab = "";
    let deductionMonthTax = 0;
    let deductionYearTax = 0;
    let salaryAfterMonthTax = 0;
    let salaryAfterYearTax = 0;
    let salaryMonth = 0;
    let salaryYear = 0;
    let exceededMonthTax = 0;
    let exceededYearTax = 0;
    let exemptedMonthAmount = 0;
    let exemptedYearAmount = 0;
    let taxOnExemptedMonthAmount = 0;
    let taxOnExemptedYearAmount = 0;
    let taxableAmountAfterMonthExemption = 0;
    let taxableAmountAfterYearExemption = 0;
    let percentageOnTaxableMonthAmount = 0;
    let percentageOnTaxableYearAmount = 0;
    let totalMonthTax = 0;
    let totalYearTax = 0;

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
        exemptedMonthAmount = 600000 / 12;
        exemptedYearAmount = 600000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (2.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (2.5 / 100);
        totalMonthTax = percentageOnTaxableMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount;
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
        exemptedMonthAmount = 1200000 / 12;
        exemptedYearAmount = 1200000;
        taxOnExemptedMonthAmount = 15000 / 12;
        taxOnExemptedYearAmount = 15000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (12.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (12.5 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 2400000 / 12;
        exemptedYearAmount = 2400000;
        taxOnExemptedMonthAmount = 165000 / 12;
        taxOnExemptedYearAmount = 165000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (20 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (20 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 3600000 / 12;
        exemptedYearAmount = 3600000;
        taxOnExemptedMonthAmount = 405000 / 12;
        taxOnExemptedYearAmount = 405000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (25 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (25 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 6000000 / 12;
        exemptedYearAmount = 6000000;
        taxOnExemptedMonthAmount = 1005000 / 12;
        taxOnExemptedYearAmount = 1005000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (32.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (32.5 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 12000000 / 12;
        exemptedYearAmount = 12000000;
        taxOnExemptedMonthAmount = 2955000 / 12;
        taxOnExemptedYearAmount = 2955000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (35 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (35 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 600000 / 12;
        exemptedYearAmount = 600000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (2.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (2.5 / 100);
        totalMonthTax = percentageOnTaxableMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount;
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
        exemptedMonthAmount = 1200000 / 12;
        exemptedYearAmount = 1200000;
        taxOnExemptedMonthAmount = 15000 / 12;
        taxOnExemptedYearAmount = 15000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (12.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (12.5 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 2400000 / 12;
        exemptedYearAmount = 2400000;
        taxOnExemptedMonthAmount = 165000 / 12;
        taxOnExemptedYearAmount = 165000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (20 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (20 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 3600000 / 12;
        exemptedYearAmount = 3600000;
        taxOnExemptedMonthAmount = 405000 / 12;
        taxOnExemptedYearAmount = 405000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (25 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (25 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 6000000 / 12;
        exemptedYearAmount = 6000000;
        taxOnExemptedMonthAmount = 1005000 / 12;
        taxOnExemptedYearAmount = 1005000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (32.5 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (32.5 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
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
        exemptedMonthAmount = 12000000 / 12;
        exemptedYearAmount = 12000000;
        taxOnExemptedMonthAmount = 2955000 / 12;
        taxOnExemptedYearAmount = 2955000;
        taxableAmountAfterMonthExemption = salaryMonth - exemptedMonthAmount;
        taxableAmountAfterYearExemption = salaryYear - exemptedYearAmount;
        percentageOnTaxableMonthAmount =
            taxableAmountAfterMonthExemption * (35 / 100);
        percentageOnTaxableYearAmount =
            taxableAmountAfterYearExemption * (35 / 100);
        totalMonthTax =
            percentageOnTaxableMonthAmount + taxOnExemptedMonthAmount;
        totalYearTax = percentageOnTaxableYearAmount + taxOnExemptedYearAmount;
    }

    const resultHtml = `
    <div class="calculation-result">
        <div class="calculation-result-container">
            <div class="calculation-chart-container">
                <canvas id="calculation-chart"></canvas>
            </div>
            <h1>Tax slab</h1>
            <p>${taxSlab}</p>
            <div class="calculation-result-content">
                <div class="calculation-result-content-container">
                    <div class="calculation-result-box">
                        <h1>By Month</h1>
                        <hr/>
                        <div class="calculation-result-box-container">
                            <div>
                                <p>Salary including tax</p>
                                <p>${salaryMonth.toLocaleString("en-US")}</p>
                            </div>
                            <div>
                                <p>Tax deduction</p>
                                <p class="red-deduction">-${deductionMonthTax.toLocaleString(
                                    "en-US"
                                )}</p>
                            </div>
                            <div>
                                <p>Salary after tax</p>
                                <p class="green-after-salary">${salaryAfterMonthTax.toLocaleString(
                                    "en-US"
                                )}</p>
                            </div>
                        </div>
                    </div>
                    <div class="calculation-result-box">
                        <h1>By Year</h1>
                        <hr/>
                        <div class="calculation-result-box-container">
                            <div>
                                <p>Salary including tax</p>
                                <p>${salaryYear.toLocaleString("en-US")}</p>
                            </div>
                            <div>
                                <p>Tax deduction</p>
                                <p class="red-deduction">-${deductionYearTax.toLocaleString(
                                    "en-US"
                                )}</p>
                            </div>
                            <div>
                                <p>Salary after tax</p>
                                <p class="green-after-salary">${salaryAfterYearTax.toLocaleString(
                                    "en-US"
                                )}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="calculation-details">
                    <div class="calculation-details-box">
                        <h1>Calculation Details</h1>
                        <hr/>
                        <div class="calculation-details-box-container">
                            <div class="calculation-details-box-pair">
                                <div>
                                    <p>Exempted month amount</p>
                                    <p>${exemptedMonthAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                                <div>
                                    <p>Exempted year amount</p>
                                    <p>${exemptedYearAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                            </div>
                            <div class="calculation-details-box-pair">
                                <div>
                                    <p>Tax on exempted month amount</p>
                                    <p class="red-deduction">${taxOnExemptedMonthAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                                <div>
                                    <p>Tax on exempted year amount</p>
                                    <p class="red-deduction">${taxOnExemptedYearAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                            </div>
                            <div class="calculation-details-box-pair">
                                <div>
                                    <p>Taxable amount after month exemption</p>
                                    <p>${taxableAmountAfterMonthExemption.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                                <div>
                                    <p>Taxable amount after year exemption</p>
                                    <p>${taxableAmountAfterYearExemption.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                            </div>
                            <div class="calculation-details-box-pair">
                                <div>
                                    <p>% on taxable month amount</p>
                                    <p class="red-deduction">${percentageOnTaxableMonthAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                                <div>
                                    <p>% on taxable year amount</p>
                                    <p class="red-deduction">${percentageOnTaxableYearAmount.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                            </div>
                            <div class="calculation-details-box-pair">
                                <div>
                                    <p>Total month tax</p>
                                    <p class="red-deduction">${totalMonthTax.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                                <div>
                                    <p>Total year tax</p>
                                    <p class="red-deduction">${totalYearTax.toLocaleString(
                                        "en-US"
                                    )}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    calculationResult.innerHTML = resultHtml;
    document.getElementById("amount").value = "";
    let ctx = document.getElementById("calculation-chart");
    const percentageOnTax = (totalYearTax / salaryYear) * 100;
    const percentageOnIncome = ((salaryYear - totalYearTax) / salaryYear) * 100;

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Tax %", "Income %"],
            datasets: [
                {
                    data: [
                        percentageOnTax.toFixed(2),
                        percentageOnIncome.toFixed(2),
                    ],
                    backgroundColor: ["RGB(244, 83, 77)", "RGB(91, 161, 226)"],
                    borderColor: "transparent",
                    spacing: 1.5,
                    hoverBackgroundColor: [
                        "RGB(231, 77, 73)",
                        "RGB(64, 146, 223)",
                    ],
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
});
