var mat_display = document.getElementById("matrix_print");
function issafe(i,j,visited,grid,rows,cols)
	{
		if(i>=0 && j>=0 && i<rows && j<cols && visited[i][j]==0 && grid[i][j]!=-1)
		{
			// matrix_print.innerHTML = i+" " +j;
			return true;
		}

		return false;
	}


function BFS(grid,startNode) 
{
	mat_display.innerHTML = "Doing bfs" ;
	var h = rows;
	var l = cols;

	var visited = [];
	for(var i=0; i<rows; i++)
	{
		visited[i] = new Array(cols);
	}

	for(var i=0; i<rows; i++) 
	{
		for(var j=0; j<cols; j++)
		{
			visited[i][j] = 0;
		}
	}
	var q = [];
	var res = startNode.split("a");
	var in1 = parseInt(res[0], 10);
	var in2 = Number(res[1]);
	visited[in1][in2] = 1;
	q.push(in1 + "," + in2);
	var flag=0;


	while (flag!= 1) 
	{
		let x = q.shift();
		var res = x.split(",");
		var row = parseInt(res[0], 10);
		var col = Number(res[1]);


		dr = [-1,1,0,0];
		dc = [0,0,-1,1];

		if(grid[row][col]==2)
		{
			flag=1;
			// matrix_print.innerHTML = "Path found";
			return ;
		}



		for(var k=0; k<4; k++)
		{

			rr = row+dr[k];
			cc = col+dc[k];
			// matrix_print.innerHTML = grid[rr][cc];
			if(issafe(rr,cc,visited,grid,rows,cols)==true)
			{
				q.push(rr+","+ cc);
				visited[rr][cc]=1;

				if(matrix[rr][cc]!=2)
				{
				    document.getElementById("CELL"+rr+"a"+cc).style.background = 'aqua';

				}
			}
		}

                
  	}
}


function BFSutil(rows,cols)
{
	var start = new Date().getTime();
	BFS(matrix,startnode);
	var end = new Date().getTime();
  	var dur = end - start;
  	mat_display.innerHTML = "Time " + dur;
}
