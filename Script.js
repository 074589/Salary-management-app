document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-name").innerText = localStorage.getItem("user") || "User";
});

function calculateSalary() {
    let salary = document.getElementById("salary").value;
    let daysWorked = document.getElementById("days-worked").value;
    let advance = document.getElementById("advance").value || 0;

    let salaryPerDay = salary / 30;
    let totalSalary = salaryPerDay * (parseInt(daysWorked) + 2); // Including 2 salary holidays
    let finalSalary = totalSalary - advance;

    document.getElementById("final-salary").innerText = finalSalary.toFixed(2);
}
