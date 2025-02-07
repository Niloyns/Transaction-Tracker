document.addEventListener("DOMContentLoaded", function () {
    const transactionForm = document.getElementById("transaction-form");
    const transactionList = document.querySelector(".transaction-table tbody");
    const totalBalanceElement = document.getElementById("total-balance");

    // Function to add transaction to table dynamically
    function addTransactionToTable(transaction, totalBalance) {
        const row = document.createElement("tr");
        row.classList.add(transaction.type === "income" ? "income" : "expense");
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.amount}</td>
            <td>${totalBalance}</td> <!-- ✅ Display updated total balance -->
            <td>${new Date(transaction.createdAt).toLocaleDateString()}</td>
            <td>${new Date(transaction.createdAt).toLocaleTimeString()}</td>
            <td><button class="delete-btn" data-id="${transaction._id}">❌</button></td>
        `;
        transactionList.appendChild(row);
    }

    /// Handle Transaction Form Submission (Without Refresh)
transactionForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const submitButton = transactionForm.querySelector("button[type='submit']");

    // Disable submit button to prevent double submission
    submitButton.disabled = true;
    submitButton.textContent = "Adding..."; // Show loading text

    try {
        const response = await fetch("/add-transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, amount, type })
        });

        const data = await response.json();
        if (data.success) {
            // Update Table Without Refresh
            addTransactionToTable(data.transaction, data.totalBalance);
            totalBalanceElement.textContent = data.totalBalance; // ✅ Update total balance

            // Reset Form Fields
            transactionForm.reset();
        } else {
            alert("Error adding transaction.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to add transaction.");
    } finally {
        // Re-enable submit button after processing
        submitButton.disabled = false;
        submitButton.textContent = "Add"; // Reset button text
    }
});


    // Handle Transaction Deletion (Without Refresh)
transactionList.addEventListener("click", async function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const transactionId = event.target.getAttribute("data-id");

        // Disable the button to prevent multiple clicks
        event.target.disabled = true;
        event.target.textContent = "Deleting..."; // Show deleting text

        try {
            const response = await fetch(`/delete-transaction/${transactionId}`, { method: "DELETE" });
            const data = await response.json();

            if (data.success) {
                // Remove Row From Table Without Refresh
                event.target.closest("tr").remove();
                totalBalanceElement.textContent = data.totalBalance; // ✅ Update total balance
            } else {
                alert("Error deleting transaction.");
                event.target.disabled = false; // Re-enable if error occurs
                event.target.textContent = "❌"; // Reset text
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to delete transaction.");
            event.target.disabled = false; // Re-enable if network error occurs
            event.target.textContent = "❌"; // Reset text
        }
    }
});
});
