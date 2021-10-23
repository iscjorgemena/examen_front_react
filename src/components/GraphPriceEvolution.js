import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const GraphPriceEvolution = () => {
    const dates = {
        xaxis: {
            categories: ['Sep 1', 'Sep 2', 'Sep 3', 'Sep 4', 'Sep 5', 'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9']
        }
    }

    const productsData = [
        {
            name: 'Cerveza XX Ambar 325ml',
            data: [13, 28, 16, 12, 30, 50, 14, 100, 50]
        },
        {
            name: 'Cerveza Tecate Light 355 ml',
            data: [10, 15, 80, 60, 70, 15, 14, 20, 30]
        }
    ]

    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([])
    useEffect(() => {
        setOptions(dates);
        setSeries(productsData);
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <Chart options={options} series={series} type="line" width='100%' height={300} />
        </>
    )
}

export default GraphPriceEvolution;