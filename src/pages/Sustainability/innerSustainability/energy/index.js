import { ApexChart } from "../../../../components/ApexBarChart"
import { options3,plantationData } from "../../../../utils"

export const InnerEnergy = ({ selData }) => {
    // const options3 = {
    //     chart: {
    //         // height: '400px',
    //         // width:'100px',
    //         type: 'bar'
    //     },

    //     colors: [
    //         "#427ae3",
    //         "#0000FF"
    //     ],
    //     plotOptions: {
    //         bar: {
    //             columnWidth: '5px',
    //             horizontal: false,
    //             borderRadius: 0,
    //             borderRadiusApplication: 'around',
    //             borderRadiusWhenStacked: 'last',
    //             columnWidth: '30%',
    //             barHeight: '40%',
    //             distributed: false,
    //             rangeBarOverlap: true,
    //             rangeBarGroupRows: false,
    //             hideZeroBarsWhenGrouped: false,
    //             isDumbbell: false,
    //             dumbbellColors: undefined,
    //             isFunnel: false,
    //             isFunnel3d: true,
    //             dataLabels: {
    //                 position: 'top',
    //             }
    //         },
    //     },
    //     grid: {
    //         show: false
    //     },

    //     dataLabels: {
    //         style: {
    //             fontSize: '12px',
    //             colors: ["#304758"]
    //         },
    //         offsetY: -20,
    //         formatter: function (val, opt) {
    //             const goals =
    //                 opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
    //                     .goals
    //             return `${val}`
    //         }
    //     },
    //     yaxis: {
    //         title: {
    //             text: 'KWH'
    //         }
    //     },
    //     xaxis: {
    //         title: {
    //             text: 'Month'
    //         }
    //     },
    //     // colors: colors
    // }
    // const plantationData = (data) => {
    //     const finalData = [
    //         {
    //             name: 'Actual',
    //             data: [
    //                 {
    //                     x: 'Jan',
    //                     y: data[0].data[0],
    //                     color: "#41B883",
    //                 },
    //                 {
    //                     x: 'Feb',
    //                     y: data[0].data[1],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'Mar',
    //                     y: data[0].data[2],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'Apr',
    //                     y: data[0].data[3],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'May',
    //                     y: data[0].data[4],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'Jun',
    //                     y: data[0].data[5],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'Jul',
    //                     y: data[0].data[6],
    //                     color: "#00D8FF",
    //                 },
    //                 {
    //                     x: 'Aug',
    //                     y: data[0].data[7],
    //                     color: "#00D8FF",
    //                 }
    //             ]
    //         }
    //     ]
    //     console.log(finalData)
    //     return finalData
    // }
    return (
        <div className="">
            <div className="row g-2 justify-content-between ">
                {
                    selData.map((item) => {
                        return (
                            <div className="col-6">
                                <div className="card pl-1 pr-1">
                                    <h5 style={{ fontFamily: 'Inter', margin: '10px', fontSize: '14px', fontWeight: 600, lineHeight: '10px' }}>
                                        {item.name}
                                    </h5>
                                    <ApexChart series={plantationData([item],false,'','','Planned')} options={options3} height={"230px"} width={"590px"} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="row gy-2">
                <div className="card col-6">
                    <ApexChart series={plantationData([selData[2]])} options={options3} height={"250px"} width={"500px"} />
                </div>
                <div className="card col-6" >
                    <ApexChart series={plantationData([selData[3]])} options={options3} height={"250px"} width={"500px"} />
                </div>
            </div> */}
        </div>
    )
}