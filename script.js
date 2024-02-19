


function getPilihanDadu(){
    const dadu = Math.round(Math.random()* 30 + 1);
    if( dadu < 5 ) 
        return  'dadu1';
    if (dadu >= 5 && dadu < 10 ) return  'dadu2';
    if (dadu >= 10 && dadu < 15 ) return  'dadu3';
    if (dadu >= 15 && dadu < 20 ) return  'dadu4';
    if (dadu >= 20 && dadu < 25 ) return  'dadu5';
        return  'dadu6';

    };
function puter(){
            const imgComputer = document.querySelector('.img-komputer');
            const gambar = ['dadu1', 'dadu2','dadu3','dadu4','dadu5','dadu6'];
            let i = 0 ;
            const waktuMulai = new Date().getTime();
            setInterval(function(){
        
                if (new Date().getTime() - waktuMulai > 3000) {
                    clearInterval;
                    return;
                }
        
                imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
                if(i == gambar.length) i = 0;
            },100)
    };

    const pilihanGambar = document.querySelector('.tombol');
        pilihanGambar.addEventListener('click', function(){
            const pilihanComputer = getPilihanDadu();

            puter();

            setTimeout(function(){
                const imgComputer = document.querySelector('.img-komputer');
                imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
            },3000)

   console.log(pilihanComputer)
        })

