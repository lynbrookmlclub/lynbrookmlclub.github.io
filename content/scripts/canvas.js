var canvas = $("#dots");
var container = $('#services-holder');
var context = canvas.get(0).getContext("2d");
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();

var mx=0, my=0;

function resizeCanvas(){
    canvas.attr("width", container.width());
    canvas.attr("height", container.height() + 140);

    canvasWidth = canvas.width();
    canvasHeight = canvas.height();
}
resizeCanvas();

var containerx = document.getElementById('services-holder');
containerx.addEventListener( 'mousemove', function(e) {
    var bounds = containerx.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
});
containerx.addEventListener( 'mouseleave', function() {
    mx = 0;
    my = 0;
});
containerx.addEventListener( 'mousedown', function(e) {
    var bounds = containerx.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;

    if (spheresLength < max_spheresLength){
        spheresLength = spheresLength +1;
        var radius = 4+ Math.random()*3;
        var mass = radius / 2;
        var vX = Math.random() * 3 - 2;
        var vY = Math.random() * 3 - 2;
        spheres.push(new Sphere(x, y, radius, mass, vX, vY));
    }
});

var Sphere = function (x, y, radius, mass, vX, vY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.mass = mass;

    this.vX = vX;
    this.vY = vY;

    this.updatePosition = function () {
        this.x += this.vX;
        this.y += this.vY;
    };

    this.checkBoundaryCollision = function () {
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.vX *= -1;
        } else if (this.x + this.radius > canvasWidth) {
            this.x = canvasWidth - this.radius;
            this.vX *= -1;
        }

        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.vY *= -1;
        } else if (this.y + this.radius > canvasHeight) {
            this.y = canvasHeight - this.radius;
            this.vY *= -1;
        }
    };
};

var spheresLength = 25;
var max_spheresLength = 55;
var rad = 50;
var spheres = new Array();
function loadContent() {
    for (var i = 0; i < spheresLength; i++) {
        var x = 6 + (Math.random() * (canvasWidth - 40));
        var y = 6 + (Math.random() * (canvasHeight - 40));
        var radius = 4+ Math.random()*3;

        var mass = radius / 2;
        var vX = Math.random() * 3 - 2;
        var vY = Math.random() * 3 - 2;

        spheres.push(new Sphere(x, y, radius, mass, vX, vY));
    }
    animate();
}
loadContent();

function animate() {
    update();
    draw();

    requestAnimationFrame(animate);
}


function update() {
    for (var i = 0; i < spheresLength; i++) {
        var sphere1 = spheres[i];

        for (var j = i + 1; j < spheresLength; j++) {
            var sphere2 = spheres[j];
            var dX = sphere2.x - sphere1.x;
            var dY = sphere2.y - sphere1.y;
            var distance = Math.sqrt((dX * dX) + (dY * dY));

            if (distance < sphere1.radius + sphere2.radius) {
                var angle = Math.atan2(dY, dX);
                var sine = Math.sin(angle);
                var cosine = Math.cos(angle);

                var x = 0;
                var y = 0;
                var xB = dX * cosine + dY * sine;
                var yB = dY * cosine - dX * sine;

                var vX = sphere1.vX * cosine + sphere1.vY * sine;
                var vY = sphere1.vY * cosine - sphere1.vX * sine;

                var vXb = sphere2.vX * cosine + sphere2.vY * sine;
                var vYb = sphere2.vY * cosine - sphere2.vX * sine;

                var vTotal = vX - vXb;
                vX = ( (sphere1.mass - sphere2.mass) * vX + 2 * sphere2.mass * vXb) / (sphere1.mass + sphere2.mass);

                vXb = vTotal + vX;

                xB = x + (sphere1.radius + sphere2.radius);

                sphere1.x = sphere1.x + (x * cosine - y * sine);
                sphere1.y = sphere1.y + (y * cosine + x * sine);
                sphere2.x = sphere1.x + (xB * cosine - yB * sine);
                sphere2.y = sphere1.y + (yB * cosine + xB * sine);
                sphere1.vX = vX * cosine - vY * sine;
                sphere1.vY = vY * cosine + vX * sine;
                sphere2.vX = vXb * cosine - vYb * sine;
                sphere2.vY = vYb * cosine + vXb * sine;
            }
        }

        var temp_x = sphere1.vX;
        var temp_y = sphere1.vY;
        if (sphere1.x>=mx-rad && sphere1.x<=mx+rad && sphere1.y>=my-rad && sphere1.y<=my+rad){
            temp_x = -1*temp_x - 2;
            temp_y = -1*temp_y + 2;

            temp_x = (temp_x<-3) ? -3 : temp_x;
            temp_x = (temp_x>3) ? 3 : temp_x;
            temp_y = (temp_y<-3) ? -3 : temp_y;
            temp_y = (temp_y>3) ? 3 : temp_y;

            sphere1.vX = temp_x;
            sphere1.vY = temp_y;
        }

        sphere1.updatePosition();

        sphere1.checkBoundaryCollision();
    }
}

function draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#353535";

    for (var i = 0; i < spheresLength; i++) {
        var sphere = spheres[i];

        context.beginPath();
        context.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
}
