function twoPlaces(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
}

export function dateNow(): string {
    let date: Date = new Date();
    let year: string = twoPlaces(date.getFullYear());
    let month: string = twoPlaces(date.getMonth()+1);
    let day: string = twoPlaces(date.getDate());
    let hours: string = twoPlaces(date.getHours());
    let minutes: string = twoPlaces(date.getMinutes());
    let seconds: string = twoPlaces(date.getSeconds());
    let milliseconds: string = twoPlaces(date.getMilliseconds());
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}