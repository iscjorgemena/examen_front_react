import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import PresenceShareServices from '../services/PresenceShare.services'
import Helpers from './utlils/Helpers'

const GraphPresenceShare = () => {

    var optionsChart = {
        colors: ['#d6215b', '#ff7a00', '#7530b2', '#23b794', '#006fff'],
        labels: []
    }


    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([])
    useEffect(() => {
        async function fetchData() {
            getData();
        }
        fetchData();
        return () => {
            // clean up
        };
        // eslint-disable-next-line
    }, []);

    const responseDummy = [
        {
            "name": "Ceveza XX Ambar",
            "presenceShare": 34
        },
        {
            "name": "Ceveza Tecate",
            "presenceShare": 22
        },
        {
            "name": "Ceveza Bohemia",
            "presenceShare": 15
        },
        {
            "name": "Ceveza Tecate Light",
            "presenceShare": 18
        },
        {
            "name": "Ceveza Indio",
            "presenceShare": 11
        }

    ]

    const getData = async () => {
        let data = Helpers.formatDataPresenceShare(responseDummy);
        optionsChart.labels = data.labels;
        setOptions(optionsChart);
        setSeries(data.series);
        await PresenceShareServices.get()
            .then(response => {
                console.log(response);
                //Helpers.groupPriceEvolution(response_dummy);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div className='bg-graph'>
            <Chart options={options} series={series} type="pie" width='100%' height={300} />
        </div>
    )
}

export default GraphPresenceShare;