let baseurl;
if (process.env.NODE_ENV === 'production') {
    baseurl = "https://bankapptobi.onrender.com/";
} else {
    baseurl = 'http://localhost:5500/';
}

export { baseurl }