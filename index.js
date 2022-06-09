// Code your solution here
// const drivers = ["A", "B", "C", "D"];
const findMatching = (drivers, street) => {
   const filterArr = drivers.filter((filtered) => {
       return filtered.toUpperCase() === street.toUpperCase();
       // return filtered.toUpperCase() === street.toUpperCase(); {
       //     console.log('good');
       // }
   });
   return filterArr;
}

const fuzzyMatch = (drivers, street) => {
   const filterArr = drivers.filter((filtered) => {
       return filtered[0] === street[0];
   });
   return filterArr;
}

const matchName = (drivers, street) => {
   const filterArr = drivers.filter((filtered) => {
       console.log(filtered.name);
       return filtered.name === street;
   });
   return filterArr;
}