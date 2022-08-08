let send = document.getElementById('sendContact')
        send.addEventListener('click', function(e){

            let textA = document.getElementById('talk')
            let emailContact = document.getElementById('emailContact')

            let textAVal = textA.value
            let emailContactVal = emailContact.value
            console.log(textAVal);
            
            console.log('123');
            if(textAVal == '' || emailContactVal == ''){
                console.log('flase');
                swal("請輸入正確", "You clicked the button!", "warning");
                e.preventDefault()
            }
        })