const EOF = Symbol('EOF'); // End Of File

function data(c) {

}

module.exports.parseHTML =  function parseHTML(html) {
    console.log('test parseHTML ----- ', html);
    let state = data;
    for (let c of html) {
        state =  state(c);
    }
    state = state(EOF);
};