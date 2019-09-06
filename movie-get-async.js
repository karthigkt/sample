
getMovieList( (err,list) => {

	let pageName=null;
	let model=null;

	if(err){
		pageName='error';
		model=err;
	} else{
		pageName='movielist';
		model=list;
	}
	
	//create a page async
	createPage(pageName,model, (err,page)=>{
		sendResponse(page,(err,status)=>{
			console.log(status);
		}
	});	


});