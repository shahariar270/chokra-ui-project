export const minifyText = (text, maxLength = 100) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

export const blogData = async () => {
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    return data.posts; 
};