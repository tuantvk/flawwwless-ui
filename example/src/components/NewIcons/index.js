import React from 'react';
import { NewIcon as Icon, Card, Container } from "flwww";

const iconList = ["activity", "airplay", "alertCircle", "alertTriangle", "alignCenter", "alignJustify", "alignLeft", "alignRight", "anchor", "archive", "arrowDown", "arrowDownCircle", "arrowDownLeft", "arrowLeft", "arrowLeftCircle", "arrowLeftUp", "arrowRight", "arrowRightCircle", "arrowTopCircle", "arrowUp", "arrowUpRight", "atSign", "award", "barChart", "battery", "batteryCharging", "bell", "bellOff", "bitcoin", "blueTooth", "bold", "book", "bookmark", "bookmarkFull", "box", "briefcase", "calendar", "camera", "cameraOff", "checkCircle", "checkSquare", "chevronDown", "chevronLeft", "chevronRight", "chevronUp", "chevronsDown", "chevronsLeft", "chevronsRight", "chevronsUp", "circle", "clock", "close", "closeBig", "closeCircle", "closeSquare", "cloud", "cloudDownload", "cloudLightning", "cloudOff", "cloudRain", "cloudSnow", "cloudUpload", "code", "codePen", "coffee", "compass", "copy", "cornerDownRight", "cornerRightUp", "cornerUpLeft", "cpu", "creditCard", "crop", "crossHair", "database", "dollar", "dotCircle", "download", "edit", "edit2", "erase", "ether", "euro", "eye", "eyeOff", "faceFrowing", "faceGrinning", "faceNeutral", "faceSmile", "facebook", "fastForward", "filter", "flag", "flash", "flashOff", "flawwwless", "folder", "folderMinus", "folderPlus", "gift", "github", "gitlab", "globe", "hashtag", "headphones", "heart", "helpCircle", "home", "image", "inbox", "infoCircle", "instagram", "italic", "key", "layers", "lifeBuoy", "lineChart", "lineChart2", "link", "linkExternal", "linkedin", "list", "loader", "loader2", "lock", "lockFull", "login", "logout", "mail", "map", "mapPin", "maximize", "maximize2", "menu", "messageCircle", "messageSquare", "mic", "micOff", "minimize", "minimize2", "minus", "minusCircle", "minusSquare", "mobile", "moon", "more", "more2", "mouse", "move", "music", "navigation", "navigation2", "notepad", "options", "aPackage", "paperclip", "pause", "pauseCircle", "penTool", "percent", "phone", "phoneCall", "phoneForwarded", "phoneIncomming", "phoneMissed", "phoneOff", "pieChart", "play", "playCircle", "plus", "plusCircle", "plusSquare", "power", "printer", "radio", "refresh", "refresh2", "repeat", "rewind", "rotate", "rotate2", "rss", "save", "scissors", "screen", "search", "send", "settings", "share2", "sheet", "sheetMinus", "sheetPlus", "sheetText", "shield", "shieldOff", "shoppingCart", "shuffle", "skipBack", "skipForward", "slack", "speaker", "square", "star", "starFull", "starHalf", "stopCircle", "sun", "sunrise", "sunset", "tag", "target", "terminal", "thermometer", "thumbDown", "thumbDownFull", "thumbUp", "thumbUpFull", "toggleLeft", "toggleRight", "tool", "trash", "trash2", "trendDown", "trendUp", "triangle", "truck", "tv", "twitch", "twitter", "type", "umbrella", "underline", "unlock", "unlockFull", "upload", "user", "userCheck", "userMinus", "userPlus", "userX", "users", "video", "videoOff", "voicemail", "volume", "volume2", "volume3", "volumeOff", "watch", "water", "wiFi", "wiFiOff", "wind", "yen", "youtube", "zoomIn", "zoomOut"];

const NewIcons = (props) => {

	return (
		<Container>
			<Card>
				<h1>Icons 2.0</h1>

				{
					iconList.map((icon) => (
						<Icon type={ icon } />
					))
				}

			</Card>
		</Container>
	)
}

export default NewIcons;
