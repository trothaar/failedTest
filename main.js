/*
* Warehouse Stocking Optimization
*
* At a warehouse, the warehouse manager has observed orders taking a long time to pick and
*  believes that moving more popular items to easier to access locations may help.
*
* - Workers pick an order by placing items on a pallet at the dock door.
* - Products are stored (inefficiently) in a single aisle with 12 shelves.
* - As the shelf number increases, it is located further down the aisle and
*   further away from the dock door.
* - On average it takes 5*X seconds for a warehouse worker to retrieve an item
*   from shelf X and place it on the pallet.
* - A warehouse worker can only carry a single item at a time.
* - A shelf can only hold one type of item.
*
* Which items should be on which shelves to optimize picking speed based on
*  yesterday's orders?
*
* Example table contents:
*
*   Shelf 1:      Item 12
*   Shelf 2:      Item 11
*   Shelf 3:      Item 10
*   Shelf 4:      Item 09
*   Shelf 5:      Item 08
*   Shelf 6:      Item 07
*   Shelf 7:      Item 06
*   Shelf 8:      Item 05
*   Shelf 9:      Item 04
*   Shelf 10:     Item 03
*   Shelf 11:     Item 02
*   Shelf 12:     Item 01
*
* Display the shelf and item pairings by calling the following function:
*   displayShelfItemPair(shelfName, itemName);
*
*/

function main() {

    var orderRepo = new OrderRepository();

    // liberal use of console.log and/or debugger; to examine orderRepo object at runtime
    //console.log(orderRepo);
    //debugger;

    // Initialize variable counts to hold item counts
    var itemCounts = {
      "Item 01": 0,
      "Item 02": 0,
      "Item 03": 0,
      "Item 04": 0,
      "Item 05": 0,
      "Item 06": 0,
      "Item 07": 0,
      "Item 08": 0,
      "Item 09": 0,
      "Item 10": 0,
      "Item 11": 0,
      "Item 12": 0
    };

    var orders = orderRepo.getYesterdaysOrders(); // get the orders from the method provided

    /* using the for syntax from 
       http://stackoverflow.com/questions/11922383/access-process-nested-objects-arrays-or-json */
    for(let whichOrder = 0, l = orders.length; whichOrder < l; whichOrder++) {
      
      for (let whichItem = 0, l = orders[whichOrder].orderLines.length; whichItem < l; whichItem++) {
        // for each order we want to add each order line to the total
        var lineItem = orders[whichOrder].orderLines[whichItem];
        itemCounts[lineItem.itemName] += lineItem.quantity;
      }
    }

    /* let's make it an array so we can sort it
       http://stackoverflow.com/questions/20977381/sort-a-json-array-object-using-javascript-by-value */
    var array = [];
    for(a in itemCounts){
      array.push([a, itemCounts[a]])
    }
    array.sort(function(a,b){return a[1] - b[1]});
    array.reverse(); // we want items ordered the most towards the front

    /* since the solution doesn't much care for the quantity of orders, just the order of them,
       we can push straight to the ViewModel without an intermediary data object */
    for(let whichItem = 0, l = array.length; whichItem < l; whichItem++) {
      displayShelfItemPair('Shelf ' + (whichItem + 1), array[whichItem][0]);
    }    
}

