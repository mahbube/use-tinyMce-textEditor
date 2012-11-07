//var editor =CKEDITOR.replace( 'editor1' );
tinyMCE.init({
        mode : "textareas",
        theme : "advanced",
        plugins : "autolink,lists,pagebreak,style,table,save,advhr,advimage,emotions,iespell,insertdatetime,preview,media,searchreplace,print,paste,directionality,fullscreen,advlist,autosave",
                
        // Theme options - button# indicated the row# only
       theme_advanced_buttons1 : "save,newdocument,|,undo,redo,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,outdent,indent,blockquote,",
	   theme_advanced_buttons2 : "styleselect,formatselect,fontselect,fontsizeselect,forecolor,backcolor,|,ltr,rtl,",
		theme_advanced_buttons3 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,link,unlink,image,iespell,media,charmap,emotions,advhr,|,hr,removeformat,visualaid,|,sub,sup,",
		theme_advanced_buttons4 : "tablecontrols,|,help,code,|,insertdate,inserttime,|,preview,print,fullscreen,",
		
		
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,

		// Example content CSS (should be your site CSS)
		content_css : "/hamayesh/libs/css/tiny.css",

		// Drop lists for link/image/media/template dialogs
		external_image_list_url : "../tinymce/examples/lists/image_list.js",
		external_link_list_url : "../tinymce/examples/lists/link_list.js",
		
		
		// Style formats
		style_formats : [
			{title : 'عناوین صفحه اول', inline : 'span' ,
			 styles : {
				color:'#fff',
				padding:'3px 5px',
				minWidth:'200px',
				fontFamily:'Tahoma' ,
				fontSize:'15px',
				backgroundColor:'#bc3325',
				webkitBrderRdius:'5px',
				mozBorderRadius:'5px',
				oBorderRadius:'5px',
				msBorderRadius:'5px',
				borderRadius:'5px'
				}
			},
			{title : 'متن قرمز در صفحه اول', inline : 'span' ,
			 styles : {
				color: '#BC3325'
				}
			},
			{title : 'متن قهوه ای', inline : 'span' ,
			 styles : {
				color: '#291B1B'
				}
			},
			{title : 'فرمت متن در صفحه اول و دوم', inline : 'span' ,
			 styles : {
				backgroundColor: '#F9ECD9',
				color: '#291B1B',
				}
			},
			{title : 'فرمت متن در صفحه اول', inline : 'span', 
			styles : {
				color: 'white',
				backgroundColor: '#291B1B',	
				}
			},
		],

		// Replace values for the template plugin
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		}
	}); 