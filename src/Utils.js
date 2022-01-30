export function calculatewinner(Square){
      const winnerSquare =[
          [0,3,6],
          [0,1,2],
          [0,4,8],
          [3,4,5],
          [6,7,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
      ]
      for(let i=0; i<winnerSquare.length;i++){
          const[a,b,c] = winnerSquare[i]
          if(Square[a] && Square[a] === Square[b] && Square[a] === Square[c])
          return Square[a]
      }
      return null
} 