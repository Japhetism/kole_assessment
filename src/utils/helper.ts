export const getCurrentDate = (): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long' as const,
        year: 'numeric' as const,
        month: 'long' as const,
        day: 'numeric' as const,
    };
    
    const currentDate = new Date().toLocaleDateString('en-US', options);

    return currentDate;
}