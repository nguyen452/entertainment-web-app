import data from '../../data.json';



const trendingData = data.filter(((item) => {
    return item.isTrending === true;
}))


export default trendingData;