$(document).ready(function () {

    const sec = $('#seconds')
    const min = $('#minutes')
    const hour = $('#hours')
    const day = $('#days')


      setInterval(function () {

          if(hour.text() > 0 || min.text() > 0 || sec.text() > 0 ) {

              let s = sec.text()
              let m = min.text()
              let h = hour.text()


              if (s > 0) {
              sec.text(s - 1);
              } else if(hour.text() > 0 || min.text()) {
                  sec.text(59);

                  if(m > 0){

                      min.text(m-1)

                  } else if(hour.text() > 0 ) {

                      min.text(59)

                      hour.text(h-1)

                  } else {

                      min.text(0)

                  }

              } else {
                  sec.text(0);
              }

          } else {

          }

      }, 1000);







})