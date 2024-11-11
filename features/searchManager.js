// searchManager.js
// TODO: Implement the function to search transactions based on a keyword
export function searchTransactions(trans, searchKeyword) {
    // TODO: Return transactions that match the keyword in either category or amount
    // Hint: You may want to convert searchKeyword to lowercase for more consistent searches
    // Hint: Use the filter() method and check if the category or amount includes the search keyword.
    const transactions = trans.filter(transaction =>
        transaction.amount === searchKeyword || transaction.category === searchKeyword
    );
    // Placeholder functionality that allows the app to continue working:
    // TODO: Replace this placeholder logic with code that filters transactions based on the keyword
    return transactions; 
}

/* Refer to the article "Expanding Functionality with Modular Code" under the section "Adding a Keyword Search Feature" for an example of how to implement search within a modular app. The example there closely aligns with the task you're expected to complete.
 */