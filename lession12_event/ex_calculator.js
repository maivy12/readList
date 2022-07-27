function calculate(){
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    let res = document.getElementById('result');
    let operations = document.getElementsByName('operation');

    if (Number.isNaN(n1) || Number.isNaN(n2))
        alert('Vui lòng nhập số thích hợp vào ô trống');
    else if (operations[0].checked == true) 
        res.value = n1 + n2;
    else if (operations[1].checked == true) 
        res.value = n1 - n2;
    else if (operations[2].checked == true) 
        res.value = n1 * n2;
    else if (operations[3].checked == true) 
        res.value = n1 / n2;
    else alert('Vui lòng chọn phép tính muốn thực hiện');
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function(event){
    event.preventDefault();
})
    

