const num = [4, 9, 11, 6, 12, 0 ,2, 8];

function sum() {
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        result = result + num[i];
    }
    console.log(result);
}

sum();