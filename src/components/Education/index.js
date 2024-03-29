import React, { Component } from "react";
import PropTypes from "prop-types";
import { urlFormatter } from "../../utils/textProcessor";

class EducationHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Academic Background</h3>
                <ul>
                    {
                        this.props.educations.map((educationInfo, index) => <li key={educationInfo.instituteName}>
                            <p className="key-element" >
                                <a href={educationInfo.instituteWebsite}>
                                    {educationInfo.instituteName}
                                </a>
                            </p>
                            <table className="table-borderless">
                                <tbody className="m-1">
                                    <tr className="text-left">
                                        <td className="text-left"><b>Field of Study</b></td>
                                        <td className="text-left pl-1">{educationInfo.field}</td>
                                    </tr>
                                    <tr className="text-left">
                                        <td className="text-left"><b>Degree</b></td>
                                        <td className="text-left pl-1">{educationInfo.degreeType}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>Period</b></td>
                                        <td className="text-left pl-1">{educationInfo.from} - {educationInfo.to}</td>
                                    </tr>
                                    {
                                        educationInfo.thesis
                                        && <tr>
                                            <td className="text-left"><b>Thesis</b></td>
                                            <td className="text-left pl-1"
                                                dangerouslySetInnerHTML={{ __html: urlFormatter(educationInfo.thesis) }}>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            {index < this.props.educations.length - 1 ? <hr className="width-20"/> : <></>}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

EducationHolder.propTypes = {
    educations: PropTypes.array
};

export default EducationHolder;
