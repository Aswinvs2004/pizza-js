document.addEventListener('DOMContentLoaded', function () {
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200554111 , Aswin Veluthedathparambil Sajeevan';

    const orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', function () {
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);
        const instructions = document.getElementById('instructions').value;

        const pizza = new Pizza(size, crust, toppings, instructions);

        const orderResult = document.getElementById('order-result');
        orderResult.innerHTML = `
            <h2>Your Custom Pizza</h2>
            <p><strong>Size:</strong> ${pizza.size}</p>
            <p><strong>Crust:</strong> ${pizza.crust}</p>
            <p><strong>Toppings:</strong> ${pizza.toppings.join(', ')}</p>
            <p><strong>Special Instructions:</strong> ${pizza.instructions}</p>
        `;
    });
});

class Pizza {
    constructor(size, crust, toppings, instructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.instructions = instructions;
    }
}
