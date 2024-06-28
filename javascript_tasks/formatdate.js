const dates=["2023-3-20","2024-5-29","2022-5-18","2021-3-6"];
function formatDates(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
const formattedDates=dates.map(formatDates);
console.log(formattedDates);