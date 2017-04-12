function getDaysInMonth(month, year) {
         // Since no month has fewer than 28 days
         var date = new Date(year, month, 1);
         var days = [];
         console.log('month', month, 'date.getMonth()', date.getMonth())
         while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
         }
         return days;

         
    }
    var d = getDaysInMonth(3, 2017);
    // console.log(getDaysInMonth(3, 2017));

    var l = d.length/7;
    console.log(l.toFixed(2));
    for (var j=0;j<=d.length;j++){
        $('#tbl-body').append('<tr></tr>');
    }


     // for(var i = 1;i<=4;i++){
     //        $('#tbl-body').append('<tr><td id="1"></td><td id="2"></td><td id="3"></td><td id="4"></td><td id="5"></td><td id="6"></td><td id="7"></td></tr>');
     //    };
    for(var i=0;i<d.length;i++){
        
        switch (d[i].getDay()){
            case 0:
                $('#7').append(d[i]);
            break;
            case 1:
                $('#1').append(d[i]);
            break;
            case 2:
                $('#2').append(d[i]);
            break;
            case 3:
                $('#3').append(d[i]);
            break;
            case 4:
                $('#4').append(d[i]);
            break;
            case 5:
                $('#5').append(d[i]);
            break;
            case 6:
                $('#6').append(d[i]);
            break;
        }

        

        //console.log(d[i]);
    }
    

