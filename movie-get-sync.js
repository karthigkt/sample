//synchronouse programming

function createMovieListSync(){
	let result=getMovieListSync();
	let pageName=null;
	let model=null;

	if(result.error){
		pageName='error';
		model=result.error;
	} else {
		pageName='movielist';
		model=result.value;
	}

	let page=createPageSync(pageName,model);

	let status=sendResponseSync(page);
	console.log(status);
}

	
