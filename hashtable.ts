//let mess:string = 'Hello World!';
//console.log(mess);

const stringToHash = (key:string):number => {
    //We need to turn passed string into an integer 
    return 5;
}


class HashTable{

    table: Array<string> = new Array(100);

    setItem = (key:string,value:string) => {
        this.table[stringToHash(key)] = value;
    };

    getItem = (key):string => {
        return '';
    };
}

const myHash = new HashTable();
let str = myHash.getItem(); //Must return a string. We use hash table that maps key number and string pairs.
                            //Were going to convert string keys into a number with a stringToHash function
