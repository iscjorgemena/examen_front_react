import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import PriceEvolutionServices from '../services/PriceEvolution.services'
import Helpers from './utlils/Helpers'
import moment from 'moment'

const GraphPriceEvolution = () => {
    var optionsChart = {
        colors: ['#d6215b', '#7530b2', '#ffb448'],
        xaxis: {
            categories: [],
            labels: {
                formatter: (value) => { return moment(value).format('MMM DD') }
            },
        },
        yaxis: {
            forceNiceScale: true,
            min: 0,
            max: 30,
            tickAmount: 3,
            labels: {
                formatter: (value) => { return '$' + value }
            }
        }
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

    const response_dummy = [
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 22,
            "dateExtraction": "10/04/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 24,
            "dateExtraction": "10/05/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 26.5,
            "dateExtraction": "10/06/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 21,
            "dateExtraction": "10/07/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 24,
            "dateExtraction": "10/08/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 22.5,
            "dateExtraction": "10/09/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 29.5,
            "dateExtraction": "10/10/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 22,
            "dateExtraction": "10/12/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 25,
            "dateExtraction": "10/13/21"
        },
        {
            "sku": "039430430493093",
            "name": "Cerveza XX Ambar 325 ml",
            "price": 28,
            "dateExtraction": "10/14/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 22,
            "dateExtraction": "10/04/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 29,
            "dateExtraction": "10/05/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 24,
            "dateExtraction": "10/06/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 23.5,
            "dateExtraction": "10/07/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 32,
            "dateExtraction": "10/08/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 21.5,
            "dateExtraction": "10/09/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 30,
            "dateExtraction": "10/10/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 22.5,
            "dateExtraction": "10/11/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 22,
            "dateExtraction": "10/12/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 21,
            "dateExtraction": "10/13/21"
        },
        {
            "sku": "019130421492023",
            "name": "Cerveza Tecate Light 355 ml",
            "price": 25,
            "dateExtraction": "10/14/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 20,
            "dateExtraction": "10/04/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 21,
            "dateExtraction": "10/05/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 22,
            "dateExtraction": "10/06/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 22.5,
            "dateExtraction": "10/07/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 23,
            "dateExtraction": "10/08/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 21,
            "dateExtraction": "10/09/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 28,
            "dateExtraction": "10/10/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 25.5,
            "dateExtraction": "10/11/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 22,
            "dateExtraction": "10/12/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 19.5,
            "dateExtraction": "10/13/21"
        },
        {
            "sku": "149430221492023",
            "name": "Cerveza XX Lager 355 ml",
            "price": 20,
            "dateExtraction": "10/14/21"
        }
    ]

    const getData = async () => {
        let data = Helpers.groupPriceEvolution(response_dummy);
        optionsChart.xaxis.categories = data.dates
        setSeries(data.series);
        setOptions(optionsChart);
        await PriceEvolutionServices.get()
            .then(response => {
                console.log(response);
                Helpers.groupPriceEvolution(response_dummy);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <Chart options={options} series={series} type="line" width='100%' height={300} />
        </>
    )
}

export default GraphPriceEvolution;