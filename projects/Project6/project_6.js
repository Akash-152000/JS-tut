const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
        <div clas=''color>
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " "?"Space":e.key}</td>
                <td>${e.code}</td>
            </tr>
        </table>

        </div>

    `
})