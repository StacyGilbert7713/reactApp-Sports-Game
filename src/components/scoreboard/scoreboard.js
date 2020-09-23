import React, { Component } from 'react';

function scoreboard(props) {
    return (
        <div className="scoreBoard">
            <h2>SCOREBOARD</h2>

            <div className="teamStats">
                <h3>HOME: {props.homeTeamStats.score}</h3>
            </div>

            <div className="teamStats">
                <h3>VISITORS: {props.visitingTeamStats.score}</h3>
            </div>
        </div>
    )
}

export default scoreboard;