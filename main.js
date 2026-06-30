class ShoppingCart {
    constructor() {
        // State: Factory default allocation of a structured data matrix inside RAM
        this.items = [];
    }

    // Ticket SHOP-404 Win: Duplicate-Aware Bulk Quantity Engine
    addItem(itemName, price) {
        let matchedItem = this.items.find(item => item.name === itemName);
        
        if (!matchedItem) {
            // First time adding: Push a fresh, type-safe structured object card into memory
            this.items.push({ name: itemName, price: Number(price), quantity: 1 });
        } else {
            // Duplicate found: Locate the live reference keychain and tick the counter up
            matchedItem.quantity += 1;
        }
    }

    // Ticket SHOP-405 Win: Quantity-Aware Accumulator Engine
    getCartTotal() {
        let grandTotal = 0;
        if(this.items.length === 0){
            return grandTotal;
        }
        this.items.forEach(item => {
            let itemCost = item.price * item.quantity;
            grandTotal += itemCost;
        });
        return grandTotal;
}

    // Ticket SHOP-403 Win: Dynamic Discount Verification Engine
    applyDiscount(percentage) {
        const originalTotal = this.getCartTotal();

        if (percentage < 0 || percentage > 100) {
            console.log("Error: Invalid discount percentage requested!");
            return originalTotal;
        }

        const finalTotal = originalTotal * (1 - (percentage / 100));
        return finalTotal;
    }

    // Ticket SHOP-402 Win: Surgical Item Eraser Module
    removeItem(itemName) {
        const targetIndex = this.items.findIndex(item => item.name === itemName);
        
        if (targetIndex !== -1) {
            this.items.splice(targetIndex, 1);
        } else {
            console.log("Error: Product name not found in repository!");
        }
    }

    // Ticket SHOP-407 : Implement Total Item-Quantity Accumulator Engine
    getCartItemCount(){
        let totalCartItems = 0;

        this.items.forEach((obj) => {
            totalCartItems += obj.quantity;
        });
        return totalCartItems;
    }
    // Ticket SHOP-408 : Implement Fail-Safe Cart Cleansing Reset Module
    resetCart(){
        if(this.items.length === 0){
            return;
        }
            this.items = [];
    }
    
}

// ======================================================================
// INTEGRATION SANDBOX (Wired outside the class for browser event hooks)
// ======================================================================
const myCart = new ShoppingCart();
const addBtn = document.querySelector('#add-button');//grab btn
const displayTotal = document.querySelector('#cart-total'); // grab view

// Guard rail: Only wire up event loops if the physical HTML nodes exist on screen
if (addBtn && displayTotal) {
    addBtn.addEventListener('click', () => {
        // Test simulation: Add a standard item to change the state tracker
        myCart.addItem("Kota", 30);
        myCart.addItem("drink", 18);

        displayTotal.textContent = `R${myCart.getCartTotal()}`;
    });
}
const testCart = new ShoppingCart();
// console.log(testCart.getCartTotal()); 
const testEngine = new ShoppingCart();
console.log("Test 1 Result (Expected: 0) ->", testEngine.getCartItemCount());

// Simulate user clicking and adding items to the RAM database array
testEngine.addItem("Kota", 30);   // Quantity: 1
testEngine.addItem("Kota", 30);   // Quantity updates to: 2
testEngine.addItem("Drink", 18);  // Quantity: 1
testEngine.addItem("Drink", 18);  // Quantity updates to: 2
testEngine.addItem("Chips", 15);  // Quantity: 1

console.log("Test 2 Result (Expected: 5) ->", testEngine.getCartItemCount());




