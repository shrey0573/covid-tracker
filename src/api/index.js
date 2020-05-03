import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    try {
        let changeableurl = url;

        if(country){
            changeableurl = `${url}/countries/${country}`;
        }
        const {data} = await axios.get(changeableurl);

    const modifiedData = {
        confirmed: data.confirmed,
        deaths : data.deaths,
        recovered: data.recovered,
        lastUpdate : data.lastUpdate
    }

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const requiredData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return requiredData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}