document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;
    const productPrice = document.getElementById('productPrice').value;

    const table = document.getElementById('productTable');
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = table.rows.length;
    cell2.textContent = productName;
    cell3.textContent = productQuantity;
    cell4.textContent = productPrice;

    document.getElementById('productForm').reset();
});
