function solve(dataAsJSON) {

    const data = JSON.parse(dataAsJSON);
    const result = [];
    result.push('<table>')
    const props = Object.keys(data[0]);
    result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);

        for (const entry of data) {
            result.push(`  <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
        }
    
    result.push('</table>')
 return result.join('\n');
}

solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);