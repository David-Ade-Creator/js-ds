const right_angle = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr.length; i++) {
        var pattern = "";
        for (let j = i; j >= 0; j--) {
            pattern += "*";
        }
        console.log(pattern);
    }
};

right_angle();