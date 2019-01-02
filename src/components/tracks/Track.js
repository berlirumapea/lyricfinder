import React from 'react'
import { Link } from 'react-router-dom';

export default function Track({track}) {
	return (
		<div className="col-md-6">
			<div className="card mb-4 shadow-sm">
				<div className="card-body">
					<h5>{track.artist_name}</h5>
					<p className="card-text">
						<i className="fas fa-play">Track</i>: {track.track_name}
						<br />
						<i className="fas fa-compact-disc">Album</i>: {track.album_name}
					</p>
					<Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
						<i className="fas fa-chevron-right"></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	)
}
