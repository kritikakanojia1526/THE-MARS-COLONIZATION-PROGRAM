var container=document.getElementById('containerDiv');
var chance=0;
var humanLetter='O';
var computerLetter='X';
var grid=new Array(3);
var depth=parseInt('10',10);

class Move{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
	}
}

for(i=0;i<3;i++)
{
    grid[i]=new Array(3);
    for(j=0;j<3;j++)
    {
        grid[i][j]='';
        var el=document.createElement('div');
        el.setAttribute('id','cell-'+i+'-'+j);
        container.appendChild(el);
    }
}
newGame();
window.onclick = e=>{
    console.log(e.target.id);
    if(e.target.id.includes('cell')&&document.getElementById(e.target.id).innerHTML!=computerLetter
    	&&document.getElementById(e.target.id).innerHTML!=humanLetter)
    {
    	if(chance==0)
    	{
    		chance=1;
    		humanLetter='X';
    		computerLetter='O';
    		document.getElementById(e.target.id).innerHTML=humanLetter;
    		var res=e.target.id.split('-');
    		grid[parseInt(res[1],10)][parseInt(res[2],10)]=humanLetter;
    		checkTerminalCondition();
    		yourMoveComputer();
    	}
    	else if(chance==-1)
    	{
    		var res=e.target.id.split('-');
    		chance=1;
    		grid[parseInt(res[1],10)][parseInt(res[2],10)]=humanLetter;
    		document.getElementById(e.target.id).innerHTML=humanLetter;
    		var won=checkWinningCondition();
    		if(!won)
    		{
    			var result=checkTerminalCondition();
    			if(!result)
    				yourMoveComputer();
    		}
    	}
    }
    };


function yourMoveComputer() {
	var move=minimaxMoveByComputer(depth);
	i=move.x;
	j=move.y;
	document.getElementById('cell-'+i+'-'+j).innerHTML=computerLetter;
	grid[i][j]=computerLetter;
	chance=-1;
	checkWinningCondition();
	checkTerminalCondition();
	return;
}

function checkTerminalCondition()
{
	//console.log('checking TerminalCondition')
	let count=0;
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			if(grid[i][j]!='')
			{
				count++;
			}
		}
	}
	if(count==9)
	{
		document.getElementById('result').innerHTML='Match Tied!';
		chance=2;
		return true;
	}
	return false;
	//console.log(count+' '+chance);

}
function checkTerminalConditionMinimax()
{
	let count=0;
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			if(grid[i][j]!='')
			{
				count++;
			}
		}
	}
	if(count==9)
	{
		return true;
	}
	return false;
}

