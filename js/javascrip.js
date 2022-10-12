 
        //user name input
        const $userName = document.querySelector('.userName');
        let userName;
        window.addEventListener('load', () => {
            userName = prompt('이름을 입력해주세요!(10자리까지 표시됩니다)','홍길동');
            if(userName === ''){userName = 'user'};
            if(userName.length > 10){
                userName = userName.substring(0,10);
            };
            $userName.textContent = userName;
        })

        const $pcWin = document.querySelector('.pcWin');
        const $userWin = document.querySelector('.userWin');   
        const $winner = document.querySelector('.winner');
        const $round =  document.querySelector('.round');
        
        function play(input){
            if(document.querySelector('.' + input).getAttribute('disabled')) {
                return;
            }

            const $userPrint = document.querySelector('.userPrint');
            const $cptPrint = document.querySelector('.cptPrint');

            // computer input
            let cpt = Math.random();
            let cptVal;

            if(0 < cpt && cpt <= 0.3){
                cptVal = '가위';
            }else if(0.3 < cpt && cpt <= 0.6){
                cptVal = '바위';
            }else{
                cptVal = '보';
            };

            //user input
            if(input === 'rock'){
                $userPrint.src = "./images/roc.png";
            }else if(input === 'scissors'){
                $userPrint.src = "./images/scsor.png";
            }else{
                $userPrint.src = "./images/pap.png";
            };


            // computer img spin
            let idx = 0;
            
            const intervalKey = setInterval(function(){
                document.querySelector('.' + input).setAttribute('disabled', true);
                const arrimg = [
                    "./images/roc.png",
                    "./images/scsor.png",
                    "./images/pap.png"
                ];   

                (idx < 2) ? idx++ : idx = 0;

                $cptPrint.src = arrimg[idx];



            },50);
            

            // result
            const timeout = setTimeout(function(){
                clearInterval(intervalKey);
                document.querySelector('.' + input).removeAttribute('disabled');
                const userWin = parseInt($userWin.textContent) + 1;
                const pcWin = parseInt($pcWin.textContent) + 1;
                
                if(input === 'rock'){
                    
                    if(cptVal === '가위'){

                        $cptPrint.src = "./images/scsor.png";
                        $winner.textContent = userName+' 승리!'
                        $userWin.textContent = userWin;


                    }else if(cptVal === '바위'){

                        $cptPrint.src = "./images/roc.png";
                        $winner.textContent = '다시한번 해보세요!'

                    }else{

                        $cptPrint.src = "./images/pap.png";
                        $winner.textContent = 'computer 승리!'
                        $pcWin.textContent = pcWin;

                    };

                }else if(input === 'scissors'){
                    
                    if(cptVal === '가위'){
                        
                        $cptPrint.src = "./images/scsor.png";
                        $winner.textContent = '다시한번 해보세요!'

                    }else if(cptVal === '바위'){

                        $cptPrint.src = "./images/roc.png";
                        $winner.textContent = 'computer 승리!'
                        $pcWin.textContent = pcWin;

                    }else{

                        $cptPrint.src = "./images/pap.png";
                        $winner.textContent = userName+' 승리!'
                        $userWin.textContent = userWin;

                    };

                }else{
                    
                    if(cptVal === '가위'){

                        $cptPrint.src = "./images/scsor.png";
                        $winner.textContent = 'computer 승리!'
                        $pcWin.textContent = pcWin;

                    }else if(cptVal === '바위'){

                        $cptPrint.src = "./images/roc.png";
                        $winner.textContent = userName+' 승리!'
                        $userWin.textContent = userWin;

                    }else{

                        $cptPrint.src = "./images/pap.png";
                        $winner.textContent = '다시한번 해보세요!'

                    };
                    
                };

                const nextRound = parseInt($round.textContent) + 1;
                $round.textContent = nextRound;

            },700);

        };
        
        const $reset = document.querySelector('.reset');
        $reset.addEventListener('click',function(){

            $userWin.textContent = 0;
            $pcWin.textContent = 0;

            $round.textContent = 1;

            $winner.textContent = '가위! 바위! 보!';

        });