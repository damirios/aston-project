export function getMetaColor(score) { // score value is between -1 and 100
    
    if (score === -1) {
        return 'no-score';
    } else if (score < 50) {
        return 'red';
    } else if (score < 75) {
        return 'yellow';
    } else if (score < 90) {
        return 'lime';
    } else {
        return 'green';
    }
}