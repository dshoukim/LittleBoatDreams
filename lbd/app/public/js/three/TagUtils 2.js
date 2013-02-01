function TagUtils(){
	this.tArray = [];
	this.accessed = 0;
	this.point_accessed= 0; 
	this.BIN_SIZE = 50;
}
TagUtils.BIN_SIZE = 50;

tagUtils.prototype.grabBin = function(){
	var tagBin = []
	var start = this.accessed * this.BIN_SIZE;
	var end = start + this.BIN_SIZE;
	for (i = start; i < end; i++){
		tagBin.push(this.tArray[i]);
	}
	return tagBin;
}

TagUtils.prototype.populateTArray = function(){
	$.ajax({
			url:"test.php",
			type: "GET",
			dataType: 'json',
			success: function(data){
				this.tArray = data;
			};
		});
}
TagUtils.prototype.init_archive() {
	var infscrPageView = 1;
	$selectors.tagGrid.masonry({
		columnWidth:255,
		itemSelector: '.tag'
		}).infinitescroll({
			navSelector: '#page-nav',
			nextSelector: '#page-nav a',
			itemSelector: '.tag',
			loadingTet: 'loading the next page',
			loadingMsgRevealSpeed:0,
			bufferPx: 80,
			extraScrollPx:0,
			donetext: 'no more',
			debug: false,
			animate: false,
			function(newElements){
				infscrPageview++;
				//add googleanalytics
				$selectors.tagGrid.masonry('appended', $(newElements));
			}
		})
	})
}
TagUtils.prototype.newPage = function(){
	var element = document.createElement('div');
	gimmeFifty(allTags, i);
	var img = document.createElement('img');
	img.src = "../" + allTags[i][1][4];
}
TagUtils.prototype.archiveAccessed = function(){
	this.accessed++;
}
TagUtils.prototype.threeAccessed = function(){
	this.point_accessed++;
}
TagUtils.prototype.
