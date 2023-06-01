
let map = new Map();
console.log(typeof map);

// key:Roll Number  value:Student Name
map.set(11,"Ram");
map.set(22,"Shyam");
map.set(33,"Siya");
map.set(44,"Jenny");

const mapSize=map.size;
console.log(`Map Size:${mapSize}`);

console.log(map);
console.table(map);

//Retrive the value using key
const valueKey22=map.get(22);
console.log(`Value of Key 22 is:${valueKey22}`);

//Retrive the value using key but that key does not exist
const valueKey99=map.get(99);
console.log(`Value of Key 99 is:${valueKey99}`);

//Adding duplicate key
map.set(33,"Billgates");
console.log(map);

//Adding duplicate value
map.set(55,"Jenny");
console.log(map);

// Delete Entry
map.delete(22);
console.log(map);

//key is exist or not
const isAvailable=map.has(44)
console.log(`Is 44 key available:${isAvailable}`);

const keys=map.keys();
console.log(keys);

const values=map.values();
console.log(values);

//Traversing map
console.log("Traversng Map");
const keyOfMap=map.keys();
for(const key of keyOfMap){
    const value=map.get(key);
    console.log(`${key}:${value}`);
}