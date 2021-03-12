module.exports = function check(str, bracketsConfig) {

    const arr = [];
    const map = new Map(bracketsConfig);

    for (let i = 0; i < str.length; i++) {
        if (str[i] === map.get(arr[arr.length - 1])) {
            arr.pop();
        } else arr.push(str[i]);
    }

    return arr.length === 0;
}
