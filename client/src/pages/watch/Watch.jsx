import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className="video"
				autoPlay
				progress
				controls
				src="https://vod-progressive.akamaized.net/exp=1640682636~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4699%2F12%2F323496013%2F1259751199.mp4~hmac=6b4b61acb206bb40554f34f469cb094d33a5ff29f68fc028222e3a7ebda2ec2a/vimeo-prod-skyfire-std-us/01/4699/12/323496013/1259751199.mp4?filename=Seoul+-+21985.mp4"
			/>
		</div>
	);
}
