import"./chunk-TMC7WMLO.js";var n=class{constructor(r){this.board=Array(9).fill(null),this.currentPlayer=r,this.computerPlayer=r==="X"?"O":"X",this.winner=null,this.errorMessage=null,r==="X"&&this.computerMove()}makeMove(r){return this.board[r]||this.winner?(this.errorMessage="Invalid move! Cell already taken.",{success:!1,message:this.errorMessage}):(this.board[r]=this.currentPlayer,this.checkWinner(),this.errorMessage=null,this.winner||(this.currentPlayer=this.computerPlayer,this.computerMove()),{success:!0})}computerMove(){let r=this.board.map((e,s)=>e===null?s:null).filter(e=>e!==null);if(r.length>0){let e=Math.floor(Math.random()*r.length);this.board[r[e]]=this.computerPlayer,this.checkWinner(),this.currentPlayer=this.computerPlayer==="X"?"O":"X"}}checkWinner(){let r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let e of r){let[s,t,i]=e;if(this.board[s]&&this.board[s]===this.board[t]&&this.board[s]===this.board[i]){this.winner=this.board[s];return}}this.board.includes(null)||(this.winner="Draw")}getBoardHTML(){let r=this.board.map((t,i)=>`
        <div class="cell" data-index="${i}">
          ${t||""}
        </div>
      `).join(""),e=this.errorMessage?`
        <div class="error-message" style="color: red;">
          ${this.errorMessage}
        </div>
      `:"",s=this.winner?`
        <div class="winner-title">
          <h2>${this.winner!=="Draw"?'Winner: <span class="game-winner-name">'+this.winner+"</span>":"It's a Draw!"}</h2>
          <p> Want to play again ? (Y/N) </p>
        </div>
      `:"";return`
        <div class="board">${r}</div>
        ${s}
        ${e}
      `}getWinner(){return this.winner}resetGame(){this.board=Array(9).fill(null),this.currentPlayer=this.computerPlayer==="X"?"O":"X",this.winner=null,this.errorMessage=null}};export{n as TicTacToe};
