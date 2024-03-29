import React, { Component } from "react";
import PropTypes from "prop-types";

class AchievementsHolder extends Component {
    render() {
        return (
            <div>
                <h3 className="section-title">Achievements</h3>
                <ul>
                    {
                        this.props.achievements.map((achievement, index) => <li key={achievement.title}>
                            <p className="key-element" >
                                {achievement.title}
                            </p>
                            <table className="table-borderless">
                                <tbody>
                                    <tr className="text-left">
                                        <td className="text-left"><b>Awarded by</b></td>
                                        <td className="text-left pl-1">{achievement.awardedBy}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><b>When</b></td>
                                        <td className="text-left pl-1">{achievement.time}</td>
                                    </tr>
                                    {
                                        achievement.desc
                                        && <tr>
                                            <td className="text-left"><b>Why</b></td>
                                            <td className="text-left pl-1">{achievement.desc}</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            {index < this.props.achievements.length - 1 ? <hr className="width-20"/> : <></>}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

AchievementsHolder.propTypes = {
    achievements: PropTypes.array
};

export default AchievementsHolder;
