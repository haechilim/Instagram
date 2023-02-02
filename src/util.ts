class Util {
    static getCountToString(count: number): string {
        if(count < 10000) return count + "";
        
        return (Math.floor(count / 1000) / 10) + "만";
    }

    static timeToString(time: number): string {
        console.log(time);
        const now: number = Date.now();

        const betweenTime = Math.floor((now - time) / 1000 / 60);
        if (betweenTime < 1) return "방금";
        if (betweenTime < 60) return betweenTime + "분";

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) return betweenTimeHour + "시간";

        const betweenTimeDay = Math.floor(betweenTimeHour / 24);
        if (betweenTimeDay < 30) return betweenTimeDay + "일";

        const betweenTimeMonth = Math.floor(betweenTimeDay / 30);
        if (betweenTimeMonth < 12) return betweenTimeMonth + "달";

        return Math.floor(betweenTimeMonth / 12) + "년";
    }
}

export default Util;