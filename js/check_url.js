function CheckUrl(str) {
	var RegUrl = new RegExp();
	RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
	if (!RegUrl.test(str)) {
	return false;
	}
	return true;
}
function getImgTab(){
	var headImgUrl=localStorage.getItem("imgHeadUrl");
	var imgStr;
	var basePath = "http://flyer.travelsky.com";
	var srcRear = "wx/tfsDownload?tfsName=";
	if (headImgUrl == "" || headImgUrl == null) {
		imgStr = '<img alt="testpic" src="images/avatar.png" class = "avatarImg" id = "imghead">';
	} else if(CheckUrl(headImgUrl)){
		imgStr = '<img alt="testpic" src="'+ headImgUrl+'" class = "avatarImg" id = "imghead">';
	}else{
		imgStr = '<img alt="testpic" id = "imghead" class = "avatarImg" src="'+basePath+'/wx/tfsDownload?tfsName='+headImgUrl+'"'+'/>';
	}
	return imgStr;
}