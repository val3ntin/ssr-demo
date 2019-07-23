const sleep = ms => {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    });
}
export const getUsers = () => sleep(1000).then(() => fetch('https://randomuser.me/api/?results=40').then(res => res.json()).then(data => data.results));