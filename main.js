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

    var orderRepo = new OrderRepository(); //How the HELL does one iterate through this object?

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

}
}
