/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

function ShoppingCart() {
    const items = [];
  
    return {
      addItem: (item) => {
        if (items.length === 10) {
          return "Cart is full, cannot add more items.";
        }
  
        items.push(item);
        return `Added ${item.name} to the cart.`;
      },
      removeItem: (itemName) => {
        const itemIndex = items.findIndex((item) => item.name === itemName);
        if (itemIndex === -1) {
          return `${itemName} is not in the cart.`;
        }
  
        const removedItem = items.splice(itemIndex, 1)[0];
        return `Removed ${removedItem.name} from the cart.`;
      },
      getTotalPrice: () => {
        return items.reduce((total, item) => total + item.price, 0);
      },
      getTotalItems: () => {
        return items.length;
      },
    };
  }
  

  const cart = ShoppingCart();
  console.log(cart.addItem({ name: "Item 1", price: 10 })); 
  console.log(cart.addItem({ name: "Item 2", price: 20 })); 
  console.log(cart.getTotalPrice()); 
  console.log(cart.getTotalItems()); 
  console.log(cart.removeItem("Item 1")); 
  console.log(cart.getTotalPrice());
  console.log(cart.getTotalItems());