function checkWinningCondition()
{
	if(grid[0][0]=='X'&&grid[0][1]=='X'&&grid[0][2]=='X')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-0-1').style.backgroundColor='green';
		document.getElementById('cell-0-2').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][0]=='X'&&grid[1][0]=='X'&&grid[2][0]=='X')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-1-0').style.backgroundColor='green';
		document.getElementById('cell-2-0').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[1][0]=='X'&&grid[1][1]=='X'&&grid[1][2]=='X')
	{
		document.getElementById('cell-1-0').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-1-2').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[2][0]=='X'&&grid[2][1]=='X'&&grid[2][2]=='X')
	{
		document.getElementById('cell-2-0').style.backgroundColor='green';
		document.getElementById('cell-2-1').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][1]=='X'&&grid[1][1]=='X'&&grid[2][1]=='X')
	{
		document.getElementById('cell-0-1').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-1').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][2]=='X'&&grid[1][2]=='X'&&grid[2][2]=='X')
	{
		document.getElementById('cell-0-2').style.backgroundColor='green';
		document.getElementById('cell-1-2').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][0]=='X'&&grid[1][1]=='X'&&grid[2][2]=='X')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][2]=='X'&&grid[1][1]=='X'&&grid[2][0]=='X')
	{
		document.getElementById('cell-0-2').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-0').style.backgroundColor='green';
		updateWin('X');
		return true;
	}
	if(grid[0][0]=='O'&&grid[0][1]=='O'&&grid[0][2]=='O')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-0-1').style.backgroundColor='green';
		document.getElementById('cell-0-2').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[0][0]=='O'&&grid[1][0]=='O'&&grid[2][0]=='O')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-1-0').style.backgroundColor='green';
		document.getElementById('cell-2-0').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[1][0]=='O'&&grid[1][1]=='O'&&grid[1][2]=='O')
	{
		document.getElementById('cell-1-0').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-1-2').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[2][0]=='O'&&grid[2][1]=='O'&&grid[2][2]=='O')
	{
		document.getElementById('cell-2-0').style.backgroundColor='green';
		document.getElementById('cell-2-1').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[0][1]=='O'&&grid[1][1]=='O'&&grid[2][1]=='O')
	{
		document.getElementById('cell-0-1').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-1').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[0][2]=='O'&&grid[1][2]=='O'&&grid[2][2]=='O')
	{
		document.getElementById('cell-0-2').style.backgroundColor='green';
		document.getElementById('cell-1-2').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[0][0]=='O'&&grid[1][1]=='O'&&grid[2][2]=='O')
	{
		document.getElementById('cell-0-0').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-2').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	if(grid[0][2]=='O'&&grid[1][1]=='O'&&grid[2][0]=='O')
	{
		document.getElementById('cell-0-2').style.backgroundColor='green';
		document.getElementById('cell-1-1').style.backgroundColor='green';
		document.getElementById('cell-2-0').style.backgroundColor='green';
		updateWin('O');
		return true;
	}
	return false;
}
function updateWin(letter)
{
	if(humanLetter==letter)
			document.getElementById('result').innerHTML='Human wins';
		else
			document.getElementById('result').innerHTML='Computer wins';
		chance=3;
}
function checkWinningConditionMinimax()
{
	if((grid[0][0]=='X'&&grid[0][1]=='X'&&grid[0][2]=='X')
		||(grid[0][0]=='X'&&grid[1][0]=='X'&&grid[2][0]=='X')
	||(grid[1][0]=='X'&&grid[1][1]=='X'&&grid[1][2]=='X')
	||(grid[2][0]=='X'&&grid[2][1]=='X'&&grid[2][2]=='X')
	||(grid[0][1]=='X'&&grid[1][1]=='X'&&grid[2][1]=='X')
	||(grid[0][2]=='X'&&grid[1][2]=='X'&&grid[2][2]=='X')
	||(grid[0][0]=='X'&&grid[1][1]=='X'&&grid[2][2]=='X')
	||(grid[0][2]=='X'&&grid[1][1]=='X'&&grid[2][0]=='X'))
	{
		if(humanLetter=='X')
			return -1;
		else
			return 1;
	}
	else if((grid[0][0]=='O'&&grid[0][1]=='O'&&grid[0][2]=='O')
		||(grid[0][0]=='O'&&grid[1][0]=='O'&&grid[2][0]=='O')
	||(grid[1][0]=='O'&&grid[1][1]=='O'&&grid[1][2]=='O')
	||(grid[2][0]=='O'&&grid[2][1]=='O'&&grid[2][2]=='O')
	||(grid[0][1]=='O'&&grid[1][1]=='O'&&grid[2][1]=='O')
	||(grid[0][2]=='O'&&grid[1][2]=='O'&&grid[2][2]=='O')
	||(grid[0][0]=='O'&&grid[1][1]=='O'&&grid[2][2]=='O')
	||(grid[0][2]=='O'&&grid[1][1]=='O'&&grid[2][0]=='O'))
	{
		if(humanLetter=='O')
			return -1;
		else
			return 1;
	}
	return 0;
}

function computerStart()
{
	if(chance==0)
	{
		chance=-1;
    	humanLetter='O';
    	computerLetter='X';
    	yourMoveComputer();

	}
}


function minimaxMoveByComputer()
{
	let maxScore=-Infinity;
	let bestMove=null;
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			if(grid[i][j]=='')
			{
				//console.log(i+' '+j);
				grid[i][j]=computerLetter;
				let score=findMinValue(depth-1);
				grid[i][j]='';
				if(score>maxScore)
				{
					maxScore=score;
					bestMove=new Move(i,j);
				}
			}
		}
	}
	return bestMove;
}


function findMinValue(depth)
{

	if(checkWinningConditionMinimax()!=0)
		return checkWinningConditionMinimax();

	if(checkTerminalConditionMinimax())
		return 0;

	if(depth<=0)
		return 0;

	let bestScore=Infinity;
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			if(grid[i][j]=='')
			{
				//console.log('reached '+i+' '+j);
				grid[i][j]=humanLetter;
				let score=findMaxValue(depth-1);
				//console.log(score);
				grid[i][j]='';
				if(score<bestScore)
					bestScore=score;
				if(bestScore==-1)//Pruning
					break;
				//console.log('finished '+i+' '+j);
			}
		}
	}

	return bestScore;
}

function findMaxValue(depth)
{
	if(checkWinningConditionMinimax()!=0)
		return checkWinningConditionMinimax();

	if(checkTerminalConditionMinimax())
		return 0;

	if(depth<=0)
		return 0;

	let bestScore=-Infinity;
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			if(grid[i][j]=='')
			{
				grid[i][j]=computerLetter;
				let score=findMinValue(depth-1);
				grid[i][j]='';
				if(score>bestScore)
					bestScore=score;
				if(bestScore==1)
					break;
			}
		}
	}
	return bestScore;
}

function setDepth()
{
	depth=parseInt(document.getElementById('depthValue').value,10);
}

function newGame()
{
	chance=0;
	humanLetter='0';
	computerLetter='X';
	for(let i=0;i<3;i++)
	{
		for(let j=0;j<3;j++)
		{
			grid[i][j]='';
			document.getElementById('cell-'+i+'-'+j).innerHTML='';
			document.getElementById('cell-'+i+'-'+j).style.backgroundColor='white';
		}
	}

}