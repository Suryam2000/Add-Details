var roll,fullname,marks;
var counter = 1;

$('#buttonform').click(function(){
    roll = $('#rollno')[0].value;
    fullname = $('#name')[0].value;
    marks = $('#marks')[0].value;

    div = document.createElement('tr');
    $(div).html('<th scope="row">Roll No: <span>' + roll + '</span> &nbsp,' + '</th><td> <span>' 
    + fullname + '</span>' + '</td><td> has scored <span>' + marks + '</span> marks' + '</td>');
    counter++;
    $('#tablebody').append(div);

    $('#rollno')[0].value = "";
    $('#name')[0].value = "";
    $('#marks')[0].value = "";
})