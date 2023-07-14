console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);

function onReady() {
    console.log('The DOM exists?');

// make handlers that will create a box when the color buttons are clicked
$("#red-btn").on("click", makeRedBlock);
console.log('is the DOM still here?');

$("#blue-btn").on("click", makeBlueBlock);
console.log('blue block handler');

$("#green-btn").on("click", makeGreenBlock);
console.log('green block handler');

$("#yellow-btn").on("click", makeYellowBlock);
console.log('yellow block handler');

// // handler for deleting blocks when blocks are clicked
// $('#blocks').on('click', '.block' ,deleteBlock)
// console.log('block remover');

}

let redBlock = 2;
function makeRedBlock(){
    console.log('inside makeRedBlock');
    $('#blocks').append(`<span class="block red-fill"></span>`);
    $('#red-count').replaceWith(`<span id="red-count">${redBlock}</span></p>`)
    redBlock++;
} // end make red block

let blueBlock = 2;
function makeBlueBlock(){
    console.log('Hello blue block');
    $('#blocks').append(`<span class="block blue-fill"></span>`);
    $('#blue-count').replaceWith(`<span id="blue-count">${blueBlock}</span></p>`)
    blueBlock++;
} // end make blue block

let greenBlock = 2;
function makeGreenBlock(){
    console.log('Hello green block');
    $('#blocks').append(`<span class="block green-fill"></span>`);
    $('#green-count').replaceWith(`<span id="green-count">${greenBlock}</span></p>`)
    greenBlock++;
} // end make green block

let yellowBlock = 2;
function makeYellowBlock(){
    console.log('Hello yellow block');
    $('#blocks').append(`<span class="block yellow-fill"></span>`);
    $('#yellow-count').replaceWith(`<span id="yellow-count">${yellowBlock}</span></p>`)
    yellowBlock++;
} // end make yellow block

// function for deleting the colored blocks when blocks are clicked
// function deleteBlock() {
//     console.log('Inside deleteRedBlock', $(this))
//     $(this).remove()
// }
