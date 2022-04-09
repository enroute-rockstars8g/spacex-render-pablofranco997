import { useEffect, useState } from "react";

export const CompanyInfo =  () => {

    const [companyInformation, setCompanyInformation] = useState([])

    const companyFetch = async() => {
        try{
        const response = await fetch(`https://api.spacex.land/rest/company`);
        if (response.status !== 200) return;
        const company = await response.json();
        return company;
        }
        catch(e){
            console.log(e)
        };
    }
    
    useEffect(() => {
        companyFetch()
        .then(result => setCompanyInformation(result))
        .catch(e => console.log("otra cosa" + e))
    }, [])
    
        
    

    return( 
            <>  
                <div className="container-summary">
                    <p className="company-info">{companyInformation.summary} </p>
                </div>
                <div className="container-flex">
                    <div className="info">
                        <p>Founder: {companyInformation.founder}</p>
                        <p>CEO: {companyInformation.ceo}</p>
                    </div>
                    <div className="info">
                        
                        <p>COO: {companyInformation.coo}</p>
                        <p>CTO: {companyInformation.cto}</p>
                    </div>
                    <div className="info">
                        <p>Foundation year: {companyInformation.founded}</p>
                        <p>Employees: {companyInformation.employees}</p>
                    </div>
                </div>
            </>
            

        
    )
};