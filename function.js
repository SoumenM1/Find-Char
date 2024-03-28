function findSpareChairs(rooms, need) {
    if (need === 0) return 1; // No chairs needed
    
    let spareChairs = [];
    for (let i = 0; i < rooms.length; i++) {
        const [occupants, chairs] = rooms[i];
        const occupiedSeats = occupants.length;
        const availableChairs = chairs - occupiedSeats;
        
        if (availableChairs >= 0) {
            const chairsToTake = Math.min(need, availableChairs);
            spareChairs.push(chairsToTake);
            need -= chairsToTake;
        }
        
        if (need === 0) break; // Found enough chairs
    }
    
    if (need === 0) {
        return spareChairs;
    } else {
        return 0; // Not enough spare chairs available
    }
}


const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]];
const rooms1 = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',5]];
console.log(findSpareChairs(rooms, 4)); 
console.log(findSpareChairs(rooms1, 5)); 
