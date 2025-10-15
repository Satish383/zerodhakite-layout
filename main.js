var options = {
    series: [{
        name: 'Sales',
        data: [4, 9, 22, 12]  // ✅ Sirf 4 points for Jan 25, Apr 25, Jul 25, Oct 25
    }],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: 5,
        curve: 'smooth',
        colors: ['#4184f3']
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '1/26/2000',  // Jan 25
            '4/25/2000',  // Apr 25
            '7/25/2000',  // Jul 25
            '10/25/2000'  // Oct 25
        ],
        tickAmount: 4,
        labels: {
            formatter: function (value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'MMM dd')
            }
        }
    },
    title: {
        text: 'NIFTY 50',
        align: 'left',
        style: {
            fontSize: "9px",
            color: '#444'
        }
    },
    fill: {
        type: 'solid',
        colors: ['#4184f3']
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");

openModal.onclick = function () {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const userOpenBtn = document.getElementById("userOpenModal");
const userModal = document.getElementById("userModal");
const userCloseBtn = document.querySelector(".user-close");

userOpenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userModal.style.display === "block") {
        userModal.style.display = "none";
    } else {
        userModal.style.display = "block";
    }
});

window.addEventListener("click", (e) => {
    if (e.target === userModal) {
        userModal.style.display = "none";
    }
});


const links = document.querySelectorAll('.dashboard-header-nav a');
const currentPage = window.location.pathname;

links.forEach(link => {
  link.classList.remove('active');

  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

