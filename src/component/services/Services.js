import React from 'react'
import Card from './Cards'
import { Grid } from '@material-ui/core';


export default function Services() {
    return (
        <div className="container2">
            <div className="gst">
                <h3 className="services-h3">GST</h3>
                <p className="services-p">
                    <span>What Is the Goods and Services Tax(GST)?</span><br/>
                    The goods and services tax (GST) is a value-added tax levied on most goods and
                    services sold for domestic consumption.The GST is paid by consumers, but it is remitted to the government by the businesses
                    selling the goods and services.
                </p>
                <div>
                    <h4 className="services-h4">GST REGISTRATION</h4>
                    <h5 className="services-h5">DOCUMENTS</h5>
                    <Grid container>
                        <Grid item xs={12} sm={4}></Grid>
                        <Grid item className="services-gst-list1"  xs={12} sm={2}>
                            <h6 className="services-gst-h6">INDIVIDUALS</h6>
                            <ul className="services-gst-list-ul1" >
                                <li>Aadhar Card</li>
                                <li>PAN Card</li>
                                <li>Photo</li>
                                <li>Tax Recipts</li>
                                <li>Rent Agreement</li>
                                <li>Bank Passbook</li>
                                <li>Email ID</li>
                                <li>Phone Number</li>
                            </ul>
                        </Grid>
                        
                        <Grid item className="services-gst-list2"  xs={12} sm={3}>
                            <h6 className="services-gst-h6">PARTNERSHIP</h6>
                            <ul className="services-gst-list-ul2">
                                <li>Partnership Deed</li>
                                <li>PAN Card of Partnership</li>
                                <li>Partners Aadhar & PAN</li>
                                <li>Panchayath Licence</li>
                                <li>Elecricity Bill</li>
                            </ul>
                        </Grid>   
                        <Grid item xs={12} sm={3}></Grid>
                    </Grid> 
                </div>
            </div>
        {/* =============================================================================== */}
            <div className="company-registration">
                <h3 className="services-h3">COMPANY REGISTRATION</h3>
                    <p className="services-p">
                        <span>WHAT IS COMPANY REGISTRATION/ INCORPORATION?</span><br/>
                        Incorporation is the formation of a new corporation/
                        company (a corporation being a legal entity that is effectively
                        recognized as a person under the law). The corporation
                        may be a business, a non-profit organization, a startup,
                        a micro small or medium scale business.MCA regulates
                        corporate affairs in India through the Companies Act, 1956,
                        2013 and other allied Acts, Bills and Rules. MCA also protects
                        investors and offers many important services to stakeholders.
                        The Ministry is primarily concerned with administration of
                        the Companies Act 2013, the Companies Act 1956, the
                        Limited Liability Partnership Act, 2008 & other allied Acts and
                        rules & regulations framed there-under mainly for regulating
                        the functioning of the corporate sector in accordance with
                        law.
                    </p>
                    <h5 className="services-h5">DOCUMENTS</h5>
                        <h6 className="services-cr-h6">INDIVIDUALS</h6>
                        <ul className="services-cr-list-ul" >
                            <li>Aadhar Card</li>
                            <li>Photo</li>
                            <li>PAN Car</li>
                            <li>Tax Recipt</li>
                            <li>Rent Agrement</li>
                            <li>Business Detials</li>
                            <li>Nature of Business</li>
                            <li>Office Adress</li>
                            <li>Rent Agrrment(in english &should be Noarized)</li>
                            <li> Bank Statment (last 3month)</li>
                            <li> Mobile Number</li>
                            <li> Email ID</li>
                        </ul>
            </div>

        {/* =================================================================================== */}
            <div className="trademark-registration">
                <h3 className="services-h3">TRADEMARK REGISTRATION</h3>
                    <p className="services-p"> 
                            <span>What is TradeMark...?Why TM™ Registration Important in Business</span><br/>
                            A trademark can be defined as the unique
                            identity that makes your product or service
                            stand out from the rest. The unique identity
                            or expression can be a logo, photograph,
                            slogan, word, sound, smell, colour combination
                            or graphics. Most of the businesses
                            usually look for registration of logo or name
                            only. If you have come up with a unique
                            idea or logo, then the only way to protect it
                            as your own unique identity is to register it as
                            a trademark. A registered trademark is your
                            business’s intellectual property or intangible
                            asset. It acts as a protective cover of the
                            company’s investment made in the logo or
                            brand.
                    </p>
                    <h5 className="services-h5">DOCUMENTS</h5>
                        <h6 className="services-cr-h6">INDIVIDUALS</h6>
                        <ul className="services-cr-list-ul" >
                           <li>Company Name</li>
                           <li>Company Logo(if needs)</li>
                           <li>Aadhar Card</li>
                           <li>PAN Card</li>
                           <li>Bank Passbook</li>
                           <li>Business Address</li>
                           <li>Nature of Business</li>
                           <li>Mobile Number</li>
                           <li>Email ID</li>
                           <li>Partnership Deed (in firm)</li>
                           <li>MSME/Udyog Aadhar (in firm)</li>
                        </ul>
            </div>


            
            {/* <Card/> */}
        </div>
    )
}

