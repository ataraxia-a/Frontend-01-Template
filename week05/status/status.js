// TODO: 使用状态机完成'abcabx'
// TODO: ...'abababx'
// TODO: 使用状态机完成未知的pattern，等效KMP，时间复杂度 O（m + n）

const pattern = 'ataraxia';

function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a')
        return foundA;
    else
        return start;

}

function end() {

}

function foundA(c) {

}

function foundB(c) {
    if (c === 'c')
        return foundA;
    else
        return start;
}

// FIXME: try generate deal with status.
