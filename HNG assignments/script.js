function clock(){
    let monthnames=["january", "february","March","April","May","June","July","August","September","Octobr","November","December"]
    let daynames=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let today= new Date()
    
    document.getElementById("Date").innerHTML=(daynames[today.getDay()]+" "+ today.getDate()+" "+monthnames[today.getMonth()]+" "+ today.getFullYear())
    
    let h= today.getHours()
    let m=today.getMinutes()
    let s=today.getSeconds()
    let day= h<11?"AM":"PM"
    h= h<10? "0"+h: h;
    m= m<10? "0"+m: m;
    s= s<10? "0"+s: s;
    
    document.querySelector("#hours").innerText=`${h} Hrs`
    document.querySelector("#min").innerText=`${m} Min`
    document.querySelector("#sec").innerText=`${s} Sec`
    
    }let inter=setInterval(clock,400)

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('menu-list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})