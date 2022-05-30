const main = document.querySelector('.main');
const playBtn = document.querySelector('button')
const result = document.querySelector('.result')

const app = {

    player: 1,
    position: '',
    btn: null,
    boardData: [],

    board() {
        let board = []
        for(let i = 0; i < 20; i++){
            board[i] = []
            for(let j = 0; j < 20; j++){
                board[i][j] = ''
            }
        }
        return board
    },

    addDataToBoardData() {
        let position = this.position.split(',')
        let [x, y] = position
        if(this.player == 2) {
            this.boardData[x][y] = 'x'
        } else {
            this.boardData[x][y] = 'o'
        }
    },

    player1Click() {
        this.btn.innerHTML = 'x'
        this.btn.setAttribute('style', 'color: red')
    },

    player2Click() {
        this.btn.innerHTML = 'o'
        this.btn.setAttribute('style', 'color: black')
    },

    checkPlayer() {
        if(this.player === 1) {
            this.player1Click()
            this.player = 2
        } else {
            this.player2Click()
            this.player = 1
        }
    },

    checkWin() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 16; j++) {
                if (this.boardData[i][j] == this.boardData[i][j+1] && this.boardData[i][j] == this.boardData[i][j+2] && this.boardData[i][j] == this.boardData[i][j+3] && this.boardData[i][j] == this.boardData[i][j+4] && this.boardData[i][j] == "x") {
                    return this.alertPlayer1Win()
                } else if (this.boardData[i][j] == this.boardData[i][j+1] && this.boardData[i][j] == this.boardData[i][j+2] && this.boardData[i][j] == this.boardData[i][j+3] && this.boardData[i][j] == this.boardData[i][j+4] && this.boardData[i][j] == "o"){
                   return this.alertPlayer2Win()
                }        
            }
        }
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 20; j++) {
                if (this.boardData[i][j] == this.boardData[i+1][j] && this.boardData[i][j] == this.boardData[i+2][j] && this.boardData[i][j] == this.boardData[i+3][j] && this.boardData[i][j] == this.boardData[i+4][j] && this.boardData[i][j] == "x") {
                    return this.alertPlayer1Win()
                } else if (this.boardData[i][j] == this.boardData[i+1][j] && this.boardData[i][j] == this.boardData[i+2][j] && this.boardData[i][j] == this.boardData[i+3][j] && this.boardData[i][j] == this.boardData[i+4][j] && this.boardData[i][j] == "o") {
                    return this.alertPlayer2Win()
                }
            }
        }
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                if (this.boardData[i][j] == this.boardData[i+1][j+1] && this.boardData[i][j] == this.boardData[i+2][j+2] && this.boardData[i][j] == this.boardData[i+3][j+3] && this.boardData[i][j] == this.boardData[i+4][j+4] && this.boardData[i][j] == "x") {
                    return this.alertPlayer1Win()
                } else if (this.boardData[i][j] == this.boardData[i+1][j+1] && this.boardData[i][j] == this.boardData[i+2][j+2] && this.boardData[i][j] == this.boardData[i+3][j+3] && this.boardData[i][j] == this.boardData[i+4][j+4] && this.boardData[i][j] == "o") {
                    return this.alertPlayer2Win()
                }
            }
        }
        for (let i = 4; i < 20; i++) {
            for (let j = 0; j < 16; j++) {
                if (this.boardData[i][j] == this.boardData[i-1][j+1] && this.boardData[i][j] == this.boardData[i-2][j+2] && this.boardData[i][j] == this.boardData[i-3][j+3] && this.boardData[i][j] == this.boardData[i-4][j+4] && this.boardData[i][j] == "x") {
                    return this.alertPlayer1Win()
                } else if (this.boardData[i][j] == this.boardData[i-1][j+1] && this.boardData[i][j] == this.boardData[i-2][j+2] && this.boardData[i][j] == this.boardData[i-3][j+3] && this.boardData[i][j] == this.boardData[i-4][j+4] && this.boardData[i][j] == "o") {
                    return this.alertPlayer2Win()
                }
            }
        }
    },

    alertPlayer1Win() {
        setTimeout(() => {
            alert("Kết thúc, người chơi 1 đã thắng!!!")
            this.boardData = this.board()
            this.player = 1
            this.render()
        }, 150) 
    },

    alertPlayer2Win() {
        setTimeout(() => {
            alert("Kết thúc, người chơi 2 đã thắng!!!")
            this.boardData = this.board()
            this.player = 1
            this.render()
            
        }, 150) 
    },

    handleClick(e) {
        this.btn = e.target.closest('.hihi')
        if(this.btn) {
            this.position = this.btn.dataset.index
            if(this.btn.innerText !== 'x' && this.btn.innerText !== 'o') {
                this.checkPlayer()
                this.addDataToBoardData()
                this.checkWin()
            } else {
               alert('This cell is not empty')
            }
        }
    },

    render() {
        let htmls = ''
        for(let i = 0; i < 20; i++) {
            htmls += '<div>'
            for(let j = 0; j < 20; j++) {
                htmls += `<span class="hihi" data-index="${i},${j}"}>&nbsp;</span>`
            }
            htmls += `</div>`;
        }
        main.innerHTML = htmls;
    },

    init() {
        playBtn.onclick = this.render
        this.boardData = this.board()

        //Handle dom events
        main.onclick = this.handleClick.bind(this)
    }
}

app.init()