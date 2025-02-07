document.addEventListener("DOMContentLoaded", function () {
    const transactionForm = document.getElementById("transaction-form");
    const transactionList = document.getElementById("transaction-list");
    const totalBalanceElement = document.getElementById("total-balance");

    transactionForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const amount = document.getElementById("amount").value;
        const type = document.getElementById("type").value;

        const response = await fetch("/add-transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, amount, type })
        });

        const data = await response.json();
        if (data.success) {
            location.reload();
        }
    });

    transactionList.addEventListener("click", async function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const transactionId = event.target.getAttribute("data-id");
            await fetch(`/delete-transaction/${transactionId}`, { method: "DELETE" });
            location.reload();
        }
    });
});


