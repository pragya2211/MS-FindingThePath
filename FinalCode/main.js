var startnode;    //To store the startnode of graph globally
var endnode;      //To store the endnode of graph globally
var matrix;       //Representing the screen with this final matrix.
var rows=45;
var cols=45;
var matrix = [];

docFrag = document.createDocumentFragment();
var el_down = document.getElementById("printIDs");

function makerows(rows,cols)
{
	var r;
	var c; 

	for(r=0; r<rows; r++)
    {
      for(c=0; c<cols; c++)
      {
      
	    var elem = document.createElement('input');
	    elem.type = 'button';
	    var c1=c.toString();
        var r1=r.toString();
        var r2= r1+"a" + c1;
        elem.id = "CELL";
        // elem.id = elem.id.concat(r1);

        elem.id = elem.id.concat(r2);			//Giving ids to all the cells by  concatenating with the corresponding number.
	    

	     elem.style.width = '40px';
	     elem.style.height = '40px';
	     elem.style.backgroundColor = 'white';
	     elem.onclick = function() {click(this.id)};
	     docFrag.appendChild(elem);
	    }
	 }

	  //To add cells to the container
	document.body.appendChild(docFrag);


}
function click(clicked) 
{ 
	var res = clicked.split("a");
    el_down.innerHTML = "ID = "+res[0] + res[1]; 
    document.getElementById(clicked).style.background = 'grey';
    ol = res[0].slice(4);
    var in1 = parseInt(ol, 10);
    var in2 = Number(res[1]);
    matrix[in1][in2]=-1;
    // BFS(matrix,startnode);

}
function setStart(i,j)
{
var n = i.toString();
  var a=j.toString();
  var b1=n+"a" +a;
  startnode=b1;
  var cellnum = "CELL";
  cellnum = cellnum.concat(b1);
  // startnode= cellnum;
document.getElementById(cellnum).style.background = 'green';
// document.getElementById(cellnum).draggable = true;
// document.getElementById(cellnum).ondragstart= "drag(event)"
 
}
function setEnd(i2,j2)
{
var n = i2.toString();
  var a=j2.toString();
  var b2=n+"a" +a;
  endnode=b2;
  var cellnum = "CELL";
  cellnum = cellnum.concat(b2);
  // endnode=cellnum;
document.getElementById(cellnum).style.background = 'red';
}

      


function Clear(rows,cols)
{
for(var i=0; i<rows; i++) 
  {
    for(var j=0; j<cols; j++)
    {

	var n = i.toString();
	var a=j.toString();
	var b=n+"a" +a;
	if(b!=startnode && b!=endnode && matrix[i][j]!=-1)
	{
  		document.getElementById("CELL"+b).style.background = 'white';
	}
     
     }
  }

}



function makematrix(rows,cols)
{ 
  for(var i=0; i<rows; i++)
  {
      matrix[i] = new Array(cols);
  }
  for(var i=0; i<rows; i++) 
  {
    for(var j=0; j<cols; j++)
    {

        var n = i.toString();
        var a=j.toString();
        var b=n+"a" +a;
        if(b==startnode)
        {
          matrix[i][j]=1;
        }

        else if(b==endnode)
        {
          matrix[i][j]=2;
        }

        else
        {
          matrix[i][j]=0;
        }

    }
    
  }
}




function printmatrix(rows,cols)
{
 for(var i=0; i<rows; i++) 
  {
    for(var j=0; j<cols; j++)
    {
    	document.write(matrix[i][j]);
    }
	document.write("<br>");
	}     
}


makerows(45,45);
setStart(15,10);
setEnd(15,40);
makematrix(45,45);