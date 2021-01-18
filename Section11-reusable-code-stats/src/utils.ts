export const dateStringToDate = (dateString: string): Date => {
    // convert [28/10/2018] to return number 
    const dateParts = dateString.split('/').map((value: string): number => {
        return parseInt(value);
    });

    // new Date constructor, day, month which is 0 indexed, and year 
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}