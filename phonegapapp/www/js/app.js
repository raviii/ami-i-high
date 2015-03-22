var app = {
    
    match: function(imgLocation1, imgLocation2) {
	var PNG = require('png-js');
	count = 0;	
	features = {
	    'feature1': none,
	    'feature2': none,
	};
	PNG.decode(imgLocation1, function(pixels) {
	    features["feature1"] = pixels;
	    if(count==0)
		count = 1;		    
	    else
		return features;	    
	});
	PNG.decode(imgLocation2, function(pixels) {
	    features["feature2"] = pixels;
	    if(count==0)
		count = 1;		    
	    else
		return features;	    
	});	
    },

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    capturePhotoWithData: function() {
      // Take picture using device camera and retrieve image as base64-encoded string
      //event.preventDefault();
    if (!navigator.camera) {
        app.showAlert("Camera API not supported", "Error");
        return;
    }
    var options =   {   quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                        encodingType: 0     // 0=JPG 1=PNG
                    };
 
    navigator.camera.getPicture(
        function(imgData) {
            var smallImage = document.getElementById('smallImage');
            smallImage.style.display = 'block';
            smallImage.src = imgData;
          //$('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
      },
        function() {
            app.showAlert('Error taking picture', 'Error');
        },
        options);
 
    return false;
    },
    // Called when a photo is successfully retrieved
    //
//     onPhotoDataSuccess: function (imageURI) {
//       // Get image handle
//       //
//       // Uncomment to view the base64 encoded image data
//         // console.log(imageData);

//         // Get image handle
//         //
//         var imgProfile = document.getElementById('cameraPic');

//         // Show the captured photo
//         // The inline CSS rules are used to resize the image
//         //
//         imgProfile.src = imageURI;
//         if(sessionStorage.isprofileimage==1){
//             getLocation();
//         }
//         app.movePic(imageURI);
//     },

//     function movePic(file){ 
//     window.resolveLocalFileSystemURI(file, app.resolveOnSuccess, app.resOnError); 
// } 

//     //Callback function when the file system uri has been resolved
//     resolveOnSuccess: function (entry){ 
//     var d = new Date();
//     var n = d.getTime();
//     //new file name
//     var newFileName = n + ".jpg";
//     var myFolderApp = "MyAppFolder";

//     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
//     //The folder is created if doesn't exist
//     fileSys.root.getDirectory( myFolderApp,
//                     {create:true, exclusive: false},
//                     function(directory) {
//                         entry.moveTo(directory, newFileName,  app.successMove, app.resOnError);
//                     },
//                     app.resOnError);
//                     },
//     app.resOnError);
//     },

// //Callback function when the file has been moved successfully - inserting the complete path
// successMove: function (entry) {
//     //Store imagepath in session for future use
//     // like to store it in database
//     sessionStorage.setItem('imagepath', entry.fullPath);
// },

// resOnError: function (error) {
//     alert(error.code);
// },

    showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
        //this.initializeCalculationsAndStuff();
        //this.el.on('click', '.change-pic-btn', this.changePicture);
    //     this.store = new MemoryStore(function() {
    //     self.renderHomeView();
    //     self.showAlert('Store Initialized', 'Info');
    // });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }
    

};

app.initialize();
