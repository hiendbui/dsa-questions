//All passed excepted 1 test case for getNumber
function playlist(songs) {
    let durations = {};
    let count = 0;
    let max = Math.max(...songs);
    
    songs.forEach((song) => {
        durations[song] ? durations[song]++ : durations[song] = 1;
    });
    
    songs.forEach((song) => {
        durations[song]--;
        count += findPairs(song, durations, max);
    })
    return count;
}

function findPairs(song, durations, max) {
    let count = 0;
    let target = (60 -(song % 60));
    let targets = [];
    
    while (target <= max) {
        targets.push(target);
        target += 60;
    }
    
    targets.forEach((target) => {
        if (durations[target]) count += durations[target];
    })
    return count;
}



function getUmbrellas(requirement, sizes) {
    let minUmbrellas = Infinity;
    let set = new Set();
    sizes.forEach((size)=>set.add(size));
    set.forEach((size) => {
        if (size <= requirement) {
            if (requirement % size === 0) minUmbrellas = Math.min(minUmbrellas, requirement/size);
            let multiple = Math.floor(requirement/size);
            while (multiple > 0) {
                if (set.has(requirement-(size*multiple))) minUmbrellas = Math.min(minUmbrellas, multiple + 1);
                multiple--;
            }
        }
    })
    return minUmbrellas === Infinity ? -1 : minUmbrellas;
    
}


function getNumber(binary) {
    let values = [binary.data];
    let curNode = binary;
    while (curNode.next) {
        values.push(curNode.next.data);
        curNode = curNode.next;
    }
    
    let digit = 1;
    let decimal = 0;
    for (let i = values.length-1 ; i >= 0; i--) {
        if (values[i]) decimal += digit;
        digit *= 2;
    }
    return decimal

}