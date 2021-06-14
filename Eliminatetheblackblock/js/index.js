var timea = document.getElementById('timea'); //计时器
var timerun = 0.0; //计时器
zz = document.getElementById('zz'); //难度遮罩
var main = document.getElementById('main'); //主体
var over = document.getElementById('over'); //失败
var fila = document.getElementById('fila'); //失败文字
var vict = document.getElementById('vict'); //胜利
var victory = document.getElementById('victory'); //胜利文字
var jd = 0; //进度 + px;
var jsq2 = 0; //计时器

//触摸至main区域失败条件一！
main.addEventListener('touchstart', function() {
    over.style.top = 0;
    clearInterval(topjsq);
    clearInterval(timer);

})

// 失败刷新
fila.addEventListener('touchstart', function() {
        window.location.replace("index.html")
    })
    //胜利刷新
victory.addEventListener('touchstart', function() {
    window.location.replace("index.html")
})

var hdt = document.querySelector("#hdt")
var dian = document.querySelector("#dian")
var jdd = document.querySelector("#jd")
var star = document.querySelector("#star")
const bw = hdt.offsetWidth //常量滑动条宽度250
const bl = hdt.offsetLeft - bw / 2 //常量 滑动条长度
hdt.addEventListener('touchmove', hdtfun)

// 难度框
function hdtfun(e) {
    var bx = e.touches[0].clientX - bl
    var bfb = Math.round(bx / bw * 100)

    if (bfb >= 100) {
        bfb = 100;
    }
    if (bfb <= 0) {
        bfb = 0;
    }
    star.style.display = 'block'
    jdd.innerHTML = bfb + '% '
    dian.style.left = bfb + '%'
    nd = bfb * 5
    star.addEventListener('touchstart', start)
}

function start() {
    game(nd)
}

function game() {
    setTimeout(function() {
        zz.style.display = 'none'
    }, 500);
    for (var i = 0; i <= nd; i++) {
        var cdiv = document.createElement("div");
        document.getElementById('main').appendChild(cdiv);

        sj = Math.random() * 10;

        if (sj > 0 && sj <= 2.5) {
            cdiv.className = 'c1'
        }
        if (sj > 2.5 && sj <= 5) {
            cdiv.className = 'c2'
        }
        if (sj > 5 && sj <= 7.5) {
            cdiv.className = 'c3'
        }
        if (sj > 7.5 && sj <= 10) {
            cdiv.className = 'c4'
        }

    }

    //计时器
    ms = 0;
    secs = 0;
    mins = '';
    var jsq1 = setInterval(function() {
        ms += 1;
        parseInt(ms)
        if (ms >= 9) {
            secs += 1;
            parseInt(secs);
            ms = 00;
        }
        var jsqa = secs + '.' + ms + 'S'
        timea.innerHTML = jsqa;
    }, 100)


    c1 = document.querySelectorAll('.c1');
    c2 = document.querySelectorAll('.c2');
    c3 = document.querySelectorAll('.c3');
    c4 = document.querySelectorAll('.c4');




    //双重计时器       、、一秒后开始
    var speed = 0;
    finish = -(main.offsetHeight)
    console.log(finish)

    jjj = setTimeout(function go() {
        timer = setInterval(function() {
            speed++;
            jd -= 150 + speed;
            console.log(jd)
            main.style.marginTop = jd + 'px';
            if (jd <= finish) {
                vict.style.top = 0;
                clearInterval(jjj);
                clearInterval(jsq1);
                clearInterval(timer);
            }

        }, 500)

    }, 1000)

    //触摸至main区域失败条件一！
    main.addEventListener('touchstart', function() {
        over.style.top = 0;
        clearInterval(jjj);
        clearInterval(timer);
        clearInterval(jsq1);

    })

    //获取输出c1234[k]窗口高度

    var cheight = document.documentElement.clientHeight;


    for (let k = 0; k < c1.length; k++) { //给每个黑块添加计时器 
        let tt = setInterval(function() {
            let c1top = c1[k].getBoundingClientRect().top;

            if (c1top > cheight) {
                clearInterval(jsq1);
                over.style.top = 0;
                clearInterval(jjj);
                clearInterval(timer);
            }
            c1[k].addEventListener('touchstart', function() { //清除每个黑块添加计时器
                this.style.background = 'white';
                event.stopPropagation();
                clearInterval(tt);
                this.style.opacity = 0;
            })

        }, 500)
    }


    for (let t = 0; t < c2.length; t++) { //给每个黑块添加计时器 
        let tt = setInterval(function() {
            let c2top = c2[t].getBoundingClientRect().top;
            if (c2top > cheight) {
                over.style.top = 0;
                clearInterval(jsq1);
                clearInterval(jjj);
                clearInterval(timer);
            }
            c2[t].addEventListener('touchstart', function() { //清除每个黑块添加计时器
                this.style.background = 'white';
                event.stopPropagation();
                clearInterval(tt);
                this.style.opacity = 0;
            })

        }, 500)
    }

    for (let s = 0; s < c3.length; s++) { //给每个黑块添加计时器 
        let tt = setInterval(function() {
            let c3top = c3[s].getBoundingClientRect().top;

            if (c3top > cheight) {
                over.style.top = 0;
                clearInterval(jsq1);
                clearInterval(jjj);
                clearInterval(timer);
            }
            c3[s].addEventListener('touchstart', function() { //清除每个黑块添加计时器
                this.style.background = 'white';
                event.stopPropagation();
                clearInterval(tt);
                this.style.opacity = 0;
            })

        }, 500)
    }


    for (let y = 0; y < c4.length; y++) { //给每个黑块添加计时器 
        let tt = setInterval(function() {

            let c4top = c4[y].getBoundingClientRect().top;
            if (c4top > cheight) {
                over.style.top = 0;
                clearInterval(jsq1);
                clearInterval(jjj);
                clearInterval(timer);
            }
            c4[y].addEventListener('touchstart', function() { //清除每个黑块添加计时器
                this.style.background = 'white';
                event.stopPropagation();
                clearInterval(tt);
                this.style.opacity = 0;
            })

        }, 500)
    }
}









//移动端浏览器优化

document.body.addEventListener('touchmove', (e) => { //禁用移动端上滑刷新
    e.preventDefault();
}, {
    passive: false
});


// 禁用双指放大
document.documentElement.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {
    passive: false
});

// 禁用双击放大
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function(event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {
    passive: false
});