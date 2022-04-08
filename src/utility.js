// import axios from "axios";

export const dateDiffrance = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let second = parseInt(diffTime / 1000);
    let minutes = parseInt(second / 60);
    let hours = parseInt(minutes / 60);
    let days = parseInt(hours / 24);
    if (days > 0.9) {
        return (`${days} days`);
    } else {
        if (second < 60) {
            return (`${second===0 ? 1 : second} second`)
        } else if (minutes > 0 && minutes <= 60) {
            return (`${minutes} min`)
        } else {
            return (`${hours} hours`)
        }
    }
}
