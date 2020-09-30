//let mess:string = 'Hello World!';
//console.log(mess);

const stringToHash = (key:string , tableSize:number):number => {
    //We need to turn passed string into an integer 
    let hash:number = 17; //Starting with a prime number!

    //Hash making: we need to go over all the char in a string, get the code of each of them, take a product and then mod it (%)
    for(let i=0; i<key.length;i++){
        hash = (13 * hash * key.charCodeAt(i))%tableSize;
    }
    
    // 'someString'.charCodeAt(2) gets a char code of the third letter.
    return hash;
    //We return a mod cause our hash key would get really big otherwise
}


class HashTable{

    tableSize: number = 100;
    table: Array<string> = new Array(this.tableSize);
    //table :any = new Array(this.tableSize);

    setItem = (key:string,value:string) => {
        this.table[stringToHash(key , this.tableSize)] = value;
    };

    getItem = (key):string => {
        return this.table[stringToHash(key , this.tableSize)];
        
    };
}

const myHash = new HashTable();

myHash.setItem('firstName' , 'Filip');
myHash.setItem('lastName' , 'Bošnjak');

console.log(myHash.getItem('fistName'));

//let str = myHash.getItem(); //Must return a string. We use hash table that maps key number and string pairs.
                            //Were going to convert string keys into a number with a stringToHash function
