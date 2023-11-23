import React, { useState } from "react"
import { ApexChart } from "../components/ApexBarChart"
import { RxCross2 } from 'react-icons/rx'
export const getData = (list, color) => {
    return <ul style={{ listStyle: "none" }} className='p-0 m-0 ps-1'>
        {
            list.map((item) => {
                return <li className='m-0 p-0' style={{ fontFamily: "poppins", fontWeight: 400, fontSize: '12px', width: '190px' }}>- {item}</li>
            })
        }
    </ul>
}
export const getTitle = (title, color, handleClosr) => {
    const handleClose = (e) => {
        e.stopPropagation();
        handleClosr()
    }
    return (
        <div className="d-flex justify-content-between">
            <h5 style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: '14px', display: 'flex', alignItems: "center", padding: 0, margin: 0 }}>
                <div style={{ height: "12px", width: "12px", background: color, borderRadius: "50%", marginRight: "5px" }}></div>  {title}
            </h5>
            <RxCross2 cursor={"pointer"} color="" onClick={(e) => handleClose(e)} />
        </div>

    )
}

export const GetOdometer = (data, opt, height = 140, hoverText) => {
    const [hover, setHover] = useState(false)

    var options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        colors: [
            function ({ value, seriesIndex, dataPointIndex, w }) {
                if (data[0] < 40) {
                    return "#d10f0f";
                } else if (data[0] > 70) {
                    return "#39c734";
                } else return "#ffbf00"
            }
        ],

        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "60%"
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -10,
                        show: false,
                        color: "#888",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#111",
                        fontSize: "20px",
                        show: true,
                        offsetY: 8,
                        offsetX: 40
                    }
                }
            }
        },
        stroke: {
            lineCap: "round",
        },
    }
    return (<div style={{ display: "flex", justifyContent: "start" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <ApexChart series={data} options={opt ? opt : options} type='radialBar' height={height} width={""} />
        {hover && hoverText && <div className="card" style={{ position: "absolute", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", width: '200px', marginLeft: "-30px" }}>
            <span style={{ fontFamily: 'Inter', marginTop: '5px', fontSize: '12px', lineHeight: '14px', fontWeight: 500, textAlign: "center" }}> {hoverText}</span>
        </div>}
    </div>)
}


export const options3 = {
    chart: {
        // height: '400px',
        // width:'100px',
        type: 'bar'
    },

    colors: [
        "#faa93e",
        "#427ae3"
    ],
    plotOptions: {
        bar: {
            columnWidth: '5px',
            horizontal: false,
            borderRadius: 0,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'last',
            columnWidth: '40%',
            barHeight: '50%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: undefined,
            isFunnel: false,
            isFunnel3d: true,
            dataLabels: {
                position: 'top',
            }
        },
    },
    grid: {
        show: false
    },

    dataLabels: {
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        },
        offsetY: -20,
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            return `${val}`
        }
    },
    yaxis: {
        title: {
            text: 'Units'
        }
    },
    // colors: colors
}
export const plantationData = (data) => {
    const max = Math.max(...data[0].data);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    const finalData = [
        {
            name: "Planned",
            data: months.map((item => {
                return {
                    x: item, y: max
                }
            }))
        },
        {
            name: 'Actual',
            data: [
                {
                    x: 'Jan',
                    y: data[0].data[0],
                    color: "#41B883",
                },
                {
                    x: 'Feb',
                    y: data[0].data[1],
                    color: "#00D8FF",
                },
                {
                    x: 'Mar',
                    y: data[0].data[2],
                    color: "#00D8FF",
                },
                {
                    x: 'Apr',
                    y: data[0].data[3],
                    color: "#00D8FF",
                },
                {
                    x: 'May',
                    y: data[0].data[4],
                    color: "#00D8FF",
                },
                {
                    x: 'Jun',
                    y: data[0].data[5],
                    color: "#00D8FF",
                },
                {
                    x: 'Jul',
                    y: data[0].data[6],
                    color: "#00D8FF",
                },
                {
                    x: 'Aug',
                    y: data[0].data[7],
                    color: "#00D8FF",
                }
            ]
        },
    ]
    return finalData
}

export const customStyles = {
    container: provided => ({
        ...provided,
        minWidth:250,
        maxWidth: 300,
        // zIndex: 9999999999,
        // Ensure the dropdown is rendered above other elements
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        whiteSpace: "nowrap",
        overflow: "hidden",
        flexWrap: 'nowrap',
    }),
    menuPortal: base => ({
        ...base,
        zIndex: 99, // Ensure the dropdown is rendered above other elements
    }),
    menu: (base) => ({
        ...base, zIndex: 999, // Ensure the dropdown is rendered above other elements
    }),
};