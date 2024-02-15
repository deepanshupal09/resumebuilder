export function setCookieWithExpiry(cookieName,cookieValue,expiry=48) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + expiry * 60 * 60 * 1000;
    console.log("Cookie value: ", cookieValue)
    now.setTime(expireTime);
    document.cookie = cookieName + "=" + JSON.stringify(cookieValue) + ";expires=" + now.toUTCString() + ";";
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

