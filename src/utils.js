export const composeImageLink = (id, secret, server, farm) => {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
};