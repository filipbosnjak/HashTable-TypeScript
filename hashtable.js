//let mess:string = 'Hello World!';
//console.log(mess);
var stringToHash = function (key) {
    //We need to turn passed string into an integer 
    return 5;
};
var HashTable = /** @class */ (function () {
    function HashTable() {
        var _this = this;
        this.table = new Array(100);
        this.setItem = function (key, value) {
            _this.table[stringToHash(key)] = value;
        };
        this.getItem = function (key) {
            return '';
        };
    }
    return HashTable;
}());
var myHash = new HashTable();
var str = myHash.getItem(); //Must return a string. We use hash table that maps key number and string pairs.
//Were going to convert string keys into a number with a stringToHash function
