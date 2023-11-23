import { Piechart } from "./piechart"
import { options, options2, options3, options4, options5, options6 } from "./data"
import co2 from '../../assets/svg/co2.png'
import waste from '../../assets/svg/garbage.png'
import water from '../../assets/svg/sea.png'
import electric from '../../assets/svg/electric.png'
import plantation from '../../assets/svg/plantation.png'
import energy from '../../assets/svg/energy2.png'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { GetOdometer } from '../../utils'
export const KProcess = () => {
    const navigate = useNavigate()
    const Sustainability = ({ name, image, value, target }) => {
        const [hover, setHover] = useState(false)
        return (
            <div style={{ border: '1px solid #E6E6E6', padding: 5, display: 'flex', flexDirection: "column", alignItems: 'center', marginLeft: '3px' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <h5 style={{ fontFamily: 'Inter', marginTop: '1px', fontSize: '16px', lineHeight: '20px', fontWeight: 500 }}>
                    {name}
                </h5>
                <img src={image} alt="Girl in a jacket" width={"20%"} className="mb-2 mt-2" />
                <h5 style={{ fontFamily: 'Inter', marginTop: '10px', fontSize: '14px', lineHeight: '16px', fontWeight: 500, textAlign: "center" }}>{value}
                </h5>
                {hover && <div className="card" style={{ position: "absolute", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", width: '200px' }}>
                    <span style={{ fontFamily: 'Inter', marginTop: '5px', fontSize: '12px', lineHeight: '14px', fontWeight: 500, textAlign: "center" }}> {target}</span>
                </div>}
            </div>
        )
    }
    return (
            <div className="row p-0 m-0 mb-0 mt-2 gy-1 gx-0 ms-1 mb-2 me-3" style={{ border: '0px solid black' }}>
                <div className="col-12 gy-1 gx-0 p-0" style={{ borderLeft: '0px solid black' }}>
                    <div style={{ paddingBottom: '10px', height: '610px', marginBottom: '0px', padding: '10px' }} className="mt-0 card gradient-color ms-1">
                        <h5 style={{ fontFamily: "poppins", fontWeight: 550, display: 'flex', justifyContent: "center", fontSize: '22px', lineHeight: "22px", cursor: "pointer" }} onClick={() => navigate('/sustainability')}>Sustainability</h5>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Sustainability name="CO2 Emission" image={co2} value={"15.23 KG/Ton"} target={"Target: 14 KG/Ton"} />
                            <Sustainability name="Water Consumption" image={water} value={"45.37 m3/Ton"} target={"Meeting Water consumption target of 45 m3/Ton results in cost savings of about $9,250"} />
                            <Sustainability name="Waste Produced" image={waste} value={"10.25 KG/Ton"} target={"Minimum $8,870 cost savings are expected from meeting the waste reduction strategy of 9.25 KG/Ton"} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: '3px' }}>
                            <Sustainability name="Electricity Used" image={electric} value={"1.067 MWh/Ton"} target={"Reduction of energy consumption as planned of 0.95 MWh/Ton directly yields cost savings to the tune of $ 245,700"} />
                            <Sustainability name="Plantation" image={plantation} value={"62,378"} target={"Target: 100,000"} />
                            <Sustainability name="Energy Produced" image={energy} value={"3000MWh"} target={"Meeting alternate energy production target of 2500MWh implies generation of $3.6M revenue per year"} />
                        </div>
                    </div>
                </div>
        </div>
    )
}