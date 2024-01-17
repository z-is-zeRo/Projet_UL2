import React from "react"
import ReactApexChart from "react-apexcharts"
import {
    Card,
    CardBody,
  } from "reactstrap"

const LineChart = () => {

    const series = [{
        name: "Serie 1",
        type: 'line',
        data: [1000, -6000, -4000, -2000, -1000, 0, -8000, 2000, -4000, 6000, -2000, 10000],
    },
    {
        name: "Serie 2",
        data: [-8000, -6000, -4000, -2000, -1000, 0, 1000, 2000, 4000, 6000, 8000, 10000],
        type: 'area',
    }]

    const options = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#45cb85', '#3b5de7'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [4, 0],
        },

        markers: {
            size: 3
        },
        xaxis: {
            categories: ['10:07:12', '10:07:15', '10:07:18', '10:07:21', '10:07:24', '10:07:27', '10:07:30', '10:07:33', '10:07:36', '10:07:39', '10:07:42', '10:07:45'],
            title: {
                text: '',
            }
        },

        fill: {
            type: 'solid',
            opacity: [1, 0.1],
        },

        legend: {
            position: 'top',
            horizontalAlign: 'right',
        }
    }

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Sales Report</h4>

                    <ReactApexChart
                        options={options}
                        series={series}
                        height="260"
                        type="line"
                        className="apex-charts"
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default LineChart