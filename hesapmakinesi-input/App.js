function c(val){
    document.getElementById("first_num").value=val;
    document.getElementById("second_num").value=val;
    document.getElementById("kutuSonuc").innerHTML = "çok eğlenecuk :)"
    
    }

function v(val){
    document.getElementById("first_num").value+=val;
    }

    function topla(){
        if (Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 40){
            window.location.href = 'https://www.youtube.com/watch?v=c_m364Kki5A'
        }
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 128){
            window.location.href = 'https://www.youtube.com/watch?v=xCEUE-0MraY'
        }
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 155){
            window.location.href = 'https://www.youtube.com/watch?v=ShQfIMCx_FU'
        }
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 1923){
            window.location.href = 'https://www.youtube.com/watch?v=NgJ4pgoNajE'
        }
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 4250){
            document.getElementById("kutuSonuc").innerHTML = "Asgari Ücret :)"
            return true;
        }
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 376006){
            window.location.href = 'https://www.google.com'
        }
        
        else if(Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value) == 3750000000){
            window.location.href = 'https://www.youtube.com/watch?v=5pKtgFMenmk'
        }
        
        document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) + Number(document.getElementById("second_num").value);
        return true;
    }

    function cikarma(){
        if (Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 40){
            window.location.href = 'https://www.youtube.com/watch?v=c_m364Kki5A'
        }
        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 128){
            window.location.href = 'https://www.youtube.com/watch?v=xCEUE-0MraY'
        }
        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 155){
            window.location.href = 'https://www.youtube.com/watch?v=ShQfIMCx_FU'
        }
        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 1923){
            window.location.href = 'https://www.youtube.com/watch?v=NgJ4pgoNajE'
        }
        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 4250){
            document.getElementById("kutuSonuc").innerHTML = "Asgari Ücret :)"
            return true;
        }
        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 376006){
            window.location.href = 'https://www.google.com'
        }

        else if(Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value) == 3750000000){
            window.location.href = 'https://www.youtube.com/watch?v=5pKtgFMenmk'
        }
        document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) - Number(document.getElementById("second_num").value);
        return true;
    }

    function carpma(){
        if (Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 40){
            window.location.href = 'https://www.youtube.com/watch?v=c_m364Kki5A'
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 128){
            window.location.href = 'https://www.youtube.com/watch?v=xCEUE-0MraY'
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 155){
            window.location.href = 'https://www.youtube.com/watch?v=ShQfIMCx_FU'
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 1923){
            window.location.href = 'https://www.youtube.com/watch?v=NgJ4pgoNajE'
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 4250){
            document.getElementById("kutuSonuc").innerHTML = "Asgari Ücret :)"
            return true;
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 376006){
            window.location.href = 'https://www.google.com'
        }
        else if(Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value) == 3750000000){
            window.location.href = 'https://www.youtube.com/watch?v=5pKtgFMenmk'
        }
        document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) * Number(document.getElementById("second_num").value);
        return true;
        }

    function bolme(){
        if (Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 40){
            window.location.href = 'https://www.youtube.com/watch?v=c_m364Kki5A'
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 128){
            window.location.href = 'https://www.youtube.com/watch?v=xCEUE-0MraY'
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 155){
            window.location.href = 'https://www.youtube.com/watch?v=ShQfIMCx_FU'
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 1923){
            window.location.href = 'https://www.youtube.com/watch?v=NgJ4pgoNajE'
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 4250){
            document.getElementById("kutuSonuc").innerHTML = "Asgari Ücret :)"
            return true;
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 376006){
            window.location.href = 'https://www.google.com'
        }
        else if(Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value) == 3750000000){
            window.location.href = 'https://www.youtube.com/watch?v=5pKtgFMenmk'
        }
        document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) / Number(document.getElementById("second_num").value);
        return true;
        }

function dolar(){
    document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) * 14 + " ₺ şimdilik :)"
    return true;
}

function euro(){
    document.getElementById("kutuSonuc").innerHTML = Number(document.getElementById("first_num").value) * 16 + " ₺ şimdilik :)"
    return true;
}

function e(){
    window.location.href = 'https://www.youtube.com/watch?v=rFG48l4bE3I'
}