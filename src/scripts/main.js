$(document).ready(function () {  
    $('.form').validate({
        rules:{
            email:{
                required:true,
                email:true
            }
        },
        messages: {
            email:'Valid email required'
        },
    })
})

