import styled from "styled-components";

const PageFooter = styled.footer`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.themeColors.primaryColor};
    color: ${props => (props.themeColors.secondaryColor)};

    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1em;
    }
`
const FooterSectionBox = styled.div`
    li {
        list-style: none;
    }
    img {
        height: 50px;
    }
`

export const Footer = ({data, buttonFunction, themeColors}) => {
    let sectionHeadersArray = Object.keys(data);
    let footerSections = sectionHeadersArray.map(sectionName => {
        console.log(buttonFunction, "here!");
        return <FooterSection 
            sectionName={sectionName} 
            sectionArray={data[sectionName]} 
            buttonFunction={buttonFunction} 
            themeColors={themeColors} 
            />
        });
    return <PageFooter themeColors={themeColors}>
        {footerSections}
    </PageFooter>
}

const FooterSection = ({sectionName, sectionArray, buttonFunction, themeColors}) => {
    let sectionLinks = sectionArray.map(linkObj => <FooterLink linkObj={linkObj} buttonFunction={buttonFunction} />);
    return <FooterSectionBox themeColors={themeColors}>
        <h1>{sectionName}</h1>
        <ul>
            {sectionLinks}
        </ul>
    </FooterSectionBox>
}

const FooterLink = ({linkObj, buttonFunction}) => {
    console.log(linkObj.name)
    return <li>
        {(linkObj.type === "external-link") &&
            <a href={linkObj.url}>{linkObj.name}</a>
        }
        {(linkObj.type === "img-button") &&
            <button onClick={() => buttonFunction(linkObj.name)}>
                <img src={linkObj.image} alt={linkObj.name} />
            </button>
        }
    </li>
}