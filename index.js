// Code your solution here
// const drivers = ["A", "B", "C", "D"];
const findMatching = (drivers, string) => {
   const filterArr = drivers.filter((filtered) => {
       return filtered.toUpperCase() === string.toUpperCase();
       // return filtered.toUpperCase() === string.toUpperCase(); {
       //     console.log('good');
       // }
   });
   return filterArr;
}

const fuzzyMatch = (drivers, string) => {
   const filterArr = drivers.filter((filtered) => {
       return filtered[0] === string[0];
   });
   return filterArr;
}

const matchName = (drivers, string) => {
   const filterArr = drivers.filter((filtered) => {
       console.log(filtered.name);
       return filtered.name === string;
   });
   return filterArr;
}