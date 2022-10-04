//global variable declarations
let rgbacode = $("#rgbacode")
let hexcode = $("#hexcode")

//first function for converting of RGB ONLY
function converting() {
    user_input = rgbacode.val()
    user_Arr = user_input.split(',')

    r = parseInt(user_Arr[0]).toString(16)
    g = parseInt(user_Arr[1]).toString(16)
    b = parseInt(user_Arr[2]).toString(16)
    a = user_Arr[3]
    
    if(r.length == 1) {
        r = "0" + r
    }
    if(g.length == 1) {
        g = "0" + g
    }
    if(b.length == 1) {
        b = "0" + b
    }

return "#"+r+g+b
}
//second function to call a, since values of a can either be 0 or 1. This was done so that i don't
//call the same function twice, thereby increasing the values of a
function alpha(a) {
    user_a = rgbacode.val()
    a_Arr = user_a.split(',')

    a = a_Arr[3]

    if(a.length == 1) {
        $(".a-container").show()
        $(".a-text").append(a)
    }
}

$("#convert").click(function() {
    hexcode.val(converting(), alpha())
    $('body').css('background-color',converting()).fadeIn("slow")
})
