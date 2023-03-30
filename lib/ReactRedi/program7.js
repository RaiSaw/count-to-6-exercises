module.exports = (...args) => {
    let sum = args.reduce((total, val) => total + val);
    return sum / args.length;
}
