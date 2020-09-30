//let mess:string = 'Hello World!';
//console.log(mess);
var stringToHash = function (key, tableSize) {
    //We need to turn passed string into an integer 
    var hash = 17; //Starting with a prime number!
    //Hash making: we need to go over all the char in a string, get the code of each of them, take a product and then mod it (%)
    for (var i = 0; i < key.length; i++) {
        hash = (13 * hash * key.charCodeAt(i)) % tableSize;
    }
    // 'someString'.charCodeAt(2) gets a char code of the third letter.
    return hash;
    //We return a mod cause our hash key would get really big otherwise
};
var HashTable = /** @class */ (function () {
    function HashTable() {
        var _this = this;
        this.tableSize = 100;
        this.table = new Array(this.tableSize);
        //table :any = new Array(this.tableSize);
        this.setItem = function (key, value) {
            _this.table[stringToHash(key, _this.tableSize)] = value;
        };
        this.getItem = function (key) {
            return _this.table[stringToHash(key, _this.tableSize)];
        };
    }
    return HashTable;
}());
var myHash = new HashTable();
myHash.setItem('firstName', 'Filip');
myHash.setItem('lastName', 'Bošnjak');
console.log(myHash.getItem('fistName'));
//let str = myHash.getItem(); //Must return a string. We use hash table that maps key number and string pairs.
//Were going to convert string keys into a number with a stringToHash function
