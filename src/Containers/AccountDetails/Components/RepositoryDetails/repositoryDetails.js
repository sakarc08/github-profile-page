import React from "react";

const RepositoryDetails = (props)=> (
        <div className="repository-details-container">
            <div className="repo-name">
                <h3 className="repo-title">{props.name}</h3>
            </div>
            
            {props.description ? (<div>
                <p className="repo-description">
                    {props.description}
                </p>
            </div>) : null}

            <div className="language-details-container">
                {props.programmingLanguage === "JavaScript" ? (<span className="repo-language-icon yellow"></span>) : null}
                {props.programmingLanguage === "HTML" ? (<span className="repo-language-icon blue"></span>) : null}
                {props.programmingLanguage === "CSS" ? (<span className="repo-language-icon dark-green"></span>) : null}
                <span className="language-text">
                    {props.programmingLanguage}
                </span>

                <span className="last-updated-details" >Updated {props.time} ago</span>
            </div>
               
        </div>
)

export default RepositoryDetails;