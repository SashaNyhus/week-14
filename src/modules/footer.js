import styled from "styled-components";

const PageFooter = styled.footer`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.themeColors.primaryColor};
    color: ${props => (props.themeColors.secondaryColor)};
    border-top: 1px solid ${props => (props.themeColors.secondaryColor)};

    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1em;
    }
`
const FooterSectionBox = styled.div`
    ul {
        padding: 0;
        list-style: none;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: ${props => (props.themeColors.secondaryColor)};
    }

    a::visited {
        text-decoration: none;
        color: ${props => (props.themeColors.tertiaryColor)};
    }

    button {
        background-color: transparent;
        border: none;
    }

    img {
        height: 50px;
    }
`
const FooterLinkBox = styled.li`
    display: ${props => (props.listType)};
    a {
        padding: 10px;
    }
`


export const Footer = ({data, buttonFunction, themeColors}) => {
    let sectionHeadersArray = Object.keys(data);
    let footerSections = sectionHeadersArray.map(sectionName => {
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
    let listType = "block"
    if(linkObj.type === "img-button"){
        listType = "inline"
    }
    return <FooterLinkBox listType={listType}>
        {(linkObj.type === "external-link") &&
            <a href={linkObj.url}>{linkObj.name}</a>
        }
        {(linkObj.type === "img-button") &&
            <button onClick={() => buttonFunction(linkObj.name)}>
                <img src={linkObj.image} alt={linkObj.name} />
            </button>
        }
    </FooterLinkBox>
}