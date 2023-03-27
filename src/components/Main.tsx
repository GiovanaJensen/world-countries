interface PropsMain {
    commonName: string;
    officialName: string;
    currencies: [{
        name: string
    }];
    population: number;
    capital: string[];
    region: string;
    subregion: string;
    startOfWeek: string;
    borders: string[];
    languages: Languages;
    flags: Flags;
    coatOfArms: CoatOfArms;
}

interface Languages {
    [code: string]: string;
}

interface Flags {
    png: string
    svg: string
    alt: string
}

interface CoatOfArms {
    png: string
    svg: string
}

import styled from "styled-components"; 

const MainHtml = styled.main`
    
`;

export const Main = (props:PropsMain) => {
    return(
        <MainHtml>
            <p>Common name: {props.commonName}</p>
            <p>official name: {props.officialName}</p>
            <p>currencies: {props?.currencies && Object.values(props.currencies).map((currency:any) => currency.name).join(", ")}</p>
            <p>population: {props.population}</p>
            <p>capital: {props.capital}</p>
            <p>region: {props.region}</p>
            <p>subregion: {props.subregion}</p>
            <p>start of week: {props.startOfWeek}</p>
            <p>Borders:</p>
            <ul>
                {props.borders.map(item => 
                  <li>{item}</li>
                )}
            </ul>
            <p>Languages: {Object.values(props.languages).join(", ")}</p>  
            <p>Flag:</p>
            <img src={props.flags.svg} alt={props.flags.alt} />
            <p>coat Of Arms</p>
            <img src={props.coatOfArms.png} alt="coat of arms" /> 
        </MainHtml>
    )
}