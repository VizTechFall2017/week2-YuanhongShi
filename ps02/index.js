var svg = d3.select('body').append('svg')
    .attr('width', 600)
    .attr('height', 800);

var line_BL1 = svg.append('line')
    .attr('x1', 400)
    .attr('x2', 250)
    .attr('y1', 350)
    .attr('y2', 500)
    .attr('stroke', 'cyan')
    .attr('stroke-width', 8);

var line_BL2 = svg.append('line')
    .attr('x1', 250)
    .attr('x2', 100)
    .attr('y1', 500)
    .attr('y2', 500)
    .attr('stroke', 'cyan')
    .attr('stroke-width', 3)
    .attr('opacity', .5);

var line_BL3 = svg.append('line')
    .attr('x1', 100)
    .attr('x2', 100)
    .attr('y1', 500)
    .attr('y2', 800)
    .attr('stroke', 'cyan')
    .attr('stroke-width', 3)
    .attr('opacity', .5);

var circle_B1 = svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 200)
    .attr('r', 50)
    .attr('fill', 'black');

var circle_B2 = svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 350)
    .attr('r', 20)
    .attr('fill', 'black');

var circle_B3 = svg.append('circle')
    .attr('cx', 350)
    .attr('cy', 400)
    .attr('r', 10)
    .attr('fill', 'black');

var circle_BL2 = svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 500)
    .attr('r', 23)
    .attr('fill', 'cyan');

var circle_B4 = svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 500)
    .attr('r', 15)
    .attr('fill', 'black');

var circle_B5 = svg.append('circle')
    .attr('cx', 250)
    .attr('cy', 620)
    .attr('r', 12)
    .attr('fill', 'black');

var circle_B6 = svg.append('circle')
    .attr('cx', 350)
    .attr('cy', 620)
    .attr('r', 15)
    .attr('fill', 'black');

var circle_B7 = svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 720)
    .attr('r', 25)
    .attr('fill', 'black');

var line_B1 = svg.append('line')
    .attr('x1', 400)
    .attr('x2', 400)
    .attr('y1', 200)
    .attr('y2', 350)
    .attr('stroke', 'black')
    .attr('stroke-width', 3);

var line_B2 = svg.append('line')
    .attr('x1', 400)
    .attr('x2', 250)
    .attr('y1', 350)
    .attr('y2', 500)
    .attr('stroke', 'black')
    .attr('stroke-width', 3);

var line_B3 = svg.append('line')
    .attr('x1', 250)
    .attr('x2', 250)
    .attr('y1', 500)
    .attr('y2', 620)
    .attr('stroke', 'black')
    .attr('stroke-width', 3);

var line_B4 = svg.append('line')
    .attr('x1', 250)
    .attr('x2', 350)
    .attr('y1', 620)
    .attr('y2', 620)
    .attr('stroke', 'black')
    .attr('stroke-width', 3);

var line_B5 = svg.append('line')
    .attr('x1', 350)
    .attr('x2', 400)
    .attr('y1', 620)
    .attr('y2', 700)
    .attr('stroke', 'black')
    .attr('stroke-width', 3);

var circle_M1 = svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 0)
    .attr('r', 60)
    .attr('fill', 'magenta');

var circle_M2 = svg.append('circle')
    .attr('cx', 300)
    .attr('cy', 150)
    .attr('r', 15)
    .attr('fill', 'magenta');

var circle_M3 = svg.append('circle')
    .attr('cx', 180)
    .attr('cy', 150)
    .attr('r', 22)
    .attr('fill', 'magenta');

var circle_M4 = svg.append('circle')
    .attr('cx', 180)
    .attr('cy', 450)
    .attr('r', 22)
    .attr('fill', 'magenta');

var circle_M5 = svg.append('circle')
    .attr('cx', 180)
    .attr('cy', 700)
    .attr('r', 22)
    .attr('fill', 'magenta');

var circle_M6 = svg.append('circle')
    .attr('cx', 380)
    .attr('cy', 550)
    .attr('r', 50)
    .attr('fill', 'magenta')
    .on('click', function(d) {
        d3.select(this).attr('fill', 'yellow').attr('stroke', 'black').attr('stroke-width', 10);
    });

var line_M1 = svg.append('line')
    .attr('x1', 400)
    .attr('x2', 300)
    .attr('y1', 0)
    .attr('y2', 150)
    .attr('stroke', 'magenta')
    .attr('stroke-width', 5);

var line_M2 = svg.append('line')
    .attr('x1', 300)
    .attr('x2', 180)
    .attr('y1', 150)
    .attr('y2', 150)
    .attr('stroke', 'magenta')
    .attr('stroke-width', 5);

var line_M3 = svg.append('line')
    .attr('x1', 180)
    .attr('x2', 180)
    .attr('y1', 150)
    .attr('y2', 700)
    .attr('stroke', 'magenta')
    .attr('stroke-width', 5);

var line_M4 = svg.append('line')
    .attr('x1', 180)
    .attr('x2', 380)
    .attr('y1', 700)
    .attr('y2', 550)
    .attr('stroke', 'magenta')
    .attr('stroke-width', 5);

var circle_BL1 = svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 350)
    .attr('r', 150)
    .attr('fill', 'cyan')
    .attr('opacity', .5);

var circle_BL2 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 500)
    .attr('r', 25)
    .attr('fill', 'cyan');

var circle_BL3 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 700)
    .attr('r', 15)
    .attr('fill', 'cyan');

var circle_BL4 = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 800)
    .attr('r', 80)
    .attr('fill', 'cyan');






