var myName = document.querySelector("#myName");
var myClock = document.querySelector("#myClock");
var myDate = document.querySelector("#myDate");
myName.innerText +=  "Ayhan" //prompt("Adınız Nedir? ", "") 



var days = ['Pazartesi', 'Salı','Çarşamba','Perşembe', 'Cuma','Cumartesi', 'Pazar'];
var months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
showTime();
function showTime() {
    setInterval(() => {
        var date = new Date();
        //Date get info 
        var dates = date.getDate();
        var month = months[date.getMonth()];
        var years = date.getFullYear();
         var day = days[date.getDate()];
        //Time get info
        var hours = date.getHours();
        var minutes  = date.getMinutes();
        var seconds = date.getSeconds();

        //Add zero
        if (hours <10)    hours = '0' + hours;
        if (minutes <10)  minutes = '0' + minutes;
        if (seconds <10)  seconds = '0' + seconds;
        if (dates < 10)     dates = '0' + dates;

        //Write html inner text
        myDate.innerText = `${dates}.${month}.${years}  ${day}`
        myClock.innerText = `${hours}:${minutes}:${seconds}`
    });
}