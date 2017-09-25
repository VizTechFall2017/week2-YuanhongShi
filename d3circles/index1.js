console.log('here');

//var indexCard = d3.select('svg');





var indexCard = d3.select('body').append('svg')
    .attr('width', 600)
    .attr('height', 400);

var clicked = true;

var circle1 = indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 200)
    .attr('r', 10)
    .attr('fill', 'blue')
    .on('click', function(d) {
        if(clicked==true){
            //do something
            d3.select(this).attr('fill', 'orange').attr('r', 100);
            clicked = false;
        }
        else{   //if clicked == false
            //do something else
            d3.select(this).attr('fill', 'blue').attr('r', 10);
            clicked = true;
        }
        //console.log('here');

        console.log(clicked);
    })
    .on('mouseover', function(d){
        d3.select(this).attr('stroke','red')
            .attr('stroke-width', 10);
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('stroke','black')
            .attr('stroke-width', 2);
    }); //both of style and attr can be used


indexCard.append('rect')
    .attr('x', 100)
    .attr('y', 150)
    .attr('width', 20)
    .attr('height', 20);

indexCard.append('line')
    .attr('x1', 10)
    .attr('x2', 20)
    .attr('y1', 150)
    .attr('y2', 250)
    .attr('stroke', 'purple')
    .attr('stroke-width', 5);


circle1.attr('stroke', 'purple');

indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 10)
    .attr('fill', 'green');