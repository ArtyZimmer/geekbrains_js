const legend = "ABCDEFGH"
function createChessTable (tableId = "chesstable") {
    const table = document.createElement("div");
    table.classList.add('chess-table');
    for (let i = 0; i < 10; i++) {
        const rowClassName = i === 0 || i === 9 ? "legend" : "normal";
        const row = document.createElement("div");
        row.classList.add(rowClassName);
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            if ((i === 0 || i === 9) && (j !== 0 && j !== 9)) {
                cell.innerText = legend[j - 1];
            } else if((i !== 0 && i !== 9) && (j === 0 || j === 9)) {
                cell.innerText = `${i}`;
            } else if(i !== 0 && i !== 9 && j !== 0 && j !== 9) {
                cell.id = `${tableId}-${legend[j - 1]}${i}`;
            }
            row.append(cell);
        }
        table.append(row);
    }
    return table;
}

function setChessFiguresLayout(layout, tableId = "chesstable") {
    Object.keys(layout).map(figure => {
        const figurePositions = layout[figure];
        figurePositions.forEach(position => {
            const cell = document.getElementById(`${tableId}-${position}`);
            cell.innerHTML = figure;
        })
    })
}

document.body.append(createChessTable());

const defaultLayout = {
    "&#9812;": ["E1"],
    "&#9813;": ["D1"],
    "&#9814;": ["H1", "A1"],
    "&#9815;": ["F1", "C1"],
    "&#9816;": ["G1", "B1"],
    "&#9817;": ["A2", "B2", "C2", "E2", "F2", "G2", "H2"],
    "&#9818;": ["E8"],
    "&#9819;": ["D8"],
    "&#9820;": ["H8", "H8"],
    "&#9821;": ["F8", "C8"],
    "&#9822;": ["G8", "B8"],
    "&#9823;": ["A7", "B7", "C7", "E7", "F7", "G7", "H7"],
}

setChessFiguresLayout(defaultLayout);